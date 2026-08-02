"use client";

import { track } from "@vercel/analytics";
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
  pageSlug,
  position,
  className,
  children,
}: OrganismeOutboundLinkProps) {
  function handleClick() {
    if (!isAffiliate) return;

    track("affiliate_outbound", {
      program: organismeSlug,
      page_type: pageType,
      page_slug: pageSlug,
      position,
      destination: new URL(href).hostname,
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel={isAffiliate ? "sponsored nofollow noopener noreferrer" : "noopener noreferrer"}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
