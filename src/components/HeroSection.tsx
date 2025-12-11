import { ArrowRight, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="gradient-text">Siva Ganesh</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground">
                AI & Data Science Enthusiast
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              A passionate B.Tech student exploring the world of Artificial Intelligence, 
              Data Science, and Photography. Building innovative solutions one project at a time.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
              >
                Hire Me
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                View Projects <ArrowRight size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/siva-degala-05a0b7359/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card px-5 py-3 rounded-full border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <Linkedin size={20} className="text-primary" />
                <span className="text-sm font-medium">LinkedIn</span>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Connect</span>
              </a>
              <a
                href="mailto:sivaganeshdegala@gmail.com"
                className="flex items-center gap-3 bg-card px-5 py-3 rounded-full border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <Mail size={20} className="text-primary" />
                <span className="text-sm font-medium">Email</span>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Write</span>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Decorative Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-[450px] lg:h-[450px] bg-primary/80 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float" />
            
            {/* Profile Image */}
            <div className="relative z-10">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Siva Ganesh Degala - AI & Data Science Student"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border px-6 py-3 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold text-primary">1st</p>
                <p className="text-xs text-muted-foreground">Year B.Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
