import { ArrowRight, Linkedin, Mail, Sparkles, Github, Instagram, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useEffect, useState } from "react";

const roles = [
  "AI & Data Science Enthusiast",
  "Problem Solver",
  "Photographer",
  "Future Innovator",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/60 rotate-45 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 border-2 border-primary/30 rotate-12 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 border border-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div 
              className="inline-flex items-center gap-3 glass-card px-5 py-3 rounded-full animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-foreground/80 font-medium">Available for opportunities</span>
              <Sparkles size={14} className="text-primary" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                <span className="text-foreground/90">Hello, I'm</span>
                <br />
                <span className="relative">
                  <span className="gradient-text">Siva Ganesh</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                  </svg>
                </span>
              </h1>
              
              {/* Typing Effect */}
              <div className="h-12 flex items-center">
                <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
                  {displayText}
                  <span className="inline-block w-[3px] h-8 bg-primary ml-1 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Description */}
            <p 
              className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              A passionate B.Tech student exploring the world of{" "}
              <span className="text-foreground font-medium">Artificial Intelligence</span>,{" "}
              <span className="text-foreground font-medium">Data Science</span>, and{" "}
              <span className="text-foreground font-medium">Photography</span>. 
              Building innovative solutions one project at a time.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 glass-card px-8 py-4 rounded-full font-semibold hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                View Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Social Links */}
            <div 
              className="flex flex-wrap items-center gap-3 pt-4 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="https://www.linkedin.com/in/siva-degala-990621373"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 glass-card px-5 py-3 rounded-2xl hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  <p className="text-xs text-muted-foreground">Connect</p>
                </div>
              </a>
              <a
                href="https://github.com/sivaganeshdegala-sketch"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 glass-card px-5 py-3 rounded-2xl hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <Github size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">GitHub</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </a>
              <a
                href="mailto:sivaganeshdegala@gmail.com"
                className="group flex items-center gap-3 glass-card px-5 py-3 rounded-2xl hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground">Write</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/mr_avis/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 glass-card px-5 py-3 rounded-2xl hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <Instagram size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Instagram</p>
                  <p className="text-xs text-muted-foreground">mr_avis</p>
                </div>
              </a>
              <a
                href="tel:+919676781879"
                className="group flex items-center gap-3 glass-card px-5 py-3 rounded-2xl hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <Phone size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-xs text-muted-foreground">+91 96767 81879</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Animated Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            {/* Outer Rotating Ring */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-[380px] lg:h-[380px] rounded-full animate-spin-slow"
              style={{ animationDuration: "25s" }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_hsl(var(--primary))]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary/60 rounded-full shadow-[0_0_15px_hsl(var(--primary)/0.6)]" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full" />
            </div>

            {/* Inner Rotating Ring */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-[340px] lg:h-[340px] rounded-full animate-spin-slow"
              style={{ animationDuration: "15s", animationDirection: "reverse" }}
            >
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="absolute top-1/4 left-0 w-2 h-2 bg-primary/50 rounded-full" />
              <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-primary/50 rounded-full" />
            </div>
            
            {/* Profile Image Container - Circle */}
            <div 
              className="relative z-10 animate-fade-up" 
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative group">
                {/* Glow Ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-primary/60 to-primary opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Border Ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary" />
                
                {/* Main Image - Circle */}
                <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Siva Ganesh Degala - AI & Data Science Student"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Floating Badge - Year */}
              <div className="absolute -bottom-2 -left-6 glass-card px-5 py-3 rounded-2xl shadow-xl animate-float hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-shadow duration-300" style={{ animationDelay: "0.5s" }}>
                <p className="text-2xl font-bold gradient-text">2nd</p>
                <p className="text-[10px] text-muted-foreground font-medium">Year B.Tech</p>
              </div>

              {/* Floating Badge - Focus */}
              <div className="absolute -top-2 -right-4 glass-card px-4 py-2 rounded-2xl shadow-xl animate-float hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-shadow duration-300" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Sparkles size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">AI & DS</p>
                    <p className="text-[9px] text-muted-foreground">Specialization</p>
                  </div>
                </div>
              </div>

              {/* GitHub Badge */}
              <a 
                href="https://github.com/sivaganeshdegala-sketch"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-1/4 -right-8 glass-card p-3 rounded-xl shadow-xl animate-float hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-110 transition-all duration-300 cursor-pointer" 
                style={{ animationDelay: "1.5s" }}
              >
                <Github size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { value: "1+", label: "Project Completed" },
            { value: "AI", label: "Specialization" },
            { value: "∞", label: "Learning Mindset" },
            { value: "24/7", label: "Available" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
