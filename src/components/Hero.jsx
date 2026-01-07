export default function Hero() {
    return (
        <section id="home" className="relative px-6 pt-32 pb-6 md:pt-36 md:pb-8 mb-2">
            <div className="mx-auto w-full max-w-340">
                {/* Role pill */}
                {/* <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#121212] px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_2px_rgba(255,255,255,0.07),0_12px_30px_rgba(0,0,0,0.55)]">
                    <span className="inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
                        <span className="relative h-3 w-3 rounded-full border border-white">
                            <span className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-white" />

                        </span>
                    </span>
                    Full-Stack Developer
                </div> */}

                {/* Name */}
                <h1 className="mb-4 font-satoshi text-[54px] font-normal leading-[1.02] tracking-tight md:text-[72px] pt-18">
                    Ronit Parekh
                    {/* Ronit <span className="text-[#ffffff99]">Parekh</span> */}
                </h1>

                {/* Description */}
                <p className="mb-7 max-w-2xl font-jakarta text-base font-medium leading-relaxed text-white/60 md:text-[16px]">
                    I design and build modern web apps, clean interfaces, robust APIs, and thoughtful UX. Let's build something great.
                </p>

                {/* Buttons */}
                <div className="flex gap-3 sm:gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-5 text-sm font-medium text-white transition hover:opacity-90"
                    >
                        See All Projects
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-white  px-6 py-5 text-sm font-medium text-black transition hover:opacity-90"
                    >
                        Contact Now
                    </a>
                </div>
            </div>
 
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_45%)]"></div>
        </section>
    );
}
