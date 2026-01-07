import { Github, Linkedin, Mail } from "lucide-react";

export default function Connect() {
    const socials = [
        { label: "GitHub", href: "https://github.com/ronitparekh", Icon: Github },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ronit-parekh-8a619a257/", Icon: Linkedin },
        { label: "Email", href: "mailto:parekhronit21@gmail.com", Icon: Mail },
    ];

    return (
        <section className="px-32 py-32 border border-white/10 rounded-4xl">
            <div>

                {/* TOP CONTENT */}
                <div className="grid gap-12 md:grid-cols-2 md:items-center">

                    {/* LEFT */}
                    <div>
                        {/* Pill */}
                        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#121212] px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_2px_rgba(255,255,255,0.07),0_12px_30px_rgba(0,0,0,0.55)]">
                            {/* circle + dot icon */}
                            <span className="inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
                                <span className="relative h-3 w-3 rounded-full border border-white">
                                    <span className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-white" />

                                </span>
                            </span>
                            Let's Connect
                        </div>
                        {/* Heading */}
                        <h2 className="mb-6 text-[40px] font-normal leading-tight md:text-[56px]">
                            Let’s <span className="text-white/50">Grow Together</span>
                        </h2>

                        <div className="mb-6 h-px w-full bg-white/10" />

                        {/* Description */}
                        <p className="mb-10 max-w-md text-sm text-white/60 md:text-base">
                            Crafted with code and purpose. Let’s collaborate to build scalable,
                            high-impact web solutions.
                            Reach out anytime!
                        </p>

                        <div className="mb-10 h-px w-full bg-white/10" />

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="rounded-full border border-white/10 bg-[#0f0f0f] px-6 py-5 text-sm text-white transition hover:opacity-90"
                            >
                                See All Projects
                            </a>

                            <a
                                href="#contact"
                                className="rounded-full bg-white px-6 py-5 text-sm font-medium text-black transition hover:opacity-90"
                            >
                                Get Started Now
                            </a>
                        </div>
                    </div>

                    {/* RIGHT (abstract 3D visual) */}
                    <div className="relative">
                        <div className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                            <div
                                className="relative mx-auto aspect-4/3 w-full max-w-md"
                                style={{ perspective: "1200px" }}
                                aria-hidden="true"
                            >
                                <div
                                    className="absolute inset-0"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* back plate */}
                                    <div
                                        className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5"
                                        style={{ transform: "translateZ(-48px) rotateX(10deg) rotateY(-16deg) translateY(8px)" }}
                                    />

                                    {/* middle plate */}
                                    <div
                                        className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5"
                                        style={{ transform: "translateZ(-24px) rotateX(10deg) rotateY(-16deg) translateY(4px)" }}
                                    />

                                    {/* front plate */}
                                    <div
                                        className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                                        style={{ transform: "translateZ(0px) rotateX(10deg) rotateY(-16deg)" }}
                                    >
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                                        {/* faux UI */}
                                        <div className="relative p-6">
                                            <div className="flex items-center gap-2">
                                                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                                                <div className="ml-auto h-7 w-28 rounded-full border border-white/10 bg-white/5" />
                                            </div>

                                            <div className="mt-6 h-px w-full bg-white/10" />

                                            <div className="mt-6 grid grid-cols-2 gap-4">
                                                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                                    <div className="h-3 w-24 rounded bg-white/15" />
                                                    <div className="mt-3 h-2 w-full rounded bg-white/10" />
                                                    <div className="mt-2 h-2 w-5/6 rounded bg-white/10" />
                                                </div>
                                                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                                    <div className="h-3 w-20 rounded bg-white/15" />
                                                    <div className="mt-3 h-2 w-full rounded bg-white/10" />
                                                    <div className="mt-2 h-2 w-4/6 rounded bg-white/10" />
                                                </div>
                                                <div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
                                                    <div className="h-3 w-28 rounded bg-white/15" />
                                                    <div className="mt-3 h-2 w-full rounded bg-white/10" />
                                                    <div className="mt-2 h-2 w-11/12 rounded bg-white/10" />
                                                    <div className="mt-2 h-2 w-9/12 rounded bg-white/10" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* floating accents */}
                                    <div
                                        className="absolute left-10 top-10 h-24 w-24 rounded-2xl border border-white/10 bg-white/5"
                                        style={{ transform: "translateZ(28px) rotateX(10deg) rotateY(-16deg)" }}
                                    />
                                    <div
                                        className="absolute bottom-10 right-12 h-16 w-32 rounded-2xl border border-white/10 bg-white/5"
                                        style={{ transform: "translateZ(18px) rotateX(10deg) rotateY(-16deg)" }}
                                    />
                                </div>
                            </div>

                            <div className="pointer-events-none mt-6 h-px w-full bg-white/10" />
                            
                            <div className="mt-5 flex items-center justify-between text-sm text-white/60">
                                <span>Design • Build • Ship</span>
                                <span>UI/UX • APIs • Deploy</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">

                    {/* Links */}
                    <div className="flex flex-wrap gap-6 text-m font-medium text-white/60">
                        <a href="#services" className="hover:text-white">Services</a>
                        <a href="#projects" className="hover:text-white">Projects</a>
                        <a href="#profile" className="hover:text-white">Profile</a>
                        <a href="#contact" className="hover:text-white">Contact</a>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-3">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 transition hover:text-white"
                            >
                                <social.Icon className="h-5 w-5" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* COPYRIGHT */}
                <p className="mt-8 text-m font-medium text-white/80">
                    © {2025} Ronit Parekh
                </p>
            </div>
        </section>
    );
}
