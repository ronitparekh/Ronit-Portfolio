export default function Navbar() {
    return (
        <nav id="navbar" className="fixed left-1/2 top-6 z-50 w-[min(980px,calc(100vw-2rem))] -translate-x-1/2 font-poppins">
            <div className="relative flex items-center justify-between gap-8 rounded-full border border-white/10 bg-black/35 px-7 py-3.5 backdrop-blur-2xl shadow-[0_18px_55px_rgba(0,0,0,0.65)] sm:gap-10 sm:px-10 sm:py-4">
                {/* <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(120%_160%_at_0%_0%,rgba(255,255,255,0.10),rgba(255,255,255,0)_55%)]" /> */}
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/5" />

                {/* Name */}
                <span className="relative text-[17px] font-medium tracking-[-0.02em] text-[#cccccc]/90 sm:text-[22px]">
                    Ronit Parekh
                </span>

                {/* Links */}
                <div className="relative flex items-center gap-5 text-xs font-normal text-white/55 sm:gap-8 sm:text-[16px]">
                    <a href="#home" className="transition-colors hover:text-white/85">Home</a>
                    <a href="#projects" className="transition-colors hover:text-white/85">Projects</a>
                    <a href="#resume" className="transition-colors hover:text-white/85">Resume</a>
                    <a href="#contact" className="transition-colors hover:text-white/85">Contact</a>
                </div>
            </div>
        </nav>
    );
}

