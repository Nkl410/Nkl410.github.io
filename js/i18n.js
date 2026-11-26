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
    "fr": {
      "meta": {
        "title": "Nikola Vucic — Data Scientist / Data Engineer",
        "description": "Portfolio de Nikola Vucic, Data Scientist / Data Engineer (data engineering, machine learning, deep learning) en alternance chez Emotors (Stellantis) et fondateur de Zuri Solutions, à la recherche d'une alternance data pour l'année 2027-2028."
      },
      "nav": {
        "home": "Accueil",
        "about": "À propos",
        "skills": "Compétences",
        "experience": "Expériences",
        "projects": "Projets",
        "education": "Formation",
        "contact": "Contact"
      },
      "hero": {
        "intro": "je m'appelle",
        "photoAlt": "Photo de Nikola Vucic",
        "photoCaption": "Paris, 2026",
        "pillRole": "Data Enthusiast",
        "pillPlace": "Paris, France",
        "pillInternship": "Alternance 2027 → 2028",
        "noteInternship": "alternance data 2027-2028 — dispo !",
        "noteJob": "alternance chez Emotors · Stellantis",
        "statement1": "Je transforme des données brutes en outils qui",
        "statement2": "créent de la valeur concrète.",
        "ctaProjects": "Voir les projets",
        "ctaCV": "Télécharger le CV"
      },
      "about": {
        "label": "à propos de moi !",
        "banner": "À propos",
        "statement": "Data Scientist / Data Engineer et CTO de Zuri Solutions. Je conçois des plateformes data, des modèles de machine learning et de deep learning et des agents IA, puis je les mets en production.",
        "lookingForTitle": "Ce que je recherche",
        "lookingFor1": "Une alternance pour l'année 2027-2028 en Data Science / Data Engineering / IA",
        "lookingFor2": "Des missions concrètes : pipelines, applications data, automatisation, ML",
        "lookingFor3": "Une équipe avec de vrais enjeux produit et business",
        "bringTitle": "Ce que j'apporte",
        "bring1": "Un mindset d'exécution et une ownership de bout en bout",
        "bring2": "Un travail data rigoureux : structuration, ETL, qualité, reproductibilité",
        "bring3": "Du ML, du deep learning et des agents IA en production : modélisation, évaluation, déploiement",
        "chessTitle": "Échecs",
        "chessText": "Pratique régulière — pensée stratégique et anticipation.",
        "violinTitle": "Violon",
        "violinText": "10+ ans de pratique — discipline et sensibilité artistique."
      },
      "skills": {
        "label": "ma boîte à outils !",
        "banner": "Compétences",
        "cat1": "Langages",
        "cat2": "Data & ML",
        "cat3": "Big Data",
        "cat4": "Bases de données",
        "cat5": "APIs & Backend",
        "cat6": "DevOps",
        "cat7": "Front-end",
        "cat8": "Scraping & Automatisation",
        "cat9": "IA générative & LLM",
        "regression": "Régression",
        "reproEnv": "Environnements reproductibles",
        "pyScripts": "Scripts Python",
        "classif": "Classification",
        "timeseries": "Séries temporelles",
        "llmEval": "Évaluation LLM"
      },
      "experience": {
        "label": "mon parcours !",
        "banner": "Expériences",
        "emotors": {
          "role": "Data Scientist / Data Engineer",
          "meta": "Alternance · Paris · septembre 2025 → 2027",
          "moreDura": "Voir DURA",
          "morePpm": "Voir Predictive Quality",
          "p1": {
            "title": "Data Engineer",
            "roles": "Python · PostgreSQL · Flask · Parquet",
            "text": "Conception et développement de A à Z de la plateforme data de l'équipe durabilité.",
            "items": [
              "Pipelines d'ingestion de séries temporelles volumineuses (.mat, CSV → Parquet)",
              "Modélisation et administration d'une base PostgreSQL de 24 tables",
              "APIs REST Flask et interface web pour exploiter les analyses",
              "10+ modules de calcul réutilisables, traçabilité de la donnée brute jusqu'aux résultats"
            ],
            "statValue": "~10 Go/mois",
            "statLabel": "de données traitées"
          },
          "p2": {
            "title": "DevOps",
            "roles": "Azure · CI/CD · Docker · Databricks",
            "text": "Industrialisation et mise en production de la plateforme sur Azure.",
            "items": [
              "Pipelines CI/CD de build et de déploiement",
              "Conteneurisation Docker et environnements reproductibles, du dev à la prod",
              "Traitements distribués sur Databricks pour passer à l'échelle"
            ]
          },
          "p3": {
            "title": "Deep Learning Engineer",
            "roles": "CNN · Computer Vision",
            "text": "Modèle de deep learning qui détecte automatiquement les défaillances moteur.",
            "items": [
              "Construction et prétraitement du jeu de données",
              "Analyse et comparaison de plusieurs modèles testés",
              "Conception, entraînement et évaluation d'un réseau convolutif (CNN)"
            ],
            "statValue": "0,96",
            "statLabel": "de précision"
          },
          "p4": {
            "title": "ML Engineer",
            "roles": "Python · SciPy · Modèles prédictifs",
            "text": "Modèles qui anticipent les pièces défaillantes avant qu'elles n'apparaissent dans les indicateurs qualité.",
            "items": [
              "Analyse et comparaison de plusieurs modèles testés",
              "Modélisation statistique de la fiabilité (loi de Weibull) par mode de défaillance",
              "Projection des taux de défaillance sur les productions récentes",
              "Backtest systématique : 10/10 sur les principaux modes de défaillance"
            ],
            "statValue": "0,96",
            "statLabel": "de précision"
          },
          "p5": {
            "title": "Data Scientist",
            "roles": "Python · NumPy · Traitement d'image",
            "text": "Reconstitution et accélération des calculs d'analyse.",
            "items": [
              "Traitement d'image pixel par pixel sur les matrices de mesure",
              "Réécriture en Python des calculs d'ingénierie (comptage de cycles, lois d'endommagement)",
              "Optimisation des performances de calcul"
            ],
            "statValue": "1 mois → 1 semaine",
            "statLabel": "cycle d'analyse"
          }
        },
        "zuri": {
          "role": "CTO",
          "meta": "Data & IA sur mesure pour PME · Paris · 2026 → présent",
          "moreForge": "Voir la Forge",
          "moreFrog": "Voir Frog Hub",
          "moreSurfaces": "Voir l'extraction de surfaces",
          "p1": {
            "title": "CTO",
            "roles": "Architecture · Stack · Gestion de projet",
            "text": "Direction technique de Zuri et de ses projets clients, du cadrage à la mise en production.",
            "items": [
              "Architecture des solutions et choix des stacks",
              "Pilotage des projets : cahier des charges, jalons, validations client",
              "Choix des modèles IA et estimation de leur coût"
            ],
            "statValue": "4 validations",
            "statLabel": "client par projet, du brief à la prod"
          },
          "p2": {
            "title": "AI Engineer · Agents IA",
            "roles": "LLM · Multi-agents · Tool use",
            "text": "Conception de la Forge, notre plateforme où des agents IA produisent, testent et livrent du logiciel.",
            "items": [
              "Orchestrateur et 5 agents spécialisés : produit, design, build, vérification, revue",
              "Contrats exécutables : chaque tâche a une sortie mesurable et un test verrouillé avant le code",
              "Garde-fous : hooks, budget de tentatives, escalade vers un humain",
              "Agents IA chez nos clients, branchés sur leurs outils"
            ],
            "statValue": "5 agents · 8 phases",
            "statLabel": "plateforme la Forge"
          },
          "p3": {
            "title": "Data Engineer",
            "roles": "Python · Node.js · API & webhooks",
            "text": "Hubs de données qui centralisent les outils de nos clients.",
            "items": [
              "Connecteurs API et webhooks vers 10+ outils SaaS",
              "Schéma interne unique, que la donnée arrive par API ou par export",
              "Ingestion fiable : idempotence, files d'attente, gestion des limites d'API",
              "KPI et automatisations pilotés par la donnée"
            ],
            "statValue": "10+ sources",
            "statLabel": "unifiées"
          },
          "p4": {
            "title": "ML / LLM Engineer",
            "roles": "LLM · RAG · Évaluation de modèles",
            "text": "Copilotes IA et évaluation continue des modèles.",
            "items": [
              "Copilote LLM avec tool use, branché sur les données en direct",
              "RAG sur la documentation interne, réponses sourcées",
              "Jeux d'évaluation versionnés : exactitude, hallucination, latence p95, coût",
              "Tests de non-régression : une baisse de score bloque la livraison"
            ],
            "statValue": "4 métriques",
            "statLabel": "suivies à chaque build"
          },
          "p5": {
            "title": "Data Scientist",
            "roles": "Python · PyMuPDF · pandas",
            "text": "Extraction et fiabilisation de données à partir de documents.",
            "items": [
              "Parsing de PDF à grande échelle",
              "Score de confiance et détection des valeurs aberrantes",
              "Normalisation et classification automatique sur une matrice de règles",
              "Exports Excel prêts à l'emploi"
            ],
            "statValue": "Score 0–100",
            "statLabel": "de confiance par ligne"
          },
          "p6": {
            "title": "DevOps",
            "roles": "Linux · Docker · systemd · Caddy",
            "text": "Infrastructure et déploiement de nos plateformes.",
            "items": [
              "VM Linux, services systemd, réseau privé Tailscale",
              "Applications conteneurisées : Docker Compose, PostgreSQL, Redis, Caddy en HTTPS",
              "Déploiements versionnés avec retour arrière",
              "Coffre à secrets et proxy d'API en lecture seule"
            ],
            "statValue": "1 commande",
            "statLabel": "pour déployer ou revenir en arrière"
          }
        },
        "circularplace": {
          "role": "Assistant Product Manager",
          "meta": "Alternance · Paris · août 2024 → août 2025",
          "p1": {
            "title": "Data Engineer",
            "roles": "Python · Automatisation · QA",
            "text": "Automatisation des flux de données et de la qualité.",
            "items": [
              "5+ solutions d'automatisation de la gestion des données",
              "Workflows QA automatisés"
            ]
          },
          "p2": {
            "title": "ML / DL Engineer",
            "roles": "CNN · Régression",
            "text": "Modèles IA intégrés au produit.",
            "items": [
              "CNN de classification d'images produit",
              "Modèle de régression pour la prédiction de prix",
              "Base et calculateur d'impact CO₂"
            ],
            "statValue": "±5 %",
            "statLabel": "d'erreur sur la prédiction de prix"
          },
          "p3": {
            "title": "Data Scientist",
            "roles": "Python · APIs · Scraping",
            "text": "Collecte et analyse de données pour l'évaluation d'actifs.",
            "items": [
              "Extraction via Python, APIs et BeautifulSoup",
              "Nettoyage et analyse des données collectées"
            ],
            "statValue": "2 000+",
            "statLabel": "points de données"
          },
          "p4": {
            "title": "Chef de projet",
            "roles": "Agile · Product",
            "text": "Lancement d'une plateforme B2B.",
            "items": [
              "Méthode Agile, 10+ fonctionnalités livrées",
              "Coordination entre équipes produit, tech et opérations"
            ],
            "statValue": "3+ équipes",
            "statLabel": "coordonnées"
          }
        }
      },
      "projects": {
        "label": "mes projets !",
        "banner": "Projets",
        "note": "Six projets : data engineering, machine learning, deep learning, extraction de données et IA générative.",
        "viewProject": "Voir le projet",
        "viewAll": "Tous les projets en détail",
        "forge": {
          "tab": "Projet 06",
          "date": "Zuri Solutions · 2026",
          "title": "La Forge",
          "desc": "Notre plateforme de production : 5 agents IA, 8 phases, des contrats vérifiés automatiquement et l'évaluation des modèles à chaque build. Aucun merge tant qu'un test est rouge.",
          "tag2": "Évaluation de modèles",
          "tag3": "Non-régression"
        },
        "froghub": {
          "tab": "Projet 04",
          "date": "Zuri Solutions · Frog Pubs",
          "title": "Frog Hub",
          "desc": "Hub de données d'un groupe de 8 pubs : 10+ sources unifiées, KPI par rôle et copilote IA.",
          "tag2": "Intégration de données"
        },
        "surfaces": {
          "tab": "Projet 05",
          "date": "Zuri Solutions · Confier & Associés",
          "title": "Plans → Surfaces",
          "desc": "Surfaces extraites de centaines de plans PDF, fiabilisées par un score de confiance et classées selon une matrice métier.",
          "tag3": "Qualité de données"
        },
        "dura": {
          "tab": "Projet 01",
          "date": "Emotors · Stellantis",
          "desc": "La plateforme qui automatise les études de durabilité : profils de mission, calculs de fatigue et KPIs ingénierie. Cycle d'analyse ramené d'un mois à une semaine."
        },
        "ppm": {
          "tab": "Projet 02",
          "date": "Emotors · Stellantis",
          "title": "Predictive Quality",
          "desc": "Des modèles qui anticipent les dérives qualité PPM à partir des données de production et de durabilité, au lieu de les constater après coup.",
          "tag2": "Modélisation"
        },
        "pneumonia": {
          "tab": "Projet 03",
          "date": "Projet personnel",
          "title": "Pneumonia CNN",
          "desc": "Un réseau de neurones convolutif qui distingue automatiquement les radiographies pulmonaires saines des cas de pneumonie.",
          "tag3": "Computer Vision"
        }
      },
      "education": {
        "label": "mes études !",
        "banner": "Formation",
        "ece": {
          "title": "Diplôme d'ingénieur Big Data & Intelligence Artificielle",
          "item1": "Data Science & Intelligence Artificielle",
          "item2": "Mathématiques appliquées",
          "item3": "Sécurité des données & gestion de projet"
        },
        "iaschool": {
          "title": "Bachelor Intelligence Artificielle & Business",
          "item2": "Mathématiques appliquées",
          "item3": "Marketing"
        }
      },
      "contact": {
        "cardNote": "Ouvert aux alternances data / IA pour 2027-2028, et à toute conversation sur un problème de données intéressant.",
        "tagline": "construisons quelque chose ensemble",
        "word": "Contact",
        "cta": "M'écrire"
      },
      "footer": {
        "role": "Data Scientist / Data Engineer"
      },
      "projectsPage": {
        "meta": {
          "title": "Projets — Nikola Vucic",
          "description": "Projets de Nikola Vucic : DURA, Predictive Quality (PPM), détection de pneumonie par CNN, Frog Hub, extraction de surfaces depuis des plans PDF et la Forge."
        },
        "label": "ce que j'ai construit !",
        "banner": "Projets",
        "note": "Six projets détaillés — contexte, problème, ce que j'ai construit, stack et résultats — puis mes autres dépôts GitHub.",
        "viewRepo": "Voir le repo",
        "internalNote": "Projet interne Stellantis — code non public",
        "labels": {
          "context": "Contexte",
          "problem": "Problème",
          "built": "Ce que j'ai construit",
          "stack": "Stack technique"
        },
        "forge": {
          "eyebrow": "Plateforme interne · Zuri Solutions · Python · LLM",
          "title": "La Forge",
          "note": "Outil interne Zuri — code non public",
          "context": "L'outil interne avec lequel Zuri livre ses projets clients, dont Frog Hub et Plans → Surfaces : il pilote chaque projet du cadrage à la mise en production.",
          "problem": "Un agent IA qui code seul déclare « fini » trop vite et casse ce qui marchait déjà. Et la sortie d'un modèle n'est pas déterministe : sans mesure, on ne voit pas qu'elle se dégrade d'une version du prompt ou du modèle à l'autre.",
          "built": "Un orchestrateur et 5 agents IA spécialisés (produit, design, build, vérification, revue) qui avancent en 8 phases. Chaque tâche est un contrat YAML : entrées, sortie attendue mesurable, commande de vérification. Un vérificateur indépendant rejoue tous les contrats à chaque passage et détecte les régressions ; les tests sont écrits et verrouillés avant le code. Pour l'IA, chaque contrat embarque un jeu d'évaluation versionné et des seuils (exactitude, hallucination, latence p95, coût par requête). Côté ops : hooks qui bloquent merge et push tant qu'un contrat est rouge, coffre à secrets, proxy d'API en lecture seule, tableau de bord temps réel, VM Linux (systemd, Tailscale) avec retour arrière.",
          "tagEval": "Évaluation de modèles",
          "tagReg": "Tests de non-régression",
          "stat1Value": "5 agents · 8 phases",
          "stat1Label": "orchestrés, avec 4 validations humaines",
          "stat2Value": "4 métriques IA",
          "stat2Label": "exactitude, hallucination, latence p95, coût",
          "stat3Value": "0 merge",
          "stat3Label": "tant qu'un contrat est rouge",
          "stat4Value": "5 tentatives",
          "stat4Label": "puis escalade vers un humain"
        },
        "froghub": {
          "eyebrow": "Data engineering · Zuri Solutions · Node.js",
          "title": "Frog Hub",
          "note": "Projet client — code non public",
          "context": "Frog Pubs exploite 8 pubs à Paris, Bordeaux et Toulouse. Après un audit de leurs processus, Zuri construit leur hub de données.",
          "problem": "Plus de dix outils (caisse, plannings, achats, réservations, compta) qui ne se parlent pas : ressaisies, rapprochements manuels, chiffres différents d'un outil à l'autre.",
          "built": "Un hub qui unifie chaque source par un adaptateur (API ou export, même schéma interne), calcule les KPI de chaque rôle et renvoie les données vers les outils métier. Ingestion fiable : idempotence, files d'attente, backoff sur les limites d'API, aucune donnée personnelle dans les logs. Un copilote IA répond avec les chiffres du hub (RAG).",
          "tagIntegration": "Intégration de données",
          "tagApi": "API & webhooks",
          "stat1Value": "10+ sources",
          "stat1Label": "unifiées dans un même schéma",
          "stat2Value": "8 pubs",
          "stat2Label": "KPI par rôle et par établissement",
          "stat3Value": "20 automatisations",
          "stat3Label": "données renvoyées vers les outils métier"
        },
        "surfaces": {
          "eyebrow": "Extraction & qualité de données · Zuri Solutions · Python",
          "title": "Plans → Surfaces",
          "note": "Projet client — code non public",
          "context": "Pour Confier & Associés, cabinet de conseil en taxe foncière : les surfaces de centaines de plans PDF étaient recopiées à la main.",
          "problem": "Le volume rend la ressaisie intenable, et le classement d'une pièce dépend du type d'activité du bien : des sanitaires ne comptent pas pareil dans un atelier et dans un hôtel.",
          "built": "Extraction des couples pièce / surface avec PyMuPDF, score de confiance 0–100 par ligne (valeurs aberrantes, libellés douteux), normalisation vers 74 dénominations et classification par une matrice 74 × 16 types d'activité. Validation dans une interface React, export Excel au format client, tout en local.",
          "tagExcel": "Export Excel",
          "stat1Value": "74 × 16",
          "stat1Label": "matrice dénominations × types d'activité",
          "stat2Value": "Score 0–100",
          "stat2Label": "de confiance par ligne",
          "stat3Value": "100 % local",
          "stat3Label": "aucun plan ne quitte le poste"
        },
        "dura": {
          "eyebrow": "Data Platform · Emotors (Stellantis)",
          "context": "Chez Emotors (Stellantis), les équipes durabilité valident la tenue mécanique des composants moteur. Chaque validation part de profils de mission — des relevés de conditions réelles d'usage — qu'il faut traiter pour calculer la fatigue des pièces et en tirer des KPIs d'ingénierie.",
          "problem": "Ce traitement était entièrement manuel et refait équipe par équipe : récupération des fichiers bruts, calculs sur scripts locaux, mise en forme des résultats. Un cycle d'analyse complet prenait environ un mois, les méthodes divergeaient d'une équipe à l'autre, et rien ne permettait de remonter d'un résultat jusqu'au signal brut qui l'avait produit.",
          "built": "DURA, une plateforme qui industrialise toute la chaîne : ingestion automatisée des séries temporelles, traitement des profils de mission, calculs de fatigue et production des KPIs. J'ai conçu les pipelines et les schémas PostgreSQL (24 tables) qui structurent ~10 Go de données par mois, ainsi que 10+ modules de calcul réutilisables qui garantissent que chaque équipe applique la même méthode. Le tout est exposé via des APIs REST, conteneurisé avec Docker et passe à l'échelle sur Databricks, avec une traçabilité complète du signal brut jusqu'aux sorties.",
          "restTag": "APIs REST",
          "stat1Label": "cycle d'analyse, résultats standardisés entre équipes",
          "stat2Label": "schémas PostgreSQL",
          "stat3Label": "de séries temporelles traitées",
          "stat4Value": "100 % automatisée",
          "stat4Label": "ingestion, signal brut → sorties"
        },
        "ppm": {
          "eyebrow": "Machine Learning · Emotors (Stellantis)",
          "title": "Predictive Quality (PPM)",
          "context": "Toujours chez Emotors, en prolongement de DURA : les équipes qualité pilotent la fiabilité produit avec l'indicateur PPM — le nombre de pièces défectueuses par million — calculé à partir des données de production et des retours terrain.",
          "problem": "Cet indicateur est par nature rétrospectif : une dérive qualité n'apparaissait qu'une fois les PPM dégradés, donc une fois les pièces déjà produites. Aucun signal d'alerte en amont, et donc aucune marge pour corriger avant que le défaut ne se propage sur la série.",
          "built": "Des modèles prédictifs qui estiment les KPIs PPM à partir des variables de production et de durabilité, en réutilisant les pipelines et les modules de calcul de DURA comme socle de données. Les modèles tournent sur les données courantes et signalent les dérives probables avant qu'elles ne se matérialisent dans les indicateurs, ce qui transforme le suivi qualité d'un constat en une alerte.",
          "stat1Value": "Détection précoce",
          "stat1Label": "des dérives qualité PPM",
          "stat2Value": "Décisions data-driven",
          "stat2Label": "pour les équipes fiabilité",
          "stat3Label": "de calcul réutilisés depuis DURA"
        },
        "pneumonia": {
          "eyebrow": "Deep Learning · Imagerie médicale",
          "title": "Détection de pneumonie par CNN",
          "why": "Projet personnel choisi pour montrer une chaîne deep learning complète, du prétraitement d'images à l'évaluation du modèle.",
          "context": "Projet personnel d'exploration du deep learning appliqué à l'imagerie médicale, à partir d'un jeu public de radiographies thoraciques étiquetées sain / pneumonie.",
          "problem": "Le diagnostic de pneumonie sur radiographie demande une lecture experte. L'enjeu technique était double : vérifier qu'un réseau convolutif peut apprendre les motifs pathologiques à partir d'images brutes, et surtout limiter les faux négatifs — un cas positif manqué coûte bien plus cher qu'une fausse alerte.",
          "built": "Un CNN entraîné sur des images 150x150 RGB, avec quatre blocs convolution + pooling pour l'extraction de features, puis une couche dense (256 unités), du dropout (0.5) et une sortie sigmoïde pour la classification binaire. L'entraînement utilise l'optimiseur Adam, l'early stopping et la réduction du taux d'apprentissage sur plateau pour stabiliser la convergence. Le modèle est évalué via matrice de confusion et courbes accuracy/loss.",
          "stat1Label": "+ pooling pour l'extraction de features",
          "stat2Value": "Early stopping",
          "stat2Label": "+ réduction du LR sur plateau",
          "stat3Value": "Classification binaire",
          "stat3Label": "seuil de décision à 0.5"
        },
        "more": {
          "label": "et aussi !",
          "banner": "Autres projets",
          "desc": "D'autres dépôts sur mon GitHub, en data engineering, machine learning, visualisation et développement web.",
          "card1": {
            "desc": "Convertit des fichiers MATLAB / texte / CSV en Parquet pour l'ingestion de séries temporelles à grande échelle."
          },
          "card2": {
            "desc": "Récupère automatiquement des images depuis un fichier Excel, les sauvegarde sur Drive et génère une URL pour chacune.",
            "tag": "Automatisation"
          },
          "card3": {
            "title": "Classification de papillons par CNN",
            "desc": "Classification automatique d'espèces de papillons par réseau de neurones convolutif."
          },
          "card4": {
            "desc": "Réseau de neurones pour la reconnaissance de chiffres MNIST codé à la main, sans framework de deep learning.",
            "tag": "Réseau de neurones"
          },
          "card5": {
            "desc": "Analyse des données d'un championnat esport pour identifier les meilleurs joueurs et les tendances de la compétition.",
            "tag": "Data Visualisation"
          },
          "card6": {
            "desc": "Webapp de circuit court agricole, pour mettre en relation producteurs et consommateurs."
          }
        }
      }
    },
    "en": {
      "meta": {
        "title": "Nikola Vucic — Data Scientist / Data Engineer",
        "description": "Portfolio of Nikola Vucic, Data Scientist / Data Engineer (data engineering, machine learning, deep learning), apprentice at Emotors (Stellantis) and founder of Zuri Solutions, looking for a data apprenticeship for the 2027-2028 academic year."
      },
      "nav": {
        "home": "Home",
        "about": "About",
        "skills": "Skills",
        "experience": "Experience",
        "projects": "Projects",
        "education": "Education",
        "contact": "Contact"
      },
      "hero": {
        "intro": "my name is",
        "photoAlt": "Photo of Nikola Vucic",
        "photoCaption": "Paris, 2026",
        "pillRole": "Data Enthusiast",
        "pillPlace": "Paris, France",
        "pillInternship": "Apprenticeship 2027 → 2028",
        "noteInternship": "data apprenticeship 2027-2028 — available!",
        "noteJob": "apprentice at Emotors · Stellantis",
        "statement1": "I turn raw data into tools that",
        "statement2": "create real, measurable value.",
        "ctaProjects": "See my projects",
        "ctaCV": "Download CV"
      },
      "about": {
        "label": "about me!",
        "banner": "About",
        "statement": "Data Scientist / Data Engineer and CTO of Zuri Solutions. I design data platforms, machine learning and deep learning models and AI agents, then put them into production.",
        "lookingForTitle": "What I'm looking for",
        "lookingFor1": "An apprenticeship for the 2027-2028 year in Data Science / Data Engineering / AI",
        "lookingFor2": "Hands-on missions: pipelines, data applications, automation, ML",
        "lookingFor3": "A team with real product and business stakes",
        "bringTitle": "What I bring",
        "bring1": "A strong execution mindset and end-to-end ownership",
        "bring2": "Rigorous data work: structuring, ETL, quality, reproducibility",
        "bring3": "ML, deep learning and AI agents in production: modelling, evaluation, deployment",
        "chessTitle": "Chess",
        "chessText": "Regular practice — strategic thinking and anticipation.",
        "violinTitle": "Violin",
        "violinText": "10+ years of practice — discipline and artistic sensitivity."
      },
      "skills": {
        "label": "my toolbox!",
        "banner": "Skills",
        "cat1": "Languages",
        "cat2": "Data & ML",
        "cat3": "Big Data",
        "cat4": "Databases",
        "cat5": "APIs & Backend",
        "cat6": "DevOps",
        "cat7": "Front-end",
        "cat8": "Scraping & Automation",
        "cat9": "Generative AI & LLMs",
        "regression": "Regression",
        "reproEnv": "Reproducible environments",
        "pyScripts": "Python scripts",
        "classif": "Classification",
        "timeseries": "Time series",
        "llmEval": "LLM evaluation"
      },
      "experience": {
        "label": "my journey!",
        "banner": "Experience",
        "emotors": {
          "role": "Data Scientist / Data Engineer",
          "meta": "Apprenticeship · Paris · September 2025 → 2027",
          "moreDura": "See DURA",
          "morePpm": "See Predictive Quality",
          "p1": {
            "title": "Data Engineer",
            "roles": "Python · PostgreSQL · Flask · Parquet",
            "text": "Designed and built the durability team's data platform from scratch.",
            "items": [
              "Ingestion pipelines for large time-series files (.mat, CSV → Parquet)",
              "Design and administration of a 24-table PostgreSQL database",
              "Flask REST APIs and a web interface to work with the analyses",
              "10+ reusable computation modules, traceability from raw data to results"
            ],
            "statValue": "~10 GB/month",
            "statLabel": "of data processed"
          },
          "p2": {
            "title": "DevOps",
            "roles": "Azure · CI/CD · Docker · Databricks",
            "text": "Industrialised the platform and put it into production on Azure.",
            "items": [
              "CI/CD build and deployment pipelines",
              "Docker containers and reproducible environments, from dev to prod",
              "Distributed processing on Databricks to scale"
            ]
          },
          "p3": {
            "title": "Deep Learning Engineer",
            "roles": "CNN · Computer Vision",
            "text": "Deep learning model that automatically detects engine failures.",
            "items": [
              "Dataset construction and preprocessing",
              "Analysis and comparison of several tested models",
              "Design, training and evaluation of a convolutional neural network (CNN)"
            ],
            "statValue": "0.96",
            "statLabel": "precision"
          },
          "p4": {
            "title": "ML Engineer",
            "roles": "Python · SciPy · Predictive models",
            "text": "Models that anticipate defective parts before they show up in quality indicators.",
            "items": [
              "Analysis and comparison of several tested models",
              "Statistical reliability modelling (Weibull) per failure mode",
              "Failure-rate projection on recent production",
              "Systematic backtesting: 10/10 on the main failure modes"
            ],
            "statValue": "0.96",
            "statLabel": "precision"
          },
          "p5": {
            "title": "Data Scientist",
            "roles": "Python · NumPy · Image processing",
            "text": "Re-built and sped up the analysis calculations.",
            "items": [
              "Pixel-level image processing on measurement matrices",
              "Engineering calculations rewritten in Python (cycle counting, damage laws)",
              "Computation performance optimisation"
            ],
            "statValue": "1 month → 1 week",
            "statLabel": "analysis cycle"
          }
        },
        "zuri": {
          "role": "CTO",
          "meta": "Custom data & AI for SMBs · Paris · 2026 → present",
          "moreForge": "See the Forge",
          "moreFrog": "See Frog Hub",
          "moreSurfaces": "See floor-area extraction",
          "p1": {
            "title": "CTO",
            "roles": "Architecture · Stack · Project management",
            "text": "Technical lead for Zuri and its client projects, from scoping to production.",
            "items": [
              "Solution architecture and stack choices",
              "Project management: specifications, milestones, client sign-offs",
              "AI model selection and cost estimation"
            ],
            "statValue": "4 sign-offs",
            "statLabel": "per project, from brief to production"
          },
          "p2": {
            "title": "AI Engineer · AI agents",
            "roles": "LLM · Multi-agent · Tool use",
            "text": "Designed the Forge, our platform where AI agents build, test and ship software.",
            "items": [
              "Orchestrator and 5 specialised agents: product, design, build, verification, review",
              "Executable contracts: every task has a measurable output and a test locked before the code",
              "Guard-rails: hooks, attempt budget, escalation to a human",
              "AI agents for our clients, plugged into their tools"
            ],
            "statValue": "5 agents · 8 phases",
            "statLabel": "the Forge platform"
          },
          "p3": {
            "title": "Data Engineer",
            "roles": "Python · Node.js · APIs & webhooks",
            "text": "Data hubs that centralise our clients' tools.",
            "items": [
              "API and webhook connectors to 10+ SaaS tools",
              "One internal schema, whether data arrives by API or by export",
              "Reliable ingestion: idempotency, queues, API rate-limit handling",
              "Data-driven KPIs and automations"
            ],
            "statValue": "10+ sources",
            "statLabel": "unified"
          },
          "p4": {
            "title": "ML / LLM Engineer",
            "roles": "LLM · RAG · Model evaluation",
            "text": "AI copilots and continuous model evaluation.",
            "items": [
              "LLM copilot with tool use, connected to live data",
              "RAG over internal documentation, sourced answers",
              "Versioned evaluation sets: accuracy, hallucination, p95 latency, cost",
              "Regression tests: a score drop blocks the release"
            ],
            "statValue": "4 metrics",
            "statLabel": "tracked on every build"
          },
          "p5": {
            "title": "Data Scientist",
            "roles": "Python · PyMuPDF · pandas",
            "text": "Data extraction and validation from documents.",
            "items": [
              "Large-scale PDF parsing",
              "Confidence scoring and outlier detection",
              "Normalisation and automatic classification on a rules matrix",
              "Ready-to-use Excel exports"
            ],
            "statValue": "0–100 score",
            "statLabel": "confidence per line"
          },
          "p6": {
            "title": "DevOps",
            "roles": "Linux · Docker · systemd · Caddy",
            "text": "Infrastructure and deployment of our platforms.",
            "items": [
              "Linux VM, systemd services, Tailscale private network",
              "Containerised apps: Docker Compose, PostgreSQL, Redis, Caddy over HTTPS",
              "Versioned deployments with rollback",
              "Secrets vault and read-only API proxy"
            ],
            "statValue": "1 command",
            "statLabel": "to deploy or roll back"
          }
        },
        "circularplace": {
          "role": "Assistant Product Manager",
          "meta": "Apprenticeship · Paris · August 2024 → August 2025",
          "p1": {
            "title": "Data Engineer",
            "roles": "Python · Automation · QA",
            "text": "Automated data and quality workflows.",
            "items": [
              "5+ data management automation solutions",
              "Automated QA workflows"
            ]
          },
          "p2": {
            "title": "ML / DL Engineer",
            "roles": "CNN · Regression",
            "text": "AI models built into the product.",
            "items": [
              "CNN for product image classification",
              "Regression model for price prediction",
              "CO₂ impact database and calculator"
            ],
            "statValue": "±5%",
            "statLabel": "error on price prediction"
          },
          "p3": {
            "title": "Data Scientist",
            "roles": "Python · APIs · Scraping",
            "text": "Data collection and analysis for asset valuation.",
            "items": [
              "Extraction with Python, APIs and BeautifulSoup",
              "Cleaning and analysis of the collected data"
            ],
            "statValue": "2,000+",
            "statLabel": "data points"
          },
          "p4": {
            "title": "Project lead",
            "roles": "Agile · Product",
            "text": "Launched a B2B platform.",
            "items": [
              "Agile delivery, 10+ features shipped",
              "Coordination across product, tech and operations teams"
            ],
            "statValue": "3+ teams",
            "statLabel": "coordinated"
          }
        }
      },
      "projects": {
        "label": "my projects!",
        "banner": "Projects",
        "note": "Six projects: data engineering, machine learning, deep learning, data extraction and generative AI.",
        "viewProject": "View project",
        "viewAll": "All projects in detail",
        "forge": {
          "tab": "Project 06",
          "date": "Zuri Solutions · 2026",
          "title": "The Forge",
          "desc": "Our delivery platform: 5 AI agents, 8 phases, automatically checked contracts and model evaluation on every build. Nothing merges while a test is red.",
          "tag2": "Model evaluation",
          "tag3": "Non-regression"
        },
        "froghub": {
          "tab": "Project 04",
          "date": "Zuri Solutions · Frog Pubs",
          "title": "Frog Hub",
          "desc": "Data hub for a group of 8 pubs: 10+ sources unified, KPIs per role and an AI copilot.",
          "tag2": "Data integration"
        },
        "surfaces": {
          "tab": "Project 05",
          "date": "Zuri Solutions · Confier & Associés",
          "title": "Plans → Floor areas",
          "desc": "Floor areas extracted from hundreds of PDF plans, checked with a confidence score and classified with a business matrix.",
          "tag3": "Data quality"
        },
        "dura": {
          "tab": "Project 01",
          "date": "Emotors · Stellantis",
          "desc": "The platform automating durability studies: mission profiles, fatigue calculations and engineering KPIs. Analysis cycle cut from a month to a week."
        },
        "ppm": {
          "tab": "Project 02",
          "date": "Emotors · Stellantis",
          "title": "Predictive Quality",
          "desc": "Models that anticipate PPM quality drifts from production and durability data, instead of noticing them after the fact.",
          "tag2": "Modelling"
        },
        "pneumonia": {
          "tab": "Project 03",
          "date": "Personal project",
          "title": "Pneumonia CNN",
          "desc": "A convolutional neural network telling healthy chest X-rays apart from pneumonia cases automatically.",
          "tag3": "Computer Vision"
        }
      },
      "education": {
        "label": "my studies!",
        "banner": "Education",
        "ece": {
          "title": "Engineering Degree in Big Data & Artificial Intelligence",
          "item1": "Data Science & Artificial Intelligence",
          "item2": "Applied Mathematics",
          "item3": "Data Security & Project Management"
        },
        "iaschool": {
          "title": "Bachelor in Artificial Intelligence & Business",
          "item2": "Applied Mathematics",
          "item3": "Marketing"
        }
      },
      "contact": {
        "cardNote": "Open to data / AI apprenticeships for 2027-2028, and to any conversation about an interesting data problem.",
        "tagline": "let's build something together",
        "word": "Contact",
        "cta": "Email me"
      },
      "footer": {
        "role": "Data Scientist / Data Engineer"
      },
      "projectsPage": {
        "meta": {
          "title": "Projects — Nikola Vucic",
          "description": "Projects by Nikola Vucic: DURA, Predictive Quality (PPM), pneumonia detection with a CNN, Frog Hub, floor-area extraction from PDF plans and the Forge."
        },
        "label": "what I've built!",
        "banner": "Projects",
        "note": "Six projects in detail — context, problem, what I built, stack and results — then my other GitHub repos.",
        "viewRepo": "View repo",
        "internalNote": "Internal Stellantis project — code not public",
        "labels": {
          "context": "Context",
          "problem": "Problem",
          "built": "What I built",
          "stack": "Tech stack"
        },
        "forge": {
          "eyebrow": "Internal platform · Zuri Solutions · Python · LLM",
          "title": "The Forge",
          "note": "Internal Zuri tool — code not public",
          "context": "The internal tool Zuri uses to deliver its client projects, including Frog Hub and Plans → Floor areas: it runs each project from scoping to production.",
          "problem": "An AI agent coding on its own declares \"done\" too early and breaks what already worked. And a model's output is not deterministic: without measurement, you can't see it degrade from one prompt or model version to the next.",
          "built": "An orchestrator and 5 specialised AI agents (product, design, build, verification, review) moving through 8 phases. Every task is a YAML contract: inputs, a measurable expected output, a verification command. An independent verifier replays every contract on each pass and detects regressions; tests are written and locked before the code. For AI, each contract carries a versioned evaluation set and thresholds (accuracy, hallucination, p95 latency, cost per request). Ops side: hooks that block merge and push while a contract is red, a secrets vault, a read-only API proxy, a live dashboard, a Linux VM (systemd, Tailscale) with rollback.",
          "tagEval": "Model evaluation",
          "tagReg": "Regression testing",
          "stat1Value": "5 agents · 8 phases",
          "stat1Label": "orchestrated, with 4 human sign-offs",
          "stat2Value": "4 AI metrics",
          "stat2Label": "accuracy, hallucination, p95 latency, cost",
          "stat3Value": "0 merges",
          "stat3Label": "while a contract is red",
          "stat4Value": "5 attempts",
          "stat4Label": "then escalation to a human"
        },
        "froghub": {
          "eyebrow": "Data engineering · Zuri Solutions · Node.js",
          "title": "Frog Hub",
          "note": "Client project — code not public",
          "context": "Frog Pubs runs 8 pubs in Paris, Bordeaux and Toulouse. After auditing their processes, Zuri is building their data hub.",
          "problem": "More than ten tools (tills, rotas, purchasing, bookings, accounting) that don't talk to each other: re-keying, manual reconciliations, different figures from one tool to the next.",
          "built": "A hub that brings each source in through an adapter (API or export, same internal schema), computes each role's KPIs and sends data back to the business tools. Reliable ingestion: idempotency, queues, backoff on API rate limits, no personal data in logs. An AI copilot answers with the hub's figures (RAG).",
          "tagIntegration": "Data integration",
          "tagApi": "APIs & webhooks",
          "stat1Value": "10+ sources",
          "stat1Label": "unified into one schema",
          "stat2Value": "8 pubs",
          "stat2Label": "KPIs per role and per site",
          "stat3Value": "20 automations",
          "stat3Label": "data sent back to business tools"
        },
        "surfaces": {
          "eyebrow": "Data extraction & quality · Zuri Solutions · Python",
          "title": "Plans → Floor areas",
          "note": "Client project — code not public",
          "context": "For Confier & Associés, a property-tax consulting firm: floor areas from hundreds of PDF plans were copied out by hand.",
          "problem": "The volume makes re-keying unworkable, and a room's class depends on the property's activity type: toilets don't count the same in a workshop and in a hotel.",
          "built": "Room / area pairs extracted with PyMuPDF, a 0–100 confidence score per line (outliers, doubtful labels), normalisation to 74 room types and classification through a 74 × 16 activity-type matrix. Validation in a React interface, Excel export in the client's format, all running locally.",
          "tagExcel": "Excel export",
          "stat1Value": "74 × 16",
          "stat1Label": "room types × activity types matrix",
          "stat2Value": "0–100 score",
          "stat2Label": "confidence per line",
          "stat3Value": "100% local",
          "stat3Label": "no plan leaves the machine"
        },
        "dura": {
          "eyebrow": "Data platform · Emotors (Stellantis)",
          "context": "At Emotors (Stellantis), durability teams validate the mechanical endurance of engine components. Every validation starts from mission profiles — recordings of real-world operating conditions — which have to be processed to calculate part fatigue and derive engineering KPIs.",
          "problem": "That processing was entirely manual and redone team by team: fetching raw files, running calculations in local scripts, formatting the results. A full analysis cycle took about a month, methods diverged from one team to the next, and nothing let you trace a result back to the raw signal that produced it.",
          "built": "DURA, a platform that industrializes the whole chain: automated time-series ingestion, mission profile processing, fatigue calculations and KPI generation. I designed the pipelines and PostgreSQL schemas (15+ tables) that structure ~10 GB of data per month, plus 10+ reusable computation modules that guarantee every team applies the same method. It is exposed through REST APIs, containerized with Docker and scales on Databricks, with full traceability from raw signal to output.",
          "restTag": "REST APIs",
          "stat1Label": "analysis cycle, results standardized across teams",
          "stat2Label": "PostgreSQL schemas",
          "stat3Label": "of time-series data processed",
          "stat4Value": "100% automated",
          "stat4Label": "ingestion, raw signal → outputs"
        },
        "ppm": {
          "eyebrow": "Machine learning · Emotors (Stellantis)",
          "title": "Predictive Quality (PPM)",
          "context": "Also at Emotors, as an extension of DURA: quality teams manage product reliability through the PPM indicator — defective parts per million — computed from production data and field returns.",
          "problem": "That indicator is retrospective by nature: a quality drift only showed up once PPM had already degraded, meaning once the parts had already been produced. No early warning signal, and therefore no margin to correct the issue before the defect spread across the production run.",
          "built": "Predictive models that estimate PPM KPIs from production and durability variables, reusing DURA's pipelines and computation modules as their data foundation. The models run on current data and flag likely drifts before they show up in the indicators, turning quality monitoring from a post-mortem into an alert.",
          "stat1Value": "Early detection",
          "stat1Label": "of PPM quality drifts",
          "stat2Value": "Data-driven decisions",
          "stat2Label": "for reliability teams",
          "stat3Label": "computation modules reused from DURA"
        },
        "pneumonia": {
          "eyebrow": "Deep learning · Medical imaging",
          "title": "Pneumonia detection with a CNN",
          "why": "Personal project chosen to show a complete deep learning pipeline, from image preprocessing to model evaluation.",
          "context": "Personal project exploring deep learning applied to medical imaging, using a public chest X-ray dataset labelled normal / pneumonia.",
          "problem": "Diagnosing pneumonia from an X-ray requires expert reading. The technical challenge was twofold: confirm that a convolutional network can learn pathological patterns from raw images, and above all keep false negatives down — a missed positive costs far more than a false alarm.",
          "built": "A CNN trained on 150x150 RGB images, with four convolution + pooling blocks for feature extraction, followed by a dense layer (256 units), dropout (0.5) and a sigmoid output for binary classification. Training uses the Adam optimizer, early stopping and learning-rate reduction on plateau to stabilize convergence. The model is evaluated via a confusion matrix and accuracy/loss curves.",
          "stat1Label": "+ pooling for feature extraction",
          "stat2Value": "Early stopping",
          "stat2Label": "+ LR reduction on plateau",
          "stat3Value": "Binary classification",
          "stat3Label": "0.5 decision threshold"
        },
        "more": {
          "label": "also worth a look!",
          "banner": "Other projects",
          "desc": "More repos on my GitHub, across data engineering, machine learning, visualization and web development.",
          "card1": {
            "desc": "Converts MATLAB / text / CSV files to Parquet for large-scale time-series ingestion."
          },
          "card2": {
            "desc": "Automatically retrieves images from a spreadsheet, saves them to Drive and generates a URL for each one.",
            "tag": "Automation"
          },
          "card3": {
            "title": "Butterfly species classification with a CNN",
            "desc": "Automatic classification of butterfly species with a convolutional neural network."
          },
          "card4": {
            "desc": "A neural network for MNIST digit recognition, hand-coded without a deep learning framework.",
            "tag": "Neural network"
          },
          "card5": {
            "desc": "Analyzes esports competition data to identify top players and competition trends.",
            "tag": "Data visualization"
          },
          "card6": {
            "desc": "A short-supply-chain farming webapp connecting producers and consumers directly."
          }
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
