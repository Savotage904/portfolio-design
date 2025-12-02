// Usiamo i tre puntini per risalire fino alla cartella src
import { projects } from "../../../data/projects"; 
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-12 px-6">
      
      {/* Tasto Back */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="text-gray-500 hover:text-white transition-colors text-sm font-mono">
          ← BACK TO WORK
        </Link>
      </div>

      <article className="max-w-4xl mx-auto">
        {/* Intestazione */}
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

        {/* Media Area */}
        <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800 mb-12">
           <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
           />
        </div>

        {/* Dettagli Tecnici */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider text-sm">The Logic</h3>
            <p className="text-gray-400 leading-relaxed">
              Qui racconterai la sfida tecnica. Ad esempio: "Per questo progetto ho dovuto sincronizzare 
              l'audio con le particelle generate in TouchDesigner in tempo reale..."
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
      </article>
    </main>
  );
}