import { Satellite, Settings2, Tv, MonitorX, Wrench, Cctv, Headset, type LucideIcon } from "lucide-react";

export const PHONES = ["691 491 998", "671 346 506"] as const;
export const WHATSAPP = "237691491998";
export const ADDRESS = "Bandjoun, en face de la montée de la mairie, avant l'entrée de l'hôpital Ad-Lucem";
export const HOURS = [
  { day: "Lundi – Samedi", time: "8h00 – 19h00" },
  { day: "Dimanche", time: "Sur rendez-vous" },
];

export const waLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
export const telLink = (p: string = "691 491 998") => `tel:+237${p.replace(/\s/g, "")}`;

export type Service = { slug: string; title: string; icon: LucideIcon; short: string; details: string[] };
export const SERVICES: Service[] = [
  { slug: "installation-parabole", title: "Installation des paraboles", icon: Satellite, short: "Pose complète de votre parabole satellitaire, fixation solide et câblage propre.", details: ["Choix de l'emplacement idéal", "Fixation murale ou sur toit", "Câblage jusqu'au téléviseur"] },
  { slug: "reglage-parabole", title: "Réglage des paraboles", icon: Settings2, short: "Orientation précise pour un signal fort et stable, même après une tempête.", details: ["Pointage satellite précis", "Mesure de la qualité du signal", "Remplacement de LNB"] },
  { slug: "reglage-decodeur", title: "Réglage des décodeurs Canal+", icon: Tv, short: "Installation, activation et configuration de vos décodeurs et abonnements Canal+.", details: ["Vente de décodeurs et abonnements", "Réabonnement et changement de formule", "Recherche et classement des chaînes"] },
  { slug: "probleme-image", title: "Résolution des problèmes d'image", icon: MonitorX, short: "Écran noir, image figée, « pas de signal » : nous diagnostiquons et réparons.", details: ["Diagnostic rapide", "Réparation ou remplacement", "Intervention à domicile"] },
  { slug: "informatique", title: "Maintenance et réparation informatique", icon: Wrench, short: "Ordinateurs lents, pannes, virus, écrans cassés : notre atelier s'en charge.", details: ["Installation de systèmes et logiciels", "Réparation matérielle", "Récupération de données"] },
  { slug: "videosurveillance", title: "Caméras de vidéosurveillance", icon: Cctv, short: "Protégez votre maison ou votre commerce avec un système adapté.", details: ["Étude de vos besoins", "Installation et configuration", "Visualisation sur téléphone"] },
  { slug: "sav", title: "Service après-vente", icon: Headset, short: "Un suivi après chaque achat ou intervention, avec une assistance réactive.", details: ["Assistance par téléphone et WhatsApp", "Suivi des garanties", "Interventions de suivi"] },
];

export const CATEGORIES = ["Matériels informatiques", "Ordinateurs et accessoires", "Pièces informatiques", "Équipements électroniques", "Décodeurs et satellites", "Vidéosurveillance"] as const;
export type Product = { id: string; name: string; category: (typeof CATEGORIES)[number]; description: string; price?: string; available?: boolean };
export const PRODUCTS: Product[] = [
  { id: "decodeur-canal", name: "Décodeur Canal+ HD", category: "Décodeurs et satellites", description: "Décodeur officiel Canal+ avec installation et activation possibles.", available: true },
  { id: "parabole-kit", name: "Kit parabole complet", category: "Décodeurs et satellites", description: "Antenne, LNB, support et câble coaxial, prêt à installer.", available: true },
  { id: "lnb", name: "Tête LNB universelle", category: "Décodeurs et satellites", description: "Remplacement de tête défectueuse pour retrouver un signal stable." },
  { id: "laptop", name: "Ordinateur portable", category: "Ordinateurs et accessoires", description: "Portables neufs et reconditionnés pour le travail et les études.", available: true },
  { id: "ecran", name: "Écran PC", category: "Ordinateurs et accessoires", description: "Moniteurs de différentes tailles pour bureau et maison." },
  { id: "clavier-souris", name: "Clavier et souris", category: "Ordinateurs et accessoires", description: "Claviers AZERTY et souris filaires ou sans fil.", available: true },
  { id: "imprimante", name: "Imprimante", category: "Matériels informatiques", description: "Imprimantes laser et jet d'encre, cartouches disponibles." },
  { id: "scanner", name: "Scanner", category: "Matériels informatiques", description: "Numérisez vos documents et photos rapidement." },
  { id: "ram", name: "Barrettes mémoire RAM", category: "Pièces informatiques", description: "Accélérez votre ordinateur avec plus de mémoire." },
  { id: "disque", name: "Disque dur / SSD", category: "Pièces informatiques", description: "Stockage rapide, installation et transfert de données possibles.", available: true },
  { id: "chargeur", name: "Chargeurs d'ordinateur", category: "Pièces informatiques", description: "Chargeurs compatibles pour la plupart des marques." },
  { id: "enceintes", name: "Enceintes", category: "Équipements électroniques", description: "Enceintes pour ordinateur, télévision ou animation." },
  { id: "casque", name: "Casque audio", category: "Équipements électroniques", description: "Casques confortables pour musique, appels et jeux." },
  { id: "projecteur", name: "Vidéoprojecteur", category: "Équipements électroniques", description: "Pour vos présentations, films et événements." },
  { id: "webcam", name: "Webcam", category: "Équipements électroniques", description: "Pour vos appels vidéo et cours en ligne." },
  { id: "camera-kit", name: "Kit 4 caméras de surveillance", category: "Vidéosurveillance", description: "Caméras, enregistreur et câblage, visualisation sur téléphone.", available: true },
  { id: "camera-wifi", name: "Caméra Wi-Fi", category: "Vidéosurveillance", description: "Installation simple, alertes de mouvement sur smartphone." },
];

export const REALISATIONS = [
  { title: "Installation de parabole sur toiture", category: "Satellite", text: "Pose et pointage d'une parabole pour une famille à Bandjoun, signal stable sur toutes les chaînes Canal+." },
  { title: "Réactivation de décodeur", category: "Satellite", text: "Réabonnement et recherche des chaînes après un changement de formule." },
  { title: "Réparation de carte mère", category: "Informatique", text: "Diagnostic au microscope et réparation dans notre atelier technique." },
  { title: "Remise en état d'un parc informatique", category: "Informatique", text: "Nettoyage, mise à jour et dépannage de plusieurs postes de bureau." },
  { title: "Surveillance d'un commerce", category: "Vidéosurveillance", text: "Installation de 4 caméras avec consultation à distance sur téléphone." },
  { title: "Caméras pour domicile", category: "Vidéosurveillance", text: "Couverture de l'entrée et de la cour avec enregistrement continu." },
];
