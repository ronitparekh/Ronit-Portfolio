import { MousePointerClick, Lightbulb, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Clarify",
    desc: "I start by understanding the business problem, user requirements, and technical constraints. This includes defining clear goals, identifying edge cases, and aligning on expected outcomes before writing any code.",
    icon: MousePointerClick,
  },
  {
    step: "2",
    title: "Plan",
    desc: "I design the system architecture, database structure, and API flow. This step focuses on choosing the right technologies, planning scalability, and ensuring the frontend and backend work seamlessly together.",
    icon: Lightbulb,
  },
  {
    step: "3",
    title: "Develop",
    desc: "I develop clean, maintainable code using modern frameworks. This includes building responsive UIs, secure backend APIs, authentication flows, and integrating third-party services when required.",
    icon: Wrench,
  },
  {
    step: "4",
    title: "Deliver",
    desc: "I test, optimize, and deploy the application, ensuring performance, security, and reliability. Post-deployment, I provide documentation and support to ensure smooth usage and future scalability.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-32 border border-white/10 rounded-4xl">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#121212] px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_2px_rgba(255,255,255,0.07),0_12px_30px_rgba(0,0,0,0.55)]">
                    {/* circle + dot icon */}
                    <span className="inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
                        <span className="relative h-3 w-3 rounded-full border border-white">
                            <span className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-white" />

                        </span>
                    </span>
                    How It Works
                </div>

          <h2 className="mb-4 font-satoshi text-[42px] font-normal tracking-tight md:text-[56px]">
            Process <span className="text-white/50">Is Everything</span>
          </h2>

          <p className="mx-auto max-w-xl text-sm font-normal text-white/60 md:text-base">
            Simple, streamlined process is what gets you results
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-3xl bg-[#0F0F0F] p-8 min-h-90 w-80
                         border border-white/10
                         shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              {/* Step number */}
              <div className="absolute right-6 top-6 flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white/70 border border-white/10">
                {item.step}
              </div>

              {/* Icon */}
              <item.icon className="mb-6 h-6 w-6 text-white/80" />

              {/* Title */}
              <h3 className="mb-3 text-lg font-medium text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/60">
                {item.desc}
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-white/10" />

              {/* Step pill */}
              <span className="inline-flex rounded-full bg-black px-3 py-1.5 text-xs text-white/60 border border-white/10">
                Step {item.step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
