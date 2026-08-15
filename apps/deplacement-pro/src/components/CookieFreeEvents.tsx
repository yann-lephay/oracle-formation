"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const endpoint = process.env.NEXT_PUBLIC_PORTFOLIO_EVENT_ENDPOINT
  ?? "https://cockpit-gamma-ten.vercel.app/api/events";

type EventType = "page_view" | "vendor_interest" | "vendor_outbound" | "contact_click";
type Relationship = "editorial" | "affiliate" | "partner" | "";

function safeLabel(value: string | undefined, fallback = "") {
  const cleaned = (value ?? fallback).toLowerCase().replace(/[^a-z0-9._:-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
  return cleaned || fallback;
}

function send(event: EventType, target = "", placement = "", relationship: Relationship = "") {
  void fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    credentials: "omit",
    referrerPolicy: "no-referrer",
    keepalive: true,
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: JSON.stringify({
      event,
      page: window.location.pathname,
      target: safeLabel(target),
      placement: safeLabel(placement),
      relationship,
    }),
  }).catch(() => undefined);
}

export function CookieFreeEvents() {
  const pathname = usePathname();

  useEffect(() => {
    send("page_view", "", "route");
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const element = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!element) return;
      const href = element.getAttribute("href") ?? "";
      if (href.toLowerCase().startsWith("mailto:")) {
        send("contact_click", "", element.dataset.usinePlacement ?? "email-link");
        return;
      }

      const url = new URL(element.href, window.location.href);
      const internalVendor = url.origin === window.location.origin
        ? url.pathname.match(/^\/(?:software|solution|plateforme|banque|organisme)\/([^/]+)\/?$/)
        : null;
      const goTarget = url.origin === window.location.origin && url.pathname.startsWith("/go/")
        ? url.pathname.split("/")[2]
        : "";
      const configured = element.dataset.usineEvent;
      let trackedEvent: EventType | null = null;
      if (configured === "vendor_interest") trackedEvent = "vendor_interest";
      else if (configured === "vendor_outbound") trackedEvent = "vendor_outbound";
      else if (configured === "vendor_click") trackedEvent = internalVendor ? "vendor_interest" : "vendor_outbound";
      else if (goTarget) trackedEvent = "vendor_outbound";
      else if (internalVendor) trackedEvent = "vendor_interest";
      if (!trackedEvent) return;

      const configuredRelationship = element.dataset.usineRelationship;
      const relationship: Relationship = configuredRelationship === "editorial"
        || configuredRelationship === "affiliate"
        || configuredRelationship === "partner"
        ? configuredRelationship
        : goTarget || element.rel.split(/\s+/).includes("sponsored") ? "affiliate" : "editorial";
      const target = element.dataset.usineTarget
        || internalVendor?.[1]
        || goTarget
        || url.hostname.toLowerCase().replace(/^www\./, "");
      send(trackedEvent, target, element.dataset.usinePlacement ?? "vendor-link", relationship);
    }

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
