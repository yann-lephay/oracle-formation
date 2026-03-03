import { NextResponse } from "next/server";

// Simple in-memory rate limiting (per IP, resets on server restart)
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  submissions.set(ip, recent);
  return recent.length >= RATE_LIMIT_MAX;
}

function recordSubmission(ip: string) {
  const timestamps = submissions.get(ip) ?? [];
  timestamps.push(Date.now());
  submissions.set(ip, timestamps);
}

export async function POST(request: Request) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de demandes. Réessayez dans une minute." },
      { status: 429 }
    );
  }

  // Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 }
    );
  }

  // Validation
  const { prenom, email } = body as { prenom?: string; email?: string };

  if (!prenom || typeof prenom !== "string" || prenom.trim().length === 0) {
    return NextResponse.json(
      { error: "Le prénom est requis." },
      { status: 400 }
    );
  }

  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json(
      { error: "Une adresse email valide est requise." },
      { status: 400 }
    );
  }

  // Record the submission for rate limiting
  recordSubmission(ip);

  // TODO: brancher Resend / Formspree / webhook Zapier ici
  console.log("[DEVIS]", {
    prenom: (prenom as string).trim(),
    email: (email as string).trim(),
    telephone: body.telephone ?? "",
    domaine: body.domaine ?? "",
    situation: body.situation ?? "",
    financement: body.financement ?? "",
    message: body.message ?? "",
    ip,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
