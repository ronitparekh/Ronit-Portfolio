export default function Services() {
  const row1Base = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "HTML5",
    "CSS3",
    "Express",
    "REST APIs",
    "JWT Auth",
    "Tailwind CSS",
  ];

  const row2Base = [
    "MongoDB",
    "PostgreSQL",
    "Git & GitHub",
    "Postman",
    "MySQL",
    "System Design",
    "API Security",
    "Performance Optimization",
    "Figma",
    "Canva"
  ];

  const row1Skills = row1Base;
  const row2Skills = row2Base;

  const webDevImages = [
    { src: "/images/MyPlanner_Services.png", alt: "MyPlanner Website" },
    { src: "/images/EduQuiz_Services.png", alt: "EduQuiz App" },
    { src: "/images/ParkEasy_Services.png", alt: "ParkEasy Website" },
    
  ];

  return (
    <section id="services" className="px-6 py-32 border border-white/10 rounded-4xl">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            {/*pill */}
                    <div className="mb-6 inline-flex items-center gap-3 bg-[#121212] px-4 py-2 text-sm font-medium text-white rounded-[20px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
                        {/* circle + dot icon */}
                        <span className="inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
                            <span className="relative h-3 w-3 rounded-full border border-white">
                                <span className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-white" />
                            </span>
                        </span>
                        Development Services
                    </div>

            <h2 className="mb-2 text-[42px] md:text-[56px]">
              Development <span className="text-white/50">Services</span>
            </h2>

            <p className="max-w-md text-white/60">
              Full-stack development services focused on scalability, performance,
              and real world business needs.
            </p>
          </div>

          <a
            href="#contact"
            className="rounded-[100px] bg-[linear-gradient(180deg,rgb(255,255,255)_0%,rgb(120,120,120)_140%)] px-6 py-5 text-sm font-medium text-black shadow-none transition hover:opacity-90 will-change-transform"
          >
            Contact Now
          </a>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 ">

              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-8">

                {/* BIG CARD — Web App Dev */}
                <div className="relative bg-[#0f0f0f] p-8  border-white/10 rounded-[20px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
                <h3 className="mb-3 text-lg font-medium text-white">
                    Frontend Engineering
                  </h3>
                  <p className="text-sm text-white/60">
                    Clean, responsive, and accessible user interfaces using React and
                    Tailwind CSS, optimized for performance.
                  </p>
                  <br></br><br></br>

                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/service-web.svg"
                      alt="Frontend Engineering"
                      className="h-56 w-full object-cover"
                    />
                  </div>
                </div>

                {/* SMALL CARD — Backend */}
                <div className="relative bg-[#0f0f0f] p-8  border-white/10 rounded-[20px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
                  <h3 className="mb-3 text-lg font-medium text-white">
                    Backend & API Development
                  </h3>
                  <p className="text-sm text-white/60">
                    Secure REST APIs, authentication systems, and database-driven
                    backend logic built with Node.js and Express.
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-8">

                {/* SMALL CARD — Frontend */}
                <div className="relative bg-[#0f0f0f] p-8  border-white/10 rounded-[20px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
                  <h3 className="mb-3 text-lg font-medium text-white">
                    Authentication & Deployment
                  </h3>
                  <p className="mb-6 text-sm text-white/60">
                    Secure authentication, role-based access, and production-ready
                    deployment with optimization and monitoring.
                  </p>
                </div>

                {/* BIG CARD — Auth + Deploy */}
                <div className="relative bg-[#0f0f0f] p-8  border-white/10 rounded-[20px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
                  
                  <h3 className="mb-3 text-lg font-medium text-white">
                    Web Application Development
                  </h3>
                  <p className="mb-6 text-sm text-white/60">
                    Building scalable, high-performance web applications using React
                    and Node.js with clean architecture and real-world usability.
                  </p>

                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-[#0f0f0f] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-[#0f0f0f] to-transparent" />

                    <div className="flex w-max animate-marquee items-center gap-4 will-change-transform [animation-duration:22s] motion-reduce:animate-none">
                      {webDevImages.map((img, idx) => (
                        <img
                          key={`${img.src}-${idx}`}
                          src={img.src}
                          alt={img.alt}
                          className="h-56 w-64 shrink-0 rounded-xl object-cover"
                          loading="lazy"
                        />
                      ))}

                      {webDevImages.map((img, idx) => (
                        <img
                          key={`${img.src}-${idx}-dup`}
                          src={img.src}
                          alt={img.alt}
                          className="h-56 w-64 shrink-0 rounded-xl object-cover"
                          loading="lazy"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>

      {/* ================= SKILLS MARQUEE ================= */}
      <div className="mx-auto mt-28 max-w-7xl overflow-hidden relative">

            {/* Fade edges (optional but Framer-like) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-32 bg-linear-to-r from-bg to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-32 bg-linear-to-l from-bg to-transparent" />

            {/* ROW 1 → */}
            <div className="mb-6">
              <div
                className="flex w-max animate-marquee items-center gap-4 will-change-transform [animation-duration:35s] motion-reduce:animate-none"
              >
                <div className="flex shrink-0 items-center gap-4">
                  {row1Skills.map((skill, idx) => (
                    <span
                      key={`${skill}-${idx}`}
                      className="whitespace-nowrap rounded-full  bg-white/2 px-6 py-3 text-sm text-white/80 backdrop-blur-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex shrink-0 items-center gap-4" aria-hidden="true">
                  {row1Skills.map((skill, idx) => (
                    <span
                      key={`${skill}-${idx}-dup`}
                      className="whitespace-nowrap rounded-full  bg-white/2 px-6 py-3 text-sm text-white/80 backdrop-blur-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 2 ← */}
            <div>
              <div
                className="flex w-max animate-marqueeReverse items-center gap-4 will-change-transform [animation-duration:45s] motion-reduce:animate-none"
              >
                <div className="flex shrink-0 items-center gap-4">
                  {row2Skills.map((skill, idx) => (
                    <span
                      key={`${skill}-${idx}`}
                      className="whitespace-nowrap rounded-full  bg-white/2 px-6 py-3 text-sm text-white/80 backdrop-blur-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex shrink-0 items-center gap-4" aria-hidden="true">
                  {row2Skills.map((skill, idx) => (
                    <span
                      key={`${skill}-${idx}-dup`}
                      className="whitespace-nowrap rounded-full  bg-white/2 px-6 py-3 text-sm text-white/80 backdrop-blur-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
      </div>
      {/* ================= END MARQUEE ================= */}
    </section>
  );
}
