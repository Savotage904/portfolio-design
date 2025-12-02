export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string; 
  videoUrl: string; // <--- NUOVO CAMPO
  slug: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Logic Event 2024",
    category: "VFX / Event Recap",
    year: "2024",
    description: "Recap dell'evento Logic...",
    imageUrl: "/projects/logic-cover.jpg",
    videoUrl: "/projects/logic.mp4", // <--- Assicurati che il file esista qui
    slug: "logic-event-2024",
  },
  {
    id: "2",
    title: "Polimi Thesis",
    category: "Engineering / Research",
    year: "2023",
    description: "Visualizzazione dati...",
    imageUrl: "/projects/thesis-cover.jpg",
    videoUrl: "/projects/thesis.mp4", // <---
    slug: "polimi-thesis",
  },
  {
    id: "3",
    title: "Urban Flow",
    category: "Videomaking",
    year: "2024",
    description: "Street photography...",
    imageUrl: "/projects/urban.jpg",
    videoUrl: "/projects/urban.mp4", // <---
    slug: "urban-flow",
  },
];