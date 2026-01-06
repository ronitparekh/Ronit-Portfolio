import profilePic from "../assets/ProfilePic.jpeg";

export default function ProfileExperience() {
    const skillTags = [
        "UI/UX Design",
        "Full-Stack Dev",
        "Branding",
        "Illustration",
    ];

    const experiences = [
        {
            role: "Volunteer",
            company: "Ariaro 2.0 (Tech Event), Karnavati University",
            year: "2024",
        },
        {
            role: "Organising Team Member",
            company: "Ariaro 3.0 (Tech Event)",
            year: "2025",
        },
        {
            role: "Frontend Developer",
            company: "Optimatrix Solutions",
            year: "2025",
        },
        {
            role: "Software Engineer",
            company: "Seven Square Technosoft",
            year: "2025 – Present",
        },
    ];

    return (
        <section className="px-6 py-32 border border-white/10 rounded-4xl">
            <div className="mx-auto max-w-6xl">

                {/* HEADING */}
                <div className="mb-16 text-center">
                    {/* Role pill */}
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#121212] px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_2px_rgba(255,255,255,0.07),0_12px_30px_rgba(0,0,0,0.55)]">
                        {/* circle + dot icon */}
                        <span className="inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
                            <span className="relative h-3 w-3 rounded-full border border-white">
                                <span className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-white" />

                            </span>
                        </span>
                        Full-Stack Developer
                    </div>
                    <h2 className="mb-4 font-satoshi text-[42px] font-normal leading-[1.05] tracking-tight md:text-[56px]">
                        Ronit Parekh,{" "}
                        <span className="text-[#ffffff99]">Your Developer</span>
                    </h2>

                    <p className="mx-auto max-w-2xl font-jakarta text-sm font-normal leading-relaxed text-white/60 md:text-base">
                        Brief initial presentation of myself and my previous experiences.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr]">

                    {/* PROFILE CARD */}
                    <div className=" relative rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                        {/* Image */}
                        <div className="relative mb-6 overflow-hidden rounded-2xl">
                            <img
                                src={profilePic}
                                alt="Ronit Parekh"
                                className="h-full w-full object-cover brightness-95 contrast-110"
                                loading="lazy" />

                            {/* Availability badge */}
                            <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-normal text-white/80">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                Available for work
                            </div>
                        </div>

                        <h3 className="mb-1 font-satoshi text-xl font-normal text-white">
                            Hello I am Ronit Parekh
                        </h3>

                        <p className="mb-6 font-jakarta text-sm font-normal text-white/55">
                            Full-Stack Developer Based in Ahmedabad
                        </p>

                        {/* Social icons */}
                        <div className="mb-6 flex items-center gap-3">
                            {["GH", "IN", "@"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xs font-normal text-white/70 transition hover:text-white"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <div className="h-px w-full bg-white/10" />

                        <a
                            href="#contact"
                            className="mt-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-black/40 px-6 py-5 text-sm font-normal text-white transition hover:opacity-90"
                        >
                            Connect with me
                        </a>
                    </div>

                    {/* EXPERIENCE CARD */}
                    <div className="rounded-3xl bg-[#0F0F0F] px-8 py-10 min-h-140 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">

                        <p className="mb-10 max-w-[92%] font-jakarta text-[15px] leading-relaxed text-textPrimary opacity-75">
                            I’m Ronit Parekh, a Full-Stack Developer with a passion for building modern web apps—
                            translating ideas into clean UIs, robust APIs, and intuitive digital experiences.
                        </p>

                        <div className="my-10 h-px w-full bg-white/10" />

                        <div className="mb-10 flex flex-wrap gap-4">
                            {skillTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-lg bg-[#080808] px-4 py-2 text-[15px] font-normal  text-white/60">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="my-10 h-px w-full bg-white/10" />

                        <div className="space-y-15 rounded-lg bg-[#080808] px-6 py-4 text-white/60">
                            {experiences.map((exp) => (
                                <div
                                    key={`${exp.role}-${exp.company}-${exp.year}`}
                                    className="grid grid-cols-1 gap-2 md:grid-cols-[180px_1fr_100px]"
                                >
                                    <div className="text-[15px] font-jakarta font-medium">
                                        {exp.role}
                                    </div>
                                    <div className="text-[15px] font-jakarta font-normal">
                                        {exp.company}
                                    </div>
                                    <div className="text-[15px] font-jakarta font-normal md:text-right">
                                        {exp.year}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
