import { Heart, Linkedin, Mail, Instagram, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div>
            <a href="#home" className="text-2xl font-bold">
              <span className="gradient-text">Siva</span>
              <span className="text-foreground">Ganesh</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              AI & Data Science Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/siva-degala-05a0b7359/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/mr_avis/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="tel:+919676781879"
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Phone size={18} />
            </a>
            <a
              href="mailto:sivaganeshdegala@gmail.com"
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart size={14} className="text-primary fill-primary" />
            <span>by Siva Ganesh Degala</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
