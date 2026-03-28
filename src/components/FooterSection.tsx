import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo1 from "@/assets/logo1 (1).png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Volunteers", href: "/our-volunteers" },
  { label: "Mission & Vision", href: "/mission-aur-vision" },
  { label: "Activities", href: "/activities" },
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Free Doctor Consultation & Health Checkups", href: "/free-doctor-consultation-health-checkups" },
  { label: "Collaboration with Hospitals & Oncosurgeons", href: "/collaboration-with-hospitals-oncosurgeons" },
  { label: "Community Outreach Programs", href: "/community-outreach-programs" },
  { label: "Educational Workshops & Seminars", href: "/educational-workshops-seminars" },
  { label: "Palliative Care Assistance", href: "/palliative-care-assistance" },
  { label: "Nutritional Guidance", href: "/nutritional-guidance" },
  { label: "Counseling & Patient Support", href: "/counseling-patient-support" },
  { label: "Early Detection & Awareness", href: "/early-detection-awareness" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/geetashakticancercare" },
  { name: "Twitter", href: "https://twitter.com/geetashakticancer" },
  { name: "Instagram", href: "https://www.instagram.com/geetashakticancercare" },
  { name: "LinkedIn", href: "#" },
];

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-foreground text-background/80">
      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo1} alt="Geeta Shakti" className="h-16 w-auto object-contain" />
            <p className="mt-4 text-sm leading-relaxed">
              Geetashakti empowers lives by providing compassionate care, support, and hope to cancer patients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-background uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(l => (
                <li key={l.label}><Link to={l.href} className="text-sm hover:text-accent transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-background uppercase tracking-wider">Our Services</h4>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map(l => (
                <li key={l.label}><Link to={l.href} className="text-sm hover:text-accent transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-background uppercase tracking-wider">Get In Touch!</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm"><MapPin size={16} className="mt-0.5 flex-shrink-0" /> Basement and FF, BLK-03, Sector 121, Noida</li>
              <li className="flex items-center gap-2 text-sm"><Phone size={16} className="flex-shrink-0" /> +91 8114222222</li>
              <li className="flex items-center gap-2 text-sm"><Mail size={16} className="flex-shrink-0" /> contactus@geetashakti.org</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2025 Geeta Shakti. All Rights Reserved. Proudly Designed by Agencyfic</p>
          <div className="flex gap-4">
            {socialLinks.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-accent transition-colors">{s.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
