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
    test.setTimeout(90_000);
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

  test("public pages do not expose internal editorial notes", async ({
    page,
  }) => {
    test.setTimeout(90_000);
    const internalPhrases = [
      /\bSue has\b/i,
      /\bSusan\b/i,
      /prototype status/i,
      /before final launch/i,
      /content subject to charity approval/i,
    ];

    for (const path of publicSitePaths) {
      await page.goto(path);
      const visibleText = await page.locator("body").innerText();

      for (const phrase of internalPhrases) {
        expect(visibleText, `${path} exposes ${phrase}`).not.toMatch(phrase);
      }

      await expect(page.locator(".status-note")).toHaveCount(0);
    }
  });

  test("homepage hero image remains visible on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const heroImage = page.getByAltText(
      "A Healing Hands Network volunteer providing a complementary therapy session",
    );
    const box = await heroImage.boundingBox();

    expect(box).not.toBeNull();
    expect(box?.width).toBeGreaterThan(300);
    expect(box?.height).toBeGreaterThan(400);
  });

  test("support-page QR codes give way to direct links on mobile", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/support-us");

    await expect(page.locator(".fundraising-qr")).toHaveCount(2);
    await expect(page.locator(".fundraising-qr").first()).toBeHidden();
    await expect(
      page.getByRole("link", { name: "Play GivingLottery" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Shop and raise" })).toBeVisible();
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

  test("support page presents verified fundraising partner routes", async ({
    page,
  }) => {
    await page.goto("/support-us");

    await expect(
      page.getByRole("heading", {
        level: 3,
        name: "A weekly chance to help Healing Hands Network",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        level: 3,
        name: "Turn everyday shopping into free donations",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("link", { name: "Play GivingLottery" }),
    ).toHaveAttribute(
      "href",
      "https://www.givinglottery.org.uk/support/healing-hands-network",
    );
    await expect(
      page.getByRole("link", { name: "Play GivingLottery" }),
    ).toHaveCount(1);
    await expect(page.getByRole("link", { name: "Shop and raise" })).toHaveCount(
      1,
    );
    await expect(
      page.getByRole("link", { name: "Donate through Give as You Live" }),
    ).toHaveAttribute(
      "href",
      "https://donate.giveasyoulive.com/charity/healinghandsnetwork",
    );
    await expect(page.locator("[data-qr-destination]")).toHaveCount(2);
    await expect(
      page.locator(".support-route-grid .support-card"),
    ).toHaveCount(4);
    await expect(
      page.getByRole("link", { name: "Request current giving information" }),
    ).toHaveCount(1);
    await expect(
      page.locator(
        'a[href="mailto:healinghandsnetwork@gmail.com?subject=Standing%20order%20or%20Gift%20Aid"]',
      ),
    ).toHaveCount(1);
    await expect(
      page.getByRole("heading", { level: 2, name: "GivingLottery" }),
    ).toHaveCount(0);
    await expect(
      page.getByRole("heading", { level: 2, name: "Give as You Live" }),
    ).toHaveCount(0);
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
