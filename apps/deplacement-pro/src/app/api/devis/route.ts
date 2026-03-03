import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { prenom, email, categorie, poste, tailleEntreprise } = body;

    if (!prenom || !email || !categorie || !poste || !tailleEntreprise) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    // TODO: integrate with email service or CRM
    // For MVP, just log and return success
    console.log("Nouvelle demande de devis:", {
      prenom,
      email,
      categorie,
      poste,
      tailleEntreprise,
      telephone: body.telephone || "",
      message: body.message || "",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
