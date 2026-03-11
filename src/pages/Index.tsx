import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-elevator.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import homeElevator from "@/assets/product-home-elevator.jpg";
import commercialElevator from "@/assets/product-commercial-elevator.jpg";
import stairLift from "@/assets/product-stair-lift.jpg";
import vacuumElevator from "@/assets/product-vacuum-elevator.jpg";

const highlights = [
  { stat: "25+", label: "YEARS OF ENGINEERING EXCELLENCE", description: "Cumulative expertise across residential and commercial verticals." },
  { stat: "40%", label: "ENERGY REDUCTION", description: "Our regenerative drive systems cut power consumption dramatically." },
  { stat: "15%", label: "LESS SHAFT SPACE REQUIRED", description: "Compact engineering that returns square footage to the building." },
  { stat: "500+", label: "BESPOKE INSTALLATIONS", description: "Each project tailored to architectural and functional requirements." },
];

const services = [
  { title: "Installation", description: "Precision installation of elevator systems for new construction and existing buildings, from planning through commissioning." },
  { title: "Maintenance", description: "Preventive and corrective maintenance programs that maximize uptime and extend equipment lifespan." },
  { title: "Modernization", description: "Upgrading legacy systems with current technology—controls, drives, cab interiors—without full replacement." },
  { title: "Consultation", description: "Expert guidance on elevator selection, code compliance, and traffic analysis for architects and developers." },
];

const products = [
  { title: "Home Elevators", image: homeElevator, description: "Engineered for residential integration. Quiet operation, minimal footprint, premium finishes." },
  { title: "Commercial Elevators", image: commercialElevator, description: "High-capacity systems built for traffic intensity. Reliable, efficient, code-compliant." },
  { title: "Stair Lifts", image: stairLift, description: "Accessibility solutions for existing staircases. Curved and straight rail configurations." },
  { title: "Vacuum Elevators", image: vacuumElevator, description: "Pneumatic technology requiring no shaft, pit, or machine room. Self-supporting structure." },
];

const testimonials = [
  { name: "James Morrison", role: "Architect, Morrison & Partners", text: "Royals Elevator understood our design intent from the first meeting. The integration into our residential tower was seamless." },
  { name: "Sarah Chen", role: "Property Developer", text: "We've specified Royals for three consecutive projects. Their engineering precision and post-installation support are unmatched." },
  { name: "Dr. Robert Hale", role: "Homeowner", text: "The home elevator transformed our living experience. The installation team was meticulous and the system runs silently." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium elevator interior with warm amber lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-asphalt/70" />
        </div>
        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-6"
          >
            Engineering Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight mb-6"
          >
            Premium Elevator &{" "}
            <span className="text-gold">Lift Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
          >
            Precision-crafted vertical transportation systems for discerning architects,
            developers, and homeowners.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 font-display font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              Request a Visit
            </Link>
            <Link
              to="/products"
              className="border border-foreground/30 text-foreground px-8 py-4 font-display font-semibold tracking-wide text-sm hover:border-foreground/60 transition-colors"
            >
              View Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding section-padding-y bg-graphite">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading accent="Why Royals" title="The Gold Standard in Vertical Transportation" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="border-t border-gold/30 pt-6">
                  <p className="text-gold font-display text-3xl md:text-4xl font-bold mb-2">{item.stat}</p>
                  <p className="font-display text-xs tracking-widest text-foreground mb-3">{item.label}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding section-padding-y">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading accent="Services" title="End-to-End Elevator Solutions" subtitle="From initial consultation through ongoing maintenance, we deliver comprehensive support at every phase of your elevator's lifecycle." />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="bg-graphite p-8 md:p-10 border border-border hover:border-gold/30 transition-colors">
                  <span className="text-gold font-display text-xs tracking-widest">0{i + 1}</span>
                  <h3 className="text-xl md:text-2xl mt-3 mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <Link to="/services" className="text-signal-blue text-sm mt-6 inline-block hover:underline">
                    Learn more →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-padding section-padding-y bg-graphite">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading accent="Products" title="Engineered for Every Application" subtitle="From private residences to high-traffic commercial buildings, our range addresses every vertical transportation requirement." />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <AnimatedSection key={product.title} delay={i * 0.1}>
                <Link to="/products" className="group block overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-5">
                    <h3 className="text-lg md:text-xl mb-2">{product.title}</h3>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-padding-y">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading accent="Testimonials" title="Trusted by Industry Leaders" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="border-t border-border pt-8">
                  <p className="text-foreground/80 text-sm leading-relaxed italic mb-6">"{t.text}"</p>
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs mt-1">{t.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding py-16 bg-graphite">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-xs tracking-widest font-display uppercase mb-8">Trusted Partners & Certifications</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["OTIS", "KONE", "Schindler", "ThyssenKrupp", "Mitsubishi"].map((partner) => (
              <span key={partner} className="text-muted-foreground/50 font-display text-lg md:text-xl tracking-wider font-semibold">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding section-padding-y">
        <div className="container mx-auto text-center max-w-2xl">
          <AnimatedSection>
            <p className="text-gold font-display text-sm tracking-widest uppercase mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-muted-foreground mb-10">
              Schedule a consultation with our engineering team to explore the right solution for your building.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 font-display font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity inline-block"
            >
              Request a Visit
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
