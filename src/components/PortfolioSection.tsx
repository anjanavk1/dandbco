import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio_edu_campus.png";
import portfolio2 from "@/assets/portfolio_corp_hq.png";
import portfolio3 from "@/assets/portfolio_edu_lab.png";
// Reusing assets for demonstration since limit reached, but in real app would use unique
import portfolio4 from "@/assets/workspace_interior.png";
import portfolio5 from "@/assets/education_space.png";
import portfolio6 from "@/assets/hero_background.png";

const projects = [
  {
    id: 1,
    title: "City University College",
    category: "Education",
    location: "Qatar",
    size: "large",
    image: portfolio1,
  },
  {
    id: 2,
    title: "Nord Anglia International",
    category: "Education",
    location: "Dubai, UAE",
    size: "medium",
    image: portfolio3,
  },
  {
    id: 3,
    title: "Executive Headquarters",
    category: "Corporate",
    location: "Riyadh, KSA",
    size: "medium",
    image: portfolio2,
  },
  {
    id: 4,
    title: "Innovation Hub",
    category: "Corporate",
    location: "Cairo, Egypt",
    size: "small",
    image: portfolio4,
  },
  {
    id: 5,
    title: "Modern Library",
    category: "Education",
    location: "Abu Dhabi, UAE",
    size: "small",
    image: portfolio5,
  },
  {
    id: 6,
    title: "Research & Development Campus",
    category: "Education",
    location: "Doha, Qatar",
    size: "large",
    image: portfolio6,
  },
];

const filters = ["All", "Education", "Corporate"];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Portfolio
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Exceptional Spaces
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:shadow-dramatic aspect-square"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2 opacity-100">
                    {project.category} • {project.location}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={24}
                      className="text-white opacity-100 transition-all duration-500 transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
