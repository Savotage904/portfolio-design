// Definiamo la forma che deve avere ogni progetto
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string; // Per ora usiamo immagini statiche, poi video
  slug: string; // La parte finale dell'URL (es: /work/serata-logic)
}

// Il nostro "Database"
export const projects: Project[] = [
  {
    id: "1",
    title: "Logic Event 2024",
    category: "VFX / Event Recap",
    year: "2024",
    description: "Recap dell'evento Logic ai Magazzini Generali. Focus su glitch art e ritmo serrato.",
    imageUrl: "/projects/logic-cover.jpg", // Dovremo creare questa cartella
    slug: "logic-event-2024",
  },
  {
    id: "2",
    title: "Polimi Thesis",
    category: "Engineering / Research",
    year: "2023",
    description: "Visualizzazione dati per la tesi di laurea. Python + TouchDesigner.",
    imageUrl: "/projects/thesis-cover.jpg",
    slug: "polimi-thesis",
  },
  {
    id: "3",
    title: "Urban Flow",
    category: "Videomaking",
    year: "2024",
    description: "Street photography in movimento. Studio sulla luce urbana.",
    imageUrl: "/projects/urban.jpg",
    slug: "urban-flow",
  },
];