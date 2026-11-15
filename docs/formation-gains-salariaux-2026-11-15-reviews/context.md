# Contexte commun — 15 novembre 2026

Objectif autorisé : passage existant, un site et six pages maximum, une PR sans merge/déploiement/indexation. Base0fc4547, oracle-formation. Deux routes : /formation/langues-anglais et /formation/excel-bureautique. Stance.md précède la recherche primaire et la rédaction.

Constat : salaryRange exprimait +15–25% salaire / +10–15% valorisation CV ; le template affichait ces valeurs comme salaire moyen et les reprenait dans FAQ/JSON-LD. Aucun contexte d’étude ou population dans ces données. La correction ne prétend pas prouver ces pourcentages faux pour toute population : elle ne les présente plus comme résultat moyen après ces cours.

Deux fichiers d’implémentation : données domaines.ts et template formation/[domaine]. salaryRange devient Selon le poste exercé ; salaryContext optionnel porte une seule réponse et une source, réutilisées après métriques et dans FAQ/JSON-LD. Champ absent des autres domaines, données métiers différentes et inchangées. Les villes n’utilisent pas salaryRange. Aucun MDX pour cette app.

Sources primaires Europass CECR (évaluation linguistique par activité/niveau) et ICDL FAQ (test de niveau initial, compétences à renforcer), lues le 15 novembre. ICDL lecteur web502 repris avec curl200. Ces sources décrivent compétences/évaluation, pas un effet salarial nul ou une garantie d’emploi. La recommandation de comparer usages/niveau est éditoriale.

Non-objectifs : prix, CPF, durées, autres salaires ou affirmations historiques ; partenariats Anglify/ClicCampus et ordre inchangés. Contrôle des consommateurs et même réponse TS/template avant rédaction. Sources et HTML des deux routes à vérifier ; contrôles en cours, ne pas supposer PASS. R1, JURY truth/experience + anti final. Pas de direction visuelle ni état ou action nouvelle ; styles et SourceCitations existants conservés. Les juges restent isolés, seul l’arbitre lit leurs rapports.

Preuves root disponibles : build Webpack527sorties et lint PASS, liensinternesQF249URLssansorphelin ettitres17casPASS. HTML2routesFAQ/JSONLDidentiques, pourcentagesabsents, sources/canonical/robots/descriptionscorrects ; sitemap249URLsidProd. Témoins accueil/développeur-web/anglais-Lille textevisibleidentiqueProd.

Limites de contrôles : qc:gap14-formation FAIL (langues-anglais/lille unexpectedly has a remote offer), reproduit sur archive propre de base0fc4547 avec les mêmes dépendances ; aucune règle d’indexation ou donnée partenaire modifiée pour le faire passer. qc:gap14-formation:served --built BLOCKED car build DeplacementPro absent, ses autres assertions non validées. AucunPASSglobalgap14. L’émetteur local reçoit403 sur le relais cockpit-gamma-ten.vercel.app ; aucune conclusion sur l’analytics de production. Lors de cette transmission, les captures et le clavier étaient encore en finition. Complément final : sept captures1440/390 avec sources mobiles confirmées, FAQ Excel fermée puis ouverte avec états séparément observés par root.
