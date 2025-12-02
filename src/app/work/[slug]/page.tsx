import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // 1. Leggiamo lo slug dall'URL
  const { slug } = await params;
  
  // 2. Cerchiamo il progetto
  const project = projects.find((p) => p.slug === slug);

  // 3. Se non esiste, 404
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-12 px-6">
      
      {/* Tasto Back */}
      <FadeIn delay={0}>
        <div className="max-w-4xl mx-auto mb-8">
          <Link href="/work" className="text-gray-500 hover:text-white transition-colors text-sm font-mono">
            ← BACK TO ALL PROJECTS
          </Link>
        </div>
      </FadeIn>

      <article className="max-w-4xl mx-auto">
        {/* Intestazione */}
        <FadeIn delay={0.1}>
          <div className="mb-12 border-b border-gray-800 pb-8">
            <div className="flex justify-between items-start mb-4">
              <span className="text-blue-500 font-mono text-sm">{project.category}</span>
              <span className="text-gray-500 font-mono text-sm">{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {project.description}
            </p>
          </div>
        </FadeIn>

        {/* Media Area (ORA È UN VIDEO) */}
        <FadeIn delay={0.2}>
          <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800 mb-12">
             <video 
              src={project.videoUrl} 
              className="w-full h-full object-cover"
              controls // Aggiunge i controlli (play, pausa, volume)
              autoPlay
              muted
              loop={false} // Qui magari non vuoi il loop, ma che si fermi alla fine
             />
          </div>
        </FadeIn>

        {/* Dettagli Tecnici */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider text-sm">The Logic</h3>
              <p className="text-gray-400 leading-relaxed">
                [Qui andrà la descrizione tecnica dettagliata del progetto.
                Come hai risolto i problemi? Che algoritmi hai usato?]
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider text-sm">Tech Stack</h3>
              <ul className="text-gray-400 space-y-2 font-mono text-sm border-l border-gray-800 pl-4">
                <li>• Adobe After Effects</li>
                <li>• DaVinci Resolve</li>
                <li>• TypeScript / React</li>
                <li>• Hardware Acceleration</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </article>
    </main>
  );
}