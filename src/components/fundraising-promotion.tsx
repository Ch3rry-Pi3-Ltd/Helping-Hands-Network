import type { ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ButtonLink } from "@/components/button-link";

type FundraisingAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "light";
};

type FundraisingPromotionProps = {
  provider: string;
  title: string;
  description: string;
  qrValue: string;
  qrLabel: string;
  tone: "lottery" | "shopping";
  actions: FundraisingAction[];
  children?: ReactNode;
};

export function FundraisingPromotion({
  provider,
  title,
  description,
  qrValue,
  qrLabel,
  tone,
  actions,
  children,
}: FundraisingPromotionProps) {
  return (
    <article className={`fundraising-promotion fundraising-promotion-${tone}`}>
      <div className="fundraising-promotion-copy">
        <p className="fundraising-provider">{provider}</p>
        <h3>{title}</h3>
        <p className="fundraising-promotion-description">{description}</p>
        <div className="button-row">
          {actions.map((action) => (
            <ButtonLink
              href={action.href}
              external
              key={action.href}
              variant={action.variant}
            >
              {action.label}
            </ButtonLink>
          ))}
        </div>
        {children ? (
          <div className="fundraising-promotion-note">{children}</div>
        ) : null}
      </div>

      <div className="fundraising-qr">
        <QRCodeSVG
          value={qrValue}
          size={184}
          level="M"
          marginSize={4}
          aria-hidden="true"
          focusable="false"
          data-qr-destination={qrValue}
        />
        <p>{qrLabel}</p>
      </div>
    </article>
  );
}
