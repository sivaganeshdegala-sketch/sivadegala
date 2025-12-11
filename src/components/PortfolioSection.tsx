import { ExternalLink, Calendar, Code } from "lucide-react";
import doctorAppImage from "@/assets/project-doctor-appointment.jpg";
import photographyImage from "@/assets/photography-sample.jpg";

const projects = [
  {
    title: "Doctor Appointment Booking System",
    description: "A comprehensive web application that allows patients to book appointments with doctors. Features include doctor search, appointment scheduling, and user management.",
    image: doctorAppImage,
    tags: ["Web Development", "Healthcare", "Scheduling"],
    type: "Web Application",
    year: "2024",
  },
  {
    title: "Photography Portfolio",
    description: "A collection of my best landscape and nature photography work, capturing the beauty of nature during golden hours and scenic locations.",
    image: photographyImage,
    tags: ["Photography", "Landscape", "Nature"],
    type: "Creative Work",
    year: "2024",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">My Portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="gradient-text">Projects & Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my projects and creative work that demonstrate my skills and passion for technology and photography.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-3xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full">
                  <Code size={16} className="text-primary" />
                  <span className="text-sm font-medium">{project.type}</span>
                </div>

                {/* View Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <ExternalLink size={20} className="text-primary-foreground" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-4 py-2 bg-secondary rounded-full text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Projects Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-card p-8 rounded-3xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Code className="text-primary" size={32} />
            </div>
            <p className="text-muted-foreground max-w-md">
              More projects coming soon as I continue to learn and build new things. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
