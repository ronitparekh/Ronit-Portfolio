import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Smart Attendance System",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80",
    link: "#",
  },
  {
    title: "ParkEasy",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
    link: "#",
  },
  {
    title: "MyPlanner-Calendar App",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80",
    link: "#",
  },
  {
    title: "OptiMatrix Solutions",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    link: "#",
  },
];  

export default function Projects() {
  return (
    <section id="projects" className="px-6 pb-32">
      <div className="mx-auto max-w-350">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-[260px_260px_260px]">

          {/* TOP LEFT — TALL */}
          <ProjectCard
            project={projects[0]}
            className="md:col-start-1 md:row-start-1 md:row-span-2"
          />

          {/* TOP RIGHT — SHORT */}
          <ProjectCard
            project={projects[1]}
            className="md:col-start-2 md:row-start-1 md:row-span-1"
          />
  
          {/* BOTTOM RIGHT — TALL */}
          <ProjectCard
            project={projects[2]}
            className="md:col-start-2 md:row-start-2 md:row-span-2"
          />

          {/* BOTTOM LEFT — SHORT */}
          <ProjectCard
            project={projects[3]}
            className="md:col-start-1 md:row-start-3 md:row-span-1"
          />

        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#profile-experience"
            aria-label="Scroll to next section"
            className="float-y-slow inline-flex h-12 w-12 items-center justify-center text-white/80 transition hover:text-white/90 motion-reduce:animate-none"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
