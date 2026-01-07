import { Building2, School, Landmark, GraduationCap, Globe2, Briefcase } from "lucide-react";

const clients = [
  { name: "City University College", icon: School },
  { name: "Nord Anglia Education", icon: GraduationCap },
  { name: "American School of Doha", icon: Landmark },
  { name: "Qatar Foundation", icon: Globe2 },
  { name: "GEMS Education", icon: Building2 },
  { name: "Emirates Group", icon: Briefcase },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container-wide">
        {/* Stats Banner */}
        <div className="text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Our Partners
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From prestigious universities to Fortune 500 companies, we've had
            the privilege of creating exceptional spaces for visionary organizations.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center p-8 bg-muted/30 rounded-xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-elegant transition-all duration-500"
            >
              <div className="mb-4 text-muted-foreground group-hover:text-primary transition-colors duration-500">
                <client.icon size={40} strokeWidth={1.5} />
              </div>
              <span className="font-body text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60 group-hover:text-foreground transition-colors text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
