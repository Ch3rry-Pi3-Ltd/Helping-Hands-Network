import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { publicSitePaths } from "../src/content/routes";

test.describe("public website", () => {
  for (const path of publicSitePaths) {
    test(`${path} has no detectable accessibility violations`, async ({
      page,
    }) => {
      const response = await page.goto(path, { waitUntil: "networkidle" });

      expect(response, `${path} did not return a document response`).not.toBeNull();
      expect(response?.status(), `${path} returned an error status`).toBeLessThan(
        400,
      );

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(
        results.violations,
        results.violations
          .map(
            ({ help, nodes }) =>
              `${help}: ${nodes.map(({ target }) => target.join(" ")).join(", ")}`,
          )
          .join("\n"),
      ).toEqual([]);
    });
  }

  test("all internal links resolve successfully", async ({ page, request }) => {
    const links = new Set<string>();

    for (const path of publicSitePaths) {
      const response = await page.goto(path);
      expect(response?.status(), `${path} returned an error status`).toBeLessThan(
        400,
      );

      const pageLinks = await page.locator("a[href]").evaluateAll((anchors) =>
        anchors
          .map((anchor) => (anchor as HTMLAnchorElement).href)
          .filter((href) => new URL(href).origin === window.location.origin)
          .map((href) => {
            const url = new URL(href);
            url.hash = "";
            return url.toString();
          }),
      );

      pageLinks.forEach((href) => links.add(href));
    }

    for (const href of links) {
      const response = await request.get(href);
      expect(response.status(), `${href} returned an error status`).toBeLessThan(
        400,
      );
    }
  });

  test("unknown pages use the branded 404 page", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");

    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "We could not find that page",
      }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Return home" })).toBeVisible();
  });

  test("responses include the expected security headers", async ({
    request,
  }) => {
    const response = await request.get("/");
    const headers = response.headers();

    expect(headers["content-security-policy"]).toContain("default-src 'self'");
    expect(headers["content-security-policy"]).toContain(
      "frame-ancestors 'none'",
    );
    expect(headers["permissions-policy"]).toBe(
      "camera=(), geolocation=(), microphone=()",
    );
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["x-powered-by"]).toBeUndefined();
  });
});
