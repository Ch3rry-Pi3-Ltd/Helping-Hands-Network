import type { ReactNode } from "react";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  text: string;
  children: ReactNode;
};

export function CtaBand({ eyebrow, title, text, children }: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="site-container cta-band-inner">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="button-row">{children}</div>
      </div>
    </section>
  );
}
