import { Award, ExternalLink } from "lucide-react";
import certificateCIntro from "@/assets/certificate-c-intro.jpg";

const certificates = [
  {
    id: 1,
    title: "Introduction to C",
    issuer: "Sololearn",
    date: "December 2025",
    image: certificateCIntro,
    certificateId: "CC-O9P9EW4P",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Certificates</span> & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional certifications and course completions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">{cert.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-1">
                  Issued by {cert.issuer}
                </p>
                <p className="text-muted-foreground text-sm">
                  {cert.date}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-2">
                  ID: {cert.certificateId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
