import { GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Content */}
          <div className="space-y-8 text-center">
            <div>
              <p className="text-primary font-semibold mb-2">About Me</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                I'm <span className="gradient-text">Siva Ganesh</span>,<br />
                A Student based in Amalapuram
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate B.Tech student specializing in Artificial Intelligence and Data Science 
              at BVC Engineering College. With a strong interest in emerging technologies, machine learning, 
              and data-driven problem-solving, I'm dedicated to building innovative solutions and expanding 
              my knowledge in the world of AI.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond coding, I have a keen eye for photography, capturing moments that tell stories. 
              I believe in continuous learning and am always excited to take on new challenges that 
              push me to grow both technically and creatively.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-card p-5 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">BVC Engineering College</p>
                    <p className="text-sm text-muted-foreground">B.Tech - AI & Data Science</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-5 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Amalapuram</p>
                    <p className="text-sm text-muted-foreground">Konaseema, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
