import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-border">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl mb-4">
              <span className="text-gold">ROYALS</span> ELEVATOR
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Engineering precision. Architectural integration. Premium elevator solutions
              for those who demand the gold standard.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-semibold tracking-wider text-foreground mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-signal-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-display font-semibold tracking-wider text-foreground mb-4">
              PRODUCTS
            </h4>
            <ul className="space-y-3">
              {["Home Elevators", "Commercial Elevators", "Stair Lifts", "Vacuum Elevators"].map(
                (product) => (
                  <li key={product}>
                    <Link
                      to="/products"
                      className="text-muted-foreground text-sm hover:text-signal-blue transition-colors"
                    >
                      {product}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-display font-semibold tracking-wider text-foreground mb-4">
              CONTACT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">info@royalselevator.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Engineering District,<br />New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Royals Elevator. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-muted-foreground text-xs hover:text-signal-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-muted-foreground text-xs hover:text-signal-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
