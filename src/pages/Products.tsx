import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import homeElevator from "@/assets/product-home-elevator.jpg";
import commercialElevator from "@/assets/product-commercial-elevator.jpg";
import stairLift from "@/assets/product-stair-lift.jpg";
import vacuumElevator from "@/assets/product-vacuum-elevator.jpg";

const products = [
  {
    id: "home",
    title: "Home Elevators",
    image: homeElevator,
    description: "Our residential elevators are engineered for seamless integration into the home environment. Quiet hydraulic or traction drives, premium cab finishes, and compact shaft dimensions make them suitable for new construction and retrofit applications.",
    features: ["Whisper-quiet operation below 45dB", "Customizable cab interiors", "Compact shaft requirements", "Battery backup for power outages", "ADA compliant designs"],
    specs: { capacity: "450 kg", speed: "0.3 m/s", floors: "Up to 6", drive: "Hydraulic / MRL Traction" },
  },
  {
    id: "commercial",
    title: "Commercial Elevators",
    image: commercialElevator,
    description: "High-performance elevator systems designed for office buildings, hospitals, hotels, and mixed-use developments. Engineered for traffic intensity with advanced dispatch algorithms and energy-efficient drives.",
    features: ["Destination dispatch control", "Regenerative drives", "Vandal-resistant interiors", "IoT-enabled monitoring", "High-speed configurations"],
    specs: { capacity: "1600 kg", speed: "2.5 m/s", floors: "Up to 40", drive: "Gearless Traction" },
  },
  {
    id: "stair-lifts",
    title: "Stair Lifts",
    image: stairLift,
    description: "Accessibility solutions that install directly onto existing staircases without structural modification. Available in straight and curved rail configurations with folding seats and safety sensors.",
    features: ["Curved & straight rail options", "Folding seat and footrest", "Battery powered operation", "Remote control included", "Swivel seat at landings"],
    specs: { capacity: "135 kg", speed: "0.15 m/s", angle: "Up to 52°", power: "DC Battery" },
  },
  {
    id: "vacuum",
    title: "Vacuum Elevators",
    image: vacuumElevator,
    description: "Pneumatic vacuum technology that requires no shaft construction, pit excavation, or machine room. The self-supporting polycarbonate tube installs in hours and provides panoramic views during travel.",
    features: ["No shaft or pit required", "Self-supporting structure", "360° panoramic view", "Minimal installation time", "Emergency descent system"],
    specs: { capacity: "238 kg", speed: "0.15 m/s", floors: "Up to 4", drive: "Pneumatic Vacuum" },
  },
];

const Products = () => {
  return (
    <div className="pt-20">
      <section className="section-padding section-padding-y bg-graphite">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-gold font-display text-sm tracking-widest uppercase mb-4">Products</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              Our Product Range
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Four product categories. Hundreds of configurations. Each one engineered to the same uncompromising standard.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {products.map((product, i) => (
        <section key={product.id} className={`section-padding section-padding-y ${i % 2 === 0 ? "" : "bg-graphite"}`}>
          <div className="container mx-auto">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <span className="text-gold font-display text-xs tracking-widest">0{i + 1}</span>
                  <h2 className="text-3xl md:text-4xl font-display mt-2 mb-4">{product.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                  <h4 className="font-display text-sm tracking-wider text-foreground mb-4">KEY FEATURES</h4>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((f) => (
                      <li key={f} className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-display text-sm tracking-wider text-foreground mb-4">SPECIFICATIONS</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="border-t border-border pt-3">
                        <p className="text-muted-foreground text-xs uppercase tracking-wider">{key}</p>
                        <p className="text-foreground text-sm font-semibold mt-1">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      <section className="section-padding py-16 bg-graphite text-center">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-display mb-6">Need Help Choosing?</h2>
          <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 font-display font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity inline-block">
            Book a Consultation
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Products;
