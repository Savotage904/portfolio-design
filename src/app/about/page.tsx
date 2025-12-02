import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* COLONNA SINISTRA: Testo */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            THE <span className="text-gray-500">HYBRID</span>
            <br />
            PROFILE.
          </h1>
          
          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              Non sono solo un videomaker. Non sono solo un ingegnere.
              Sono il punto d'incontro tra <span className="text-white font-bold">logica e creatività</span>.
            </p>
            <p>
              Dopo anni di studi al <strong>Politecnico di Milano</strong>, ho deciso di applicare
              il rigore ingegneristico al caos delle arti visive. 
              Il risultato? Progetti che non sono solo belli da vedere, ma costruiti per funzionare.
            </p>
          </div>

          {/* LISTA SKILLS (Tech Stack) */}
          <div className="pt-8">
            <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-widest">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {["After Effects", "DaVinci Resolve", "TouchDesigner", "TypeScript", "React/Next.js", "Python"].map((tech) => (
                <span key={tech} className="px-4 py-2 border border-gray-800 rounded-full text-sm hover:border-white hover:bg-white hover:text-black transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA: Foto */}
        <div className="relative aspect-[3/4] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Placeholder per la tua foto profilo */}
           {/* Quando avrai la tua foto, mettila in public/profile.jpg */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-700">
             <span className="text-center">
                [Inserisci la tua foto in<br/>public/profile.jpg]
             </span>
           </div>
           {/* Scommenta questa riga quando hai la foto */}
           {/* <img src="/profile.jpg" alt="Savotage Profile" className="object-cover w-full h-full" /> */}
        </div>

      </div>
    </main>
  );
}