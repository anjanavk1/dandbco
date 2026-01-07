import { ArrowRight } from "lucide-react";
import educationImage from "@/assets/education_space.png";
import workspaceImage from "@/assets/workspace_interior.png";

const divisions = [
  {
    title: "D&B Education",
    subtitle: "Inspiring Minds Through Design",
    description:
      "Creating transformative learning environments for schools, universities, and educational institutions that foster creativity, collaboration, and academic excellence.",
    image: educationImage,
    features: ["K-12 Schools", "Universities", "Libraries", "Labs & Studios"],
  },
  {
    title: "D&B Workspace",
    subtitle: "Empowering Teams Through Space",
    description:
      "Designing dynamic corporate environments that enhance productivity, well-being, and company culture for forward-thinking organizations.",
    image: workspaceImage,
    features: ["Corporate HQs", "Coworking Spaces", "Innovation Hubs", "Executive Suites"],
  },
];

const DivisionsSection = () => {
  return (
    <section id="divisions" className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Our Divisions
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Two Pillars of Excellence
          </h2>
        </div>

        {/* Division Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {divisions.map((division) => (
            <div
              key={division.title}
              className="group relative bg-card rounded-xl overflow-hidden shadow-elegant transition-all duration-500 hover:shadow-dramatic hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={division.image}
                  alt={division.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2">
                    {division.subtitle}
                  </p>
                  <h3 className="font-heading text-3xl font-bold text-white">
                    {division.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {division.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {division.features.map((feature) => (
                    <span
                      key={feature}
                      className="font-body text-xs font-medium tracking-wide px-3 py-1.5 bg-muted rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                >
                  Explore Projects
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
