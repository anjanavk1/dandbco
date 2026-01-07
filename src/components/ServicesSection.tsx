import { 
  Pencil, 
  Armchair, 
  Building2, 
  ClipboardList, 
  Leaf, 
  Cpu 
} from "lucide-react";

const services = [
  {
    icon: Pencil,
    title: "Interior Design",
    description: "Crafting spaces that balance aesthetics, functionality, and brand identity with meticulous attention to detail.",
  },
  {
    icon: Armchair,
    title: "FF&E",
    description: "Furniture, fixtures, and equipment procurement ensuring quality, durability, and design coherence.",
  },
  {
    icon: Building2,
    title: "Fit-Out",
    description: "Complete turnkey fit-out solutions from concept to handover, delivered on time and within budget.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Expert oversight and coordination ensuring seamless execution across all project phases.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Eco-conscious design strategies and LEED certification support for responsible built environments.",
  },
  {
    icon: Cpu,
    title: "Technology Integration",
    description: "Smart building solutions including HVAC, AV systems, and IoT infrastructure for future-ready spaces.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Our Services
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            End-to-End Excellence
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design and build services tailored to create exceptional spaces that inspire and perform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-8 transition-all duration-500 hover:shadow-elevated hover:-translate-y-1 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <service.icon 
                  size={24} 
                  className="text-primary transition-colors duration-300 group-hover:text-primary-foreground" 
                />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
