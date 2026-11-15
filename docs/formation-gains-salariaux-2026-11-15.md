# Formation — rémunération et compétences transversales, 15 novembre 2026

## Décision et position

**IMPROVE_ANSWER, deux pages existantes** : anglais professionnel et Excel/bureautique. Des pourcentages sans provenance dans le corpus étaient présentés comme « salaire moyen » puis comme résultat après formation dans la FAQ/JSON-LD. Un pourcentage de valorisation n’est pas un montant de salaire. Ce correctif ne prétend pas avoir démontré l’absence de tout gain ; il retire l’estimation générale non étayée de ces pages.

[Position rédigée avant recherche primaire et modification](formation-gains-salariaux-2026-11-15-reviews/stance.md) : lecteur qui finance une compétence pour son travail ; choisir selon usages, niveau initial et résultat observable, puis comparer le coût. L’anglais répond aux usages linguistiques identifiés, la bureautique aux tâches de documents/tableaux. Contre-cas : un nouveau métier ou une certification imposée requiert d’examiner ce parcours précis. Les choix et présentations des organismes restent ceux approuvés, sans nouveau palmarès.

## Reprise, observation et alternatives

Suivi du 14 novembre repris avant sélection. Banque #90 publiée, J0 conservateur du 13 novembre ; retrait de Propulse du 13 novembre consigné comme co-intervention, accueil exclu des témoins inchangés. Le 15 novembre, cinq pages Banque répondent 200, sources et conditions présentes, anciens raccourcis absents ; quatre textes restent identiques au build relu et micro ne diffère que par le retrait déjà connu de Propulse. Baseline du 12 novembre et J+28 du 11 décembre conservés, lecture finalisée vers le 14 décembre ; aucune attribution isolée à #90.

Aucune nouvelle PR oracle-pseo ni PR Formation ouverte au contrôle de départ. Les statuts #93/#94 et leurs observations du 14 novembre sont repris sans réaudit. Aucun nouvel examen arrivé à échéance identifié dans les suivis avec publication vérifiée ; pilote liasse mesuré le 10 novembre, beauté le 25 novembre reste la prochaine date prévue. CRM vers le 11 décembre, Compta/GED vers le 12, Téléphonie/Caisse/Collaboration vers le 13 selon les constats conservateurs existants. Pas d’effet prétendu à J+1.

Le portefeuille entier reste éligible ; les pistes reprises ne constituent pas une cohorte obligatoire. Paie/OCR-reprise reste RESEARCH : couverture existante et besoin distinct à qualifier, pas de nouvelle page autorisée ici. Les avis OpenClassrooms/Simplon ont déjà des conditions de choix et ne sont pas retitrés du fait du seul CTR. Le défaut de mesure salariale rencontré dans le voisinage est plus précis qu’une refonte de ces avis.

## Demande et couverture

Cockpit `cockpit_prod`, lecture REPEATABLE READ READ ONLY / ROLLBACK du 15 novembre à 08:00:39 UTC. Dernier détail final : 12 novembre, synchronisation du jour constatée. Fenêtres **16 octobre–12 novembre** et **18 septembre–15 octobre** ; 28/28 marqueurs par propriété/fenêtre pour Formation et Paie, aucune troncature déclarée. Lignes détaillées non exhaustives (requêtes anonymisées absentes) ; aucune estimation de marché ni de sessions humaines. [Extrait utile](formation-gains-salariaux-2026-11-15-cockpit.json).

Les groupes marque/avis, formation à un métier, reconversion, anglais et bureautique ont été examinés dans leurs pages ou synthèses utiles. Lectures du jour : OpenClassrooms, Simplon, Développeur web, reconversion ; fiche chef de projet digital, anglais puis Excel/bureautique ; voisin anglais/Lille utilisé comme témoin. [Titres et introductions du voisinage](formation-gains-salariaux-2026-11-15-coverage.json). Ce n’est pas un audit complet des formations, certifications ou organismes.

| Page/groupe | Exposition actuelle conservée | Décision |
| --- | --- | --- |
| Anglais professionnel | 627 impressions / 0 clic, position 73,44 ; période précédente 495/0, position 65,88 | Corriger la présentation du salaire et donner une méthode de choix par compétence. |
| Excel et bureautique | Aucune ligne page conservée dans les deux fenêtres | Même défaut dans le même champ et la même FAQ : correction de cohérence, pas une demande présumée à zéro. |
| OpenClassrooms/Simplon | 1 915/0, position 9,61 et 1 463/0, position 4,06 | HOLD sur les avis ; les conditions et contre-cas déjà présents ne justifient pas une nouvelle expérience aujourd’hui. |
| Chef de projet digital / anglais | `chef de projet digital` 92/0, position 78,66 ; `cours d'anglais professionnel` 93/0, position 70,60 | Entrée dans l’échantillon top25, pas preuve d’une nouvelle demande. Pages métier/thématique existantes ; pas de CREATE ni de nouveau salaire déduit. |

Title, description et introduction lus : ils annoncent des formations ou métiers existants. Positions élevées numériquement et zéro clic ne justifient pas un retitrage. Les métadonnées restent inchangées. L’intérêt de cliquer se précise dans la réponse : évaluer son niveau et les compétences attendues, plutôt qu’un pourcentage de rémunération. Les superlatifs historiques d’introduction restent une dette distincte.

## Avant / après, sources et périmètre

Avant : `+15-25% sur le salaire moyen` et `+10-15% valorisation CV` dans `domaines.ts`, affichés sous « Salaire moyen » et repris dans « Le salaire moyen après une formation… ». Aucun contexte d’étude/population/année dans ces champs.

