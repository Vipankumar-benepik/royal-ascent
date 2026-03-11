import AnimatedSection from "@/components/AnimatedSection";
import homeElevator from "@/assets/product-home-elevator.jpg";
import commercialElevator from "@/assets/product-commercial-elevator.jpg";
import stairLift from "@/assets/product-stair-lift.jpg";
import vacuumElevator from "@/assets/product-vacuum-elevator.jpg";
import heroImage from "@/assets/hero-elevator.jpg";

const images = [
  { src: heroImage, alt: "Premium elevator interior with amber lighting", category: "Interior" },
  { src: homeElevator, alt: "Residential home elevator installation", category: "Residential" },
  { src: commercialElevator, alt: "Commercial elevator bank in office lobby", category: "Commercial" },
  { src: stairLift, alt: "Curved stair lift installation", category: "Accessibility" },
  { src: vacuumElevator, alt: "Pneumatic vacuum elevator", category: "Innovation" },
  { src: heroImage, alt: "Elevator cabin detail", category: "Detail" },
];

const Gallery = () => {
  return (
    <div className="pt-20">
      <section className="section-padding section-padding-y bg-graphite">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-gold font-display text-sm tracking-widest uppercase mb-4">Gallery</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              Our Work
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A selection of completed installations across residential, commercial, and specialty applications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding section-padding-y">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="group overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-3">
                    <p className="text-gold font-display text-xs tracking-widest">{img.category}</p>
                    <p className="text-muted-foreground text-sm mt-1">{img.alt}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
