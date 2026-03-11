import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Settings, Wrench, RefreshCw, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Installation",
    description: "Complete elevator installation from shaft construction through final commissioning. Our project managers coordinate with general contractors, architects, and inspectors to ensure seamless integration.",
    details: ["New construction & retrofit", "Shaft construction coordination", "Electrical & mechanical integration", "Testing & commissioning", "Code compliance certification"],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Preventive maintenance programs tailored to your equipment's age, usage patterns, and operating environment. We reduce unplanned downtime through data-driven predictive maintenance.",
    details: ["Monthly & quarterly inspections", "24/7 emergency callback", "Parts inventory management", "Performance reporting", "Compliance documentation"],
  },
  {
    icon: RefreshCw,
    title: "Modernization",
    description: "Upgrade aging systems with current technology without full replacement. We modernize controllers, drives, door operators, and cab interiors to extend equipment life by 15–25 years.",
    details: ["Controller upgrades", "Drive system replacement", "Cab interior renovation", "Door operator modernization", "Safety code updates"],
  },
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Pre-construction consulting for architects and developers. We provide traffic analysis, code review, equipment specification, and lifecycle cost projections before ground is broken.",
    details: ["Traffic analysis & planning", "Code compliance review", "Equipment specification", "Lifecycle cost analysis", "Accessibility consulting"],
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      <section className="section-padding section-padding-y bg-graphite">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-gold font-display text-sm tracking-widest uppercase mb-4">Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              Full-Lifecycle Support
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From the first blueprint review to decade-long maintenance agreements, we are your single point of accountability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {services.map((service, i) => (
        <section key={service.title} className={`section-padding section-padding-y ${i % 2 === 0 ? "" : "bg-graphite"}`}>
          <div className="container mx-auto">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <service.icon size={24} className="text-gold" />
                  <span className="text-gold font-display text-xs tracking-widest">0{i + 1}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      <section className="section-padding py-16 bg-graphite text-center">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-display mb-6">Start a Service Request</h2>
          <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 font-display font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity inline-block">
            Contact Our Team
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Services;
