import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const offices = [
  { country: "Qatar", city: "Doha", flagship: true },
  { country: "UAE", city: "Dubai" },
  { country: "KSA", city: "Riyadh" },
  { country: "Egypt", city: "Cairo" },
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img src={logo} alt="D&B Co" className="h-16 w-auto object-contain" />
            </a>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
              Spaces that Inspire.
              <br />
              Services that Deliver.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-6">
              Regional Offices
            </h4>
            <ul className="space-y-3">
              {offices.map((office) => (
                <li key={office.country} className="flex items-center gap-2">
                  <span className="font-body text-sm text-white/70">
                    {office.city}, {office.country}
                  </span>
                  {office.flagship && (
                    <span className="font-body text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-accent/20 text-accent rounded">
                      HQ
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-6">
              Stay Updated
            </h4>
            <p className="font-body text-sm text-white/70 mb-4">
              Subscribe for insights on design trends and our latest projects.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 font-body"
              />
              <Button type="submit" variant="gold" size="sm" className="px-4">
                Join
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/50">
            © {new Date().getFullYear()} D&B Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-xs text-white/50 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-xs text-white/50 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
