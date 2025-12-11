import { Code, Camera, Brain, Database } from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "C Programming",
    level: 70,
    description: "Introduction & Intermediate",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    name: "AI & Machine Learning",
    level: 45,
    description: "Learning & Exploring",
    color: "from-primary to-orange-500",
  },
  {
    icon: Database,
    name: "Data Science",
    level: 50,
    description: "Fundamentals",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Camera,
    name: "Photography",
    level: 80,
    description: "Landscape & Portrait",
    color: "from-purple-500 to-pink-500",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">My Skills</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What I <span className="gradient-text">Bring to the Table</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuously learning and growing, here are the skills I'm developing
            as I pursue my passion for technology and creativity.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-3 flex items-center justify-center`}>
                  <skill.icon className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
                <span className="text-2xl font-bold text-primary">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card px-8 py-4 rounded-full border border-border">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-muted-foreground">
              Currently learning:{" "}
              <span className="text-foreground font-medium">Python, Machine Learning, Data Analysis</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
