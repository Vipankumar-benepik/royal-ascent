import logoOtis from "@/assets/logo-otis.png";
import logoKone from "@/assets/logo-kone.png";
import logoSchindler from "@/assets/logo-schindler.png";
import logoThyssenkrupp from "@/assets/logo-thyssenkrupp.png";
import logoMitsubishi from "@/assets/logo-mitsubishi.png";
import logoFujitec from "@/assets/logo-fujitec.png";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const logos = [
  { src: logoOtis, name: "OTIS" },
  { src: logoKone, name: "KONE" },
  { src: logoSchindler, name: "Schindler" },
  { src: logoThyssenkrupp, name: "ThyssenKrupp" },
  { src: logoMitsubishi, name: "Mitsubishi Electric" },
  { src: logoFujitec, name: "Fujitec" },
];

// Duplicate for seamless infinite scroll
const allLogos = [...logos, ...logos];

const CustomerLogosCarousel = () => {
  return (
    <section className="section-padding py-20 bg-graphite overflow-hidden">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading accent="Partners" title="Our Valuable Customers" />
        </AnimatedSection>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-logos gap-12 md:gap-20 w-max">
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center w-32 h-20 md:w-40 md:h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogosCarousel;
