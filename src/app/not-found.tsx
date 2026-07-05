import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";

export default function NotFound() {
  return (
    <PageHeader
      eyebrow="Page not found"
      title="We could not find that page"
      intro="The page may have moved, or the address may have been entered incorrectly. You can return to the homepage or explore the charity's current work."
    >
      <ButtonLink href="/">Return home</ButtonLink>
      <ButtonLink href="/our-work" variant="secondary">
        Explore our work
      </ButtonLink>
    </PageHeader>
  );
}
