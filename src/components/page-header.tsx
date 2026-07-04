import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  children?: ReactNode;
  tone?: "default" | "blue" | "navy";
};

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
  tone = "default",
}: PageHeaderProps) {
  return (
    <section className={`page-header page-header-${tone}`}>
      <div className="site-container page-header-inner">
        <div className="page-header-copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p>{intro}</p>
          {children ? <div className="button-row">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
