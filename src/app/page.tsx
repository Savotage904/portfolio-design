import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import { projects } from "@/data/projects"; // Importiamo i dati
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* SEZIONE 1: HERO (Video) */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <VideoBackground />
        <div className="z-10 text-center px-4">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-2 mix-blend-difference">
            CREATIVE
            <br />
            <span className="text-gray-500">TECHNOLOGIST</span>
          </h1>
          <p className="text-xl md:text-2xl mt-6 font-light tracking-wide">
            Engineering logic meets Visual chaos.
          </p>
        </div>
      </section>

      {/* SEZIONE 2: SELECTED WORKS (Griglia) */}
      <section id="work" className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 border-b border-gray-800 pb-4">
          SELECTED WORKS
        </h2>

        {/* GRIGLIA BENTO / MASONRY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Avvolgiamo tutto in FadeIn e usiamo l'index per ritardare l'animazione
            // Il primo parte subito, il secondo dopo 0.1s, il terzo dopo 0.2s...
            <FadeIn key={project.id} delay={index * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="group block relative aspect-video bg-gray-900 overflow-hidden border border-gray-800 hover:border-white transition-colors"
              >
                {/* VIDEO DI SFONDO (Sostituisce l'immagine) */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
                
                {/* Overlay sfumato per leggere il testo */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-mono">
                    {project.category}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}