Après : « Rémunération — Selon le poste exercé », avec un conseil d’évaluation des usages/niveau et un lien primaire daté. La même réponse alimente le paragraphe visible, la FAQ et son JSON-LD. Un champ facultatif `salaryContext` conserve cette unicité ; il n’est renseigné que pour deux domaines. Le template et les données sont les seuls fichiers d’implémentation modifiés.

Recherche des mêmes réponses avant rédaction : seuls ces deux objets utilisaient ces pourcentages ; `domaines.salaryRange` n’est rendu que par le template domaine. Les villes n’utilisent pas ce champ ; les salaires des fiches métiers viennent d’un autre jeu de données. Pas de MDX dans cette application. Les autres domaines gardent leur comportement. Pas de nouvelle route, suppression, redirection, changement d’indexation, dépendance, prix, organisme ou ordre commercial. Anglify/ClicCampus et leurs contenus approuvés, actualisés le 10 novembre, sont préservés ; l’exception est strictement la correction de mesure sans contexte.

Sources primaires lues le 15 novembre : [Europass — grille CECR](https://europass.europa.eu/fr/common-european-framework-reference-language-skills) décrit l’autoévaluation par activités/niveaux ; [FAQ ICDL](https://icdlfrance.org/faq/) décrit le test de niveau initial et les compétences à renforcer. Le lecteur web ICDL a renvoyé 502, curl a permis sa lecture 200 ; le juge truth a vérifié indépendamment le résultat officiel intégral. Ces sources ne mesurent pas un effet salarial nul ou garanti : elles étayent le choix de se concentrer sur la compétence. La méthode « nous conseillons » est un avis éditorial explicite, pas une étude d’impact ni un essai de formation.

Hors validation : prix et durées, CPF, notes, autres fourchettes salariales (population/année/localisation à sourcer), « la compétence linguistique la plus demandée », « essentielles dans tous les métiers », faits historiques de financement et capacités des organismes. Les différences de durées entre un parcours particulier et le domaine ne sont pas effacées sans preuve. Aucune nouvelle affirmation d’intégration native ou de contournement.

## Vérifications et limites

Installation isolée selon package-lock, Next installé/verrouillé 16.4.3, aucun lockfile ou dépendance modifié. Webpack utilisé d’emblée : build et TypeScript PASS, 527 sorties statiques. Lint PASS. Liens internes QF :249 URL, zéro inaccessible/orphelin hors accueil, profondeur max 3. `qc:seo-titles` PASS sur17 cas.

[HTML des deux pages](formation-gains-salariaux-2026-11-15-html.json) : un H1, canonical propre, robots et descriptions identiques à la production, anciens pourcentages retirés, réponse identique dans HTML et FAQ/JSON-LD, source primaire présente. Sitemap local/public :249 URL identiques. Texte visible accueil, Développeur web et anglais/Lille identique à la production ; non-régression seulement, pas vérité globale. Les anciennes valeurs ne sont pas conservées dans une donnée ou une FAQ concurrente du même sujet.

**Contrôles qui ne passent pas :** `qc:gap14-formation` FAIL, assertion `langues-anglais/lille unexpectedly has a remote offer`. Même échec reproduit dans une archive propre de base 0fc4547 avec les mêmes dépendances : le contrôle attend zéro offre distante alors que le corpus inclut l’offre Anglify. Aucune donnée partenaire ou règle d’indexation modifiée pour rendre ce test vert. `validate-gap14-formation-served.mjs --built` est BLOCKED dès l’absence du build DeplacementPro ; les autres assertions de ce contrôle global ne sont pas certifiées. Pas de PASS global Gap14, aucune réécriture de STATE.json. Ces limites sont portées dans la PR et le manifeste, pas masquées par les tests ciblés.

Captures desktop 1440 et mobile 390 des deux pages, sources mobiles et FAQ Excel ouverte. Racine 390 à viewport 390 ; FAQ native fermée puis ouverte avec Entrée, chaque état observé séparément. Expérience et simplicité relues, vérité bornée au diff ; [manifeste et rapports](formation-gains-salariaux-2026-11-15.jury-manifest.json) distinguent observations des juges et contrôles fournis par root. Pas de lecteur d’écran, appareil physique ou validationWCAG globale.

Aperçu Next local, pas de validation standalone/Docker ni déploiement. Le build local utilise l’émetteur vers le relais historique `cockpit-gamma-ten.vercel.app` et reçoit 403 ; aucune conclusion de panne de collecte production ou conversion mesurée. Pas d’essai de formation, certificat, achat, salaire ou revenu attribué. Pas de mesure de citations IA.

## PR et observation

PR [#7](https://github.com/yann-lephay/oracle-formation/pull/7) ouverte **en brouillon** le 15 novembre à 08:35:02 UTC, branche `codex/formation-gains-salariaux-20261115`, changement `1cae06c`. Arbitrage PASS_FOR_DRAFT_REVIEW. Diff présenté pour revue avec les deux limites de contrôle partagées ci-dessus ; pas de merge ni déploiement effectué. Après publication éventuelle, vérifier les deux contenus live avant de fixer J0, exclure sa journée mixte et observer 28 journées complètes ; examen J+28 puis finalisation, J+56/J+90 si nécessaire. Anglais627/0 et absence de ligne Excel constituent la baseline retenue ; accepter « données insuffisantes ». Les mises à jour commerciales précédentes et l’évolution du mélange de requêtes limitent toute attribution causale.

Primaire : exactitude et restitution des conditions (observation directe), puis impressions et clics en nombres absolus par page/requête. Témoins envisageables : Développeur web et anglais/Lille tant qu’inchangés. Citations IA et conversions ne seront ni déduites de Google, ni des accès de robots. La prochaine mesure due dans le suivi conservé reste beauté le 25 novembre. Aucune automatisation ni planification créée ou modifiée.
