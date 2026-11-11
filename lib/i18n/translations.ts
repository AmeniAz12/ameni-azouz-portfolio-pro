export type Language = "fr" | "en"

export interface ProjectContent {

  slug: string

  title: string

  category: string

  shortDescription: string

  overview: string

  context: string

  objectives: string[]

  objectiveText: string

  environmentItems: string[]

  methodologySteps: { title: string; text: string }[]

  keyFindings: { observation: string; interpretation: string; impact: string }[]

  risks: string[]

  labEnvironment: string

  architecture: string

  methodology: string[]

  tools: string[]

  results: string[]

  screenshots: string[]

  screenshotImages?: { src: string; alt: string; caption: string }[]

  demoVideo?: { src: string; title: string; caption: string }

  securityFindings: string[]

  riskImpact: string

  recommendations: string[]

  skillsDeveloped: string[]

  deliverables: string[]

  tags: string[]

  coverImage: string

  coverAlt: string

  disclaimer: string

  githubUrl?: string

  videoUrl?: string

  reportUrl?: string

}

export interface ExperienceContent {

  role: string

  company: string

  period: string

  location: string

  bullets: string[]

}

export interface CertContent {

  name: string

  issuer: string

  status: string

  skills: string[]

  year?: string

  verificationUrl?: string

  examResult?: string

  certificateImage?: { src: string; alt: string }

}

export interface EducationContent {

  degree: string

  school: string

  period: string

  detail: string

  specialization?: string

  areas?: string[]

}

export interface Translation {

  meta: { title: string; description: string }

  nav: {

    home: string

    about: string

    experience: string

    projects: string

    skills: string

    certifications: string

    education: string

    resume: string

    contact: string

    downloadCv: string

    langLabel?: string

    menuLabel?: string

  }

  hero: {

    badge: string

    title: string

    subtitle: string

    description: string

    focusBadges: string[]

    viewProjects: string

    downloadCv: string

    github: string

    contact: string

    terminalLines: string[]

  }

  about: {

    label: string

    heading: string

    paragraphs: string[]

    highlights?: { value: string; label: string }[]

    focusTitle: string

    focusAreas: string[]

    profileTitle: string

    profileText: string

    contributionTitle: string

    contributions: string[]

  }

  experience: { label: string; heading: string; subtitle: string; items: ExperienceContent[] }

  projects: {

    label: string

    heading: string

    subtitle: string

    viewCaseStudy: string

    githubLabel: string

    videoLabel: string

    reportLabel: string

    externalLabel: string

    groups: { title: string; description: string; slugs: string[] }[]

    details: {

      back: string

      overview: string

      context: string

      objectives: string

      labEnvironment: string

      architecture: string

      methodology: string

      tools: string

      results: string

      screenshots: string

      securityFindings: string

      riskImpact: string

      recommendations: string

      skillsDeveloped: string

      deliverables: string

      links: string

      disclaimer: string


    }

    items: ProjectContent[]

  }

  skills: { label: string; heading: string; subtitle: string; groups: { name: string; items: string[] }[] }

  certifications: {

    label: string

    heading: string

    subtitle: string

    achievedTitle: string

    inProgressTitle: string

    verified: string

    inProgress: string

    verification: string

    items: CertContent[]

  }

  education: { label: string; heading: string; subtitle: string; items: EducationContent[] }

  caseStudies: { label: string; heading: string; subtitle: string; items: { title: string; summary: string }[] }

  resume: {

    label: string

    heading: string

    subtitle: string

    downloadFr: string

    downloadEn: string

    missing: string

  }

  contact: {

    label: string

    heading: string

    subtitle: string

    nameLabel: string

    namePlaceholder: string

    emailLabel: string

    emailPlaceholder: string

    subjectLabel: string

    subjectPlaceholder: string

    messageLabel: string

    messagePlaceholder: string

    send: string

    success: string

    errorRequired: string

    errorEmail: string

    directTitle: string

    location: string

    locationValue: string

    downloadCv: string

  }

  footer: { tagline: string; rights: string; builtWith: string; nav: string; connect: string }

}

export const CONTACT = {

  email: "ameniazouz10@gmail.com",

  github: "https://github.com/AmeniAz12",

  linkedin: "https://linkedin.com/in/ameni-azouz",

  cvFr: "/cv/cv_fr.pdf",

  cvEn: "/cv/cv_ang.pdf",

  cvFrDownloadName: "Cv_Ameni_Azzouz_Cybersecurité.pdf",

  cvEnDownloadName: "Cv_Ameni_Azzouz_Cybersecurity.pdf",

}

