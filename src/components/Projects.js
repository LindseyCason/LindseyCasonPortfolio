import React from "react";
import SipSavorStir from "../assets/SipSavorStirImages.png";
import VelvetAndVine from "../assets/VelvetAndVineImage.png";

const CASE_STUDIES = [
  {
    index: "01",
    title: "Sip, Savor & Stir",
    description:
      "A full-stack cocktail discovery platform built around a live REST API. Engineered complex ingredient-based filtering logic, optimized async data-fetching patterns, and designed a responsive Figma-first UI that scales gracefully across breakpoints.",
    role: "Software Engineer",
    focus: "State Architecture",
    engine: "React / REST API",
    image: SipSavorStir,
    imageAlt: "Sip, Savor & Stir application interface",
    liveUrl: "https://cocktails2023-lindseyacason.vercel.app/",
    codeUrl: "https://github.com/LindseyCason/cocktails2023",
  },
  {
    index: "02",
    title: "Velvet & Vine",
    description:
      "A premium pet hospitality and lifestyle lounge website built entirely without frameworks — pure HTML5, CSS3, and vanilla JS. Demonstrates mastery of CSS Grid, Flexbox, and custom properties to deliver a polished, editorial aesthetic. Integrates Formspree for contact and Calendly for booking with zero dependencies.",
    role: "Front-End Developer",
    focus: "No-Framework UI",
    engine: "HTML5 / CSS3 / JS",
    image: VelvetAndVine,
    imageAlt: "Velvet & Vine premium pet hospitality website",
    liveUrl: "https://velvetandvine-nu.vercel.app/",
    codeUrl: null,
  },
  {
    index: "03",
    title: "Automated Testing Epic",
    description:
      "Inherited a brittle, legacy QA pipeline with >30% test flakiness. Systematically diagnosed root causes, refactored the suite using Playwright's modern async model, and integrated the suite into CI/CD — reducing flake rate to under 2% and cutting pipeline failure noise by 85%.",
    role: "Software Engineer in Test",
    focus: "Flake Reduction",
    engine: "Playwright / CI",
    image: null,
    imageAlt: "Automated testing pipeline dashboard",
    liveUrl: null,
    codeUrl: null,
  },
];

const VisualFrame = ({ image, imageAlt, index }) => (
  <div className="w-full aspect-[4/3] bg-roasted-charcoal rounded-xl border border-espresso-border shadow-xl shadow-black/20 overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-black/30">
    {image ? (
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover object-top"
      />
    ) : (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #C4A484 0px, #C4A484 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #C4A484 0px, #C4A484 1px, transparent 1px, transparent 40px)",
          }}
          aria-hidden="true"
        />
        <span className="font-serif text-8xl font-light text-brass/20 select-none" aria-hidden="true">
          {index}
        </span>
        <span className="font-sans text-xs tracking-[0.3em] text-cashmere/60 uppercase">
          QA &middot; Automation &middot; CI/CD
        </span>
      </div>
    )}
  </div>
);

const MetadataBlock = ({ role, focus, engine }) => (
  <div className="border-t border-b border-espresso-border py-5 my-6">
    <div className="grid grid-cols-3 gap-6">
      {[
        { label: "Role",   value: role   },
        { label: "Focus",  value: focus  },
        { label: "Engine", value: engine },
      ].map(({ label, value }) => (
        <div key={label}>
          <p className="font-sans text-xs text-cashmere tracking-[0.2em] uppercase mb-1.5">
            {label}
          </p>
          <p className="font-sans text-sm text-parchment">{value}</p>
        </div>
      ))}
    </div>
  </div>
);

export const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 sm:py-32">

      {/* Section header */}
      <div className="mb-20 lg:mb-28">
        <p className="font-sans text-brass text-xs tracking-[0.25em] uppercase mb-4">
          Selected Work
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-parchment leading-tight max-w-2xl">
          Case Studies in Digital Architecture &amp; Precision.
        </h2>
      </div>

      {/* Case study list */}
      {CASE_STUDIES.map((project, i) => (
        <React.Fragment key={project.index}>
          <div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-36">

            {/* Narrative column */}
            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <span className="font-sans text-xs tracking-[0.3em] text-brass uppercase">
                {project.index}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-parchment mt-2 mb-5 leading-tight">
                {project.title}
              </h3>
              <p className="font-sans text-cashmere text-base leading-relaxed mb-6 max-w-prose">
                {project.description}
              </p>

              <MetadataBlock
                role={project.role}
                focus={project.focus}
                engine={project.engine}
              />

              <div className="flex flex-wrap items-center gap-6 mt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-sm text-cashmere hover:text-brass transition-all duration-400 tracking-wide no-underline"
                  >
                    View Project &rarr;
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-sm text-cashmere hover:text-brass transition-all duration-400 tracking-wide no-underline"
                  >
                    Source Code &rarr;
                  </a>
                )}
                {!project.liveUrl && !project.codeUrl && (
                  <span className="font-sans text-sm text-cashmere/60 italic">
                  </span>
                )}
              </div>
            </div>

            {/* Visual frame column */}
            <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
              <VisualFrame
                image={project.image}
                imageAlt={project.imageAlt}
                index={project.index}
              />
            </div>
          </div>

          {/* Divider between projects, not after the last */}
          {i < CASE_STUDIES.length - 1 && (
            <hr className="border-espresso-border mb-24 lg:mb-36" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
