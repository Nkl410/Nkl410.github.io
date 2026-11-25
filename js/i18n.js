/* ==========================================================================
   i18n — bilingue FR/EN, vanilla JS.
   Chaque élément traduit porte data-i18n="chemin.vers.la.cle".
   Par défaut le texte de l'élément (textContent) est remplacé ; si
   data-i18n-attr="nomAttribut" est présent, cet attribut est mis à jour
   à la place (utilisé pour alt, content, etc.).
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_KEY = "nv-lang";
  var DEFAULT_LANG = "fr";

  var translations = {
    fr: {
      meta: {
        title: "Nikola Vucic — Data Scientist / Data Engineer",
        description: "Portfolio de Nikola Vucic, Data Scientist / Data Engineer en alternance chez Emotors (Stellantis) et fondateur de Zuri Solutions (IA générative, agents, logiciel sur mesure), à la recherche d'une alternance data pour l'année 2027-2028."
      },
      nav: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        experience: "Expériences",
        projects: "Projets",
        education: "Formation",
        contact: "Contact"
      },
      hero: {
        intro: "je m'appelle",
        photoAlt: "Photo de Nikola Vucic",
        photoCaption: "Paris, 2026",
        pillRole: "Data Scientist",
        pillPlace: "Paris, France",
        pillInternship: "Alternance 2027 → 2028",
        noteInternship: "alternance data 2027-2028 — dispo !",
        noteJob: "alternance chez Emotors · Stellantis",
        statement1: "Je transforme des données brutes en outils qui",
        statement2: "créent de la valeur concrète.",
        ctaProjects: "Voir les projets",
        ctaCV: "Télécharger le CV"
      },
      about: {
        label: "à propos de moi !",
        banner: "À propos",
        statement: "Ingénieur Big Data & IA à l'ECE Paris, Data Scientist en alternance chez Stellantis et fondateur de Zuri Solutions. J'aime automatiser, industrialiser et livrer de bout en bout — de l'extraction de données jusqu'aux agents IA en production.",
        lookingForTitle: "Ce que je recherche",
        lookingFor1: "Une alternance pour l'année 2027-2028 en Data Science / Data Engineering / IA",
        lookingFor2: "Des missions concrètes : pipelines, applications data, automatisation, ML",
        lookingFor3: "Une équipe avec de vrais enjeux produit et business",
        bringTitle: "Ce que j'apporte",
        bring1: "Un mindset d'exécution et une ownership de bout en bout",
        bring2: "Un travail data rigoureux : structuration, ETL, qualité, reproductibilité",
        bring3: "De l'IA générative en production : agents, RAG, évaluations et non-régression des réponses",
        chessTitle: "Échecs",
        chessText: "Pratique régulière — pensée stratégique et anticipation.",
        violinTitle: "Violon",
        violinText: "10+ ans de pratique — discipline et sensibilité artistique."
      },
      skills: {
        label: "ma boîte à outils !",
        banner: "Compétences",
        cat1: "Langages",
        cat2: "Data & ML",
        cat3: "Big Data",
        cat4: "Bases de données",
        cat5: "APIs & Backend",
        cat6: "DevOps",
        cat7: "Front-end",
        cat8: "Scraping & Automatisation",
        cat9: "IA générative & LLM",
        agents: "Agents & tool use",
        evals: "Évals & non-régression",
        regression: "Régression",
        reproEnv: "Environnements reproductibles",
        pyScripts: "Scripts Python"
      },
      experience: {
        label: "mon parcours !",
        banner: "Expériences",
        emotors: {
          role: "Data Scientist / Data Engineer",
          meta: "Alternance · Paris · septembre 2025 → 2028",
          p1: { title: "DURA — plateforme durabilité", text: "Automatisation du traitement des profils de mission, des calculs de fatigue et des KPIs ingénierie.", statValue: "1 mois → 1 semaine", statLabel: "cycle d'analyse" },
          p2: { title: "Data engineering & architecture", text: "Pipelines et schémas PostgreSQL (15+ tables) traitant les séries temporelles de production.", statLabel: "données traitées" },
          p3: { title: "PPM & Predictive Quality", text: "Modèles prédictifs pour estimer et suivre les KPIs qualité PPM à partir des données production et durabilité.", statValue: "Détection précoce", statLabel: "des dérives qualité" },
          p4: { title: "Automatisation & industrialisation", text: "Modules de calcul réutilisables et scripts d'automatisation pour standardiser les workflows durabilité.", statValue: "10+ modules", statLabel: "réutilisables" },
          p5: { title: "APIs, DevOps & scalabilité", text: "APIs REST, conteneurisation Docker et traitement à l'échelle avec Databricks.", statValue: "Multi-environnements", statLabel: "déploiement standardisé" },
          moreDura: "Voir DURA",
          morePpm: "Voir Predictive Quality"
        },
        zuri: {
          role: "Fondateur",
          meta: "IA générative & logiciel sur mesure · Paris · 2026 → présent",
          p1: { title: "La Forge — usine logicielle multi-agents", text: "Plateforme interne qui produit nos logiciels clients : 5 agents IA spécialisés pilotés par des contrats exécutables, non-régression automatique et 4 validations humaines du brief à la prod.", statValue: "5 agents · 8 phases", statLabel: "du brief à la mise en production" },
          p2: { title: "Non-régression des réponses IA", text: "Chaque brique IA est livrée avec un jeu d'évaluation versionné et des seuils (exactitude, hallucination, latence p95, coût par requête) rejoués à chaque build : une réponse qui régresse bloque la livraison.", statValue: "≥ 90 % · ≤ 5 %", statLabel: "exactitude min. · hallucination max." },
          p3: { title: "Frog Hub — groupe de 8 pubs", text: "Hub de données reliant caisse, plannings, achats, réservations et compta, 7 agents IA, 20 automatisations et un copilote Claude qui répond avec les chiffres du hub et cite ses sources (RAG).", statValue: "10+ outils", statLabel: "reliés à un hub unique" },
          p4: { title: "Extraction de surfaces depuis des plans PDF", text: "Pour Confier & Associés, cabinet de conseil en fiscalité foncière : extraction pièce par pièce, score de confiance, classification sur une matrice 74 dénominations × 16 types d'activité, export Excel au format client.", statValue: "100 % local", statLabel: "aucun plan ne quitte le poste" },
          p5: { title: "Conseil & formation", text: "Audit et cartographie des processus, quick wins d'abord, puis formations IA / LLM pour les équipes clientes." },
          moreForge: "Voir la Forge",
          moreFrog: "Voir Frog Hub",
          moreSurfaces: "Voir l'extraction de surfaces"
        },
        circularplace: {
          role: "Assistant Product Manager",
          meta: "Alternance · Paris · août 2024 → août 2025",
          p1: { title: "Automatisation & QA", text: "5+ solutions d'automatisation pour la gestion de données, workflows QA automatisés, 10+ fonctionnalités livrées en Agile." },
          p2: { title: "Modèles IA produit", text: "CNN de classification produit, régression de prédiction de prix, base et calculateur d'impact CO₂.", statLabel: "d'erreur sur la prédiction de prix" },
          p3: { title: "Extraction de données", text: "Points de données extraits via Python, APIs et BeautifulSoup pour l'analyse d'actifs.", statLabel: "points de données" },
          p4: { title: "Plateforme B2B", text: "Lancement d'une plateforme B2B, gestion d'inventaire sur plusieurs étages, coordination multi-équipes.", statValue: "20+ étages · 3+ équipes", statLabel: "coordonnés" }
        }
      },
      projects: {
        label: "mes projets !",
        banner: "Projets",
        note: "Six projets qui résument ma palette : agents IA, intégration de données, extraction de documents, plateforme industrielle, machine learning et computer vision.",
        viewProject: "Voir le projet",
        viewAll: "Tous les projets en détail",
        forge: { tab: "Projet 01", date: "Zuri Solutions · 2026", title: "La Forge", desc: "Notre usine logicielle : 5 agents IA pilotés par des contrats exécutables, avec non-régression automatique du code et des réponses IA, jusqu'à la mise en production.", tag2: "Agents IA", tag3: "Évals LLM" },
        froghub: { tab: "Projet 02", date: "Zuri Solutions · Frog Pubs", title: "Frog Hub", desc: "Le hub de données d'un groupe de 8 pubs : 10+ outils reliés, 7 agents IA, 20 automatisations et un copilote Claude qui répond avec les vrais chiffres." },
        surfaces: { tab: "Projet 03", date: "Zuri Solutions · Confier & Associés", title: "Plans → Surfaces", desc: "Extraire les surfaces de centaines de plans PDF, les fiabiliser par un score de confiance et les classer selon une matrice métier, au lieu de les recopier à la main." },
        dura: { tab: "Projet 04", date: "Emotors · Stellantis", desc: "La plateforme qui automatise les études de durabilité : profils de mission, calculs de fatigue et KPIs ingénierie. Cycle d'analyse ramené d'un mois à une semaine." },
        ppm: { tab: "Projet 05", date: "Emotors · Stellantis", title: "Predictive Quality", desc: "Des modèles qui anticipent les dérives qualité PPM à partir des données de production et de durabilité, au lieu de les constater après coup.", tag2: "Modélisation" },
        pneumonia: { tab: "Projet 06", date: "Projet personnel", title: "Pneumonia CNN", desc: "Un réseau de neurones convolutif qui distingue automatiquement les radiographies pulmonaires saines des cas de pneumonie.", tag3: "Computer Vision" }
      },
      education: {
        label: "mes études !",
        banner: "Formation",
        ece: { title: "Diplôme d'ingénieur Big Data & Intelligence Artificielle", item1: "Data Science & Intelligence Artificielle", item2: "Mathématiques appliquées", item3: "Sécurité des données & gestion de projet" },
        iaschool: { title: "Bachelor Intelligence Artificielle & Business", item2: "Mathématiques appliquées", item3: "Marketing" }
      },
      contact: {
        cardNote: "Ouvert aux alternances data / IA pour 2027-2028, et à toute conversation sur un problème de données intéressant.",
        tagline: "construisons quelque chose ensemble",
        word: "Contact",
        cta: "M'écrire"
      },
      footer: {
        role: "Data Scientist / Data Engineer"
      },
      projectsPage: {
        meta: {
          title: "Projets — Nikola Vucic",
          description: "Détail des projets de Nikola Vucic : la Forge (agents IA), Frog Hub, extraction de surfaces depuis des plans PDF, DURA, Predictive Quality (PPM) et détection de pneumonie par CNN."
        },
        label: "ce que j'ai construit !",
        banner: "Projets",
        note: "Six projets détaillés — contexte, problème, ce que j'ai construit, stack et impacts — puis les autres dépôts de mon GitHub.",
        viewRepo: "Voir le repo",
        internalNote: "Projet interne Stellantis — code non public",
        labels: { context: "Contexte", problem: "Problème", built: "Ce que j'ai construit", stack: "Stack technique" },
        forge: {
          eyebrow: "Plateforme interne · Zuri Solutions · Python · Claude Code",
          title: "La Forge",
          note: "Outil interne Zuri — code non public",
          why: "Le projet qui montre le mieux ma façon de travailler : faire de l'IA générative un processus d'ingénierie mesurable, où rien n'est « fini » tant qu'un test exécutable ne l'a pas prouvé.",
          context: "Chez Zuri Solutions, nous livrons du logiciel sur mesure et des briques d'IA générative pour des PME. Pour tenir des délais courts sans sacrifier la fiabilité, j'ai construit la Forge : l'usine logicielle qui pilote la création d'un projet client, du cadrage jusqu'à la mise en production.",
          problem: "Un agent IA qui code seul déclare « fini » trop vite, casse ce qui marchait déjà, invente des champs d'API et peut toucher à des données réelles. Et une réponse de LLM n'est pas déterministe : sans mesure, on ne voit pas qu'elle se dégrade d'une version du prompt ou du modèle à l'autre.",
          built: "Un orchestrateur et 5 agents spécialisés (produit, design, build, vérification, revue) qui avancent par contrats YAML : chaque tâche déclare ses entrées, une sortie attendue mesurable et une commande de vérification. Seul le vérificateur dit si c'est fait : il rejoue tous les contrats à chaque passage et signale toute régression. Les tests sont écrits par l'agent de vérification puis verrouillés avant que l'agent build ne code. Pour l'IA, les contrats embarquent un jeu d'évaluation versionné et des seuils issus du brief (exactitude, taux d'hallucination, latence p95, coût par requête) : c'est l'algorithme de non-régression des réponses, qui bloque une livraison dès qu'un score passe sous son seuil. Autour : 8 phases avec portes automatiques et 4 validations humaines, criticité C1/C2/C3, budget de tentatives avec escalade vers un modèle plus fort, coffre à secrets et proxy d'API en lecture seule, anonymisation obligatoire des données de test, hooks de garde-fous, tableau de bord temps réel et notifications. Déployée sur une VM (systemd, Tailscale) avec retour arrière versionné.",
          agentsTag: "Orchestration multi-agents", evalTag: "Évaluation LLM", hooksTag: "Hooks & garde-fous",
          stat1Value: "5 agents", stat1Label: "spécialisés, coordonnés par un orchestrateur",
          stat2Value: "8 phases", stat2Label: "portes automatiques et 4 validations humaines",
          stat3Value: "100 % verts", stat3Label: "contrats exigés avant merge, push ou mise en prod",
          stat4Value: "4 métriques IA", stat4Label: "exactitude, hallucination, latence p95, coût / requête"
        },
        froghub: {
          eyebrow: "Hub de données & IA · Zuri Solutions · Node.js · Claude API",
          title: "Frog Hub & Club Frog",
          note: "Projet client — code non public",
          why: "Un vrai client, de l'audit au produit : cartographier les processus d'un groupe de pubs, puis construire le hub, les agents et le copilote qui suppriment le travail manuel identifié.",
          context: "Frog Pubs exploite 8 pubs à Paris, Bordeaux et Toulouse, plus un siège et une brasserie. Après un audit et une cartographie complète de leurs processus, Zuri construit leur hub de données et Club Frog, un programme de fidélité bâti sur le hub.",
          problem: "Plus de dix outils métier (caisse, plannings, achats, réservations, paiements, comptabilité) qui ne se parlent pas : ressaisies à chaque clôture de service, rapprochements faits à la main, chiffres différents d'un outil à l'autre, et 38 points de douleur relevés pendant l'audit.",
          built: "Un prototype complet, puis le vrai hub branché sur les API. Le hub unifie les sources par adaptateurs (même schéma interne, que la donnée arrive par API ou par export) et restitue les bons chiffres à chaque rôle : équipes de pub, direction, opérations, marketing, comptabilité, IT. 7 agents IA ont chacun une mission tirée de l'audit, et 20 automatisations (« quand → quoi → où ») envoient la bonne donnée au bon outil, en automatique ou après validation. Frog Copilot, construit sur Claude avec tool use, répond avec les chiffres en direct du hub et les passages de la documentation interne, retrouvés par un moteur de recherche BM25 (RAG). Côté production : lecture seule par défaut, idempotence, files d'attente et backoff sur les limites d'API, aucune donnée personnelle dans les logs, et l'encaissement ne dépend jamais du hub.",
          toolTag: "Tool use", apiTag: "Intégrations API", agentsTag: "Agents IA",
          stat1Value: "8 pubs · 10+ outils", stat1Label: "reliés à un hub de données unique",
          stat2Value: "7 agents · 20 automatisations", stat2Label: "chacun rattaché à un problème de l'audit",
          stat3Value: "38 points de douleur", stat3Label: "suivis avec statut, méthode et décision",
          stat4Value: "Copilote sourcé", stat4Label: "chiffres en direct + documentation citée"
        },
        surfaces: {
          eyebrow: "Extraction de documents · Zuri Solutions · FastAPI · React",
          title: "Plans → Surfaces",
          note: "Projet client — code non public",
          why: "De l'extraction brute à la donnée fiable : le projet où la règle métier compte autant que le parsing, avec un score de confiance qui dit au consultant où regarder.",
          context: "Pour Confier & Associés, cabinet de conseil spécialisé dans la revalorisation de la taxe foncière des locaux professionnels. Chaque dossier est un lot de plans de métrage PDF dont les surfaces, pièce par pièce, étaient recopiées à la main.",
          problem: "À l'échelle de centaines de plans, la ressaisie ne tient pas. Et la règle métier est piégeuse : le groupe d'une pièce (partie principale, dégagement, autre) dépend du type d'activité du bien. Les sanitaires sont un dégagement dans un atelier, mais une partie principale dans un hôtel.",
          built: "Une plateforme locale, où les plans ne quittent jamais le poste. Elle extrait les couples pièce / surface du texte des PDF avec PyMuPDF, détecte l'étage, attribue à chaque ligne un score de confiance de 0 à 100 avec ses raisons (surface aberrante, libellé douteux, association suspecte), normalise les libellés vers les 74 dénominations du client, puis résout le groupe via une matrice 74 dénominations × 16 types d'activité, en trois niveaux de priorité. Le consultant corrige, renomme ou écarte une ligne dans l'interface ; chaque correction est rattachée à l'empreinte du PDF, et l'export Excel sort au format attendu par le cabinet.",
          excelTag: "Export Excel",
          stat1Value: "74 × 16", stat1Label: "matrice dénominations × types d'activité",
          stat2Value: "Score 0–100", stat2Label: "de confiance par ligne, raisons affichées",
          stat3Value: "100 % local", stat3Label: "aucun plan ne quitte le poste",
          stat4Value: "Traitement par lot", stat4Label: "un PDF illisible n’interrompt jamais le lot"
        },
        dura: {
          eyebrow: "Data Platform · Emotors (Stellantis)",
          context: "Chez Emotors (Stellantis), les équipes durabilité valident la tenue mécanique des composants moteur. Chaque validation part de profils de mission — des relevés de conditions réelles d'usage — qu'il faut traiter pour calculer la fatigue des pièces et en tirer des KPIs d'ingénierie.",
          problem: "Ce traitement était entièrement manuel et refait équipe par équipe : récupération des fichiers bruts, calculs sur scripts locaux, mise en forme des résultats. Un cycle d'analyse complet prenait environ un mois, les méthodes divergeaient d'une équipe à l'autre, et rien ne permettait de remonter d'un résultat jusqu'au signal brut qui l'avait produit.",
          built: "DURA, une plateforme qui industrialise toute la chaîne : ingestion automatisée des séries temporelles, traitement des profils de mission, calculs de fatigue et production des KPIs. J'ai conçu les pipelines et les schémas PostgreSQL (15+ tables) qui structurent ~10 Go de données par mois, ainsi que 10+ modules de calcul réutilisables qui garantissent que chaque équipe applique la même méthode. Le tout est exposé via des APIs REST, conteneurisé avec Docker et passe à l'échelle sur Databricks, avec une traçabilité complète du signal brut jusqu'aux sorties.",
          restTag: "APIs REST",
          stat1Label: "cycle d'analyse, résultats standardisés entre équipes",
          stat2Label: "schémas PostgreSQL",
          stat3Label: "de séries temporelles traitées",
          stat4Value: "100 % automatisée", stat4Label: "ingestion, signal brut → sorties"
        },
        ppm: {
          eyebrow: "Machine Learning · Emotors (Stellantis)",
          title: "Predictive Quality (PPM)",
          context: "Toujours chez Emotors, en prolongement de DURA : les équipes qualité pilotent la fiabilité produit avec l'indicateur PPM — le nombre de pièces défectueuses par million — calculé à partir des données de production et des retours terrain.",
          problem: "Cet indicateur est par nature rétrospectif : une dérive qualité n'apparaissait qu'une fois les PPM dégradés, donc une fois les pièces déjà produites. Aucun signal d'alerte en amont, et donc aucune marge pour corriger avant que le défaut ne se propage sur la série.",
          built: "Des modèles prédictifs qui estiment les KPIs PPM à partir des variables de production et de durabilité, en réutilisant les pipelines et les modules de calcul de DURA comme socle de données. Les modèles tournent sur les données courantes et signalent les dérives probables avant qu'elles ne se matérialisent dans les indicateurs, ce qui transforme le suivi qualité d'un constat en une alerte.",
          stat1Value: "Détection précoce", stat1Label: "des dérives qualité PPM",
          stat2Value: "Décisions data-driven", stat2Label: "pour les équipes fiabilité",
          stat3Label: "de calcul réutilisés depuis DURA"
        },
        pneumonia: {
          eyebrow: "Deep Learning · Imagerie médicale",
          title: "Détection de pneumonie par CNN",
          why: "Projet personnel sélectionné sur mon GitHub : celui qui montre le mieux une expertise deep learning / computer vision complète — du prétraitement d'images à l'évaluation du modèle — dans un domaine différent, ce qui complète le panorama IA générative (Forge, Frog Hub), extraction de documents (Surfaces) et industrie (DURA, PPM).",
          context: "Projet personnel d'exploration du deep learning appliqué à l'imagerie médicale, à partir d'un jeu public de radiographies thoraciques étiquetées sain / pneumonie.",
          problem: "Le diagnostic de pneumonie sur radiographie demande une lecture experte. L'enjeu technique était double : vérifier qu'un réseau convolutif peut apprendre les motifs pathologiques à partir d'images brutes, et surtout limiter les faux négatifs — un cas positif manqué coûte bien plus cher qu'une fausse alerte.",
          built: "Un CNN entraîné sur des images 150x150 RGB, avec quatre blocs convolution + pooling pour l'extraction de features, puis une couche dense (256 unités), du dropout (0.5) et une sortie sigmoïde pour la classification binaire. L'entraînement utilise l'optimiseur Adam, l'early stopping et la réduction du taux d'apprentissage sur plateau pour stabiliser la convergence. Le modèle est évalué via matrice de confusion et courbes accuracy/loss.",
          stat1Label: "+ pooling pour l'extraction de features",
          stat2Value: "Early stopping", stat2Label: "+ réduction du LR sur plateau",
          stat3Value: "Classification binaire", stat3Label: "seuil de décision à 0.5"
        },
        more: {
          label: "et aussi !",
          banner: "Autres projets",
          desc: "D'autres dépôts sur mon GitHub, en data engineering, machine learning, visualisation et développement web.",
          card1: { desc: "Convertit des fichiers MATLAB / texte / CSV en Parquet pour l'ingestion de séries temporelles à grande échelle." },
          card2: { desc: "Récupère automatiquement des images depuis un fichier Excel, les sauvegarde sur Drive et génère une URL pour chacune.", tag: "Automatisation" },
          card3: { title: "Classification de papillons par CNN", desc: "Classification automatique d'espèces de papillons par réseau de neurones convolutif." },
          card4: { desc: "Réseau de neurones pour la reconnaissance de chiffres MNIST codé à la main, sans framework de deep learning.", tag: "Réseau de neurones" },
          card5: { desc: "Analyse des données d'un championnat esport pour identifier les meilleurs joueurs et les tendances de la compétition.", tag: "Data Visualisation" },
          card6: { desc: "Webapp de circuit court agricole, pour mettre en relation producteurs et consommateurs." }
        }
      }
    },

    en: {
      meta: {
        title: "Nikola Vucic — Data Scientist / Data Engineer",
        description: "Portfolio of Nikola Vucic, Data Scientist / Data Engineer apprentice at Emotors (Stellantis) and founder of Zuri Solutions (generative AI, agents, custom software), looking for a data apprenticeship for the 2027-2028 academic year."
      },
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        contact: "Contact"
      },
      hero: {
        intro: "my name is",
        photoAlt: "Photo of Nikola Vucic",
        photoCaption: "Paris, 2026",
        pillRole: "Data Scientist",
        pillPlace: "Paris, France",
        pillInternship: "Apprenticeship 2027 → 2028",
        noteInternship: "data apprenticeship 2027-2028 — available!",
        noteJob: "apprentice at Emotors · Stellantis",
        statement1: "I turn raw data into tools that",
        statement2: "create real, measurable value.",
        ctaProjects: "See my projects",
        ctaCV: "Download CV"
      },
      about: {
        label: "about me!",
        banner: "About",
        statement: "Big Data & AI engineering student at ECE Paris, Data Scientist apprentice at Stellantis and founder of Zuri Solutions. I like automating, industrializing and shipping end to end — from data extraction all the way to AI agents in production.",
        lookingForTitle: "What I'm looking for",
        lookingFor1: "An apprenticeship for the 2027-2028 year in Data Science / Data Engineering / AI",
        lookingFor2: "Hands-on missions: pipelines, data applications, automation, ML",
        lookingFor3: "A team with real product and business stakes",
        bringTitle: "What I bring",
        bring1: "A strong execution mindset and end-to-end ownership",
        bring2: "Rigorous data work: structuring, ETL, quality, reproducibility",
        bring3: "Generative AI in production: agents, RAG, evaluations and answer non-regression",
        chessTitle: "Chess",
        chessText: "Regular practice — strategic thinking and anticipation.",
        violinTitle: "Violin",
        violinText: "10+ years of practice — discipline and artistic sensitivity."
      },
      skills: {
        label: "my toolbox!",
        banner: "Skills",
        cat1: "Languages",
        cat2: "Data & ML",
        cat3: "Big Data",
        cat4: "Databases",
        cat5: "APIs & Backend",
        cat6: "DevOps",
        cat7: "Front-end",
        cat8: "Scraping & Automation",
        cat9: "Generative AI & LLMs",
        agents: "Agents & tool use",
        evals: "Evals & non-regression",
        regression: "Regression",
        reproEnv: "Reproducible environments",
        pyScripts: "Python scripts"
      },
      experience: {
        label: "my journey!",
        banner: "Experience",
        emotors: {
          role: "Data Scientist / Data Engineer",
          meta: "Apprenticeship · Paris · September 2025 → 2028",
          p1: { title: "DURA — durability platform", text: "Automated processing of mission profiles, fatigue calculations and engineering KPIs.", statValue: "1 month → 1 week", statLabel: "analysis cycle" },
          p2: { title: "Data engineering & architecture", text: "Data pipelines and PostgreSQL schemas (15+ tables) processing production time-series.", statLabel: "of data processed" },
          p3: { title: "PPM & Predictive Quality", text: "Predictive models to estimate and monitor PPM quality KPIs from production and durability data.", statValue: "Early detection", statLabel: "of quality drifts" },
          p4: { title: "Automation & industrialization", text: "Reusable computation modules and automation scripts to standardize durability workflows.", statValue: "10+ modules", statLabel: "reusable" },
          p5: { title: "APIs, DevOps & scalability", text: "REST APIs, Docker containerization and large-scale processing with Databricks.", statValue: "Multi-environment", statLabel: "standardized deployment" },
          moreDura: "See DURA",
          morePpm: "See Predictive Quality"
        },
        zuri: {
          role: "Founder",
          meta: "Generative AI & custom software · Paris · 2026 → present",
          p1: { title: "The Forge — a multi-agent software factory", text: "Internal platform that builds our client software: 5 specialised AI agents driven by executable contracts, automatic non-regression and 4 human sign-offs from brief to production.", statValue: "5 agents · 8 phases", statLabel: "from brief to production" },
          p2: { title: "Non-regression of AI answers", text: "Every AI component ships with a versioned evaluation set and thresholds (accuracy, hallucination, p95 latency, cost per request) replayed on every build: an answer that regresses blocks the release.", statValue: "≥ 90% · ≤ 5%", statLabel: "min. accuracy · max. hallucination" },
          p3: { title: "Frog Hub — a group of 8 pubs", text: "Data hub linking tills, rotas, purchasing, bookings and accounting, 7 AI agents, 20 automations and a Claude copilot that answers with the hub's figures and cites its sources (RAG).", statValue: "10+ tools", statLabel: "connected to a single hub" },
          p4: { title: "Floor-area extraction from PDF plans", text: "For Confier & Associés, a property-tax consulting firm: room-by-room extraction, confidence scoring, classification on a 74 room types × 16 activity types matrix, Excel export in the client's format.", statValue: "100% local", statLabel: "no plan ever leaves the machine" },
          p5: { title: "Consulting & training", text: "Process audits and mapping, quick wins first, then AI / LLM training for client teams." },
          moreForge: "See the Forge",
          moreFrog: "See Frog Hub",
          moreSurfaces: "See floor-area extraction"
        },
        circularplace: {
          role: "Assistant Product Manager",
          meta: "Apprenticeship · Paris · August 2024 → August 2025",
          p1: { title: "Automation & QA", text: "5+ automation solutions for data management, automated QA workflows, 10+ features delivered in Agile." },
          p2: { title: "Product AI models", text: "CNN for product classification, price prediction regression model, CO₂ impact database and calculator.", statLabel: "error on price prediction" },
          p3: { title: "Data extraction", text: "Data points extracted via Python, APIs and BeautifulSoup for asset analysis.", statLabel: "data points" },
          p4: { title: "B2B platform", text: "Launched a B2B platform, managed inventory across multiple floors, coordinated several teams.", statValue: "20+ floors · 3+ teams", statLabel: "coordinated" }
        }
      },
      projects: {
        label: "my projects!",
        banner: "Projects",
        note: "Six projects that sum up my range: AI agents, data integration, document extraction, industrial platform, machine learning and computer vision.",
        viewProject: "View project",
        viewAll: "All projects in detail",
        forge: { tab: "Project 01", date: "Zuri Solutions · 2026", title: "The Forge", desc: "Our software factory: 5 AI agents driven by executable contracts, with automatic non-regression of both code and AI answers, all the way to production.", tag2: "AI agents", tag3: "LLM evals" },
        froghub: { tab: "Project 02", date: "Zuri Solutions · Frog Pubs", title: "Frog Hub", desc: "The data hub of a group of 8 pubs: 10+ tools connected, 7 AI agents, 20 automations and a Claude copilot that answers with the real figures." },
        surfaces: { tab: "Project 03", date: "Zuri Solutions · Confier & Associés", title: "Plans → Floor areas", desc: "Extracting floor areas from hundreds of PDF plans, making them reliable with a confidence score and classifying them with a business matrix, instead of re-keying them by hand." },
        dura: { tab: "Project 04", date: "Emotors · Stellantis", desc: "The platform automating durability studies: mission profiles, fatigue calculations and engineering KPIs. Analysis cycle cut from a month to a week." },
        ppm: { tab: "Project 05", date: "Emotors · Stellantis", title: "Predictive Quality", desc: "Models that anticipate PPM quality drifts from production and durability data, instead of noticing them after the fact.", tag2: "Modelling" },
        pneumonia: { tab: "Project 06", date: "Personal project", title: "Pneumonia CNN", desc: "A convolutional neural network telling healthy chest X-rays apart from pneumonia cases automatically.", tag3: "Computer Vision" }
      },
      education: {
        label: "my studies!",
        banner: "Education",
        ece: { title: "Engineering Degree in Big Data & Artificial Intelligence", item1: "Data Science & Artificial Intelligence", item2: "Applied Mathematics", item3: "Data Security & Project Management" },
        iaschool: { title: "Bachelor in Artificial Intelligence & Business", item2: "Applied Mathematics", item3: "Marketing" }
      },
      contact: {
        cardNote: "Open to data / AI apprenticeships for 2027-2028, and to any conversation about an interesting data problem.",
        tagline: "let's build something together",
        word: "Contact",
        cta: "Email me"
      },
      footer: {
        role: "Data Scientist / Data Engineer"
      },
      projectsPage: {
        meta: {
          title: "Projects — Nikola Vucic",
          description: "Detailed projects by Nikola Vucic: the Forge (AI agents), Frog Hub, floor-area extraction from PDF plans, DURA, Predictive Quality (PPM) and pneumonia detection with a CNN."
        },
        label: "what I've built!",
        banner: "Projects",
        note: "Six projects in detail — context, problem, what I built, stack and impact — followed by the rest of my GitHub repos.",
        viewRepo: "View repo",
        internalNote: "Internal Stellantis project — code not public",
        labels: { context: "Context", problem: "Problem", built: "What I built", stack: "Tech stack" },
        forge: {
          eyebrow: "Internal platform · Zuri Solutions · Python · Claude Code",
          title: "The Forge",
          note: "Internal Zuri tool — code not public",
          why: "The project that best shows how I work: turning generative AI into a measurable engineering process, where nothing is \"done\" until an executable test has proved it.",
          context: "At Zuri Solutions we deliver custom software and generative AI components for small and mid-sized businesses. To keep timelines short without giving up reliability, I built the Forge: the software factory that runs a client project from scoping all the way to production.",
          problem: "An AI agent coding on its own declares \"done\" too early, breaks what already worked, invents API fields and can touch real data. And an LLM answer is not deterministic: without measurement, you cannot see it degrading from one prompt or model version to the next.",
          built: "An orchestrator and 5 specialised agents (product, design, build, verification, review) that move forward through YAML contracts: each task declares its inputs, a measurable expected output and a verification command. Only the verifier decides whether something is done: it replays every contract on each pass and flags any regression. Tests are written by the verification agent and locked before the build agent writes code. For AI, contracts carry a versioned evaluation set and thresholds taken from the brief (accuracy, hallucination rate, p95 latency, cost per request): this is the answer non-regression algorithm, which blocks a release as soon as a score drops below its threshold. Around it: 8 phases with automatic gates and 4 human sign-offs, C1/C2/C3 criticality, an attempt budget that escalates to a stronger model, a secrets vault and a read-only API proxy, mandatory anonymisation of test data, guard-rail hooks, a live dashboard and notifications. Deployed on a VM (systemd, Tailscale) with versioned rollback.",
          agentsTag: "Multi-agent orchestration", evalTag: "LLM evaluation", hooksTag: "Hooks & guard-rails",
          stat1Value: "5 agents", stat1Label: "specialised, coordinated by an orchestrator",
          stat2Value: "8 phases", stat2Label: "automatic gates and 4 human sign-offs",
          stat3Value: "100% green", stat3Label: "contracts required before merge, push or release",
          stat4Value: "4 AI metrics", stat4Label: "accuracy, hallucination, p95 latency, cost / request"
        },
        froghub: {
          eyebrow: "Data hub & AI · Zuri Solutions · Node.js · Claude API",
          title: "Frog Hub & Club Frog",
          note: "Client project — code not public",
          why: "A real client, from audit to product: mapping the processes of a pub group, then building the hub, the agents and the copilot that remove the manual work we found.",
          context: "Frog Pubs runs 8 pubs in Paris, Bordeaux and Toulouse, plus a head office and a brewery. After an audit and a full map of their processes, Zuri is building their data hub and Club Frog, a loyalty programme built on top of the hub.",
          problem: "More than ten business tools (tills, rotas, purchasing, bookings, payments, accounting) that don't talk to each other: re-keying at every close of service, reconciliations done by hand, different figures from one tool to the next, and 38 pain points found during the audit.",
          built: "A complete prototype, then the real hub wired to the APIs. The hub unifies sources through adapters (same internal schema whether data arrives by API or by export) and gives each role the right figures: pub teams, management, operations, marketing, accounting, IT. 7 AI agents each have one job taken from the audit, and 20 automations (\"when → what → where\") send the right data to the right tool, automatically or after approval. Frog Copilot, built on Claude with tool use, answers with live hub figures and passages from internal documentation retrieved by a BM25 search engine (RAG). For production: read-only by default, idempotency, queues and backoff on API rate limits, no personal data in logs, and payments never depend on the hub.",
          toolTag: "Tool use", apiTag: "API integrations", agentsTag: "AI agents",
          stat1Value: "8 pubs · 10+ tools", stat1Label: "connected to a single data hub",
          stat2Value: "7 agents · 20 automations", stat2Label: "each tied to a problem from the audit",
          stat3Value: "38 pain points", stat3Label: "tracked with status, method and decision",
          stat4Value: "Sourced copilot", stat4Label: "live figures + cited documentation"
        },
        surfaces: {
          eyebrow: "Document extraction · Zuri Solutions · FastAPI · React",
          title: "Plans → Floor areas",
          note: "Client project — code not public",
          why: "From raw extraction to reliable data: the project where the business rule matters as much as the parsing, with a confidence score that tells the consultant where to look.",
          context: "For Confier & Associés, a consulting firm specialised in reassessing property tax on business premises. Each case is a batch of PDF floor plans whose room-by-room areas used to be copied out by hand.",
          problem: "At the scale of hundreds of plans, re-keying doesn't hold up. And the business rule is tricky: a room's group (main area, circulation, other) depends on the property's activity type. Toilets count as circulation in a workshop, but as main area in a hotel.",
          built: "A local platform where plans never leave the machine. It extracts room / area pairs from the PDF text with PyMuPDF, detects the floor, gives every line a 0–100 confidence score with its reasons (outlier area, doubtful label, suspicious pairing), normalises labels to the client's 74 room types, then resolves the group through a 74 room types × 16 activity types matrix with three levels of priority. The consultant corrects, renames or discards a line in the interface; each correction is tied to the PDF's fingerprint, and the Excel export comes out in the firm's expected format.",
          excelTag: "Excel export",
          stat1Value: "74 × 16", stat1Label: "room types × activity types matrix",
          stat2Value: "0–100 score", stat2Label: "confidence per line, reasons shown",
          stat3Value: "100% local", stat3Label: "no plan ever leaves the machine",
          stat4Value: "Batch processing", stat4Label: "an unreadable PDF never stops the batch"
        },
        dura: {
          eyebrow: "Data platform · Emotors (Stellantis)",
          context: "At Emotors (Stellantis), durability teams validate the mechanical endurance of engine components. Every validation starts from mission profiles — recordings of real-world operating conditions — which have to be processed to calculate part fatigue and derive engineering KPIs.",
          problem: "That processing was entirely manual and redone team by team: fetching raw files, running calculations in local scripts, formatting the results. A full analysis cycle took about a month, methods diverged from one team to the next, and nothing let you trace a result back to the raw signal that produced it.",
          built: "DURA, a platform that industrializes the whole chain: automated time-series ingestion, mission profile processing, fatigue calculations and KPI generation. I designed the pipelines and PostgreSQL schemas (15+ tables) that structure ~10 GB of data per month, plus 10+ reusable computation modules that guarantee every team applies the same method. It is exposed through REST APIs, containerized with Docker and scales on Databricks, with full traceability from raw signal to output.",
          restTag: "REST APIs",
          stat1Label: "analysis cycle, results standardized across teams",
          stat2Label: "PostgreSQL schemas",
          stat3Label: "of time-series data processed",
          stat4Value: "100% automated", stat4Label: "ingestion, raw signal → outputs"
        },
        ppm: {
          eyebrow: "Machine learning · Emotors (Stellantis)",
          title: "Predictive Quality (PPM)",
          context: "Also at Emotors, as an extension of DURA: quality teams manage product reliability through the PPM indicator — defective parts per million — computed from production data and field returns.",
          problem: "That indicator is retrospective by nature: a quality drift only showed up once PPM had already degraded, meaning once the parts had already been produced. No early warning signal, and therefore no margin to correct the issue before the defect spread across the production run.",
          built: "Predictive models that estimate PPM KPIs from production and durability variables, reusing DURA's pipelines and computation modules as their data foundation. The models run on current data and flag likely drifts before they show up in the indicators, turning quality monitoring from a post-mortem into an alert.",
          stat1Value: "Early detection", stat1Label: "of PPM quality drifts",
          stat2Value: "Data-driven decisions", stat2Label: "for reliability teams",
          stat3Label: "computation modules reused from DURA"
        },
        pneumonia: {
          eyebrow: "Deep learning · Medical imaging",
          title: "Pneumonia detection with a CNN",
          why: "Personal project selected from my GitHub: the one that best shows a complete deep learning / computer vision skillset — from image preprocessing to model evaluation — in a different domain, rounding out the generative AI (Forge, Frog Hub), document extraction (Floor areas) and industry (DURA, PPM) picture.",
          context: "Personal project exploring deep learning applied to medical imaging, using a public chest X-ray dataset labelled normal / pneumonia.",
          problem: "Diagnosing pneumonia from an X-ray requires expert reading. The technical challenge was twofold: confirm that a convolutional network can learn pathological patterns from raw images, and above all keep false negatives down — a missed positive costs far more than a false alarm.",
          built: "A CNN trained on 150x150 RGB images, with four convolution + pooling blocks for feature extraction, followed by a dense layer (256 units), dropout (0.5) and a sigmoid output for binary classification. Training uses the Adam optimizer, early stopping and learning-rate reduction on plateau to stabilize convergence. The model is evaluated via a confusion matrix and accuracy/loss curves.",
          stat1Label: "+ pooling for feature extraction",
          stat2Value: "Early stopping", stat2Label: "+ LR reduction on plateau",
          stat3Value: "Binary classification", stat3Label: "0.5 decision threshold"
        },
        more: {
          label: "also worth a look!",
          banner: "Other projects",
          desc: "More repos on my GitHub, across data engineering, machine learning, visualization and web development.",
          card1: { desc: "Converts MATLAB / text / CSV files to Parquet for large-scale time-series ingestion." },
          card2: { desc: "Automatically retrieves images from a spreadsheet, saves them to Drive and generates a URL for each one.", tag: "Automation" },
          card3: { title: "Butterfly species classification with a CNN", desc: "Automatic classification of butterfly species with a convolutional neural network." },
          card4: { desc: "A neural network for MNIST digit recognition, hand-coded without a deep learning framework.", tag: "Neural network" },
          card5: { desc: "Analyzes esports competition data to identify top players and competition trends.", tag: "Data visualization" },
          card6: { desc: "A short-supply-chain farming webapp connecting producers and consumers directly." }
        }
      }
    }
  };

  function getPath(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = getPath(dict, key);
      if (typeof value !== "string") return;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.textContent = value;
      }
    });

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll(".lang-toggle__opt").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setLang(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* localStorage unavailable */ }
    applyLang(lang);
  }

  function getStoredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (e) { /* localStorage unavailable */ }
    return DEFAULT_LANG;
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getStoredLang());

    document.querySelectorAll(".lang-toggle__opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  });
})();
