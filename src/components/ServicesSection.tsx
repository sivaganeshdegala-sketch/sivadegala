import { Camera, Code, Database, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing beautiful moments through landscape, portrait, and event photography. Each shot tells a unique story.",
    tags: ["Landscape", "Portrait", "Events"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building modern, responsive web applications and exploring frontend development with enthusiasm.",
    tags: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    icon: Database,
    title: "Data Projects",
    description: "Exploring data analysis and visualization, working on projects that turn raw data into meaningful insights.",
    tags: ["Data Analysis", "Visualization", "Python"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="text-primary font-semibold mb-2">My Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              What I <span className="gradient-text">Can Do</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            As a first-year student, I'm eager to take on projects and grow my skills. 
            Here's what I can help you with.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="text-primary" size={32} />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                  <ArrowUpRight 
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                    size={24} 
                  />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
