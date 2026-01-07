import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero_background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="font-body text-sm font-semibold tracking-[0.3em] uppercase text-white/80 mb-6 animate-fade-up opacity-0 stagger-1">
            Design & Build Excellence
          </p>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up opacity-0 stagger-2">
            Transforming Spaces.
            <br />
            <span className="text-primary">Inspiring Growth.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 stagger-3">
            Bespoke Design & Build solutions for future-ready educational and
            corporate environments across the Middle East.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-4">
            <Button variant="hero" size="xl">
              Explore Our Work
            </Button>
            <Button
              className="bg-white text-black hover:bg-gray-100 shadow-elegant hover:shadow-elevated font-semibold tracking-wide uppercase text-xs h-14 rounded-md px-10 text-base"
              size="xl"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="font-body text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
