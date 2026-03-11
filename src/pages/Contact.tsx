import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you for your inquiry. Our team will respond within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="pt-20">
      <section className="section-padding section-padding-y bg-graphite">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-gold font-display text-sm tracking-widest uppercase mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Schedule a site visit, request a quotation, or discuss your project requirements with our engineering team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding section-padding-y">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedSection>
                <h3 className="font-display text-lg mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">Phone</p>
                      <p className="text-muted-foreground text-sm mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">Email</p>
                      <p className="text-muted-foreground text-sm mt-1">info@royalselevator.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">Address</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        123 Engineering District<br />New York, NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">Hours</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Mon–Fri: 8:00 AM – 6:00 PM<br />
                        Sat: 9:00 AM – 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-display tracking-wide block mb-2">Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        maxLength={100}
                        className="w-full bg-graphite border border-border px-4 py-3 text-sm text-foreground focus:border-signal-blue focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-display tracking-wide block mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        maxLength={255}
                        className="w-full bg-graphite border border-border px-4 py-3 text-sm text-foreground focus:border-signal-blue focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-display tracking-wide block mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        maxLength={20}
                        className="w-full bg-graphite border border-border px-4 py-3 text-sm text-foreground focus:border-signal-blue focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-display tracking-wide block mb-2">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        maxLength={200}
                        className="w-full bg-graphite border border-border px-4 py-3 text-sm text-foreground focus:border-signal-blue focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-display tracking-wide block mb-2">Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      maxLength={2000}
                      className="w-full bg-graphite border border-border px-4 py-3 text-sm text-foreground focus:border-signal-blue focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-8 py-4 font-display font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px] bg-graphite flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890"
          className="w-full h-full border-0 grayscale opacity-60"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Royals Elevator office location"
        />
      </section>
    </div>
  );
};

export default Contact;
