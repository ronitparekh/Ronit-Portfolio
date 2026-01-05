import profilePic from "../assets/ProfilePic.jpeg";
export default function Connect() {
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
                                <span className="relative h-3 w-3 rounded-full border border-white/70">
                                    <span className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-white/90" />

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
                                className="rounded-full border border-white/10 bg-[#0f0f0f] px-6 py-3 text-sm text-white transition hover:opacity-90"
                            >
                                See All Projects
                            </a>

                            <a
                                href="#contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                            >
                                Get Started Now
                            </a>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    {/* <div className=" relative rounded-3xl border border-white/5 bg-[#0f0f0f] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"> */}
                        {/* Image */}
                        {/* <div className="relative  overflow-hidden rounded-2xl">
                            <img
                                src={profilePic}
                                alt="Ronit Parekh"
                                className="h-100 w-full object-cover"
                                loading="lazy" />
                        </div> */}
                    {/* </div> */}
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
                    <div className="flex gap-6 text-white/60 font-medium">
                        <a href="#" className="hover:text-white">X</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                        <a href="#" className="hover:text-white">GitHub</a>
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
