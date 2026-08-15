"use client";

import type { ReactNode } from "react";

interface OrganismeOutboundLinkProps {
  href: string;
  isAffiliate: boolean;
  organismeSlug: string;
  pageType: "organisme" | "formation" | "formation_ville";
  pageSlug: string;
  position: "hero" | "bottom" | "listing";
  className: string;
  children: ReactNode;
}

export function OrganismeOutboundLink({
  href,
  isAffiliate,
  organismeSlug,
  pageType,
  position,
  className,
  children,
}: OrganismeOutboundLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel={isAffiliate ? "sponsored nofollow noopener noreferrer" : "noopener noreferrer"}
      data-usine-event="vendor_outbound"
      data-usine-relationship={isAffiliate ? "affiliate" : "editorial"}
      data-usine-target={organismeSlug}
      data-usine-placement={`${pageType}-${position}`}
      className={className}
    >
      {children}
    </a>
  );
}
