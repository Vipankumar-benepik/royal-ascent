import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const values = [
  { title: "Engineering First", description: "Every decision is guided by structural integrity, safety standards, and performance metrics." },
  { title: "Material Honesty", description: "We select components for their functional merit, not their marketing appeal." },
  { title: "Architectural Integration", description: "Our elevators are designed to complement the built environment, not compete with it." },
  { title: "Long-term Partnership", description: "We maintain every system we install, building relationships measured in decades." },
];

const team = [
  { name: "Alexander Royals", role: "Founder & Chief Engineer", bio: "30 years in vertical transportation engineering. Former lead engineer at a Fortune 500 elevator manufacturer." },
  { name: "Maria Santos", role: "Head of Design", bio: "Architect-turned-engineer specializing in elevator cab design and building integration." },
  { name: "David Chen", role: "Operations Director", bio: "Oversees all installation and maintenance operations across three regional offices." },
  { name: "Priya Patel", role: "Technical Consultant", bio: "Code compliance expert and certified elevator inspector with deep regulatory knowledge." },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding section-padding-y bg-graphite">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-gold font-display text-sm tracking-widest uppercase mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              Building Upward Since 1998
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Royals Elevator was founded on a simple conviction: vertical transportation deserves the same
              engineering rigor and design attention as the buildings it serves. For over two decades, we've
              delivered elevator solutions that architects specify by name.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding section-padding-y">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading accent="Our Mission" title="Elevating Standards" align="left" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              We engineer, install, and maintain premium elevator systems that meet the highest standards of
              safety, performance, and architectural integration. Our mission is to be the definitive partner
              for professionals who refuse to compromise on quality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every Royals installation begins with a detailed site analysis and ends with a commissioning
              process that exceeds code requirements. Between those points lies a collaborative engineering
              process refined over 500+ projects.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-padding-y bg-graphite">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading accent="Values" title="What We Stand For" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border-t border-gold/30 pt-6">
                  <h3 className="text-xl mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding section-padding-y">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading accent="Leadership" title="The Team Behind the Engineering" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="bg-graphite p-6 border border-border">
                  <div className="w-16 h-16 bg-accent flex items-center justify-center font-display text-gold text-xl font-bold mb-4">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="text-base font-display font-semibold">{member.name}</h3>
                  <p className="text-gold text-xs font-display tracking-wide mt-1 mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 bg-graphite text-center">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-display mb-6">Ready to Work With Us?</h2>
          <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 font-display font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity inline-block">
            Request a Visit
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default About;
