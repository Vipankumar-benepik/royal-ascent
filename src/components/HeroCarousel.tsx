import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import heroSlide1 from "@/assets/hero-elevator.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";

const slides = [
  {
    image: heroSlide1,
    accent: "Engineering Excellence",
    heading: "Premium Elevator &",
    highlight: "Lift Solutions",
    description: "Precision-crafted vertical transportation systems for discerning architects, developers, and homeowners.",
  },
  {
    image: heroSlide2,
    accent: "Luxury Interiors",
    heading: "Elevate Your",
    highlight: "Living Space",
    description: "Bespoke cabin designs with premium materials that complement any architectural vision.",
  },
  {
    image: heroSlide3,
    accent: "Modern Innovation",
    heading: "Panoramic &",
    highlight: "Glass Elevators",
    description: "Stunning exterior glass elevators that redefine the skyline experience.",
  },
  {
    image: heroSlide4,
    accent: "Residential Comfort",
    heading: "Home Elevators",
    highlight: "Redefined",
    description: "Seamless residential integration with whisper-quiet operation and elegant finishes.",
  },
  {
    image: heroSlide5,
    accent: "Expert Team",
    heading: "Professional",
    highlight: "Installation",
    description: "Certified engineers delivering safe, precise installations on every project.",
  },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%] h-full">
              <img
                src={slide.image}
                alt={slide.accent}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-asphalt/70" />
            </div>
          ))}
        </div>
      </div>

      {/* Text overlay — animates on slide change */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center section-padding max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6">
                {slides[selectedIndex].accent}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight mb-6">
                {slides[selectedIndex].heading}{" "}
                <span className="text-primary">{slides[selectedIndex].highlight}</span>
              </h1>
              <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
                {slides[selectedIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "w-8 bg-primary" : "w-2 bg-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
