import profilePic from "../assets/ProfilePic.jpeg";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ProfileExperience() {
    const socials = [
        { label: "GitHub", href: "https://github.com/ronitparekh", Icon: Github },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ronit-parekh-8a619a257/", Icon: Linkedin },
        { label: "Email", href: "mailto:parekhronit21@gmail.com", Icon: Mail },
    ];

    const skillTags = [
        "Full-Stack Development",
        "System Architecture",
        "Restful APIs"
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
        <section id="profile-experience" className="px-6 py-32 border border-white/10 rounded-4xl">
            <div className="mx-auto max-w-7xl">

                {/* HEADING */}
                <div className="mb-16 text-center">
                    {/* Role pill */}
                    <div className="mb-6 inline-flex items-center gap-3 bg-[#121212] px-4 py-2 text-sm font-medium text-white rounded-[20px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
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
                    <div
                        className="relative bg-[#0f0f0f] p-6 border-white/10 rounded-[20px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]"
                    >
                        {/* Image */}
                        <div className="relative mb-6 overflow-hidden rounded-2xl">
                            <img
                                src={profilePic}
                                alt="Ronit Parekh"
                                className="h-100 w-full object-cover brightness-95 contrast-110"
                                loading="lazy"
                            />

                            {/* Availability badge */}
                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30">
                                <div className="availBadge">
                                    {/* DOT (beside text) */}
                                    <span className="availDotWrap">
                                        <span className="availDot" />
                                        <span className="availDotPulse" />
                                    </span>

                                    <span className="availText">Available for work</span>
                                </div>
                            </div>


                        </div>

                        <h3 className="mb-1 font-satoshi text-xl font-normal text-white">
                            Hello, I am Ronit Parekh
                        </h3>

                        <p className="mb-6 font-jakarta text-sm font-normal text-white/55">
                            Full-Stack Developer Based in Ahmedabad
                        </p>

                        {/* Social icons */}
                        <div className="mb-6 flex items-center gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 transition hover:text-white"
                                >
                                    <social.Icon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            ))}
                        </div>

                        <div className="h-px w-full bg-white/10" />

                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[100px]  border-white/10 bg-[linear-gradient(180deg,rgb(120,120,120)_-382%,rgb(10,10,10)_100%)] px-6 py-5 text-sm font-normal text-white transition hover:opacity-90"
                        >
                            Connect with me
                        </a>
                    </div>


                    {/* EXPERIENCE CARD */}
                    <div className="relative bg-[#0f0f0f] p-8  border-white/10 rounded-[20px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">

                        <p className="mb-10 max-w-[92%] font-jakarta text-[15px] leading-relaxed text-textPrimary opacity-75">
                            I’m Ronit Parekh, a Full-Stack Developer with a passion for building modern web apps.
                            Translating ideas into clean UIs, robust APIs, and intuitive digital experiences.
                        </p>

                        <div className="my-10 h-px w-full bg-white/10" />

                        <div className="mb-10 flex flex-wrap justify-center gap-4">
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
