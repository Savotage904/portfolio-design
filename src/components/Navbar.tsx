import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
      {/* LOGO / NOME */}
      <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
        SAVOTAGE
      </Link>

      {/* MENU LINKS */}
      <div className="flex gap-8 text-sm font-medium">
        <Link href="/work" className="hover:text-gray-400 transition-colors">
          WORK
        </Link>
        <Link href="/about" className="hover:text-gray-400 transition-colors">
          ABOUT
        </Link>
        {/* Usiamo un link esterno per mail o social per ora */}
        <a href="mailto:tuamail@gmail.com" className="hover:text-gray-400 transition-colors">
          CONTACT
        </a>
      </div>
    </nav>
  );
}