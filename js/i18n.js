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
        description: "Portfolio de Nikola Vucic, Data Scientist / Data Engineer en alternance chez Emotors (Stellantis), à la recherche d'un stage d'avril à juillet."
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
        pillInternship: "Stage avril → juillet",
        noteInternship: "stage d'avril à juillet — dispo !",
        noteJob: "alternance chez Emotors · Stellantis",
        statement1: "Je transforme des données brutes en outils qui",
        statement2: "créent de la valeur concrète.",
        ctaProjects: "Voir les projets",
        ctaCV: "Télécharger le CV"
      },
      about: {
        label: "à propos de moi !",
        banner: "À propos",
        statement: "Ingénieur Big Data & IA à l'ECE Paris, en alternance Data Scientist chez Stellantis. J'aime automatiser, industrialiser et livrer de bout en bout — de l'extraction de données jusqu'au déploiement.",
        lookingForTitle: "Ce que je recherche",
        lookingFor1: "Un stage de 3 mois, d'avril à juillet, en Data / IA / Data Engineering",
        lookingFor2: "Des missions concrètes : pipelines, applications data, automatisation, ML",
        lookingFor3: "Une équipe avec de vrais enjeux produit et business",
        bringTitle: "Ce que j'apporte",
        bring1: "Un mindset d'exécution et une ownership de bout en bout",
        bring2: "Un travail data rigoureux : structuration, ETL, qualité, reproductibilité",
        bring3: "De l'IA appliquée : prototypage, évaluation, itération",
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
        reclaim: {
          role: "Fondateur",
          meta: "Business Process Automation · Paris · 2026 → présent",
          p1: { title: "Pipelines d'automatisation métier", text: "Je conçois des solutions d'automatisation sur mesure, adaptées aux besoins exacts de chaque client, pour éliminer les tâches répétitives et fluidifier leurs processus." },
          p2: { title: "Impact", text: "Solutions livrées de bout en bout, de l'extraction jusqu'au déploiement : moins de traitement manuel côté clients et des données fiabilisées par l'étape de validation.", statValue: "Bout en bout", statLabel: "extraction → déploiement" },
          more: "Voir Reclaim"
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
        note: "Quatre projets qui résument ma palette : data engineering, plateforme industrielle, machine learning et computer vision.",
        viewProject: "Voir le projet",
        viewAll: "Tous les projets en détail",
        p1: { tab: "Projet 01", date: "2026 — en cours", desc: "Rendre aux PME le temps perdu en saisie manuelle : extraction de données depuis des PDF, validation avant injection, intégration CRM et workflows événementiels.", tag2: "Extraction de documents" },
        p2: { tab: "Projet 02", date: "Emotors · Stellantis", desc: "La plateforme qui automatise les études de durabilité : profils de mission, calculs de fatigue et KPIs ingénierie. Cycle d'analyse ramené d'un mois à une semaine." },
        p3: { tab: "Projet 03", date: "Emotors · Stellantis", title: "Predictive Quality", desc: "Des modèles qui anticipent les dérives qualité PPM à partir des données de production et de durabilité, au lieu de les constater après coup.", tag2: "Modélisation" },
        p4: { tab: "Projet 04", date: "Projet personnel", title: "Pneumonia CNN", desc: "Un réseau de neurones convolutif qui distingue automatiquement les radiographies pulmonaires saines des cas de pneumonie.", tag3: "Computer Vision" }
      },
      education: {
        label: "mes études !",
        banner: "Formation",
        ece: { title: "Diplôme d'ingénieur Big Data & Intelligence Artificielle", item1: "Data Science & Intelligence Artificielle", item2: "Mathématiques appliquées", item3: "Sécurité des données & gestion de projet" },
        iaschool: { title: "Bachelor Intelligence Artificielle & Business", item2: "Mathématiques appliquées", item3: "Marketing" }
      },
      contact: {
        cardNote: "Ouvert aux stages data / IA d'avril à juillet, et à toute conversation sur un problème de données intéressant.",
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
          description: "Détail des projets de Nikola Vucic : Reclaim, DURA, Predictive Quality (PPM) et détection de pneumonie par CNN."
        },
        label: "ce que j'ai construit !",
        banner: "Projets",
        note: "Quatre projets détaillés — contexte, problème, ce que j'ai construit, stack et impacts chiffrés — puis les autres dépôts de mon GitHub.",
        viewRepo: "Voir le repo",
        internalNote: "Projet interne Stellantis — code non public",
        labels: { context: "Contexte", problem: "Problème", built: "Ce que j'ai construit", stack: "Stack technique" },
        reclaim: {
          eyebrow: "Automatisation de processus métier · TypeScript",
          context: "Beaucoup de PME et d'indépendants perdent un temps considérable sur des tâches manuelles à faible valeur : ressaisir des données depuis des PDF, relancer des clients, synchroniser des informations entre outils. J'ai fondé Reclaim pour automatiser ces processus métier de bout en bout.",
          problem: "Les données arrivent sous des formats non structurés (PDF, documents scannés, e-mails), doivent être extraites, vérifiées, puis injectées dans un CRM ou un système de reporting. Fait à la main, c'est lent, source d'erreurs et non traçable.",
          built: "Des pipelines d'automatisation qui couvrent toute la chaîne : extraction des données depuis PDF/documents, couche de validation pour garantir la fiabilité avant injection, intégration et automatisation CRM, et des workflows événementiels (relances automatiques, synchronisation de données, reporting programmé). L'ensemble est pensé pour se déployer et tourner sans intervention.",
          extractTag: "Extraction de documents",
          crmTag: "Intégrations API / CRM",
          eventTag: "Architecture événementielle",
          stat1Value: "Bout en bout", stat1Label: "de l'extraction jusqu'au déploiement",
          stat2Value: "Temps manuel réduit", stat2Label: "sur les traitements récurrents côté clients",
          stat3Value: "Données fiabilisées", stat3Label: "par la couche de validation avant injection"
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
          why: "4ᵉ projet sélectionné sur mon GitHub : parmi mes dépôts personnels, celui-ci montre le mieux une expertise deep learning / computer vision complète — du prétraitement d'images à l'évaluation du modèle — dans un domaine différent de l'automobile, ce qui complète le panorama data eng (Reclaim) + industrie (DURA, PPM) par un projet ML appliqué.",
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
        description: "Portfolio of Nikola Vucic, Data Scientist / Data Engineer apprentice at Emotors (Stellantis), looking for an internship from April to July."
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
        pillInternship: "Internship April → July",
        noteInternship: "internship from April to July — available!",
        noteJob: "apprentice at Emotors · Stellantis",
        statement1: "I turn raw data into tools that",
        statement2: "create real, measurable value.",
        ctaProjects: "See my projects",
        ctaCV: "Download CV"
      },
      about: {
        label: "about me!",
        banner: "About",
        statement: "Big Data & AI engineering student at ECE Paris, working as a Data Scientist apprentice at Stellantis. I like automating, industrializing and shipping end to end — from data extraction all the way to deployment.",
        lookingForTitle: "What I'm looking for",
        lookingFor1: "A 3-month internship, April to July, in Data / AI / Data Engineering",
        lookingFor2: "Hands-on missions: pipelines, data applications, automation, ML",
        lookingFor3: "A team with real product and business stakes",
        bringTitle: "What I bring",
        bring1: "A strong execution mindset and end-to-end ownership",
        bring2: "Rigorous data work: structuring, ETL, quality, reproducibility",
        bring3: "Applied AI: prototyping, evaluation, iteration",
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
        reclaim: {
          role: "Founder",
          meta: "Business Process Automation · Paris · 2026 → present",
          p1: { title: "Business automation pipelines", text: "I build tailored automation solutions, adapted to each client's exact needs, to eliminate repetitive tasks and streamline their processes." },
          p2: { title: "Impact", text: "Solutions delivered end to end, from extraction through to deployment: less manual processing on the client side and data made reliable by the validation step.", statValue: "End-to-end", statLabel: "extraction → deployment" },
          more: "See Reclaim"
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
        note: "Four projects that sum up my range: data engineering, industrial platform, machine learning and computer vision.",
        viewProject: "View project",
        viewAll: "All projects in detail",
        p1: { tab: "Project 01", date: "2026 — ongoing", desc: "Giving small businesses back the time lost to manual data entry: extraction from PDFs, validation before injection, CRM integration and event-driven workflows.", tag2: "Document extraction" },
        p2: { tab: "Project 02", date: "Emotors · Stellantis", desc: "The platform automating durability studies: mission profiles, fatigue calculations and engineering KPIs. Analysis cycle cut from a month to a week." },
        p3: { tab: "Project 03", date: "Emotors · Stellantis", title: "Predictive Quality", desc: "Models that anticipate PPM quality drifts from production and durability data, instead of noticing them after the fact.", tag2: "Modelling" },
        p4: { tab: "Project 04", date: "Personal project", title: "Pneumonia CNN", desc: "A convolutional neural network telling healthy chest X-rays apart from pneumonia cases automatically.", tag3: "Computer Vision" }
      },
      education: {
        label: "my studies!",
        banner: "Education",
        ece: { title: "Engineering Degree in Big Data & Artificial Intelligence", item1: "Data Science & Artificial Intelligence", item2: "Applied Mathematics", item3: "Data Security & Project Management" },
        iaschool: { title: "Bachelor in Artificial Intelligence & Business", item2: "Applied Mathematics", item3: "Marketing" }
      },
      contact: {
        cardNote: "Open to data / AI internships from April to July, and to any conversation about an interesting data problem.",
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
          description: "Detailed projects by Nikola Vucic: Reclaim, DURA, Predictive Quality (PPM) and pneumonia detection with a CNN."
        },
        label: "what I've built!",
        banner: "Projects",
        note: "Four projects in detail — context, problem, what I built, stack and measurable impact — followed by the rest of my GitHub repos.",
        viewRepo: "View repo",
        internalNote: "Internal Stellantis project — code not public",
        labels: { context: "Context", problem: "Problem", built: "What I built", stack: "Tech stack" },
        reclaim: {
          eyebrow: "Business process automation · TypeScript",
          context: "Small businesses and freelancers lose a considerable amount of time on low-value manual work: re-keying data from PDFs, chasing clients, syncing information between tools. I founded Reclaim to automate those business processes end to end.",
          problem: "The data arrives in unstructured formats (PDFs, scanned documents, emails), has to be extracted, checked, then pushed into a CRM or a reporting system. Done by hand, it is slow, error-prone and leaves no audit trail.",
          built: "Automation pipelines covering the whole chain: data extraction from PDFs and documents, a validation layer that guarantees reliability before anything is written, CRM integration and automation, and event-driven workflows (automatic reminders, data sync, scheduled reporting). The whole thing is designed to deploy and run without intervention.",
          extractTag: "Document extraction",
          crmTag: "API / CRM integrations",
          eventTag: "Event-driven architecture",
          stat1Value: "End-to-end", stat1Label: "from extraction through to deployment",
          stat2Value: "Manual time reduced", stat2Label: "on recurring client processing",
          stat3Value: "Data made reliable", stat3Label: "by the validation layer before injection"
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
          why: "4th project selected from my GitHub: among my personal repos, this one best shows a complete deep learning / computer vision skillset — from image preprocessing to model evaluation — in a domain outside automotive, rounding out the data eng (Reclaim) + industry (DURA, PPM) picture with an applied ML project.",
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
