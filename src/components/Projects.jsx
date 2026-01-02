const projects = [
  {
    title: "Smart Attendance System",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "ParkEasy",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "MyPlanner Calendar App",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "OptiMatrix Solutions",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Projects() {
  const ProjectCard = ({ project, className }) => (
  <a
    href="#"
    aria-label={project.title}
    className={`group relative rounded-4xl bg-[#0f0f0f] p-3 shadow-[0_0_0_2px_rgba(255,255,255,0.07),0_20px_60px_rgba(0,0,0,0.8)] ${className}`}
  >
    {/* INNER IMAGE FRAME */}
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
      
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover grayscale contrast-125 brightness-90 transition duration-500 group-hover:grayscale-0 group-hover:brightness-100"
      />

      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

      {/* Arrow button */}
      <span className="absolute bottom-1 left-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black shadow-lg transition group-hover:scale-105">
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7H9M17 7V15"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

    </div>
  </a>
);


  return (
    <section id="projects" className="px-6 pt-10 pb-20 ">
          <div className="mx-auto max-w-6xl">

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-[260px_260px_260px]">

                  {/* 1️⃣ TOP LEFT — TALL */}
                  <ProjectCard
                      project={projects[0]}
                      className="md:col-start-1 md:row-start-1 md:row-span-2" />

                  {/* 2️⃣ TOP RIGHT — SHORT */}
                  <ProjectCard
                      project={projects[1]}
                      className="md:col-start-2 md:row-start-1 md:row-span-1" />

                  {/* 3️⃣ BOTTOM RIGHT — TALL */}
                  <ProjectCard
                      project={projects[2]}
                      className="md:col-start-2 md:row-start-2 md:row-span-2" />

                  {/* 4️⃣ BOTTOM LEFT — SHORT */}
                  <ProjectCard
                      project={projects[3]}
                      className="md:col-start-1 md:row-start-3 md:row-span-1" />

              </div>
          </div>
      </section>

  );
}
