import { projects } from "../../data/projects";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8">
      
      <div className="max-w-7xl mx-auto">
        {/* Intestazione Pagina */}
        <FadeIn>
          <div className="mb-16 border-b border-gray-800 pb-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              ALL <span className="text-gray-500">PROJECTS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Un archivio completo delle esplorazioni tra codice, video e design.
            </p>
          </div>
        </FadeIn>

        {/* GRIGLIA PROGETTI (Con Video Preview) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="group block relative aspect-video bg-gray-900 overflow-hidden border border-gray-800 hover:border-white transition-colors rounded-lg"
              >
                {/* VIDEO DI SFONDO (Loop) */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
                
                {/* Testo sopra */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-mono">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-xs font-mono border border-gray-600 px-2 py-1 rounded text-gray-400 group-hover:text-white group-hover:border-white transition-colors">
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}