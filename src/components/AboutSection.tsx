const stats = [
  { value: "300+", label: "Spaces Delivered" },
  { value: "15+", label: "Years of Excellence" },
  { value: "4", label: "Regional Offices" },
  { value: "50+", label: "Expert Team" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              About D&B Co
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Spaces that{" "}
              <span className="text-gradient-accent">Inspire.</span>
              <br />
              Services that{" "}
              <span className="text-gradient-accent">Deliver.</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              For over 15 years, D&B Co has been the trusted partner for
              prestigious institutions and corporations across the Middle East.
              We combine architectural vision with meticulous execution to
              create environments that elevate human potential.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Our commitment to sustainability and human-centric design ensures
              every space we create is not just beautiful, but purposeful—
              fostering learning, collaboration, and innovation.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-muted rounded-lg p-8 text-center transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                  index === 0 ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                <p
                  className={`font-heading text-4xl md:text-5xl font-bold mb-2 ${
                    index === 0 ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </p>
                <p
                  className={`font-body text-sm font-medium tracking-wide ${
                    index === 0
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