export const translations: Record<Language, Translation> = {

  fr: {

    meta: {

      title: "Ameni Azzouz | Cybersécurité · DevSecOps · Cloud Security",

      description:

        "Portfolio cybersécurité d’Ameni Azzouz. Projets en DevSecOps, sécurité applicative, cloud, SOC/SIEM et sécurité réseau. Gouvernance de la sécurité et ISO/IEC 27001.",

    },

    nav: {

      home: "Accueil",

      about: "À propos",

      experience: "Expérience",

      projects: "Projets",

      skills: "Compétences",

      certifications: "Certifications",

      education: "Formation",

      resume: "CV",

      contact: "Contact",

      downloadCv: "CV",

      langLabel: "Choisir la langue",

      menuLabel: "Ouvrir le menu",

    },

    hero: {

      badge: "Portfolio cybersécurité",

      title: "Ameni Azzouz",

      subtitle: "Étudiante ingénieure en cybersécurité",

      description:

        "Étudiante ingénieure en cybersécurité, je travaille sur la sécurité applicative, le DevSecOps et la sécurité des infrastructures. Mes projets couvrent la sécurisation de pipelines CI/CD, la supervision des événements de sécurité et la protection des réseaux. Je développe aussi mes compétences en gouvernance et en gestion des risques avec ISO/IEC 27001.",

      focusBadges: ["DevSecOps et sécurité applicative", "Sécurité cloud et supervision", "Gouvernance et ISO/IEC 27001"],

      viewProjects: "Voir mes projets",

      downloadCv: "Télécharger mon CV",

      github: "GitHub",

      contact: "LinkedIn",

      terminalLines: [
        "$ profil",
        "Ameni Azzouz · Étudiante ingénieure en cybersécurité",
        "$ domaines",
        "DevSecOps · AppSec · Sécurité cloud · SOC/SIEM",
        "$ gouvernance",
        "ISO/IEC 27001 · SMSI · Gestion des risques",
      ],    },

    about: {

      label: "À propos",

      heading: "Sécurité applicative, DevSecOps et infrastructures modernes",

      paragraphs: [

        "Cycle ingénieur à TEK-UP University, avec une spécialisation en cybersécurité et une orientation pratique DevSecOps, AppSec et sécurité des infrastructures.",

        "Je m'intéresse particulièrement à l'intégration de la sécurité dans les pipelines CI/CD, à la sécurité applicative, aux environnements cloud et conteneurisés, aux tests d'intrusion et à l'analyse des événements de sécurité.",

        "Mon expérience pratique couvre l'analyse de vulnérabilités, les scans SAST et DAST, l'audit de code et de pipelines Jenkins, ainsi que la sécurité des environnements Linux, Docker, Kubernetes et K3s.",

      ],

      highlights: [

        { value: "RHCSA", label: "Certification obtenue" },

        { value: "PCAP", label: "Certification obtenue" },

        { value: "ISO/IEC 27001", label: "PECB · Provisional Implementer" },

        { value: "Dot IT", label: "Stage cybersécurité" },

      ],

      focusTitle: "Domaines cibles",

      focusAreas: ["Gouvernance de la sécurité · ISO/IEC 27001", "DevSecOps", "Sécurité applicative", "Sécurité cloud", "Pentest", "Analyse de malware", "SOC / SIEM", "Linux, Docker et Kubernetes"],

      profileTitle: "Mon profil",

      profileText:

        "Je construis un profil pratique en sécurité applicative, DevSecOps et sécurité des environnements cloud et conteneurisés. J'aime analyser un système de bout en bout, comprendre le risque réel, puis transformer les constats techniques en recommandations claires et actionnables. Je complète ce profil technique par des connaissances en gouvernance de la sécurité et en mise en œuvre d’un SMSI selon ISO/IEC 27001.",

      contributionTitle: "Ce que j'apporte",

      contributions: [

        "Intégrer la sécurité dans les pipelines CI/CD et rendre les contrôles visibles pour l'équipe.",

        "Identifier, analyser et prioriser les vulnérabilités avec une lecture orientée risque.",

        "Documenter les preuves, impacts et recommandations de remédiation de manière exploitable.",

      ],

    },

    experience: {

      label: "Parcours professionnel",

      heading: "Expérience professionnelle",

      subtitle: "Stages et missions techniques avec un focus cybersécurité.",

      items: [

        {

          role: "Stagiaire cybersécurité - Sécurité applicative, audit et DevSecOps",

          company: "Dot IT",

          period: "Juin 2026 - Aujourd'hui",

          location: "Tunisie",

          bullets: [

            "Audit de quatre périmètres : code applicatif Node.js/React, pipeline CI/CD Jenkins, serveur VPS Ubuntu et cluster Kubernetes/K3s.",

            "Exécution et analyse de scans SAST, DAST et de vulnérabilités avec Semgrep, SonarQube, Trivy, Burp Suite et OWASP ZAP.",

            "Identification de défauts de sécurité dans le code et les configurations.",

            "Rédaction de rapports présentant les preuves, les étapes de reproduction, les impacts et les recommandations de remédiation.",

          ],

        },

        {

          role: "Stage de fin d'études - Développement Python et Elasticsearch",

          company: "Dot IT",

          period: "Janvier 2024 - Juin 2024",

          location: "Tunisie",

          bullets: [

            "Développement d'une application web de recommandation avec Python, Flask et Elasticsearch.",

            "Integration d'Elasticsearch pour l'indexation, la recherche et l'analyse des données applicatives.",

            "Réalisation de tests fonctionnels et de validations techniques dans un environnement Linux.",

          ],

        },

      ],

    },

    projects: {

      label: "Projets sélectionnés",

      heading: "Projets sélectionnés",

      subtitle: "Etudes de cas et laboratoires cybersécurité presentes avec des preuves visuelles et des résultats concrets.",

      viewCaseStudy: "Voir l'étude de cas",

      githubLabel: "GitHub",

      videoLabel: "Vidéo",

      reportLabel: "Rapport",

      externalLabel: "lien externe",

      groups: [

        {

          title: "Projets phares",

          description: "Trois études de cas en sécurité des pipelines CI/CD, supervision SOC et sécurité réseau.",

          slugs: ["devsecops-fastapi-soc-osint", "wazuh-siem-lab", "backbone-ip-mpls-enterprise"],

        },

        {

          title: "Labs sécurité / projets complémentaires",

          description: "Laboratoires et outils en sécurité applicative, analyse de malware, évaluation Windows et développement Python.",

          slugs: ["agent-tesla-malware-analysis", "ms17-010-eternalblue-lab", "owasp-juice-shop-lab", "scanpot-security-monitoring-toolbox", "password-security-analyzer", "network-recon-analyzer"],

        },

        {

          title: "Données & automatisation",

          description: "Projet Python orienté collecte de données, structuration et export CSV.",

          slugs: ["python-web-scraping-darty"],

        },

      ],

      details: {

        back: "Retour aux projets",

        overview: "Vue d'ensemble",

        context: "Contexte",

        objectives: "Objectifs",

        labEnvironment: "Environnement de laboratoire",

        architecture: "Architecture",

        methodology: "Méthodologie",

        tools: "Outils",

        results: "Résultats",

        screenshots: "Captures techniques",

        securityFindings: "Constats de sécurité",

        riskImpact: "Risques et impact",

        recommendations: "Recommandations",

        skillsDeveloped: "Compétences démontrées",

        deliverables: "Rapport, vidéo ou lien GitHub",

        links: "Liens",

        disclaimer: "Cadre éthique",


      },

      items: [

        {

          slug: "backbone-ip-mpls-enterprise",

          title: "Backbone IP/MPLS pour réseau d'entreprise",

          category: "Network Engineering · MPLS · VPN · High Availability · Network Security",

          shortDescription:

            "Conception et mise en place d'un backbone IP/MPLS simulé sous GNS3 pour interconnecter plusieurs sites d'entreprise avec VPN/VRF, OSPF, LDP, MP-BGP, redondance LAN, supervision Zabbix, AAA/RADIUS, firewalls FortiGate et zone DMZ.",

          overview: "Projet réseau complet autour d'un backbone IP/MPLS, de services VPN et de mécanismes de haute disponibilité et de sécurisation.",

          context: "Projet académique de sécurité réseaux réalisé dans un laboratoire GNS3 afin de concevoir, configurer et valider une infrastructure d'entreprise multi-sites.",

          objectives: ["Construire un backbone IP/MPLS", "Isoler les clients avec VPN et VRF", "Valider OSPF, LDP et MP-BGP", "Déployer un LAN étendu redondant", "Sécuriser l'administration avec AAA/RADIUS", "Intégrer supervision, firewalls et DMZ"],

          objectiveText:

            "Concevoir et valider une architecture réseau d'entreprise basée sur un backbone IP/MPLS, capable d'interconnecter plusieurs sites via des VPN isolés, avec haute disponibilité, supervision centralisée et contrôle des flux par firewalls.",

          environmentItems: ["GNS3 comme environnement de simulation", "Routeurs Cisco IOS pour les routeurs CE, PE et P", "Switches IOSv L2/L3 pour l'accès et la distribution", "Backbone MPLS avec OSPF, LDP et MP-BGP", "Serveur FreeRADIUS pour AAA", "Plateforme Zabbix pour supervision", "Deux FortiGate VM en haute disponibilité", "Zone DMZ avec serveurs SMTP, WWW et DNS"],

          labEnvironment:

            "Le laboratoire s'appuie sur GNS3 avec des équipements Cisco simulés, des machines Linux pour FreeRADIUS et Zabbix, deux FortiGate VM et des hôtes DMZ afin de reproduire une architecture réseau d'entreprise multi-sites.",

          architecture: "L'architecture combine un cœur MPLS avec routeurs P/PE, des sites clients CE, deux VPN isolés par VRF, un LAN étendu redondant, une zone de management supervisée et une DMZ protégée par FortiGate.",

          methodologySteps: [

            { title: "Backbone IP/MPLS", text: "Configuration du routage OSPF dans le backbone, activation MPLS/LDP et validation des labels pour transporter les flux entre routeurs PE et P." },

            { title: "VPN et isolation VRF", text: "Création de VRF distinctes pour séparer les clients, configuration MP-BGP VPNv4 et vérification des tables de routage par VPN." },

            { title: "LAN étendu redondant", text: "Mise en place de VLAN, HSRP, EtherChannel, DHCP et OSPF afin d'assurer la continuité de service entre les sites." },

            { title: "Sécurité et supervision", text: "Déploiement AAA/RADIUS, restrictions VTY, SNMP v3, Syslog, NTP, IP SLA, supervision Zabbix, FortiGate HA et zone DMZ." },

          ],

          methodology: ["Conception de la topologie", "Configuration OSPF", "Activation MPLS et LDP", "Création des VRF", "Configuration MP-BGP VPNv4", "Validation de connectivité VPN", "Déploiement VLAN, HSRP et EtherChannel", "Mise en place AAA/RADIUS", "Supervision Zabbix", "Intégration FortiGate HA et DMZ"],

          tools: ["GNS3", "Cisco IOS", "MPLS", "LDP", "MP-BGP", "OSPF", "VRF", "VLAN", "HSRP", "EtherChannel", "DHCP", "FreeRADIUS", "Zabbix", "SNMP v3", "Syslog", "NTP", "IP SLA", "FortiGate VM", "DMZ"],

          keyFindings: [

            { observation: "Le backbone MPLS transporte deux VPN isolés via des VRF distinctes.", interpretation: "La séparation logique des clients est assurée sur une infrastructure physique partagée.", impact: "L'architecture reproduit un cas opérateur ou entreprise multi-sites avec isolation des flux." },

            { observation: "OSPF, LDP et MP-BGP sont utilisés ensemble pour construire le transport MPLS et l'échange VPNv4.", interpretation: "Les protocoles de routage et de distribution de labels sont validés de bout en bout.", impact: "La solution démontre une compréhension pratique des architectures backbone modernes." },

            { observation: "HSRP et EtherChannel maintiennent la disponibilité du LAN étendu.", interpretation: "La redondance de passerelle et l'agrégation de liens réduisent les points de défaillance.", impact: "Les services restent disponibles lors d'une panne simulée d'un équipement fédérateur." },

            { observation: "AAA/RADIUS, ACL VTY, Zabbix, SNMP, Syslog et IP SLA centralisent l'administration et la supervision.", interpretation: "L'exploitation du réseau est pensée avec contrôle d'accès, traçabilité et visibilité.", impact: "Le projet va au-delà de la connectivité et couvre des exigences opérationnelles réelles." },

            { observation: "Deux FortiGate en mode HA protègent les flux entre zones et une DMZ héberge des services dédiés.", interpretation: "La segmentation de sécurité est intégrée à l'architecture réseau.", impact: "Les flux inter-zones sont contrôlés et les services exposés sont isolés du réseau interne." },

          ],

          results: ["Backbone IP/MPLS opérationnel.", "VPN/VRF validés par tables de routage et tests de connectivité.", "Voisinages OSPF, LDP et MP-BGP vérifiés.", "LAN étendu redondant avec HSRP et EtherChannel.", "Supervision Zabbix et AAA/RADIUS déployés.", "FortiGate HA et DMZ intégrés avec tests de connectivité."],

          screenshots: ["Captures techniques extraites directement du rapport PDF IP/MPLS."],

          screenshotImages: [

            { src: "/images/projects/mpls-backbone/mpls-vpn-topology.webp", alt: "Topologie du backbone IP MPLS avec VPN", caption: "Topologie MPLS/VPN — Vue globale du backbone et des sites clients." },

            { src: "/images/projects/mpls-backbone/ldp-and-mpls-validation.webp", alt: "Validation des voisins LDP et de la commutation MPLS", caption: "Validation MPLS/LDP — Voisinage LDP et table de commutation MPLS." },

            { src: "/images/projects/mpls-backbone/mp-bgp-and-vrf-validation.webp", alt: "Validation MP-BGP VPNv4 et tables VRF", caption: "Validation MP-BGP et VRF — État BGP VPNv4, routes et tests de connectivité." },

            { src: "/images/projects/mpls-backbone/lan-extended-architecture.webp", alt: "Architecture globale du LAN étendu", caption: "LAN étendu — Architecture redondante avec VLAN, HSRP et EtherChannel." },

            { src: "/images/projects/mpls-backbone/aaa-zabbix-architecture.webp", alt: "Architecture AAA RADIUS et supervision Zabbix", caption: "Sécurisation et supervision — AAA/RADIUS, SNMP, Syslog, NTP, IP SLA et Zabbix." },

            { src: "/images/projects/mpls-backbone/zabbix-monitoring-validation.webp", alt: "Dashboard Zabbix et validation de supervision", caption: "Validation Zabbix — Hôtes supervisés et événements reçus." },

            { src: "/images/projects/mpls-backbone/fortigate-dmz-architecture.webp", alt: "Architecture FortiGate haute disponibilité et DMZ", caption: "FortiGate HA et DMZ — Intégration des firewalls, zones et services DMZ." },

            { src: "/images/projects/mpls-backbone/dmz-connectivity-validation.webp", alt: "Validation de connectivité DMZ et supervision", caption: "Validation DMZ — Tests de connectivité et hôtes intégrés dans Zabbix." },

          ],

          securityFindings: ["Isolation logique des clients via VRF et VPN MPLS.", "Restriction des accès d'administration par AAA/RADIUS et ACL VTY.", "Supervision centralisée via Zabbix, SNMP, Syslog, NTP et IP SLA.", "Segmentation des zones INSIDE, OUTSIDE et DMZ.", "Haute disponibilité avec HSRP, EtherChannel et FortiGate HA Active-Passive."],

          riskImpact: "Sans architecture MPLS, redondance et supervision centralisée, une infrastructure multi-sites peut souffrir d'un manque d'isolation, de visibilité et de continuité de service. Ce projet montre une conception plus robuste, segmentée et exploitable.",

          risks: ["Mauvaise isolation des clients si les VRF ou Route Targets sont mal configurées.", "Perte de disponibilité en cas d'absence de redondance LAN ou firewall.", "Manque de traçabilité sans AAA, Syslog et supervision centralisée.", "Exposition excessive des services sans segmentation DMZ et politiques firewall."],

          recommendations: ["Documenter systématiquement le plan d'adressage, les VRF, RD et RT.", "Maintenir des tests de connectivité et de basculement après chaque changement.", "Durcir l'administration avec SSH, AAA centralisé, comptes nominatifs et journalisation.", "Surveiller les équipements critiques via SNMP, Syslog, NTP et IP SLA.", "Tester régulièrement les politiques firewall, la haute disponibilité et l'accès aux services DMZ."],

          skillsDeveloped: ["Network Engineering", "MPLS", "VPN", "VRF", "OSPF", "LDP", "MP-BGP", "Cisco IOS", "High Availability", "HSRP", "EtherChannel", "AAA/RADIUS", "Zabbix", "FortiGate", "DMZ", "Technical Reporting"],

          deliverables: ["Rapport PDF", "Captures techniques extraites du rapport", "Topologies et validations de configuration", "Synthèse portfolio bilingue"],

          tags: ["MPLS", "VPN", "VRF", "OSPF", "LDP", "MP-BGP", "HSRP", "Zabbix", "FortiGate"],

          coverImage: "/images/projects/covers/mpls-backbone-cover.svg",

          coverAlt: "Backbone IP/MPLS avec VPN, supervision et sécurisation réseau",

          disclaimer: "Projet réalisé dans un environnement de laboratoire GNS3. Les captures sont extraites du rapport fourni et ne contiennent pas d'information confidentielle selon le périmètre de publication choisi.",

          reportUrl: "/reports/backbone-ip-mpls-report.pdf",

        },

        {

          slug: "devsecops-fastapi-soc-osint",

          title: "Pipeline DevSecOps pour une application FastAPI SOC/OSINT",

          category: "DevSecOps · CI/CD Security · Application Security · Monitoring",

          shortDescription:

            "Pipeline CI/CD sécurisé pour une application FastAPI SOC OSINT. Le projet automatise checkout, SAST, scan de secrets, build Docker, scan d'image, staging DAST, ZAP Baseline, archivage des rapports, Kubernetes local et monitoring.",

          overview: "Construction d'un pipeline DevSecOps complet pour une application FastAPI SOC OSINT.",

          context: "Projet academique de securisation continue d'une application Python/FastAPI, avec Jenkins comme orchestrateur CI/CD et des security gates automatises.",

          objectives: ["Automatiser le build et les scans", "Vérifier le code, les secrets, l'image Docker et l'application live", "Archiver les rapports de sécurité", "Préparer le déploiement Kubernetes et la supervision"],

          objectiveText:

            "Construire un pipeline DevSecOps complet pour une application FastAPI SOC OSINT, en automatisant les contrôles de sécurité, les tests dynamiques, l'archivage des preuves et la préparation au déploiement.",

          environmentItems: ["Application FastAPI / Python SOC OSINT", "Jenkins execute dans Docker", "Docker build avec image devsecops-image", "Staging local pour DAST via réseau Docker ci-net", "Kubernetes local avec Kind", "Monitoring avec Prometheus, Grafana, Alertmanager, Pushgateway et Node Exporter"],

          labEnvironment:

            "Le projet s'appuie sur Jenkins dans Docker, une image applicative Docker, un staging DAST local, un cluster Kubernetes Kind et une stack de monitoring Prometheus/Grafana.",

          architecture: "GitHub et Jenkinsfile alimentent Jenkins, qui orchestre Bandit, Gitleaks, Docker, Trivy, OWASP ZAP, l'archivage des rapports, Kubernetes Kind et le monitoring.",

          methodologySteps: [

            { title: "Pipeline as code", text: "Le Jenkinsfile fixe l'ordre des stages : checkout, Bandit, Gitleaks, build Docker, Trivy, staging DAST, ZAP Baseline, resultat final et post actions." },

            { title: "Contrôle code et secrets", text: "Bandit scanne app.py, webapp.py et osint_reporter, tandis que Gitleaks recherche les secrets réels dans le dépôt." },

            { title: "Image et DAST", text: "Docker produit une image applicative analysee par Trivy. Le conteneur est ensuite lance en staging local pour un scan OWASP ZAP Baseline." },

            { title: "Ops et observabilite", text: "Le même artefact Docker est utilise pour Kubernetes Kind, puis Prometheus, Grafana et Alertmanager fournissent une visibilité runtime." },

          ],

          methodology: ["Checkout GitHub", "SAST Bandit", "Scan de secrets Gitleaks", "Build Docker", "Scan d'image Trivy", "Déployer le staging local pour le DAST", "OWASP ZAP Baseline", "Archiver les rapports", "Kind/Kubernetes", "Supervision Prometheus/Grafana"],

          tools: ["Python", "FastAPI", "Jenkins", "Docker", "Bandit", "Gitleaks", "Trivy", "OWASP ZAP Baseline", "Kind", "Kubernetes", "Terraform", "Prometheus", "Grafana", "Alertmanager", "Pushgateway", "Node Exporter"],

          keyFindings: [

            { observation: "Le pipeline final execute 9 étapes dans un ordre deterministe.", interpretation: "Le Jenkinsfile rend les contrôlés reproductibles et tracables.", impact: "Chaque exécution produit des preuves cohérentes entre logs, rapports et artefacts." },

            { observation: "Bandit remonte 0 finding Medium/High et Gitleaks 0 secret.", interpretation: "Les gates code et secrets passent sur le périmêtre cible du projet.", impact: "Les problemes de code Python critiques et les fuites de secrets ne bloquent pas ce build." },

            { observation: "Trivy détecte 25 findings HIGH/CRITICAL dans l'image Docker, avec une politique warn-only.", interpretation: "Le pipeline archive le risque au lieu de bloquer pour la démonstration académique.", impact: "L'image nécessite un durcissement futur avant une politique production stricte." },

            { observation: "OWASP ZAP Baseline indique 0 alerte High, 4 Medium et 6 Low.", interpretation: "Le gate ZAP High passe sur l'application live de staging.", impact: "Le pipeline valide le DAST tout en conservant les alertes non bloquantes dans les rapports." },

            { observation: "Les rapports bandit, gitleaks, trivy, zap JSON et HTML sont archives dans Jenkins.", interpretation: "Les artefacts fournissent une preuve technique exploitable après exécution.", impact: "Le projet facilite la revue, l'audit et la justification des security gates." },

          ],

          results: ["Pipeline Jenkins terminé en SUCCESS.", "0 finding Bandit Medium/High.", "0 secret Gitleaks.", "25 findings Trivy HIGH/CRITICAL en warn-only.", "0 alerte ZAP High, 4 Medium et 6 Low.", "Rapports sécurité archivés dans Jenkins."],

          screenshots: ["Captures techniques extraites depuis la présentation PDF DevSecOps."],

          screenshotImages: [

            { src: "/images/projects/devsecops-jenkins/fastapi-dashboard.webp", alt: "Dashboard FastAPI SOC/OSINT avec données de cible", caption: "Application FastAPI SOC/OSINT  — Vue de l'application utilisée comme cible du pipeline DevSecOps." },

            { src: "/images/projects/devsecops-jenkins/jenkins-stage-view.webp", alt: "Stage View Jenkins montrant les contrôles DevSecOps en succès", caption: "Pipeline Jenkins et contrôles de sécurité  — Vue des étapes de contrôle exécutées avant la préparation du déploiement." },

            { src: "/images/projects/devsecops-jenkins/jenkins-console-artifacts.webp", alt: "Console Jenkins listant les rapports Bandit Gitleaks Trivy et ZAP archivés", caption: "Console et artefacts archivés · Preuve de conservation des rapports de sécurité générés par le pipeline." },

            { src: "/images/projects/devsecops-jenkins/kubernetes-kind.webp", alt: "Vérification Kubernetes Kind des pods et services DevSecOps", caption: "Déploiement Kubernetes avec Kind · Vérification locale des ressources applicatives préparées pour l'environnement Kubernetes." },

            { src: "/images/projects/devsecops-jenkins/prometheus-monitoring.webp", alt: "Interface Prometheus montrant les cibles de supervision en état UP", caption: "Supervision avec Prometheus · Dashboard utilisé pour contrôler la disponibilité des cibles de supervision." },

            { src: "/images/projects/devsecops-jenkins/terraform-iac.webp", alt: "Sortie Terraform validant la configuration d'infrastructure", caption: "Infrastructure as Code (IaC) — Trace de validation de la configuration d'infrastructure associée au projet." },

          ],

          securityFindings: ["SAST Python sans finding Medium/High sur le périmètre scanné.", "Aucun secret réel détecté par Gitleaks.", "Image Docker avec 25 findings HIGH/CRITICAL · durcir.", "DAST ZAP sans alerte High bloquante.", "Rapports sécurité archivés pour audit."],

          riskImpact: "Le projet met en évidence une chaîne DevSecOps opérationnelle, mais le scan Trivy montre que l'image Docker doit encore être durcie avant un usage production strict. La politique actuelle reste warn-only pour la démonstration académique.",

          risks: ["Vulnérabilités HIGH/CRITICAL dans l'image si elles ne sont pas corrigées.", "Politique Trivy warn-only acceptable en démonstration mais insuffisante en production.", "Alertes ZAP Medium/Low · suivre dans un backlog de sécurité.", "Monitoring · étendre pour couvrir davantage de métriques applicatives."],

          recommendations: ["Durcir la politique Trivy pour bloquer certaines criticités en production.", "Corriger ou justifier les vulnérabilités image remontees par Trivy.", "Ajouter des tests fonctionnels automatises en complément des security gates.", "étendre le monitoring applicatif et les alertes métier.", "Industrialiser le push d'image vers un registre et le déploiement continu Kubernetes.", "Conserver l'archivage systématique des rapports comme preuve d'audit."],

          skillsDeveloped: ["DevSecOps", "CI/CD Security", "Jenkins", "SAST", "Secret Scanning", "Container Security", "DAST", "Kubernetes", "Monitoring", "Technical Reporting"],

          deliverables: ["Rapport PDF local", "Captures techniques du laboratoire", "Rapports Bandit, Gitleaks, Trivy et ZAP archives", "Synthèse recruteur concise"],

          tags: ["FastAPI", "Jenkins", "Docker", "Bandit", "Gitleaks", "Trivy", "OWASP ZAP", "Kubernetes", "Prometheus"],

          coverImage: "/images/projects/covers/devsecops-cover.svg",

          coverAlt: "Stage View Jenkins du pipeline DevSecOps FastAPI SOC OSINT",

          disclaimer: "Projet presente sans secret, token, identifiant ou information confidentielle. Les captures publiées sont limitées aux preuves techniques utiles du laboratoire.",

          githubUrl: "https://github.com/AmeniAz12/devsecops-project",

        },

        {

          slug: "scanpot-security-monitoring-toolbox",

          title: "ScanPot - scanner, honeypot et dashboard SOC",

          category: "Python · Flask · SOC · Web Security",

          shortDescription:

            "Application Flask éducative combinant scanner XSS/SQLi, honeypot, endpoints decoy, risk scoring et dashboard SOC pour visualiser les tentatives suspectes en laboratoire autorisé.",

          overview: "Boite a outils de sécurité web éducative pour détection, déception et monitoring SOC.",

          context: "Projet academique/personnel réalisé en Python Flask pour comprendre les scanners web, les honeypots, la journalisation des tentatives et la visualisation SOC.",

          objectives: ["Construire un scanner XSS et SQLi simple", "Journaliser les interactions suspectes via honeypot", "Ajouter des endpoints decoy avec faux contenus sensibles", "Calculer un score de risque et afficher les alertes dans un dashboard SOC"],

          objectiveText: "Développer une application Flask modulaire qui combine tests de vulnérabilités autorisés, déception défensive et supervision des événements de sécurité dans un environnement de laboratoire.",

          labEnvironment: "Application Python/Flask locale avec SQLite, Flask-SQLAlchemy, templates HTML/CSS, routes scanner, honeypot, decoy et dashboard.",

          environmentItems: ["Python et Flask", "SQLite avec SQLAlchemy", "Routes scanner XSS/SQLi", "Honeypot et portail bancaire piégé", "Endpoints decoy avec faux secrets", "Dashboard SOC avec filtres et alertes"],

          architecture: "L'application organise la logique en routes Flask, core security logic, modeles SQLAlchemy, templates et static assets. Les tentatives sont journalisées, scorees puis affichees dans le dashboard.",

          methodology: ["Identifier les scénarios éducatifs", "Développer les routes scanner et honeypot", "Ajouter le risk scoring", "Construire le dashboard SOC", "Documenter l'usage responsable et nettoyer les secrets avant publication"],

          methodologySteps: [

            { title: "Scanner autorisé", text: "Le module scanner teste XSS et SQLi simples sur des cibles autorisées avec extraction de formulaires et payloads contrôlés." },

            { title: "Honeypot et déception", text: "Les routes piégées enregistrent les interactions suspectes sans exposer de données sensibles réelles." },

            { title: "Scoring du risque", text: "Les événements reçoivent un score et un niveau LOW, MEDIUM, HIGH ou CRITICAL selon les indicateurs détectés." },

            { title: "Dashboard SOC", text: "Les logs, alertes, filtres et statistiques rendent les tentatives observables et exploitables pour l'analyse." },

          ],

          tools: ["Python", "Flask", "Flask-SQLAlchemy", "SQLite", "BeautifulSoup", "requests", "HTML/CSS", "GitHub"],

          results: ["Application Flask modulaire publiée sur GitHub.", "Scanner XSS/SQLi éducatif implémenté.", "Honeypot, endpoints decoy et portail bancaire piégé ajoutés.", "Dashboard SOC avec logs, alertes, filtres et statistiques.", "Vidéo de démonstration intégrée au portfolio."],

          keyFindings: [

            { observation: "Les routes honeypot et decoy generent des logs exploitables.", interpretation: "La déception défensive permet d'observer des comportements de reconnaissance et de tentative d'intrusion.", impact: "Le dashboard aide a comprendre le triage et la priorisation des événements." },

            { observation: "Le score de risque transforme des requetes brutes en niveaux d'alerte.", interpretation: "Une classification simple rend les événements plus lisibles pour un contexte SOC junior.", impact: "Le projet demontre une logique détection -> scoring -> visualisation." },

          ],

          screenshots: ["Miniature et vidéo de démonstration du projet ScanPot."],

          screenshotImages: [

            { src: "/images/projects/scanpot/scanpot-preview.svg", alt: "Aperçu du projet ScanPot avec scanner honeypot et dashboard SOC", caption: "ScanPot security monitoring toolbox" },

          ],

          demoVideo: { src: "/videos/projects/scanpot/scanpot-demo.mp4", title: "Vidéo de démonstration", caption: "Démo ScanPot intégrée avec contrôle de vitesse pour revoir le scanner, le honeypot et le dashboard SOC." },

          securityFindings: ["Secrets de developpement retires avant push GitHub.", "Base SQLite locale et environnement virtuel exclus du repository.", "Endpoints decoy limites a de faux contenus sensibles.", "Avertissement d'usage autorisé et éducatif documente."],

          riskImpact: "Un outil de scanner/honeypot peut être mal utilisé s'il cible des systèmes non autorisés. Le projet est donc présenté comme laboratoire éducatif, avec avertissement clair et sans secrets réels publiés.",

          risks: ["Usage non autorisé du scanner hors laboratoire.", "Faux portail bancaire a presenter uniquement comme déception éducative.", "Maintien nécessaire des protections et de la documentation d'usage responsable."],

          recommendations: ["Utiliser uniquement sur des systèmes autorisés.", "Garder les secrets dans des variables d'environnement.", "Ne jamais exposer de vrais secrets dans les endpoints decoy.", "Ajouter des tests automatisés et une configuration production durcie avant tout déploiement réel."],

          skillsDeveloped: ["Python", "Flask", "Web security", "Honeypot", "SOC dashboard", "Risk scoring", "Secure coding", "Security monitoring"],

          deliverables: ["Repository GitHub", "Application Flask", "Dashboard SOC", "Vidéo de démonstration", "Documentation README"],

          tags: ["Python", "Flask", "Honeypot", "SOC", "XSS", "SQLi", "Dashboard"],

          coverImage: "/images/projects/covers/websec-toolkit-cover.svg",

          coverAlt: "Miniature ScanPot scanner honeypot dashboard SOC",

          disclaimer: "Projet strictement éducatif pour tests autorisés. Aucun système tiers ne doit être scanné sans permission explicite. Les decoys contiennent uniquement de fausses données.",

          githubUrl: "https://github.com/AmeniAz12/ScanPot",

        },

        {

          slug: "python-web-scraping-darty",

          title: "Web scraping Python - comparaison d'offres PC portables",

          category: "Python · Selenium · Data Collection",

          shortDescription:

            "Projet de web scraping Python utilisant Selenium et undetected-chromedriver pour collecter des offres de PC portables neuves et d'occasion, puis exporter les données en CSV.",

          overview: "Collecte automatisée de données produit depuis des pages catalogue publiques et export CSV pour comparaison.",

          context: "Projet personnel de data collection et automatisation web, réalisé a des fins d'apprentissage et de portfolio.",

          objectives: ["Automatiser la navigation sur des pages catalogue", "Extraire les noms, categories, prix, notes et liens produit", "Comparer les offres neuves et d'occasion", "Exporter les résultats dans des fichiers CSV exploitables"],

          objectiveText: "Construire deux scripts Python capables de parcourir des listings produits, extraire les informations utiles et produire des exports CSV separes pour les offres neuves et d'occasion.",

          labEnvironment: "Environnement Python local avec Selenium, undetected-chromedriver, pandas et un navigateur Chrome.",

          environmentItems: ["Python 3.12", "Selenium pour l'automatisation navigateur", "undetected-chromedriver pour piloter Chrome", "pandas pour structurer et exporter les données", "CSV comme format de sortie"],

          architecture: "Deux scripts Python pilotent Chrome, lisent les blocs produit, extraient les champs utiles puis ajoutent les lignes dans neuf.csv et occasion.csv.",

          methodology: ["Identifier les selecteurs HTML des produits", "Automatiser l'ouverture des pages catalogue", "Gerer la pagination", "Extraire les champs produit", "Supprimer les doublons et exporter en CSV"],

          methodologySteps: [

            { title: "Navigation automatisée", text: "Selenium ouvre les pages catalogue et gère l'interaction avec la bannière cookies et la pagination." },

            { title: "Extraction structuree", text: "Les scripts extraient nom, categorie, etat, ancien prix, prix actuel, note et lien produit." },

            { title: "Separation des offres", text: "Un script traite les offres neuves et un autre les offres d'occasion afin de produire deux jeux de données distincts." },

            { title: "Export CSV", text: "pandas consolide les données, supprime les doublons et enregistre les résultats dans des fichiers CSV." },

          ],

          tools: ["Python", "Selenium", "undetected-chromedriver", "pandas", "CSV", "GitHub"],

          results: ["Deux scripts Python fonctionnels.", "Exports neuf.csv et occasion.csv generes.", "Donnees produit structurees pour comparaison.", "Repository GitHub prepare avec README et requirements propres."],

          keyFindings: [

            { observation: "Les informations produit sont disponibles dans des blocs HTML repetitifs.", interpretation: "Une extraction structuree par selecteurs permet de transformer une page catalogue en dataset tabulaire.", impact: "Les données peuvent être comparées plus facilement dans un fichier CSV." },

            { observation: "Les offres neuves et d'occasion suivent une logique similaire mais des sorties legerement différentes.", interpretation: "La separation en deux scripts simplifie la collecte et l'analyse initiale.", impact: "Le projet reste lisible pour un usage portfolio et peut être refactorisé ensuite." },

          ],

          screenshots: ["Miniature illustrative du pipeline de scraping et des exports CSV."],

          screenshotImages: [

            { src: "/images/projects/web-scraping/darty-scraping-preview.svg", alt: "Aperçu du pipeline Python web scraping vers CSV", caption: "Pipeline web scraping vers CSV" },

          ],

          securityFindings: ["Aucun secret ou identifiant publie dans le repository.", "Projet limite a de la collecte de données produit publiques.", "README ajoute avec une note d'utilisation responsable."],

          riskImpact: "Le web scraping doit rester responsable : respecter les conditions d'utilisation du site cible, éviter le trafic excessif et ne collecter aucune donnee personnelle ou confidentielle.",

          risks: ["Fragilite si la structure HTML du site change.", "Risque de non-conformite si les conditions d'utilisation ne sont pas respectees.", "Maintenance nécessaire pour les selecteurs et la pagination."],

          recommendations: ["Ajouter une configuration pour le mode headless.", "Centraliser les fonctions communes entre les deux scripts.", "Ajouter des logs plus propres et une gestion d'erreurs plus précise.", "Vérifier les conditions d'utilisation avant toute exécution intensive."],

          skillsDeveloped: ["Python", "Web scraping", "Selenium", "Data extraction", "CSV processing", "pandas", "GitHub documentation"],

          deliverables: ["Repository GitHub", "Scripts Python", "Exports CSV", "README et requirements"],

          tags: ["Python", "Selenium", "Web Scraping", "pandas", "CSV"],

          coverImage: "/images/projects/covers/web-scraping-cover.svg",

          coverAlt: "Miniature du projet Python web scraping et export CSV",

          disclaimer: "Projet presente a des fins éducatives et portfolio. L'utilisation doit rester responsable, conforme aux conditions d'utilisation du site cible, et ne collecter aucune donnee personnelle.",

          githubUrl: "https://github.com/AmeniAz12/ScrappingProject",

        },

        {

          slug: "password-security-analyzer",

          title: "Analyseur de sécurité des mots de passe",

          category: "Python · Flask · Secure Coding",

          shortDescription:

            "Outil Python/Flask d'analyse locale de robustesse des mots de passe avec score, détection de faiblesses, recommandations et génération de mots de passe sécurisés.",

          overview: "Application éducative pour comprendre la robustesse des mots de passe et les bonnes pratiques de creation.",

          context: "Projet personnel de cybersécurité défensive centre sur la sensibilisation, l'analyse locale et le secure coding.",

          objectives: ["Évaluer la robustesse d'un mot de passe", "Identifier les patterns faibles", "Expliquer les faiblesses détectées", "Proposer des recommandations et une génération sécurisée"],

          objectiveText: "Construire un outil portfolio clair qui analyse les mots de passe localement et explique les facteurs de robustesse sans exposer de données sensibles.",

          labEnvironment: "Application Python/Flask locale avec interface web et logique d'analyse de mots de passe.",

          environmentItems: ["Python", "Flask", "Analyse locale", "Score de robustesse", "Generation de mots de passe", "Documentation GitHub"],

          architecture: "Une application Flask reçoit l'entree utilisateur, calcule un score, détecte les faiblesses et retourne des recommandations pédagogiques.",

          methodology: ["Definir les critéres de robustesse", "Detecter longueur, complexite et patterns faibles", "Calculer un score", "Afficher les recommandations", "Documenter l'usage responsable"],

          methodologySteps: [

            { title: "Analyse locale", text: "L'analyse est presentee comme locale et orientee confidentialite afin d'éviter l'exposition inutile des mots de passe." },

            { title: "Scoring", text: "Le mot de passe est evalue selon plusieurs critéres lisibles pour l'utilisateur." },

            { title: "Explication", text: "Les faiblesses sont transformees en recommandations concretes." },

            { title: "Documentation", text: "Le repo GitHub explique le contexte éducatif et les limites de l'outil." },

          ],

          tools: ["Python", "Flask", "Password security", "Secure coding", "GitHub"],

          results: ["Repository GitHub professionnalise.", "Score de robustesse et analyse des faiblesses documentes.", "Projet ajoute au portfolio comme outil cyber defensif."],

          keyFindings: [

            { observation: "Les mots de passe faibles suivent souvent des patterns previsibles.", interpretation: "Une analyse pédagogique aide a comprendre les erreurs courantes.", impact: "L'utilisateur apprend a creer des mots de passe plus robustes." },

          ],

          screenshots: ["Miniature illustrative de l'analyse de robustesse."],

          screenshotImages: [

            { src: "/images/projects/password-analyzer/password-analyzer-preview.svg", alt: "Aperçu de l'analyseur de sécurité des mots de passe", caption: "Score et contrôlés de robustesse" },

          ],

          securityFindings: ["Projet oriente sensibilisation et analyse locale.", "Aucun secret nécessaire dans le repository.", "Pas de collecte de données personnelles documentee dans le portfolio."],

          riskImpact: "Un analyseur de mots de passe doit éviter toute collecte ou journalisation de mots de passe réels. Le projet est présenté comme outil éducatif et local.",

          risks: ["Ne jamais reutiliser de vrais mots de passe sensibles dans une demo publique.", "Eviter toute journalisation de mots de passe en clair.", "Clarifier les limites d'un score de robustesse simple."],

          recommendations: ["Ajouter des tests unitaires sur les critéres de scoring.", "Vérifier que les entrées ne sont pas journalisées.", "Ajouter une section limites et bonnes pratiques dans le README."],

          skillsDeveloped: ["Python", "Flask", "Secure coding", "Password security", "Security awareness"],

          deliverables: ["Repository GitHub", "Application Flask", "README"],

          tags: ["Python", "Flask", "Passwords", "Secure Coding", "Awareness"],

          coverImage: "/images/projects/covers/password-analyzer-cover.svg",

          coverAlt: "Miniature de l'analyseur de sécurité des mots de passe",

          disclaimer: "Projet éducatif. Ne pas tester ou saisir de vrais mots de passe sensibles dans une démonstration publique.",

          githubUrl: "https://github.com/AmeniAz12/password-security-analyzer",

        },

        {

          slug: "network-recon-analyzer",

          title: "Analyseur de reconnaissance réseau",

          category: "Python · Network Security · Reconnaissance",

          shortDescription:

            "Outil Python éducatif de reconnaissance réseau permettant le scan de ports, la détection de services et le banner grabbing sur des cibles autorisées.",

          overview: "Outil de reconnaissance réseau inspire des fondamentaux de l'enumeration et du banner grabbing.",

          context: "Projet personnel de sécurité réseau conéu pour apprendre les bases de la reconnaissance technique dans un cadre autorisé.",

          objectives: ["Scanner des ports sur une cible autorisée", "Identifier les services exposes", "Collecter des bannieres", "Produire une synthese exploitable"],

          objectiveText: "Développer un outil simple de reconnaissance réseau en Python pour comprendre la surface d'attaque visible et documenter les services exposes.",

          labEnvironment: "Exécution Python locale contre des cibles de laboratoire ou explicitement autorisées.",

          environmentItems: ["Python", "Sockets réseau", "Port scanning", "Service détection", "Banner grabbing", "GitHub documentation"],

          architecture: "Le script teste une plage de ports, tente d'identifier les services et consolide les résultats pour l'analyse.",

          methodology: ["Definir la cible autorisée", "Scanner les ports", "Identifier les services", "Collecter les bannieres", "Interpreter la surface exposee"],

          methodologySteps: [

            { title: "Cadrage autorisé", text: "Le projet rappelle que la reconnaissance réseau doit viser uniquement des environnements autorisés." },

            { title: "Scan de ports", text: "L'outil determiné quels ports repondent sur la cible." },

            { title: "Detection de services", text: "Les services et bannieres aident a comprendre les technologies exposees." },

            { title: "Synthèse", text: "Les résultats servent a prioriser les vérifications de sécurité." },

          ],

          tools: ["Python", "Network scanning", "Banner grabbing", "Reconnaissance", "GitHub"],

          results: ["Repository GitHub renomme avec URL professionnelle.", "Projet documente comme outil éducatif de reconnaissance autorisée.", "Bloc portfolio ajoute avec avertissement clair."],

          keyFindings: [

            { observation: "Les ports ouverts donnent une premiere lecture de la surface d'attaque.", interpretation: "La reconnaissance technique aide a prioriser les contrôlés.", impact: "Le projet demontre les bases de l'enumeration réseau." },

          ],

          screenshots: ["Miniature illustrative du workflow de reconnaissance réseau."],

          screenshotImages: [

            { src: "/images/projects/network-recon/network-recon-preview.svg", alt: "Aperçu de l'analyseur de reconnaissance réseau", caption: "Scan de ports et détection de services" },

          ],

          securityFindings: ["Avertissement d'usage autorisé nécessaire.", "Aucun secret requis pour le repository.", "Projet a presenter comme laboratoire éducatif."],

          riskImpact: "Le scan réseau non autorisé peut être illégal ou percu comme hostile. Le projet doit rester limite aux environnements contrôlés et autorisés.",

          risks: ["Scan de cibles non autorisées.", "Interprétation incompléte sans validation manuelle.", "Besoin de limiter le trafic et la portee des scans."],

          recommendations: ["Ajouter une option de limitation de vitesse.", "Ajouter des exemples de cible locale.", "Documenter clairement les limites et l'usage autorisé."],

          skillsDeveloped: ["Python", "Network security", "Reconnaissance", "Port scanning", "Banner grabbing"],

          deliverables: ["Repository GitHub", "Script Python", "README"],

          tags: ["Python", "Network", "Recon", "Port Scan", "Security"],

          coverImage: "/images/projects/covers/network-recon-cover.svg",

          coverAlt: "Miniature de l'analyseur de reconnaissance réseau",

          disclaimer: "Projet éducatif pour cibles autorisées uniquement. Ne pas scanner de réseaux tiers sans permission explicite.",

          githubUrl: "https://github.com/AmeniAz12/network-recon-analyzer",

        },

        {

          slug: "agent-tesla-malware-analysis",

          title: "Analyse de malware Agent Tesla",

          category: "Analyse de malware · Sandboxing · Sécurité Windows",

          shortDescription:

            "Analyse contrôlée d'un échantillon Agent Tesla dans un laboratoire Windows 7 isolé. Le projet combine analyse automatisée, analyse statique et analyse dynamique afin d'étudier le comportement de l'échantillon, son impact sur le système et les mesures de détection et de remédiation adaptées.",

          overview: "Analyse contrôlée d'un échantillon Agent Tesla dans un laboratoire Windows 7 isolé.",

          context: "Travail pédagogique réalisé en environnement local isolé, sans distribution de l'échantillon.",

          objectives: ["Identifier la nature du malware", "Observer les traces système et réseau", "Documenter les risques et les mesures de protection"],

          objectiveText:

            "Étudier le comportement de l'échantillon sans exposer un système réel, identifier les traces observables et documenter les risques ainsi que les mesures de protection associées.",

          environmentItems: [

            "Laboratoire local isolé",

            "VM Windows 7 comme machine victime",

            "VM REMnux comme machine d'analyse",

            "VMware LAN Segment sans accés Internet direct",

            "INetSim pour simuler des services réseau contrôlés",

            "Snapshots pour restaurer les machines après analyse",

          ],

          labEnvironment:

            "Windows 7 et REMnux sont places sur un LAN Segment VMware isolé. Windows 7 n'utilise pas de NAT, et INetSim simule les services réseau observés dans le laboratoire.",

          architecture: "Windows 7 isolé communique uniquement avec REMnux dans le segment VMware de laboratoire.",

          methodologySteps: [

            {

              title: "Analyse automatisée",

              text: "VirusTotal et Hybrid Analysis ont ete utilises pour obtenir une premiere vue de l'échantillon, de ses caracteristiques, du verdict antivirus et des indicateurs détectables.",

            },

            {

              title: "Analyse statique",

              text: "Le fichier a ete examine sans exécution avec les informations PE et les strings afin d'identifier sa structure .NET, ses sections, son import mscoree.dll et les chaînes visibles.",

            },

            {

              title: "Analyse dynamique et sandboxing",

              text: "L'exécution contrôlée dans le laboratoire isolé a permis d'observer le processus lance, les accés fichiers, les accés registre et le trafic redirige vers REMnux.",

            },

            {

              title: "Analyse de l'impact",

              text: "Les comportements observés ont été interprétés pour évaluer les risques sur le poste Windows 7 et formuler des mesures de détection et de remédiation.",

            },

          ],

          methodology: ["Analyse automatisée avec VirusTotal et Hybrid Analysis", "Analyse statique PE et strings", "Exécution contrôlée dans Windows 7 isolé", "Observation avec Process Explorer, Procmon, Wireshark, INetSim et Regshot"],

          tools: ["MalwareBazaar", "VirusTotal", "Hybrid Analysis", "Falcon Sandbox", "REMnux", "INetSim", "VMware LAN Segment", "Windows 7", "Process Explorer", "Procmon", "Wireshark", "Regshot", "file", "objdump", "strings"],

          keyFindings: [

            {

              observation: "VirusTotal détecte l'échantillon comme malveillant avec 54 moteurs sur 71, et Hybrid Analysis indique un Threat Score de 71/100.",

              interpretation: "Les analyses automatisées convergent vers un verdict malveillant, même si les labels de famille varient selon les plateformes.",

              impact: "Le fichier doit être traité comme une menace confirmée dans un processus de triage ou de réponse a incident.",

            },

            {

              observation: "L'analyse statique confirme un exécutable Windows PE32 .NET avec 3 sections, import mscoree.dll et entropie elevee de la section .text.",

              interpretation: "Le rapport associe cette entropie elevee a une obfuscation ou un packing probable.",

              impact: "L'analyse statique seule ne suffit pas pour comprendre le comportement réel de l'échantillon.",

            },

            {

              observation: "Les strings ne revelent aucune URL, IP, domaine C2, mot de passe, token ou cle de persistance en clair.",

              interpretation: "La configuration sensible semble cachee, obfusquee, chiffree ou reconstruite dynamiquement a l'exécution.",

              impact: "Une analyse dynamique contrôlée est nécessaire pour rechercher les traces observables.",

            },

            {

              observation: "En laboratoire, AgentTesla.exe apparait sous l'identite DoodleJumpMini / Antigravity, puis le processus crash avec une erreur .NET.",

              interpretation: "Le rapport indique une identite trompeuse et mentionne une possible détection de VM ou une incompatibilite.",

              impact: "Le crash limite l'observation complete du comportement post-infection.",

            },

            {

              observation: "Procmon, Wireshark, INetSim et Regshot montrent des accés fichiers, des lectures registre, du trafic DNS/ICMP redirige vers REMnux et des modifications système.",

              interpretation: "Ces traces confirment une activite système et réseau observable dans le laboratoire isolé.",

              impact: "Ces artefacts peuvent orienter la détection et la remédiation sans exposer un réseau réel.",

            },

          ],

          results: ["Detection malveillante par VirusTotal et Hybrid Analysis.", "Executable PE32 .NET avec forte obfuscation probable.", "Aucune chaîne réseau ou C2 visible en clair.", "Exécution observee sous identite trompeuse, avec interactions fichiers, registre et réseau en laboratoire."],

          screenshots: ["Captures extraites, recadrees et visibles depuis le rapport PDF Agent Tesla."],

          screenshotImages: [

            {

              src: "/images/projects/agent-tesla/automated-analysis.webp",

              alt: "Tableau de bord d'analyse automatisée Agent Tesla dans un laboratoire isolé",

              caption: "Résultat de l'analyse automatisée",

            },

            {

              src: "/images/projects/agent-tesla/static-analysis.webp",

              alt: "Analyse statique de l'échantillon Agent Tesla avec proprietes PE et .NET visibles",

              caption: "Analyse statique PE et .NET",

            },

            {

              src: "/images/projects/agent-tesla/sandbox-behavior.webp",

              alt: "Synthèse sandbox Hybrid Analysis de l'échantillon Agent Tesla",

              caption: "Resultat du sandboxing",

            },

            {

              src: "/images/projects/agent-tesla/dynamic-analysis.webp",

              alt: "Observation du processus Agent Tesla dans Process Explorer",

              caption: "Observation du comportement dynamique",

            },

            {

              src: "/images/projects/agent-tesla/network-activity.webp",

              alt: "Observation du trafic réseau pendant l'analyse dynamique Agent Tesla avec adresses visibles",

              caption: "Activite réseau observee",

            },

            {

              src: "/images/projects/agent-tesla/system-impact.webp",

              alt: "Observation Regshot des changements système avec chemins utilisateur visibles",

              caption: "Impact observé sur le système",

            },

          ],

          securityFindings: ["Detection multi-antivirus confirmée.", "Obfuscation probable observee dans la section .text.", "Absence de C2 visible en clair dans les strings.", "Activite fichiers, registre et réseau observee en laboratoire."],

          riskImpact: "Le rapport etudie un risque de spyware / infostealer sur Windows : vol d'identifiants, keylogging, informations système et exfiltration sont presentes comme objectifs connus de la famille Agent Tesla. Dans ce laboratoire, aucun vol de données réelles n'est affirme.",

          risks: ["Collecte potentielle d'identifiants et d'informations système selon le profil Agent Tesla decrit dans le rapport.", "Persistance, injection et activités réseau signalées par les analyses automatisées.", "Modifications système observées après exécution dans Windows 7.", "Observation post-infection incompléte a cause du crash du processus."],

          recommendations: ["Isoler la machine compromise ou suspecte avant investigation.", "Surveiller les événements fichiers, registre et réseau associés aux comportements observés.", "Mettre à jour les systèmes et éviter l'usage de postes obsolètes comme Windows 7 en production.", "Renforcer la sensibilisation contre les archives ZIP et pièces jointes malveillantes.", "Protéger et renouveler les identifiants susceptibles d'être exposés.", "Exploiter les indicateurs confirmés uniquement après validation dans le contexte du laboratoire."],

          skillsDeveloped: ["Malware Analysis", "Static Analysis", "Dynamic Analysis", "Sandboxing", "Windows Security", "Behavioral Analysis", "Incident Analysis", "Technical Reporting"],

          deliverables: ["Rapport PDF local", "Captures recadrees et visibles", "Synthèse recruteur concise"],

          tags: ["Malware Analysis", "Static Analysis", "Dynamic Analysis", "Sandboxing", "Windows Security"],

          coverImage: "/images/projects/covers/agent-tesla-cover.svg",

          coverAlt: "Capture sandbox visible du projet Agent Tesla",

          disclaimer: "Ce projet a ete réalisé dans un environnement de laboratoire isolé et contrélé · des fins pédagogiques et de recherche en cybersécurité. Aucun système externe ou non autorisé n'a ete cible. Aucun échantillon de malware n'est fourni ou distribué.",

        },

        {

          slug: "ms17-010-eternalblue-lab",

          title: "Audit de sécurité Windows - MS17-010/EternalBlue",

          category: "Pentest · Sécurité réseau · évaluation de vulnérabilités",

          shortDescription:

            "Audit contrôle d'une machine Windows 7 Ultimate SP1 dans un laboratoire VMware Host-Only. Le projet couvre la decouverte réseau, l'enumeration SMB, la validation MS17-010, l'exploitation contrôlée et la comparaison des privileges lowuser/SYSTEM.",

          overview: "Test d'intrusion réalisé dans un laboratoire local VMware Host-Only sur une machine Windows 7 Ultimate SP1 exposee sur SMB.",

          context: "Toutes les operations ont ete réalisées dans un environnement local autorisé et isolé, sans système externe cible.",

          objectives: ["Identifier la cible et les services exposés", "Énumérer SMB et valider MS17-010", "Démontrer l'impact dans le laboratoire", "Comparer les privilèges lowuser et SYSTEM", "Proposer des mesures de remédiation"],

          objectiveText:

            "Evaluer l'exposition SMB d'une machine Windows 7 Ultimate SP1, confirmer MS17-010 avant exploitation, documenter l'impact observe et prioriser les corrections techniques.",

          environmentItems: ["Laboratoire local VMware Host-Only", "Machine attaquante Kali Linux", "Machine cible Windows 7 Ultimate SP1", "Services observés : RPC, NetBIOS, SMB, RDP et ports RPC dynamiques", "Compte lowuser utilise uniquement pour la comparaison de privileges", "Aucun test externe, aucune persistance et aucune exfiltration de données sensibles"],

          labEnvironment:

            "Le rapport decrit un réseau VMware Host-Only avec Kali Linux comme machine attaquante et Windows 7 Ultimate SP1 comme cible. Les actions de post-exploitation sont limitées a des preuves de compromission dans le laboratoire.",

          architecture: "Kali Linux et Windows 7 Ultimate SP1 communiquent uniquement dans le réseau VMware Host-Only du laboratoire.",

          methodologySteps: [

            { title: "Reconnaissance et scan", text: "Nmap est utilise pour verifier la cible, identifier les ports ouverts et détecter les services Windows exposes, notamment SMB et RDP." },

            { title: "énumération SMB", text: "Les scripts NSE SMB et smbclient servent a confirmer SMBv1, le mode de sécurité SMB, l'OS, les partages et la presence de MS17-010." },

            { title: "Exploitation contrôlée", text: "Metasploit est utilise seulement après validation de la vulnerabilite afin d'obtenir une session Meterpreter dans le cadre du laboratoire." },

            { title: "Post-exploitation et impact", text: "Les commandes système verifient le contexte NT AUTHORITY / SYSTEM, les informations OS, les correctifs et la difference avec le compte lowuser." },

          ],

          methodology: ["Préparation du laboratoire", "Reconnaissance et scanning Nmap", "Énumération SMB détaillée", "Validation MS17-010", "Exploitation contrôlée avec Metasploit", "Post-exploitation limitée aux preuves", "Comparaison lowuser/SYSTEM", "Recommandations de remédiation"],

          tools: ["Kali Linux", "Nmap", "smbclient", "Metasploit Framework", "Meterpreter", "xfreerdp", "msfvenom", "Commandes Windows", "VMware Host-Only"],

          keyFindings: [

            { observation: "Le scan identifie notamment les ports 135, 139, 445, 3389 et des ports RPC dynamiques.", interpretation: "SMB et RDP sont accéssibles depuis Kali dans le laboratoire.", impact: "SMB devient la surface d'attaque prioritaire pour verifier MS17-010." },

            { observation: "Les scripts SMB indiquent SMBv1 actif et message signing non impose.", interpretation: "Le protocole SMB est expose avec une configuration faible ou obsolete.", impact: "La probabilité d'exploitation de vulnérabilités historiques augmente fortement." },

            { observation: "Le script smb-vuln-ms17-010 et Metasploit confirment que la cible est vulnérable.", interpretation: "La condition d'exploitation est validée avant exécution contrôlée.", impact: "Le risque est critique car MS17-010 permet une compromission distante via SMB." },

            { observation: "L'exploitation contrôlée obtient une session Meterpreter puis un shell avec NT AUTHORITY / SYSTEM.", interpretation: "L'exploitation donne directement le niveau de privilege le plus eleve sur la machine.", impact: "Le rapport conclut a une compromission totale de la cible dans le laboratoire." },

            { observation: "Le scénario lowuser montre un contexte limité, différent du contexte SYSTEM obtenu par MS17-010.", interpretation: "La comparaison clarifie l'écart entre compte utilisateur faible et compromission SYSTEM.", impact: "Elle aide à expliquer l'impact réel de l'exploitation EternalBlue." },

          ],

          results: ["Windows 7 Ultimate SP1 expose SMBv1 et MS17-010.", "SMB message signing n'est pas impose.", "Metasploit obtient une session Meterpreter avec NT AUTHORITY / SYSTEM.", "Le compte lowuser reste limite et sert de comparaison pédagogique."],

          screenshots: ["Captures techniques extraites depuis le rapport PDF EternalBlue."],

          screenshotImages: [

            { src: "/images/projects/eternalblue/network-scan.webp", alt: "Scan Nmap des services Windows exposes dans le laboratoire EternalBlue", caption: "Decouverte des services exposes" },

            { src: "/images/projects/eternalblue/smbv1-detection.webp", alt: "Detection SMBv1 pendant l'enumeration SMB du laboratoire", caption: "énumération SMBv1" },

            { src: "/images/projects/eternalblue/ms17-010-validation.webp", alt: "Validation de MS17-010 avec script Nmap NSE", caption: "Validation MS17-010" },

            { src: "/images/projects/eternalblue/metasploit-exploitation.webp", alt: "Configuration Metasploit pour exploitation contrôlée MS17-010", caption: "Exploitation contrôlée" },

            { src: "/images/projects/eternalblue/system-session-proof.webp", alt: "Preuve de session SYSTEM obtenue dans le laboratoire EternalBlue", caption: "Preuve du contexte SYSTEM" },

            { src: "/images/projects/eternalblue/privilege-comparison.webp", alt: "Comparaison des comptes et privileges lowuser et administrateur", caption: "Comparaison des privilèges" },

          ],

          securityFindings: ["Windows 7 Ultimate SP1 obsolète.", "SMBv1 actif sur le port 445/tcp.", "MS17-010 / EternalBlue exploitable.", "SMB signing non impose.", "RDP expose dans le laboratoire.", "Patch management insuffisant."],

          riskImpact: "Le rapport qualifie le risque global de critique : l'exploitation MS17-010 permet une compromission distante avec privileges SYSTEM. Les preuves restent limitées a des commandes système et a un fichier de démonstration, sans exfiltration de données sensibles.",

          risks: ["Compromission totale du poste avec accès SYSTEM.", "Exécution de code distante via SMB sans accès physique.", "Mouvement latéral potentiel si SMB/RDP sont accessibles dans un réseau réel.", "Non-conformité liée à un OS obsolète, SMBv1 actif et correctifs manquants."],

          recommendations: ["Appliquer les correctifs MS17-010.", "Desactiver SMBv1.", "Migrer depuis Windows 7 vers un système supporte.", "Restreindre le port 445/tcp aux machines strictement nécessaires.", "Activer SMB signing si compatible.", "Durcir RDP et mettre en place une politique de patch management verifiable."],

          skillsDeveloped: ["Penetration Testing", "Network Security", "SMB énumération", "Vulnerability Assessment", "Metasploit", "Post-Exploitation", "Risk Analysis", "Technical Reporting"],

          deliverables: ["Rapport PDF local", "Captures techniques du laboratoire", "Synthèse recruteur concise"],

          tags: ["MS17-010", "EternalBlue", "SMB", "Nmap", "Metasploit", "Windows Security"],

          coverImage: "/images/projects/covers/eternalblue-cover.svg",

          coverAlt: "Validation MS17-010 dans le laboratoire EternalBlue",

          disclaimer: "Toutes les operations ont ete effectuées dans un laboratoire local isolé et autorisé. Aucun système externe ou non autorisé n'a ete cible. Aucun payload ou fichier exécutable de démonstration n'est fourni ou distribué.",

        },

        {

          slug: "wazuh-siem-lab",

          title: "Deploiement et configuration d'une plateforme SIEM Wazuh",

          category: "SOC · SIEM · Security Monitoring",

          shortDescription:

            "Installation et configuration Wazuh pour centraliser les journaux, superviser les machines et analyser les événements de sécurité.",

          overview: "Mise en place d'un environnement Wazuh pour la supervision sécurité.",

          context: "Laboratoire SOC/SIEM local.",

          objectives: ["Centraliser les journaux", "Superviser les agents", "Analyser les alertes", "Presenter les résultats du dashboard"],

          objectiveText: "Mettre en place un SOC open-source capable de collecter, corréler et analyser les événements de sécurité afin de détecter des scénarios d'attaque simules en laboratoire.",

          labEnvironment: "Laboratoire SOC compose d'un serveur Wazuh Manager, d'agents Wazuh installes sur les machines surveillees, de Suricata comme IDS réseau et de Kali Linux pour generer des scans et activités de reconnaissance.",

          environmentItems: ["Wazuh Manager pour centraliser les logs et alertes", "Agents Wazuh sur les machines surveillées", "Suricata pour l'analyse IDS du trafic réseau", "Kali Linux pour simuler des scans réseau et de la reconnaissance", "Dashboard Wazuh pour visualiser les alertes en temps réel"],

          architecture: "Wazuh Manager centralise les journaux des agents et les événements réseau Suricata, puis expose les détections dans le dashboard pour l'analyse SOC.",

          methodology: ["Installer et configurer Wazuh Manager", "Connecter les agents Wazuh aux machines surveillées", "Déployer Suricata comme IDS réseau", "Simuler des scans et de la reconnaissance depuis Kali Linux", "Analyser les alertes en temps réel dans le dashboard"],

          methodologySteps: [

            { title: "Collecte centralisée", text: "Les journaux système et événements de sécurité sont envoyés vers Wazuh Manager pour centralisation." },

            { title: "Detection réseau", text: "Suricata inspecte le trafic et enrichit la visibilité SOC avec des alertes IDS." },

            { title: "Simulation d'attaque", text: "Kali Linux genere des scans réseau et activités de reconnaissance pour valider la détection." },

            { title: "Visualisation SOC", text: "Les alertes sont observées dans le dashboard Wazuh afin de vérifier la détection et l'analyse en temps réel." },

          ],

          tools: ["Wazuh", "Suricata", "Kali Linux", "Linux", "Log Analysis", "SIEM", "IDS", "Security Monitoring"],

          results: ["Centralisation des logs dans Wazuh Manager", "Detection d'activités de reconnaissance et de scans réseau", "Visualisation des alertes dans le dashboard Wazuh", "Validation d'une base SOC open-source extensible"],

          keyFindings: [

            { observation: "Les attaques simulees depuis Kali Linux generent des événements visibles dans Wazuh.", interpretation: "La chaîne de collecte et détection fonctionne entre les machines surveillees, Suricata et le manager.", impact: "Le SOC peut détecter plus rapidement des activités de reconnaissance et renforcer la surveillance continue." },

            { observation: "Le dashboard centralise les alertes pour l'analyse en temps réel.", interpretation: "La visibilité SOC devient exploitable depuis une interface unique.", impact: "Les analystes peuvent prioriser les événements et préparer des améliorations comme la réponse automatisée." },

          ],

          screenshots: ["Ce projet est documente principalement par une vidéo de démonstration du dashboard Wazuh."],

          demoVideo: { src: "/videos/projects/wazuh-siem/wazuh-dashboard-demo.mp4", title: "Vidéo de démonstration", caption: "Démonstration du dashboard Wazuh avec contrôle de vitesse integre pour revoir les alertes et la navigation plus lentement ou plus rapidement." },

          securityFindings: ["Scans réseau détectables dans le SOC", "Activités de reconnaissance visibles via les alertes", "Centralisation des événements de sécurité", "Besoin futur d'automatiser la réponse aux incidents"],

          riskImpact: "Sans supervision SOC, les scans réseau et activités de reconnaissance peuvent rester invisibles. Cette architecture open-source améliore la détection proactive et la visualisation des alertes.",

          risks: ["Manque de visibilité sur les événements de sécurité", "Detection tardive des activités de reconnaissance", "Difficulté a corréler les logs sans centralisation", "Reponse aux incidents encore manuelle"],

          recommendations: ["Maintenir et enrichir les regles Wazuh et Suricata", "Definir des tableaux de bord par criticite et type d'alerte", "Mettre en place des procedures de triage SOC", "Ajouter progressivement l'automatisation de la réponse aux incidents"],

          skillsDeveloped: ["SOC", "SIEM", "Wazuh", "Suricata", "IDS", "Log analysis", "Security monitoring", "Incident détection"],

          deliverables: ["Fiche portfolio", "Vidéo de démonstration du dashboard Wazuh", "Synthèse architecture et scénarios d'attaque"],

          tags: ["Wazuh", "SIEM", "Suricata", "Kali Linux", "SOC"],

          coverImage: "/images/projects/covers/wazuh-cover.svg",

          coverAlt: "Aperçu du dashboard SOC Wazuh avec alertes et flux de détection",

          disclaimer: "Projet réalisé dans un laboratoire local avec des simulations contrôlées. Aucun système externe ou non autorisé n'a ete cible.",

        },

        {

          slug: "owasp-juice-shop-lab",

          title: "Laboratoire de sécurité web OWASP Juice Shop",

          category: "Application Security · OWASP Top 10 · Web Pentesting",

          shortDescription:

            "Etude pédagogique de l'OWASP Top 10 A03:2021 - Injection avec bypass d'authentification sur OWASP Juice Shop en environnement local.",

          overview: "Laboratoire web centre sur la SQL injection et le contournement d'un formulaire de connexion vulnérable.",

          context: "Application volontairement vulnérable utilisée en local, pas une entreprise réelle.",

          objectives: ["Comprendre le risque A03:2021 - Injection", "Illustrer une SQL injection sur un formulaire de connexion", "Documenter l'impact et les protections attendues"],

          objectiveText: "Montrer comment une entree utilisateur non validée peut être interprétée comme du code SQL, neutraliser le contrôle du mot de passe et provoquer un accés non autorisé dans OWASP Juice Shop.",

          labEnvironment: "Laboratoire local avec OWASP Juice Shop expose sur http://localhost:3000/#/login pour une démonstration contrôlée.",

          environmentItems: ["Application OWASP Juice Shop volontairement vulnérable", "Navigateur web pour interagir avec le formulaire de connexion", "Scénario pédagogique centre sur A03:2021 - Injection", "Vidéo courte intégrée pour rejouer la démonstration"],

          architecture: "Application web locale, formulaire de connexion, requete SQL vulnérable et base de données de laboratoire.",

          methodology: ["Identifier le point d'entree utilisateur", "Saisir un payload SQL dans le champ email", "Utiliser une valeur quelconque pour le mot de passe", "Observer le bypass d'authentification et documenter les impacts"],

          methodologySteps: [

            { title: "Contexte OWASP Top 10", text: "Le projet cible A03:2021 - Injection, un risque majeur quand des données utilisateur arrivent directement dans un interpreteur." },

            { title: "Payload contrôle", text: "Le champ email reçoit le payload ' or 1=1-- afin de fermer la chaîne, forcer une condition vraie et commenter la suite de la requete." },

            { title: "Verification visuelle", text: "La tentative de connexion est réalisée sur Juice Shop et le resultat attendu est un accés non autorisé au compte administrateur." },

            { title: "Remédiation", text: "Les protections attendues sont les requetes préparées, la validation des entrées, le moindre privilege et la surveillance défensive." },

          ],

          tools: ["OWASP Juice Shop", "Navigateur web", "OWASP Top 10 2021", "SQL Injection", "Reporting"],

          results: ["Bypass d'authentification demontre avec le payload ' or 1=1--", "Challenge Login Admin resolu dans Juice Shop", "Impacts et contre-mesures documentes"],

          keyFindings: [

            { observation: "Le champ email accepte une entree qui modifie la logique SQL attendue.", interpretation: "La donnee utilisateur n'est pas isolée de la requete et devient exécutable par l'interpreteur SQL.", impact: "Un attaquant peut contourner l'authentification et acceder a un compte sans connaitre le mot de passe." },

            { observation: "Le payload ' or 1=1-- force une condition vraie et commente le reste de la requete.", interpretation: "La verification du mot de passe est neutralisee dans la requete finale.", impact: "Le risque applicatif inclut l'accés non autorisé, la fuite de données et la modification ou suppression de données." },

          ],

          screenshots: ["Captures extraites du PPTX avec la preuve du formulaire Juice Shop et les visuels pédagogiques utilises dans la presentation."],

          screenshotImages: [

            { src: "/images/projects/owasp-juice-shop/login-payload.webp", alt: "Formulaire de connexion OWASP Juice Shop avec payload SQL injection dans le champ email", caption: "Payload SQL injection dans le login Juice Shop" },

            { src: "/images/projects/owasp-juice-shop/injection-concept.webp", alt: "Illustration du concept d'injection", caption: "Concept A03:2021 - Injection" },

            { src: "/images/projects/owasp-juice-shop/juice-shop-logo.webp", alt: "Logo OWASP Juice Shop", caption: "Application volontairement vulnérable OWASP Juice Shop" },

          ],

          demoVideo: { src: "/videos/projects/owasp-juice-shop/sql-injection-demo.mp4", title: "Vidéo de démonstration", caption: "Démo extraite du PowerPoint avec contrôle de vitesse integre pour revoir le bypass plus lentement ou plus rapidement." },

          securityFindings: ["Injection SQL possible via le champ email", "Bypass d'authentification du compte administrateur", "Absence de separation stricte entre requete SQL et entree utilisateur"],

          riskImpact: "Une SQL injection peut conduire a un contournement de l'authentification, a l'accés non autorisé a des comptes, a la lecture de données sensibles et a la modification ou suppression de données.",

          risks: ["Contournement de l'authentification", "Acces non autorisé a des comptes", "Lecture de données sensibles", "Modification ou suppression de données"],

          recommendations: ["Utiliser des requetes préparées et paramétrées", "Valider et filtrer les entrées utilisateur selon le format attendu", "Appliquer le principe du moindre privilege sur le compte base de données", "Surveiller les tentatives anormales cété défense"],

          skillsDeveloped: ["Application security", "OWASP Top 10", "SQL Injection", "Web pentesting", "Secure coding", "Reporting"],

          deliverables: ["Étude de cas portfolio", "Captures extraites du PPTX", "Vidéo de démonstration intégrée"],

          tags: ["OWASP Top 10", "Juice Shop", "SQL Injection"],

          coverImage: "/images/projects/covers/owasp-cover.svg",

          coverAlt: "Formulaire de connexion OWASP Juice Shop utilise pour tester une SQL injection",

          disclaimer: "Démonstration réalisée uniquement dans OWASP Juice Shop, une application volontairement vulnérable destinée a l'apprentissage.",

        },

      ],

    },

    skills: {

      label: "Compétences",

      heading: "Compétences techniques",

      subtitle: "Compétences organisées par domaines cybersécurité.",

      groups: [

        { name: "DevSecOps", items: ["Jenkins", "CI/CD", "Docker", "Semgrep", "SonarQube", "Trivy", "OWASP ZAP", "SAST", "DAST", "Analyse de vulnérabilités"] },

        { name: "Cloud et conteneurs", items: ["Kubernetes", "K3s", "Docker", "AWS - notions et certification en préparation", "Sécurité des conteneurs"] },

        { name: "Pentest et sécurité applicative", items: ["OWASP Top 10", "Burp Suite", "Nmap", "Reconnaissance réseau", "énumération SMB", "Metasploit dans un laboratoire isolé", "Analyse des vulnérabilités", "Rédaction de rapports de pentest"] },

        { name: "SOC et monitoring", items: ["Wazuh", "Analyse de logs", "Detection d'événements", "Prometheus", "Grafana", "Alertmanager"] },

        { name: "Analyse de malware", items: ["Analyse automatisée", "Analyse statique", "Analyse dynamique", "Sandboxing", "Analyse comportementale", "Environnement Windows isolé"] },

        { name: "Gouvernance, risques et conformité (GRC)", items: ["ISO/IEC 27001", "Mise en œuvre d’un SMSI", "Appréciation et traitement des risques", "Sélection des mesures de sécurité", "Amélioration continue"] },

        { name: "Systémes et developpement", items: ["Linux", "Ubuntu", "Windows", "VMware", "Administration système", "Python", "FastAPI", "Flask", "Elasticsearch", "Git", "GitHub"] },

      ],

    },

    certifications: {

      label: "Certifications",

      heading: "Certifications",

      subtitle: "Certifications obtenues, examens réussis et certifications en préparation.",

      achievedTitle: "Certifications obtenues et examens réussis",

      inProgressTitle: "Certifications en préparation",

      verified: "Obtenue",

      inProgress: "En préparation",

      verification: "Verification",

      items: [

        { name: "RHCSA", issuer: "Red Hat", status: "Obtenue", year: "Juillet 2025", skills: ["Linux", "Administration système", "Red Hat"], verificationUrl: "https://www.credly.com/badges/0591df3a-840d-4f7c-bce8-a03fd0282f7d", certificateImage: { src: "/images/certificates/rhcsa-red-hat.webp", alt: "Certificat Red Hat Certified System Administrator RHCSA d'Ameni Azouz" } },

        { name: "PCAP - Certified Associate Python Programmer", issuer: "Python Institute", status: "Obtenue", year: "Août 2025", skills: ["Python", "Programmation", "Algorithmique"], certificateImage: { src: "/images/certificates/pcap-python-institute.webp", alt: "Certificat PCAP Python Institute d'Ameni Azouz" } },

        { name: "CPPS - Certified Phishing Prevention Specialist", issuer: "Hack & Fix Academy", status: "Obtenue", year: "Décembre 2025", skills: ["Phishing", "Sensibilisation sécurité", "Email security"], certificateImage: { src: "/images/certificates/cpps-hack-and-fix.webp", alt: "Certificat Certified Phishing Prevention Specialist CPPS Hack and Fix d'Ameni Azouz" } },

        { name: "ISO/IEC 27001 Provisional Implementer", issuer: "PECB", status: "Obtenue", year: "10 novembre 2026", examResult: "Examen ISO/IEC 27001 Lead Implementer réussi", skills: ["ISO/IEC 27001", "Gouvernance", "SMSI"], certificateImage: { src: "/images/certificates/pecb-iso-27001.jpg", alt: "Certificat PECB ISO/IEC 27001 Provisional Implementer" } },

        { name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services", status: "En préparation", skills: ["AWS", "Cloud", "Architecture"] },

      ],

    },

    education: {

      label: "Formation",

      heading: "Formation",

      subtitle: "Diplômes et spécialisations.",

      items: [

        {

          degree: "Cycle ingénieur",

          school: "TEK-UP University, Tunis",

          period: "2024 - 2027",

          detail: "Diplôme prévu en 2027.",

          specialization: "Spécialisation : Cybersécurité",

          areas: ["Sécurité applicative", "OWASP", "DevSecOps", "Systémes et réseaux", "Cloud", "Programmation", "Gestion des incidents"],

        },

        {

          degree: "Licence en Électronique, Électrotechnique et Automatique",

          school: "ISSAT Sousse",

          period: "2021 - 2024",

          detail: "Projet de fin d'etudes : application de recommandation réalisée avec Python, Flask, Elasticsearch et Linux.",

          specialization: "Spécialisation : Systèmes embarqués",

        },

      ],

    },

    caseStudies: {

      label: "Langues",

      heading: "Langues",

      subtitle: "Compétences linguistiques.",

      items: [

        { title: "Français", summary: "Courant" },

        { title: "Anglais", summary: "Professionnel" },

        { title: "Arabe", summary: "Langue maternelle" },

      ],

    },

    resume: {

      label: "CV",

      heading: "Télécharger le CV",

      subtitle: "Deux versions PDF sont disponibles pour les candidatures francophones et anglophones.",

      downloadFr: "Télécharger le CV français",

      downloadEn: "Télécharger le CV anglais",

      missing: "Les deux versions du CV sont disponibles au format PDF.",

    },

    contact: {

      label: "Contact",

      heading: "Échangeons sur la cybersécurité",

      subtitle: "Contactez-moi pour discuter d’un projet, d’une collaboration ou d’une opportunité en cybersécurité.",

      nameLabel: "Nom",

      namePlaceholder: "Votre nom",

      emailLabel: "Email",

      emailPlaceholder: "vous@example.com",

      subjectLabel: "Sujet",

      subjectPlaceholder: "Projet ou opportunité en cybersécurité",

      messageLabel: "Message",

      messagePlaceholder: "Votre message...",

      send: "Préparer l'email",

      success: "Votre email est prêt dans votre client de messagerie.",

      errorRequired: "Veuillez remplir tous les champs obligatoires.",

      errorEmail: "Veuillez saisir une adresse email valide.",

      directTitle: "Contact direct",

      location: "Localisation",

      locationValue: "Tunisie",

      downloadCv: "Télécharger le CV",

    },

    footer: {

      tagline: "Étudiante ingénieure en cybersécurité - DevSecOps, AppSec, Cloud Security et Pentest.",

      rights: "Tous droits réservés.",

      builtWith: "Conçu avec Next.js et Tailwind CSS.",

      nav: "Navigation",

      connect: "Réseaux",

    },

  },

  en: {

    meta: {

      title: "Ameni Azzouz | Cybersecurity · DevSecOps · Cloud Security",

      description:

        "Ameni Azzouz’s cybersecurity portfolio. Projects in DevSecOps, application security, cloud security, SOC/SIEM and network security, with a focus on security governance and ISO/IEC 27001.",

    },

    nav: {

      home: "Home",

      about: "About",

      experience: "Experience",

      projects: "Projects",

      skills: "Skills",

      certifications: "Certifications",

      education: "Formation",

      resume: "Resume",

      contact: "Contact",

      downloadCv: "Resume",

      langLabel: "Choose language",

      menuLabel: "Open menu",

    },

    hero: {

      badge: "Cybersecurity Portfolio",

      title: "Ameni Azzouz",

      subtitle: "Cybersecurity Engineering Student",

      description:

        "I am a cybersecurity engineering student focused on application security, DevSecOps and infrastructure security. My projects cover securing CI/CD pipelines, monitoring security events and protecting networks. I am also developing my skills in governance and risk management through ISO/IEC 27001.",

      focusBadges: ["DevSecOps and Application Security", "Cloud Security and Monitoring", "Governance and ISO/IEC 27001"],

      viewProjects: "View my work",

      downloadCv: "Download Resume",

      github: "GitHub",

      contact: "LinkedIn",

      terminalLines: [
        "$ profile",
        "Ameni Azzouz · Cybersecurity engineering student",
        "$ focus",
        "DevSecOps · AppSec · Cloud security · SOC/SIEM",
        "$ governance",
        "ISO/IEC 27001 · ISMS · Risk management",
      ],

    },

    about: {

      label: "About",

      heading: "Application security, DevSecOps and modern infrastructure",

      paragraphs: [

        "Engineering degree at TEK-UP University, with a cybersecurity specialization and practical focus on DevSecOps, AppSec and infrastructure security.",

        "I am particularly interested in embedding security into CI/CD pipelines, application security, cloud and container environments, penetration testing and security event analysis.",

        "My practical experience covers vulnerability analysis, SAST and DAST scans, code and Jenkins pipeline audits, and Linux, Docker, Kubernetes and K3s security.",

      ],

      highlights: [

        { value: "RHCSA", label: "Certification achieved" },

        { value: "PCAP", label: "Certification achieved" },

        { value: "ISO/IEC 27001", label: "PECB · Provisional Implementer" },

        { value: "Dot IT", label: "Cybersecurity internship" },

      ],

      focusTitle: "Target domains",

      focusAreas: ["Information Security Governance · ISO/IEC 27001", "DevSecOps", "Application Security", "Cloud Security", "Penetration Testing", "Malware Analysis", "SOC / SIEM", "Linux, Docker and Kubernetes"],

      profileTitle: "My profile",

      profileText:

        "Cybersecurity engineering student building a practical profile across application security, DevSecOps, cloud/container environments and risk analysis. My projects follow a structured approach: observe, test, document and recommend concrete remediation actions. I complement this technical background with knowledge of information security governance and ISMS implementation under ISO/IEC 27001.",

      contributionTitle: "What I bring",

      contributions: [

        "Integrate security into CI/CD pipelines and make controls visible for the team.",

        "Identify, analyze and prioritize vulnerabilities with a risk-oriented mindset.",

        "Document evidence, impact and remediation recommendations in an actionable way.",

      ],

    },

    experience: {

      label: "Professional journey",

      heading: "Professional experience",

      subtitle: "Internships and technical missions with a cybersecurity focus.",

      items: [

        {

          role: "Cybersecurity Intern - Application Security, Audit and DevSecOps",

          company: "Dot IT",

          period: "June 2026 - Present",

          location: "Tunisia",

          bullets: [

            "Audited four security scopes: Node.js/React application code, Jenkins CI/CD pipeline, Ubuntu VPS and Kubernetes/K3s cluster.",

            "Performed and analyzed SAST, DAST and vulnerability scans using Semgrep, SonarQube, Trivy, Burp Suite and OWASP ZAP.",

            "Identified security weaknesses in application code and configurations.",

            "Produced reports including evidence, reproduction steps, impacts and remediation recommendations.",

          ],

        },

        {

          role: "Graduation Internship - Python and Elasticsearch Development",

          company: "Dot IT",

          period: "January 2024 - June 2024",

          location: "Tunisia",

          bullets: [

            "Developed a recommendation web application using Python, Flask and Elasticsearch.",

            "Integrated Elasticsearch for application data indexing, search and analysis.",

            "Conducted functional testing and technical validation in a Linux environment.",

          ],

        },

      ],

    },

    projects: {

      label: "Featured Projects",

      heading: "Featured Projects",

      subtitle: "Cybersecurity case studies and labs presented with visual evidence, methodology and concrete outcomes.",

      viewCaseStudy: "View case study",

      githubLabel: "GitHub",

      videoLabel: "Vidéo",

      reportLabel: "Report",

      externalLabel: "external link",

      groups: [

        {

          title: "Featured Projects",

          description: "Three case studies in CI/CD security, SOC monitoring and network security.",

          slugs: ["devsecops-fastapi-soc-osint", "wazuh-siem-lab", "backbone-ip-mpls-enterprise"],

        },

        {

          title: "Security Labs / Additional Projects",

          description: "Labs and tools covering application security, malware analysis, Windows assessment and Python security tooling.",

          slugs: ["agent-tesla-malware-analysis", "ms17-010-eternalblue-lab", "owasp-juice-shop-lab", "scanpot-security-monitoring-toolbox", "password-security-analyzer", "network-recon-analyzer"],

        },

        {

          title: "Data & Automation",

          description: "Python project focused on data collection, structuring and CSV export.",

          slugs: ["python-web-scraping-darty"],

        },

      ],

      details: {

        back: "Back to projects",

        overview: "Overview",

        context: "Context",

        objectives: "Objectives",

        labEnvironment: "Laboratory environment",

        architecture: "Architecture",

        methodology: "Methodology",

        tools: "Tools",

        results: "Results",

        screenshots: "Screenshots",

        securityFindings: "Security findings",

        riskImpact: "Risk and impact",

        recommendations: "Recommendations",

        skillsDeveloped: "Skills developed",

        deliverables: "Report, video or GitHub link",

        links: "Links",

        disclaimer: "Ethical disclaimer",


      },

      items: [

        {

          slug: "backbone-ip-mpls-enterprise",

          title: "Enterprise IP/MPLS Backbone Network",

          category: "Network Engineering · MPLS · VPN · High Availability · Network Security",

          shortDescription:

            "Design and implementation of an IP/MPLS backbone in GNS3 to interconnect multiple enterprise sites with VPN/VRF, OSPF, LDP, MP-BGP, redundant LAN services, Zabbix monitoring, AAA/RADIUS, FortiGate firewalls and a DMZ zone.",

          overview: "Complete network engineering project covering an IP/MPLS backbone, VPN services, high availability and network security controls.",

          context: "Academic network security project built in a GNS3 lab to design, configure and validate a multi-site enterprise infrastructure.",

          objectives: ["Build an IP/MPLS backbone", "Isolate customers with VPN and VRF", "Validate OSPF, LDP and MP-BGP", "Deploy a redundant extended LAN", "Secure administration with AAA/RADIUS", "Integrate monitoring, firewalls and a DMZ"],

          objectiveText:

            "Design and validate an enterprise network architecture based on an IP/MPLS backbone, able to interconnect multiple sites through isolated VPNs with high availability, centralized monitoring and firewall-based traffic control.",

          environmentItems: ["GNS3 simulation environment", "Cisco IOS routers for CE, PE and P roles", "IOSv L2/L3 switches for access and distribution", "MPLS backbone with OSPF, LDP and MP-BGP", "FreeRADIUS server for AAA", "Zabbix platform for monitoring", "Two FortiGate VM firewalls in high availability", "DMZ zone with SMTP, WWW and DNS servers"],

          labEnvironment:

            "The lab uses GNS3 with simulated Cisco devices, Linux machines for FreeRADIUS and Zabbix, two FortiGate VM firewalls and DMZ hosts to reproduce a multi-site enterprise network architecture.",

          architecture: "The architecture combines an MPLS core with P/PE routers, CE customer sites, two VRF-isolated VPNs, a redundant extended LAN, a monitored management zone and a FortiGate-protected DMZ.",

          methodologySteps: [

            { title: "IP/MPLS backbone", text: "Configured OSPF routing in the backbone, enabled MPLS/LDP and validated label distribution for traffic transport between PE and P routers." },

            { title: "VPN and VRF isolation", text: "Created separate VRFs to isolate customers, configured MP-BGP VPNv4 and verified routing tables per VPN." },

            { title: "Redundant extended LAN", text: "Implemented VLANs, HSRP, EtherChannel, DHCP and OSPF to maintain service continuity across sites." },

            { title: "Security and monitoring", text: "Deployed AAA/RADIUS, VTY restrictions, SNMP v3, Syslog, NTP, IP SLA, Zabbix monitoring, FortiGate HA and a DMZ zone." },

          ],

          methodology: ["Topology design", "OSPF configuration", "MPLS and LDP activation", "VRF creation", "MP-BGP VPNv4 configuration", "VPN connectivity validation", "VLAN, HSRP and EtherChannel deployment", "AAA/RADIUS setup", "Zabbix monitoring", "FortiGate HA and DMZ integration"],

          tools: ["GNS3", "Cisco IOS", "MPLS", "LDP", "MP-BGP", "OSPF", "VRF", "VLAN", "HSRP", "EtherChannel", "DHCP", "FreeRADIUS", "Zabbix", "SNMP v3", "Syslog", "NTP", "IP SLA", "FortiGate VM", "DMZ"],

          keyFindings: [

            { observation: "The MPLS backbone transports two isolated VPNs through separate VRFs.", interpretation: "Customer traffic is logically separated over a shared physical infrastructure.", impact: "The architecture reproduces a service-provider or multi-site enterprise pattern with traffic isolation." },

            { observation: "OSPF, LDP and MP-BGP are used together to build MPLS transport and VPNv4 route exchange.", interpretation: "Routing and label distribution are validated end to end.", impact: "The project demonstrates practical understanding of modern backbone architectures." },

            { observation: "HSRP and EtherChannel maintain availability in the extended LAN.", interpretation: "Gateway redundancy and link aggregation reduce single points of failure.", impact: "Services remain available during a simulated distribution-device failure." },

            { observation: "AAA/RADIUS, VTY ACLs, Zabbix, SNMP, Syslog and IP SLA centralize administration and monitoring.", interpretation: "Network operations include access control, traceability and visibility.", impact: "The project goes beyond connectivity and covers realistic operational requirements." },

            { observation: "Two FortiGate firewalls in HA protect inter-zone traffic and a DMZ hosts dedicated services.", interpretation: "Security segmentation is integrated into the network architecture.", impact: "Inter-zone flows are controlled and exposed services are isolated from the internal network." },

          ],

          results: ["Operational IP/MPLS backbone.", "VPN/VRF validated through routing tables and connectivity tests.", "OSPF, LDP and MP-BGP adjacencies verified.", "Redundant extended LAN with HSRP and EtherChannel.", "Zabbix monitoring and AAA/RADIUS deployed.", "FortiGate HA and DMZ integrated with connectivity validation."],

          screenshots: ["Technical captures extracted directly from the IP/MPLS PDF report."],

          screenshotImages: [

            { src: "/images/projects/mpls-backbone/mpls-vpn-topology.webp", alt: "IP MPLS backbone topology with VPN sites", caption: "MPLS/VPN topology — Global view of the backbone and customer sites." },

            { src: "/images/projects/mpls-backbone/ldp-and-mpls-validation.webp", alt: "LDP neighbors and MPLS switching validation", caption: "MPLS/LDP validation — LDP neighbors and MPLS switching table." },

            { src: "/images/projects/mpls-backbone/mp-bgp-and-vrf-validation.webp", alt: "MP-BGP VPNv4 and VRF routing table validation", caption: "MP-BGP and VRF validation — VPNv4 BGP state, routes and connectivity tests." },

            { src: "/images/projects/mpls-backbone/lan-extended-architecture.webp", alt: "Extended LAN global architecture", caption: "Extended LAN — Redundant architecture with VLANs, HSRP and EtherChannel." },

            { src: "/images/projects/mpls-backbone/aaa-zabbix-architecture.webp", alt: "AAA RADIUS and Zabbix monitoring architecture", caption: "Security and monitoring — AAA/RADIUS, SNMP, Syslog, NTP, IP SLA and Zabbix." },

            { src: "/images/projects/mpls-backbone/zabbix-monitoring-validation.webp", alt: "Zabbix dashboard and monitoring validation", caption: "Zabbix validation — Monitored hosts and received events." },

            { src: "/images/projects/mpls-backbone/fortigate-dmz-architecture.webp", alt: "FortiGate high availability and DMZ architecture", caption: "FortiGate HA and DMZ — Firewall, zone and DMZ service integration." },

            { src: "/images/projects/mpls-backbone/dmz-connectivity-validation.webp", alt: "DMZ connectivity and monitoring validation", caption: "DMZ validation — Connectivity tests and hosts integrated into Zabbix." },

          ],

          securityFindings: ["Logical customer isolation through VRF and MPLS VPN.", "Administration access restricted with AAA/RADIUS and VTY ACLs.", "Centralized monitoring through Zabbix, SNMP, Syslog, NTP and IP SLA.", "INSIDE, OUTSIDE and DMZ zone segmentation.", "High availability through HSRP, EtherChannel and FortiGate Active-Passive HA."],

          riskImpact: "Without MPLS architecture, redundancy and centralized monitoring, a multi-site infrastructure can suffer from weak isolation, limited visibility and reduced service continuity. This project demonstrates a more robust, segmented and operable design.",

          risks: ["Customer isolation issues if VRFs or Route Targets are misconfigured.", "Availability loss without LAN or firewall redundancy.", "Weak traceability without AAA, Syslog and centralized monitoring.", "Excessive service exposure without DMZ segmentation and firewall policies."],

          recommendations: ["Document addressing, VRFs, RDs and RTs systematically.", "Maintain connectivity and failover tests after each change.", "Harden administration with SSH, centralized AAA, named accounts and logging.", "Monitor critical devices with SNMP, Syslog, NTP and IP SLA.", "Regularly test firewall policies, high availability and DMZ service access."],

          skillsDeveloped: ["Network Engineering", "MPLS", "VPN", "VRF", "OSPF", "LDP", "MP-BGP", "Cisco IOS", "High Availability", "HSRP", "EtherChannel", "AAA/RADIUS", "Zabbix", "FortiGate", "DMZ", "Technical Reporting"],

          deliverables: ["PDF report", "Technical captures extracted from the report", "Topology and configuration validation evidence", "Bilingual portfolio synthesis"],

          tags: ["MPLS", "VPN", "VRF", "OSPF", "LDP", "MP-BGP", "HSRP", "Zabbix", "FortiGate"],

          coverImage: "/images/projects/covers/mpls-backbone-cover.svg",

          coverAlt: "IP/MPLS backbone with VPN, monitoring and network security controls",

          disclaimer: "Project performed in a GNS3 lab environment. Captures are extracted from the provided report and do not contain confidential information according to the chosen publication scope.",

          reportUrl: "/reports/backbone-ip-mpls-report.pdf",

        },

        {

          slug: "devsecops-fastapi-soc-osint",

          title: "DevSecOps Pipeline for a FastAPI SOC/OSINT Application",

          category: "DevSecOps · CI/CD Security · Application Security · Monitoring",

          shortDescription:

            "Secure CI/CD pipeline for a FastAPI SOC OSINT application. The project automates checkout, SAST, secret scanning, Docker build, image scanning, DAST staging, ZAP Baseline, report archiving, local Kubernetes and monitoring.",

          overview: "Build of a complete DevSecOps pipeline for a FastAPI SOC OSINT application.",

          context: "Academic continuous-security project for a Python/FastAPI application, with Jenkins as the CI/CD orchestrator and automated security gates.",

          objectives: ["Automate build and scans", "Check code, secrets, Docker image and live application", "Archive security reports", "Prepare Kubernetes deployment and monitoring"],

          objectiveText:

            "Build a complete DevSecOps pipeline for a FastAPI SOC OSINT application by automating security controls, dynamic testing, evidence archiving and deployment preparation.",

          environmentItems: ["FastAPI / Python SOC OSINT application", "Jenkins running in Docker", "Docker build with devsecops-image", "Local DAST staging through Docker network ci-net", "Local Kubernetes with Kind", "Monitoring with Prometheus, Grafana, Alertmanager, Pushgateway and Node Exporter"],

          labEnvironment:

            "The project uses Jenkins in Docker, an application Docker image, local DAST staging, a Kind Kubernetes cluster and a Prometheus/Grafana monitoring stack.",

          architecture: "GitHub and the Jenkinsfile feed Jenkins, which orchestrates Bandit, Gitleaks, Docker, Trivy, OWASP ZAP, report archiving, Kind/Kubernetes and monitoring.",

          methodologySteps: [

            { title: "Pipeline as code", text: "The Jenkinsfile fixes the stage order: checkout, Bandit, Gitleaks, Docker build, Trivy, DAST staging, ZAP Baseline, final result and post actions." },

            { title: "Code and secret controls", text: "Bandit scans app.py, webapp.py and osint_reporter, while Gitleaks searches for real secrets in the repository." },

            { title: "Image and DAST", text: "Docker produces an application image scanned by Trivy. The container is then launched in local staging for an OWASP ZAP Baseline scan." },

            { title: "Ops and observability", text: "The same Docker artifact is used for Kind Kubernetes, then Prometheus, Grafana and Alertmanager provide runtime visibility." },

          ],

          methodology: ["GitHub checkout", "Bandit SAST", "Gitleaks secret scan", "Docker build", "Trivy image scan", "Deploy local staging for DAST", "OWASP ZAP Baseline", "Archive reports", "Kind/Kubernetes", "Prometheus/Grafana monitoring"],

          tools: ["Python", "FastAPI", "Jenkins", "Docker", "Bandit", "Gitleaks", "Trivy", "OWASP ZAP Baseline", "Kind", "Kubernetes", "Terraform", "Prometheus", "Grafana", "Alertmanager", "Pushgateway", "Node Exporter"],

          keyFindings: [

            { observation: "The final pipeline runs 9 stages in a deterministic order.", interpretation: "The Jenkinsfile makes the controls reproducible and traceable.", impact: "Each run produces consistent evidence across logs, reports and artifacts." },

            { observation: "Bandit reports 0 Medium/High findings and Gitleaks reports 0 secrets.", interpretation: "The code and secret gates pass on the target project scope.", impact: "Critical Python code issues and secret leaks do not block this build." },

            { observation: "Trivy detects 25 HIGH/CRITICAL findings in the Docker image with a warn-only policy.", interpretation: "The pipeline archives the risk instead of blocking for the academic demonstration.", impact: "The image requires future hardening before a strict production policy." },

            { observation: "OWASP ZAP Baseline reports 0 High alerts, 4 Medium and 6 Low.", interpretation: "The ZAP High gate passes on the live staging application.", impact: "The pipeline validates DAST while keeping non-blocking alerts in reports." },

            { observation: "Bandit, Gitleaks, Trivy, ZAP JSON and HTML reports are archived in Jenkins.", interpretation: "Artifacts provide technical evidence after execution.", impact: "The project supports review, audit and security-gate justification." },

          ],

          results: ["Jenkins pipeline finished with SUCCESS.", "0 Bandit Medium/High finding.", "0 Gitleaks secret.", "25 Trivy HIGH/CRITICAL findings in warn-only mode.", "0 ZAP High alert, 4 Medium and 6 Low.", "Security reports archived in Jenkins."],

          screenshots: ["Technical screenshots extracted from the DevSecOps PDF presentation."],

          screenshotImages: [

            { src: "/images/projects/devsecops-jenkins/fastapi-dashboard.webp", alt: "FastAPI SOC OSINT dashboard", caption: "FastAPI SOC OSINT application" },

            { src: "/images/projects/devsecops-jenkins/jenkins-stage-view.webp", alt: "Jenkins Stage View showing successful DevSecOps gates", caption: "Jenkins pipeline and security gates" },

            { src: "/images/projects/devsecops-jenkins/jenkins-console-artifacts.webp", alt: "Jenkins console listing archived Bandit Gitleaks Trivy and ZAP reports", caption: "Console and archived artifacts" },

            { src: "/images/projects/devsecops-jenkins/kubernetes-kind.webp", alt: "Kind Kubernetes verification for DevSecOps pods and services", caption: "Kind Kubernetes deployment" },

            { src: "/images/projects/devsecops-jenkins/prometheus-monitoring.webp", alt: "Prometheus interface showing monitoring targets in UP state", caption: "Prometheus monitoring" },

            { src: "/images/projects/devsecops-jenkins/terraform-iac.webp", alt: "Terraform output validating the infrastructure configuration", caption: "Infrastructure as Code (IaC)" },

          ],

          securityFindings: ["Python SAST without Medium/High finding in the scanned scope.", "No real secret detected by Gitleaks.", "Docker image has 25 HIGH/CRITICAL findings to harden.", "ZAP DAST has no blocking High alert.", "Security reports are archived for audit."],

          riskImpact: "The project demonstrates an operational DevSecOps chain, but the Trivy scan shows that the Docker image still needs hardening before strict production use. The current policy remains warn-only for the academic demonstration.",

          risks: ["HIGH/CRITICAL vulnerabilities in the image if left unresolved.", "Trivy warn-only policy is acceptable for demo but insufficient for production.", "ZAP Medium/Low alerts should be tracked in a security backlog.", "Monitoring should be extended to cover more application metrics."],

          recommendations: ["Harden the Trivy policy to block selected critical findings in production.", "Fix or justify image vulnerabilities reported by Trivy.", "Add automated functional tests in addition to security gates.", "Extend application monitoring and business alerts.", "Industrialize image push to a registry and continuous Kubernetes deployment.", "Keep systematic report archiving as audit evidence."],

          skillsDeveloped: ["DevSecOps", "CI/CD Security", "Jenkins", "SAST", "Secret Scanning", "Container Security", "DAST", "Kubernetes", "Monitoring", "Technical Reporting"],

          deliverables: ["Local PDF report", "Cropped and protected screenshots", "Archived Bandit, Gitleaks, Trivy and ZAP reports", "Concise recruiter-oriented synthesis"],

          tags: ["FastAPI", "Jenkins", "Docker", "Bandit", "Gitleaks", "Trivy", "OWASP ZAP", "Kubernetes", "Prometheus"],

          coverImage: "/images/projects/covers/devsecops-cover.svg",

          coverAlt: "Jenkins Stage View for the FastAPI SOC OSINT DevSecOps pipeline",

          disclaimer: "Project shown without secrets, tokens, credentials or confidential information. Published screenshots are limited to useful technical evidence from the lab.",

          githubUrl: "https://github.com/AmeniAz12/devsecops-project",

        },

        {

          slug: "scanpot-security-monitoring-toolbox",

          title: "ScanPot - Scanner, Honeypot and SOC Dashboard",

          category: "Python · Flask · SOC · Web Security",

          shortDescription:

            "Educational Flask application combining an XSS/SQLi scanner, honeypot, decoy endpoints, risk scoring and a SOC dashboard to visualize suspicious attempts in an authorized lab.",

          overview: "Educational web security toolbox for detection, deception and SOC monitoring.",

          context: "Academic/personal Python Flask project built to understand web scanners, honeypots, suspicious-attempt logging and SOC visualization.",

          objectives: ["Build a simple XSS and SQLi scanner", "Log suspicious interactions through a honeypot", "Add decoy endpoints with fake sensitive content", "Calculate risk scores and display alerts in a SOC dashboard"],

          objectiveText: "Develop a modular Flask application combining authorized vulnerability testing, defensive deception and security-event monitoring in a lab environment.",

          labEnvironment: "Local Python/Flask application with SQLite, Flask-SQLAlchemy, HTML/CSS templates, scanner, honeypot, decoy and dashboard routes.",

          environmentItems: ["Python and Flask", "SQLite with SQLAlchemy", "XSS/SQLi scanner routes", "Honeypot and banking-themed trap", "Decoy endpoints with fake secrets", "SOC dashboard with filters and alerts"],

          architecture: "The application organizes logic into Flask routes, core security logic, SQLAlchemy models, templates and static assets. Attempts are logged, scored and displayed in the dashboard.",

          methodology: ["Identify educational scénarios", "Develop scanner and honeypot routes", "Add risk scoring", "Build the SOC dashboard", "Document responsible use and remove secrets before publication"],

          methodologySteps: [

            { title: "Authorized scanner", text: "The scanner module tests simple XSS and SQLi cases on authorized targets with form extraction and controlled payloads." },

            { title: "Honeypot and deception", text: "Trap routes record suspicious interactions without exposing real sensitive data." },

            { title: "Risk scoring", text: "Events receive a score and a LOW, MEDIUM, HIGH or CRITICAL level based on detected indicators." },

            { title: "SOC dashboard", text: "Logs, alerts, filters and statistics make attempts observable and useful for analysis." },

          ],

          tools: ["Python", "Flask", "Flask-SQLAlchemy", "SQLite", "BeautifulSoup", "requests", "HTML/CSS", "GitHub"],

          results: ["Modular Flask application published on GitHub.", "Educational XSS/SQLi scanner implemented.", "Honeypot, decoy endpoints and banking-themed trap added.", "SOC dashboard with logs, alerts, filters and statistics.", "Demo video embedded in the portfolio."],

          keyFindings: [

            { observation: "Honeypot and decoy routes generate usable logs.", interpretation: "Defensive deception helps observe reconnaissance and intrusion-attempt behavior.", impact: "The dashboard helps explain triage and event prioritization." },

            { observation: "Risk scoring transforms raw requests into alert levels.", interpretation: "A simple classification makes events easier to read in a junior SOC context.", impact: "The project demonstrates a detection -> scoring -> visualization workflow." },

          ],

          screenshots: ["Preview and demo video for the ScanPot project."],

          screenshotImages: [

            { src: "/images/projects/scanpot/scanpot-preview.svg", alt: "ScanPot project preview with scanner honeypot and SOC dashboard", caption: "ScanPot security monitoring toolbox" },

          ],

          demoVideo: { src: "/videos/projects/scanpot/scanpot-demo.mp4", title: "Demo video", caption: "ScanPot demo embedded with playback speed controls to review the scanner, honeypot and SOC dashboard." },

          securityFindings: ["Development secrets removed before GitHub push.", "Local SQLite database and virtual environment excluded from the repository.", "Decoy endpoints limited to fake sensitive content.", "Authorized and educational-use warning documented."],

          riskImpact: "A scanner/honeypot tool can be misused if pointed at unauthorized systems. The project is therefore presented as an educational lab, with a clear warning and no real secrets published.",

          risks: ["Unauthorized scanner usage outside a lab.", "Banking-themed trap must be presented only as educational deception.", "Responsible-use documentation and safeguards must remain visible."],

          recommendations: ["Use only on authorized systems.", "Keep secrets in environment variables.", "Never expose real secrets in decoy endpoints.", "Add automated tests and hardened production configuration before any real deployment."],

          skillsDeveloped: ["Python", "Flask", "Web security", "Honeypot", "SOC dashboard", "Risk scoring", "Secure coding", "Security monitoring"],

          deliverables: ["GitHub repository", "Flask application", "SOC dashboard", "Demo video", "README documentation"],

          tags: ["Python", "Flask", "Honeypot", "SOC", "XSS", "SQLi", "Dashboard"],

          coverImage: "/images/projects/covers/websec-toolkit-cover.svg",

          coverAlt: "ScanPot scanner honeypot SOC dashboard preview",

          disclaimer: "Strictly educational project for authorized testing. No third-party system should be scanned without explicit permission. Decoys contain only fake data.",

          githubUrl: "https://github.com/AmeniAz12/ScanPot",

        },

        {

          slug: "python-web-scraping-darty",

          title: "Python Web Scraping - Laptop Offer Comparison",

          category: "Python · Selenium · Data Collection",

          shortDescription:

            "Python web scraping project using Selenium and undetected-chromedriver to collect new and used laptop offers, then export structured product data to CSV.",

          overview: "Automated product data collection from public catalogue pages and CSV export for comparison.",

          context: "Personal data collection and web automation project built for learning and portfolio purposes.",

          objectives: ["Automate navigation across catalogue pages", "Extract names, categories, prices, ratings and product links", "Compare new and used offers", "Export results to usable CSV files"],

          objectiveText: "Build two Python scripts able to browse product listings, extract useful fields and produce separate CSV exports for new and used offers.",

          labEnvironment: "Local Python environment with Selenium, undetected-chromedriver, pandas and a Chrome browser.",

          environmentItems: ["Python 3.12", "Selenium for browser automation", "undetected-chromedriver to drive Chrome", "pandas to structure and export data", "CSV as output format"],

          architecture: "Two Python scripts drive Chrome, parse product blocks, extract useful fields and append rows to neuf.csv and occasion.csv.",

          methodology: ["Identify product HTML selectors", "Automate catalogue page loading", "Handle pagination", "Extract product fields", "Remove duplicates and export to CSV"],

          methodologySteps: [

            { title: "Automated browsing", text: "Selenium opens catalogue pages and handles cookie banner interaction and pagination." },

            { title: "Structured extraction", text: "The scripts extract name, category, state, old price, current price, rating and product link." },

            { title: "Offer separation", text: "One script processes new offers and another processes used offers to produce two distinct datasets." },

            { title: "CSV export", text: "pandas consolidates data, removes duplicates and writes the results to CSV files." },

          ],

          tools: ["Python", "Selenium", "undetected-chromedriver", "pandas", "CSV", "GitHub"],

          results: ["Two functional Python scripts.", "Generated neuf.csv and occasion.csv exports.", "Structured product data ready for comparison.", "GitHub repository prepared with a clean README and requirements file."],

          keyFindings: [

            { observation: "Product information is available through repeated HTML blocks.", interpretation: "Selector-based extraction can transform catalogue pages into tabular datasets.", impact: "The data becomes easier to compare in CSV format." },

            { observation: "New and used offers follow a similar flow but produce slightly different outputs.", interpretation: "Keeping two scripts simplifies initial collection and analysis.", impact: "The project stays readable for portfolio review and can be refactored later." },

          ],

          screenshots: ["Illustrative preview of the scraping pipeline and CSV exports."],

          screenshotImages: [

            { src: "/images/projects/web-scraping/darty-scraping-preview.svg", alt: "Preview of a Python web scraping pipeline exporting data to CSV", caption: "Web scraping pipeline to CSV" },

          ],

          securityFindings: ["No secret or credential is published in the repository.", "The project is limited to public product data collection.", "README includes a responsible-use note."],

          riskImpact: "Web scraping must remain responsible: respect the target site's terms of service, avoid excessive traffic and never collect personal or confidential data.",

          risks: ["Fragility if the website HTML structure changes.", "Compliance risk if terms of service are not respected.", "Maintenance required for selectors and pagination."],

          recommendations: ["Add configuration for headless mode.", "Centralize shared functions across both scripts.", "Add cleaner logs and more precise error handling.", "Check terms of service before any intensive execution."],

          skillsDeveloped: ["Python", "Web scraping", "Selenium", "Data extraction", "CSV processing", "pandas", "GitHub documentation"],

          deliverables: ["GitHub repository", "Python scripts", "CSV exports", "README and requirements"],

          tags: ["Python", "Selenium", "Web Scraping", "pandas", "CSV"],

          coverImage: "/images/projects/covers/web-scraping-cover.svg",

          coverAlt: "Preview of the Python web scraping and CSV export project",

          disclaimer: "Project shown for educational and portfolio purposes. Usage must remain responsible, comply with the target site's terms of service and avoid collecting personal data.",

          githubUrl: "https://github.com/AmeniAz12/ScrappingProject",

        },

        {

          slug: "password-security-analyzer",

          title: "Password Security Analyzer",

          category: "Python · Flask · Secure Coding",

          shortDescription:

            "Python/Flask tool for local password strength analysis with scoring, weakness detection, recommendations and secure password generation.",

          overview: "Educational application for understanding password strength and creation best practices.",

          context: "Personal defensive cybersecurity project focused on awareness, local analysis and secure coding.",

          objectives: ["Evaluate password strength", "Identify weak patterns", "Explain detected weaknesses", "Provide recommendations and secure generation"],

          objectiveText: "Build a clear portfolio tool that analyzes passwords locally and explains strength factors without exposing sensitive data.",

          labEnvironment: "Local Python/Flask application with a web interface and password analysis logic.",

          environmentItems: ["Python", "Flask", "Local analysis", "Strength score", "Password generation", "GitHub documentation"],

          architecture: "A Flask application receives user input, calculates a score, detects weaknesses and returns educational recommendations.",

          methodology: ["Define strength criteria", "Detect length, complexity and weak patterns", "Calculate a score", "Display recommendations", "Document responsible use"],

          methodologySteps: [

            { title: "Local analysis", text: "The analysis is presented as local and privacy-oriented to avoid unnecessary password exposure." },

            { title: "Scoring", text: "Passwords are evaluated through multiple user-readable criteria." },

            { title: "Explanation", text: "Detected weaknesses are transformed into concrete recommendations." },

            { title: "Documentation", text: "The GitHub repository explains the educational context and tool limits." },

          ],

          tools: ["Python", "Flask", "Password security", "Secure coding", "GitHub"],

          results: ["GitHub repository professionalized.", "Strength scoring and weakness analysis documented.", "Project added to the portfolio as a defensive cybersecurity tool."],

          keyFindings: [

            { observation: "Weak passwords often follow predictable patterns.", interpretation: "Educational analysis helps explain common mistakes.", impact: "Users learn how to create stronger passwords." },

          ],

          screenshots: ["Illustrative preview of the strength analysis workflow."],

          screenshotImages: [

            { src: "/images/projects/password-analyzer/password-analyzer-preview.svg", alt: "Password security analyzer preview", caption: "Strength score and security checks" },

          ],

          securityFindings: ["Project focused on awareness and local analysis.", "No secret required in the repository.", "No personal data collection presented in the portfolio."],

          riskImpact: "A password analyzer must avoid collecting or logging real passwords. The project is presented as an educational and local tool.",

          risks: ["Never reuse real sensitive passwords in a public demo.", "Avoid clear-text password logging.", "Clarify the limits of a simple strength score."],

          recommendations: ["Add unit tests for scoring criteria.", "Verify that inputs are not logged.", "Add a limitations and best-practices section to the README."],

          skillsDeveloped: ["Python", "Flask", "Secure coding", "Password security", "Security awareness"],

          deliverables: ["GitHub repository", "Flask application", "README"],

          tags: ["Python", "Flask", "Passwords", "Secure Coding", "Awareness"],

          coverImage: "/images/projects/covers/password-analyzer-cover.svg",

          coverAlt: "Password security analyzer preview",

          disclaimer: "Educational project. Do not test or enter real sensitive passwords in a public demonstration.",

          githubUrl: "https://github.com/AmeniAz12/password-security-analyzer",

        },

        {

          slug: "network-recon-analyzer",

          title: "Network Recon Analyzer",

          category: "Python · Network Security · Reconnaissance",

          shortDescription:

            "Educational Python network reconnaissance tool for port scanning, service detection and banner grabbing on authorized targets.",

          overview: "Network reconnaissance tool inspired by enumeration and banner grabbing fundamentals.",

          context: "Personal network security project built to learn technical reconnaissance basics in an authorized context.",

          objectives: ["Scan ports on an authorized target", "Identify exposed services", "Collect banners", "Produce a usable summary"],

          objectiveText: "Develop a simple Python network reconnaissance tool to understand the visible attack surface and document exposed services.",

          labEnvironment: "Local Python execution against lab targets or explicitly authorized systems.",

          environmentItems: ["Python", "Network sockets", "Port scanning", "Service detection", "Banner grabbing", "GitHub documentation"],

          architecture: "The script checks a port range, tries to identify services and consolidates results for analysis.",

          methodology: ["Define the authorized target", "Scan ports", "Identify services", "Collect banners", "Interpret the exposed surface"],

          methodologySteps: [

            { title: "Authorized scope", text: "The project states that network reconnaissance must target only authorized environments." },

            { title: "Port scanning", text: "The tool identifies which ports respond on the target." },

            { title: "Service detection", text: "Services and banners help understand exposed technologies." },

            { title: "Summary", text: "Results support prioritizing security checks." },

          ],

          tools: ["Python", "Network scanning", "Banner grabbing", "Reconnaissance", "GitHub"],

          results: ["GitHub repository renamed with a professional URL.", "Project documented as an educational authorized reconnaissance tool.", "Portfolio block added with a clear warning."],

          keyFindings: [

            { observation: "Open ports provide an initial view of the attack surface.", interpretation: "Technical reconnaissance helps prioritize controls.", impact: "The project demonstrates network enumeration fundamentals." },

          ],

          screenshots: ["Illustrative preview of the network reconnaissance workflow."],

          screenshotImages: [

            { src: "/images/projects/network-recon/network-recon-preview.svg", alt: "Network reconnaissance analyzer preview", caption: "Port scan and service detection" },

          ],

          securityFindings: ["Authorized-use warning required.", "No secret required for the repository.", "Project presented as an educational lab."],

          riskImpact: "Unauthorized network scanning can be illegal or perceived as hostile. The project must remain limited to controlled and authorized environments.",

          risks: ["Scanning unauthorized targets.", "Incomplete interpretation without manual validation.", "Need to limit traffic and scan scope."],

          recommendations: ["Add a rate-limit option.", "Add local target examples.", "Clearly document limitations and authorized use."],

          skillsDeveloped: ["Python", "Network security", "Reconnaissance", "Port scanning", "Banner grabbing"],

          deliverables: ["GitHub repository", "Python script", "README"],

          tags: ["Python", "Network", "Recon", "Port Scan", "Security"],

          coverImage: "/images/projects/covers/network-recon-cover.svg",

          coverAlt: "Network reconnaissance analyzer preview",

          disclaimer: "Educational project for authorized targets only. Do not scan third-party networks without explicit permission.",

          githubUrl: "https://github.com/AmeniAz12/network-recon-analyzer",

        },

        {

          slug: "agent-tesla-malware-analysis",

          title: "Agent Tesla Malware Analysis",

          category: "Malware Analysis · Sandboxing · Windows Security",

          shortDescription:

            "Controlled analysis of an Agent Tesla sample in an isolated Windows 7 laboratory. The project combines automated, static and dynamic analysis to study the sample's behavior, its impact on the system and appropriate detection and remediation measures.",

          overview: "Controlled analysis of an Agent Tesla sample in an isolated Windows 7 laboratory.",

          context: "Educational work conducted in an isolated local environment, without distributing the sample.",

          objectives: ["Identify the nature of the malware", "Observe system and network traces", "Document risks and protection measures"],

          objectiveText:

            "Study the sample's behavior without exposing a real system, identify observable traces and document the associated risks and protection measures.",

          environmentItems: [

            "Isolated local laboratory",

            "Windows 7 VM as the victim machine",

            "REMnux VM as the analysis machine",

            "VMware LAN Segment without direct Internet access",

            "INetSim to simulate controlled network services",

            "Snapshots to restore VMs after analysis",

          ],

          labEnvironment:

            "Windows 7 and REMnux are placed on an isolated VMware LAN Segment. Windows 7 does not use NAT, and INetSim simulates the network services observed in the laboratory.",

          architecture: "The isolated Windows 7 VM communicates only with REMnux inside the VMware lab segment.",

          methodologySteps: [

            {

              title: "Automated analysis",

              text: "VirusTotal and Hybrid Analysis were used to obtain an initial view of the sample, its characteristics, antivirus verdict and detectable indicators.",

            },

            {

              title: "Static analysis",

              text: "The file was examined without execution using PE information and strings to identify its .NET structure, sections, mscoree.dll import and visible strings.",

            },

            {

              title: "Dynamic analysis and sandboxing",

              text: "Controlled execution in the isolated laboratory made it possible to observe the launched process, file access, registry access and traffic redirected to REMnux.",

            },

            {

              title: "Impact analysis",

              text: "Observed behavior was interpreted to assess risks to the Windows 7 workstation and propose detection and remediation measures.",

            },

          ],

          methodology: ["Automated analysis with VirusTotal and Hybrid Analysis", "Static PE and strings analysis", "Controlled execution in isolated Windows 7", "Observation with Process Explorer, Procmon, Wireshark, INetSim and Regshot"],

          tools: ["MalwareBazaar", "VirusTotal", "Hybrid Analysis", "Falcon Sandbox", "REMnux", "INetSim", "VMware LAN Segment", "Windows 7", "Process Explorer", "Procmon", "Wireshark", "Regshot", "file", "objdump", "strings"],

          keyFindings: [

            {

              observation: "VirusTotal detects the sample as malicious with 54 engines out of 71, and Hybrid Analysis reports a Threat Score of 71/100.",

              interpretation: "The automated analyses converge on a malicious verdict, although family labels vary across platforms.",

              impact: "The file should be handled as a confirmed threat during triage or incident response.",

            },

            {

              observation: "Static analysis confirms a Windows PE32 .NET executable with 3 sections, mscoree.dll import and high entropy in the .text section.",

              interpretation: "The report associates this high entropy with probable obfuscation or packing.",

              impact: "Static analysis alone is not enough to understand the sample's real behavior.",

            },

            {

              observation: "Strings do not reveal any clear-text URL, IP address, C2 domain, password, token or persistence key.",

              interpretation: "Sensitive configuration appears hidden, obfuscated, encrypted or dynamically rebuilt during execution.",

              impact: "Controlled dynamic analysis is required to search for observable traces.",

            },

            {

              observation: "In the lab, AgentTesla.exe appears under the DoodleJumpMini / Antigravity identity, then the process crashes with a .NET error.",

              interpretation: "The report identifies a deceptive identity and mentions possible VM detection or incompatibility.",

              impact: "The crash limits full post-infection behavior observation.",

            },

            {

              observation: "Procmon, Wireshark, INetSim and Regshot show file access, registry reads, DNS/ICMP traffic redirected to REMnux and system modifications.",

              interpretation: "These traces confirm observable system and network activity in the isolated lab.",

              impact: "These artifacts can guide detection and remediation without exposing a real network.",

            },

          ],

          results: ["Malicious detection by VirusTotal and Hybrid Analysis.", "PE32 .NET executable with probable strong obfuscation.", "No clear-text network or C2 string visible.", "Exécution observed under a deceptive identity, with file, registry and network interactions in the lab."],

          screenshots: ["Technical screenshots extracted from the Agent Tesla PDF report."],

          screenshotImages: [

            {

              src: "/images/projects/agent-tesla/automated-analysis.webp",

              alt: "Automated Agent Tesla analysis dashboard in an isolated laboratory",

              caption: "Automated analysis result",

            },

            {

              src: "/images/projects/agent-tesla/static-analysis.webp",

              alt: "Static Agent Tesla analysis with PE and .NET properties",

              caption: "Static PE and .NET analysis",

            },

            {

              src: "/images/projects/agent-tesla/sandbox-behavior.webp",

              alt: "Hybrid Analysis sandbox summary for the Agent Tesla sample",

              caption: "Sandboxing result",

            },

            {

              src: "/images/projects/agent-tesla/dynamic-analysis.webp",

              alt: "Agent Tesla process observation in Process Explorer",

              caption: "Dynamic behavior observation",

            },

            {

              src: "/images/projects/agent-tesla/network-activity.webp",

              alt: "Network traffic observation during Agent Tesla dynamic analysis",

              caption: "Observed network activity",

            },

            {

              src: "/images/projects/agent-tesla/system-impact.webp",

              alt: "Regshot system change observation with file and registry paths",

              caption: "Observed system impact",

            },

          ],

          securityFindings: ["Multi-antivirus detection confirmed.", "Probable obfuscation observed in the .text section.", "No clear-text C2 visible in strings.", "File, registry and network activity observed in the lab."],

          riskImpact: "The report studies a spyware / infostealer risk on Windows: credential theft, keylogging, system information collection and exfiltration are presented as known objectives of the Agent Tesla family. In this laboratory, no real data theft is claimed.",

          risks: ["Potential credential and system information collection according to the Agent Tesla profile described in the report.", "Persistence, injection and network activities reported by automated analyses.", "System modifications observed after execution in Windows 7.", "Incomplete post-infection observation due to the process crash."],

          recommendations: ["Isolate the compromised or suspected machine before investigation.", "Monitor file, registry and network events related to the observed behavior.", "Keep systems updated and avoid using obsolete workstations such as Windows 7 in production.", "Strengthen awareness against ZIP archives and malicious attachments.", "Protect and rotate credentials that may have been exposed.", "Use confirmed indicators only after validation in the lab context."],

          skillsDeveloped: ["Malware Analysis", "Static Analysis", "Dynamic Analysis", "Sandboxing", "Windows Security", "Behavioral Analysis", "Incident Analysis", "Technical Reporting"],

          deliverables: ["Local PDF report", "Technical lab screenshots", "Concise recruiter-oriented synthesis"],

          tags: ["Malware Analysis", "Static Analysis", "Dynamic Analysis", "Sandboxing", "Windows Security"],

          coverImage: "/images/projects/covers/agent-tesla-cover.svg",

          coverAlt: "Sandbox analysis screenshot for the Agent Tesla project",

          disclaimer: "This project was conducted in an isolated and controlled laboratory environment for cybersecurity education and research purposes. No external or unauthorized system was targeted. No malware sample is provided or distributed.",

        },

        {

          slug: "ms17-010-eternalblue-lab",

          title: "Windows Security Assessment - MS17-010/EternalBlue",

          category: "Penetration Testing · Network Security · Vulnerability Assessment",

          shortDescription:

            "Controlled assessment of a Windows 7 Ultimate SP1 machine in a VMware Host-Only laboratory. The project covers network discovery, SMB enumeration, MS17-010 validation, controlled exploitation and lowuser/SYSTEM privilege comparison.",

          overview: "Penetration test conducted in a local VMware Host-Only lab against a Windows 7 Ultimate SP1 machine exposed over SMB.",

          context: "All activities were performed in an isolated and authorized local environment, with no external system targeted.",

          objectives: ["Identify the target and exposed services", "Enumerate SMB and validate MS17-010", "Demonstrate impact in the lab", "Compare lowuser and SYSTEM privileges", "Propose remediation measures"],

          objectiveText:

            "Assess SMB exposure on a Windows 7 Ultimate SP1 machine, confirm MS17-010 before exploitation, document the observed impact and prioritize technical fixes.",

          environmentItems: ["Local VMware Host-Only laboratory", "Kali Linux attacking machine", "Windows 7 Ultimate SP1 target machine", "Observed services: RPC, NetBIOS, SMB, RDP and dynamic RPC ports", "lowuser account used only for privilege comparison", "No external testing, no persistence and no sensitive data exfiltration"],

          labEnvironment:

            "The report describes a VMware Host-Only network with Kali Linux as the attacking machine and Windows 7 Ultimate SP1 as the target. Post-exploitation actions are limited to compromise evidence in the lab.",

          architecture: "Kali Linux and Windows 7 Ultimate SP1 communicate only inside the VMware Host-Only lab network.",

          methodologySteps: [

            { title: "Reconnaissance and scanning", text: "Nmap is used to verify the target, identify open ports and detect exposed Windows services, especially SMB and RDP." },

            { title: "SMB enumeration", text: "SMB NSE scripts and smbclient are used to confirm SMBv1, SMB security mode, OS information, shares and MS17-010 exposure." },

            { title: "Controlled exploitation", text: "Metasploit is used only after vulnerability validation to obtain a Meterpreter session in the laboratory context." },

            { title: "Post-exploitation and impact", text: "System commands verify the NT AUTHORITY / SYSTEM context, OS information, patch state and the difference from the lowuser account." },

          ],

          methodology: ["Lab preparation", "Nmap reconnaissance and scanning", "Detailed SMB enumeration", "MS17-010 validation", "Controlled exploitation with Metasploit", "Post-exploitation limited to evidence", "lowuser/SYSTEM comparison", "Remediation recommendations"],

          tools: ["Kali Linux", "Nmap", "smbclient", "Metasploit Framework", "Meterpreter", "xfreerdp", "msfvenom", "Windows commands", "VMware Host-Only"],

          keyFindings: [

            { observation: "The scan identifies ports including 135, 139, 445, 3389 and dynamic RPC ports.", interpretation: "SMB and RDP are reachable from Kali inside the lab.", impact: "SMB becomes the priority attack surface for MS17-010 verification." },

            { observation: "SMB scripts show SMBv1 enabled and message signing not required.", interpretation: "SMB is exposed with weak or obsolete configuration.", impact: "The probability of exploiting historical vulnerabilities increases significantly." },

            { observation: "The smb-vuln-ms17-010 script and Metasploit confirm that the target is vulnerable.", interpretation: "The exploitation condition is validated before controlled execution.", impact: "The risk is critical because MS17-010 enables remote compromise over SMB." },

            { observation: "Controlled exploitation obtains a Meterpreter session and then a shell as NT AUTHORITY / SYSTEM.", interpretation: "The exploit directly provides the highest privilege level on the machine.", impact: "The report concludes that the target is fully compromised in the lab." },

            { observation: "The lowuser scenario shows a limited context, different from the SYSTEM context obtained through MS17-010.", interpretation: "The comparison clarifies the gap between a weak user account and SYSTEM compromise.", impact: "It helps explain the real impact of EternalBlue exploitation." },

          ],

          results: ["Windows 7 Ultimate SP1 exposes SMBv1 and MS17-010.", "SMB message signing is not required.", "Metasploit obtains a Meterpreter session as NT AUTHORITY / SYSTEM.", "The lowuser account remains limited and is used as a pedagogical comparison."],

          screenshots: ["Technical screenshots extracted from the EternalBlue PDF report."],

          screenshotImages: [

            { src: "/images/projects/eternalblue/network-scan.webp", alt: "Nmap scan of exposed Windows services in the EternalBlue lab", caption: "Exposed service discovery" },

            { src: "/images/projects/eternalblue/smbv1-detection.webp", alt: "SMBv1 detection during SMB enumeration in the lab", caption: "SMBv1 enumeration" },

            { src: "/images/projects/eternalblue/ms17-010-validation.webp", alt: "MS17-010 validation with Nmap NSE script", caption: "MS17-010 validation" },

            { src: "/images/projects/eternalblue/metasploit-exploitation.webp", alt: "Metasploit configuration for controlled MS17-010 exploitation", caption: "Controlled exploitation" },

            { src: "/images/projects/eternalblue/system-session-proof.webp", alt: "SYSTEM session proof obtained in the EternalBlue lab", caption: "SYSTEM context proof" },

            { src: "/images/projects/eternalblue/privilege-comparison.webp", alt: "Comparison of lowuser and administrator privileges", caption: "Privilege comparison" },

          ],

          securityFindings: ["Obsolete Windows 7 Ultimate SP1.", "SMBv1 enabled on port 445/tcp.", "MS17-010 / EternalBlue exploitable.", "SMB signing not required.", "RDP exposed in the lab.", "Insufficient patch management."],

          riskImpact: "The report rates the global risk as critical: MS17-010 exploitation enables remote compromise with SYSTEM privileges. Evidence remains limited to system commands and a demonstration file, with no sensitive data exfiltration.",

          risks: ["Full workstation compromise with SYSTEM access.", "Remote code execution over SMB without physical access.", "Potential lateral movement if SMB/RDP are reachable in a real network.", "Governance and compliance risk from obsolete OS, SMBv1 and missing patches."],

          recommendations: ["Apply MS17-010 security updates.", "Disable SMBv1.", "Migrate from Windows 7 to a supported system.", "Restrict port 445/tcp to strictly required machines.", "Enable SMB signing where compatible.", "Harden RDP and implement verifiable patch management."],

          skillsDeveloped: ["Penetration Testing", "Network Security", "SMB enumeration", "Vulnerability Assessment", "Metasploit", "Post-Exploitation", "Risk Analysis", "Technical Reporting"],

          deliverables: ["Local PDF report", "Cropped and protected screenshots", "Concise recruiter-oriented synthesis"],

          tags: ["MS17-010", "EternalBlue", "SMB", "Nmap", "Metasploit", "Windows Security"],

          coverImage: "/images/projects/covers/eternalblue-cover.svg",

          coverAlt: "MS17-010 validation in the EternalBlue lab",

          disclaimer: "All activities were performed in an isolated and authorized local laboratory. No external or unauthorized system was targeted. No demonstration payload or executable file is provided or distributed.",

        },

        {

          slug: "wazuh-siem-lab",

          title: "Wazuh SIEM Deployment and Configuration",

          category: "SOC · SIEM · Security Monitoring",

          shortDescription: "Wazuh installation and configuration to centralize logs, monitor endpoints and analyze security events.",

          overview: "Deployment of a Wazuh environment for security monitoring.",

          context: "Local SOC/SIEM lab.",

          objectives: ["Centralize logs", "Monitor agents", "Analyze alerts", "Present dashboard results"],

          objectiveText: "Build an open-source SOC capable of collecting, correlating and analyzing security events in order to detect simulated attack scénarios in a lab.",

          labEnvironment: "SOC lab composed of a Wazuh Manager server, Wazuh agents installed on monitored machines, Suricata as a network IDS and Kali Linux to generate network scans and reconnaissance activity.",

          environmentItems: ["Wazuh Manager to centralize logs and alerts", "Wazuh agents on monitored machines", "Suricata for IDS traffic analysis", "Kali Linux to simulate network scans and reconnaissance", "Wazuh dashboard to visualize alerts in real time"],

          architecture: "Wazuh Manager centralizes agent logs and Suricata network events, then exposes detections in the dashboard for SOC analysis.",

          methodology: ["Install and configure Wazuh Manager", "Connect Wazuh agents to monitored machines", "Deploy Suricata as a network IDS", "Simulate scans and reconnaissance from Kali Linux", "Analyze real-time alerts in the dashboard"],

          methodologySteps: [

            { title: "Centralized collection", text: "System logs and security events are sent to Wazuh Manager for centralization." },

            { title: "Network detection", text: "Suricata inspects traffic and enriches SOC visibility with IDS alerts." },

            { title: "Attack simulation", text: "Kali Linux generates network scans and reconnaissance activity to validate detection." },

            { title: "SOC visualization", text: "Alerts are observed in the Wazuh dashboard to verify real-time detection and analysis." },

          ],

          tools: ["Wazuh", "Suricata", "Kali Linux", "Linux", "Log Analysis", "SIEM", "IDS", "Security Monitoring"],

          results: ["Logs centralized in Wazuh Manager", "Network scans and reconnaissance activity detected", "Alerts visualized in the Wazuh dashboard", "Validated extensible open-source SOC foundation"],

          keyFindings: [

            { observation: "Attacks simulated from Kali Linux generate events visible in Wazuh.", interpretation: "The collection and detection chain works across monitored machines, Suricata and the manager.", impact: "The SOC can detect reconnaissance activity faster and strengthen continuous monitoring." },

            { observation: "The dashboard centralizes alerts for real-time analysis.", interpretation: "SOC visibility becomes usable from a single interface.", impact: "Analysts can prioritize events and prepare improvements such as automated incident response." },

          ],

          screenshots: ["This project is primarily documented through a Wazuh dashboard demonstration video."],

          demoVideo: { src: "/videos/projects/wazuh-siem/wazuh-dashboard-demo.mp4", title: "Demo video", caption: "Wazuh dashboard demonstration with built-in speed controls to review alerts and navigation slower or faster." },

          securityFindings: ["Network scans detectable in the SOC", "Reconnaissance activity visible through alerts", "Security event centralization", "Future need for incident response automation"],

          riskImpact: "Without SOC monitoring, network scans and reconnaissance activity can remain invisible. This open-source architecture improves proactive detection and alert visualization.",

          risks: ["Limited visibility into security events", "Late detection of reconnaissance activity", "Difficulty correlating logs without centralization", "Incident response remains manual"],

          recommendations: ["Maintain and enrich Wazuh and Suricata rules", "Define dashboards by severity and alert type", "Establish SOC triage procedures", "Gradually add incident response automation"],

          skillsDeveloped: ["SOC", "SIEM", "Wazuh", "Suricata", "IDS", "Log analysis", "Security monitoring", "Incident detection"],

          deliverables: ["Portfolio case study", "Wazuh dashboard demonstration video", "Architecture and attack scenario synthesis"],

          tags: ["Wazuh", "SIEM", "Suricata", "Kali Linux", "SOC"],

          coverImage: "/images/projects/covers/wazuh-cover.svg",

          coverAlt: "Wazuh SOC dashboard preview with alerts and detection flow",

          disclaimer: "Project performed in a local lab with controlled simulations. No external or unauthorized system was targeted.",

        },

        {

          slug: "owasp-juice-shop-lab",

          title: "OWASP Juice Shop Web Security Lab",

          category: "Application Security · OWASP Top 10 · Web Pentesting",

          shortDescription: "Educational OWASP Top 10 A03:2021 - Injection case study showing an authentication bypass on OWASP Juice Shop in a local lab.",

          overview: "Web security lab focused on SQL injection and login form bypass.",

          context: "Intentionally vulnerable local application, not a real company.",

          objectives: ["Understand the A03:2021 - Injection risk", "Demonstrate SQL injection on a login form", "Document impact and expected protections"],

          objectiveText: "Show how unvalidated user input can be interpreted as SQL code, neutralize password verification and cause unauthorized access in OWASP Juice Shop.",

          labEnvironment: "Local lab with OWASP Juice Shop exposed at http://localhost:3000/#/login for a controlled demonstration.",

          environmentItems: ["Intentionally vulnerable OWASP Juice Shop application", "Web browser used to interact with the login form", "Educational scenario focused on A03:2021 - Injection", "Short embedded video to replay the demonstration"],

          architecture: "Local web application, login form, vulnerable SQL query and lab database.",

          methodology: ["Identify the user input entry point", "Enter a SQL payload in the email field", "Use any value in the password field", "Observe the authentication bypass and document the impact"],

          methodologySteps: [

            { title: "OWASP Top 10 context", text: "The project targets A03:2021 - Injection, a major risk when user-controlled data reaches an interpreter directly." },

            { title: "Controlled payload", text: "The email field receives the payload ' or 1=1-- to close the string, force a true condition and comment out the rest of the query." },

            { title: "Visual validation", text: "The login attempt is performed in Juice Shop and the expected result is unauthorized access to the administrator account." },

            { title: "Remediation", text: "Expected protections include prepared statements, input validation, least privilege and defensive monitoring." },

          ],

          tools: ["OWASP Juice Shop", "Web browser", "OWASP Top 10 2021", "SQL Injection", "Reporting"],

          results: ["Authentication bypass demonstrated with the payload ' or 1=1--", "Login Admin challenge solved in Juice Shop", "Impact and countermeasures documented"],

          keyFindings: [

            { observation: "The email field accepts input that changes the expected SQL logic.", interpretation: "User data is not isolated from the query and becomes executable by the SQL interpreter.", impact: "An attacker can bypass authentication and access an account without knowing the password." },

            { observation: "The payload ' or 1=1-- forces a true condition and comments out the rest of the query.", interpretation: "Password verification is neutralized in the final query.", impact: "Application risk includes unauthorized access, data leakage and data modification or deletion." },

          ],

          screenshots: ["Screenshots extracted from the PPTX with the Juice Shop login proof and pedagogical visuals used in the presentation."],

          screenshotImages: [

            { src: "/images/projects/owasp-juice-shop/login-payload.webp", alt: "OWASP Juice Shop login form with a SQL injection payload in the email field", caption: "SQL injection payload in the Juice Shop login" },

            { src: "/images/projects/owasp-juice-shop/injection-concept.webp", alt: "Injection concept illustration", caption: "A03:2021 - Injection concept" },

            { src: "/images/projects/owasp-juice-shop/juice-shop-logo.webp", alt: "OWASP Juice Shop logo", caption: "Intentionally vulnerable OWASP Juice Shop application" },

          ],

          demoVideo: { src: "/videos/projects/owasp-juice-shop/sql-injection-demo.mp4", title: "Demo video", caption: "Demo extracted from the PowerPoint with built-in playback speed controls to replay the bypass slower or faster." },

          securityFindings: ["SQL injection possible through the email field", "Administrator authentication bypass", "No strict separation between SQL query and user input"],

          riskImpact: "A SQL injection can lead to authentication bypass, unauthorized account access, sensitive data exposure and data modification or deletion.",

          risks: ["Authentication bypass", "Unauthorized account access", "Sensitive data exposure", "Data modification or deletion"],

          recommendations: ["Use prepared and parameterized queries", "Validate and filter user input according to the expected format", "Apply least privilege to the database account", "Monitor abnormal attempts from a defensive perspective"],

          skillsDeveloped: ["Application security", "OWASP Top 10", "SQL Injection", "Web pentesting", "Secure coding", "Reporting"],

          deliverables: ["Portfolio case study", "Screenshots extracted from the PPTX", "Embedded demo video"],

          tags: ["OWASP Top 10", "Juice Shop", "SQL Injection"],

          coverImage: "/images/projects/covers/owasp-cover.svg",

          coverAlt: "OWASP Juice Shop login form used to test a SQL injection",

          disclaimer: "Démonstration performed only in OWASP Juice Shop, an intentionally vulnerable application designed for learning.",

        },

      ],

    },

    skills: {

      label: "Skills",

      heading: "Technical skills",

      subtitle: "Skills organized by cybersecurity domain.",

      groups: [

        { name: "DevSecOps", items: ["Jenkins", "CI/CD", "Docker", "Semgrep", "SonarQube", "Trivy", "OWASP ZAP", "SAST", "DAST", "Vulnerability analysis"] },

        { name: "Cloud and containers", items: ["Kubernetes", "K3s", "Docker", "AWS - fundamentals and certification in progress", "Container security"] },

        { name: "Pentest and application security", items: ["OWASP Top 10", "Burp Suite", "Nmap", "Network reconnaissance", "SMB enumeration", "Metasploit in an isolated lab", "Vulnerability analysis", "Pentest report writing"] },

        { name: "SOC and monitoring", items: ["Wazuh", "Log analysis", "Event detection", "Prometheus", "Grafana", "Alertmanager"] },

        { name: "Malware analysis", items: ["Automated analysis", "Static analysis", "Dynamic analysis", "Sandboxing", "Behavioral analysis", "Isolated Windows environment"] },

        { name: "Governance, Risk and Compliance (GRC)", items: ["ISO/IEC 27001", "ISMS implementation", "Risk assessment and treatment", "Security control selection", "Continual improvement"] },

        { name: "Systems and development", items: ["Linux", "Ubuntu", "Windows", "VMware", "System administration", "Python", "FastAPI", "Flask", "Elasticsearch", "Git", "GitHub"] },

      ],

    },

    certifications: {

      label: "Certifications",

      heading: "Certifications",

      subtitle: "Earned certifications, passed exams, and certifications in progress.",

      achievedTitle: "Earned certifications and passed exams",

      inProgressTitle: "In progress",

      verified: "Achieved",

      inProgress: "In progress",

      verification: "Verification",

      items: [

        { name: "RHCSA", issuer: "Red Hat", status: "Achieved", year: "July 2025", skills: ["Linux", "System administration", "Red Hat"], verificationUrl: "https://www.credly.com/badges/0591df3a-840d-4f7c-bce8-a03fd0282f7d", certificateImage: { src: "/images/certificates/rhcsa-red-hat.webp", alt: "Ameni Azouz Red Hat Certified System Administrator RHCSA certificate" } },

        { name: "PCAP - Certified Associate Python Programmer", issuer: "Python Institute", status: "Achieved", year: "August 2025", skills: ["Python", "Programming", "Algorithms"], certificateImage: { src: "/images/certificates/pcap-python-institute.webp", alt: "Ameni Azouz PCAP Python Institute certificate" } },

        { name: "CPPS - Certified Phishing Prevention Specialist", issuer: "Hack & Fix Academy", status: "Achieved", year: "December 2025", skills: ["Phishing", "Security awareness", "Email security"], certificateImage: { src: "/images/certificates/cpps-hack-and-fix.webp", alt: "Ameni Azouz Certified Phishing Prevention Specialist CPPS Hack and Fix certificate" } },

        { name: "ISO/IEC 27001 Provisional Implementer", issuer: "PECB", status: "Achieved", year: "November 10, 2026", examResult: "ISO/IEC 27001 Lead Implementer exam passed", skills: ["ISO/IEC 27001", "Governance", "ISMS"], certificateImage: { src: "/images/certificates/pecb-iso-27001.jpg", alt: "PECB ISO/IEC 27001 Provisional Implementer certificate" } },

        { name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services", status: "In progress", skills: ["AWS", "Cloud", "Architecture"] },

      ],

    },

    education: {

      label: "Education",

      heading: "Education",

      subtitle: "Degrees and specializations.",

      items: [

        {

          degree: "Engineering Degree",

          school: "TEK-UP University, Tunis",

          period: "2024 - 2027",

          detail: "Expected graduation in 2027.",

          specialization: "Cybersecurity Specialization",

          areas: ["Application Security", "OWASP", "DevSecOps", "Systems and networks", "Cloud", "Programming", "Incident management"],

        },

        {

          degree: "Bachelor's Degree in Electronics, Electrical Engineering and Automation",

          school: "ISSAT Sousse",

          period: "2021 - 2024",

          detail: "Final-year project: recommendation application built with Python, Flask, Elasticsearch and Linux.",

          specialization: "Specialization: Embedded Systems",

        },

      ],

    },

    caseStudies: {

      label: "Languages",

      heading: "Languages",

      subtitle: "Language proficiency.",

      items: [

        { title: "French", summary: "Fluent" },

        { title: "English", summary: "Professional" },

        { title: "Arabic", summary: "Native language" },

      ],

    },

    resume: {

      label: "Resume",

      heading: "Download my resume",

      subtitle: "Two PDF versions are available for French-speaking and English-speaking applications.",

      downloadFr: "Download French CV",

      downloadEn: "Download English Resume",

      missing: "Both resume versions are available as PDF files.",

    },

    contact: {

      label: "Contact",

      heading: "Let’s talk cybersecurity",

      subtitle: "Get in touch to discuss a cybersecurity project, collaboration or opportunity.",

      nameLabel: "Name",

      namePlaceholder: "Your name",

      emailLabel: "Email",

      emailPlaceholder: "you@example.com",

      subjectLabel: "Subject",

      subjectPlaceholder: "Cybersecurity project or opportunity",

      messageLabel: "Message",

      messagePlaceholder: "Your message...",

      send: "Prepare email",

      success: "Your email is ready in your mail client.",

      errorRequired: "Please fill in all required fields.",

      errorEmail: "Please enter a valid email address.",

      directTitle: "Direct contact",

      location: "Location",

      locationValue: "Tunisia",

      downloadCv: "Download resume",

    },

    footer: {

      tagline: "Cybersecurity Engineering Student - DevSecOps, AppSec, Cloud Security and Penetration Testing.",

      rights: "All rights reserved.",

      builtWith: "Built with Next.js and Tailwind CSS.",

      nav: "Navigation",

      connect: "Connect",

    },

  },

}
