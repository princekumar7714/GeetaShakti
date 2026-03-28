import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo1 from "@/assets/logo1 (1).png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Volunteers", href: "/our-volunteers" },
      { label: "Mission and Vision", href: "/mission-aur-vision" },
    ],
  },
  {
    label: "Activities",
    href: "/activities",
    children: [
      { label: "Cancer Awareness", href: "/cancer-awareness" },
      { label: "Cancer Screening", href: "/cancer-screening" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Free Doctor Consultation & Health Checkups", href: "/free-doctor-consultation-health-checkups" },
      { label: "Collaboration with Hospitals & Oncosurgeons", href: "/collaboration-with-hospitals-oncosurgeons" },
      { label: "Community Outreach Programs", href: "/community-outreach-programs" },
      { label: "Educational Workshops & Seminars", href: "/educational-workshops-seminars" },
      { label: "Palliative Care Assistance", href: "/palliative-care-assistance" },
      { label: "Nutritional Guidance", href: "/nutritional-guidance" },
      { label: "Counseling & Patient Support", href: "/counseling-patient-support" },
 
    ],
  },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Gallery", href: "/gallery" },
      { label: "Videos", href: "/videos" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Donate Now", href: "/donate" },
      { label: "Donate Hair", href: "/donate-hair" },
      { label: "Become a Volunteer", href: "/become-a-volunteer" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const NavDropdown = ({ item }: { item: (typeof navItems)[number] }) => {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link 
        to={item.href}
        className="flex items-center gap-1.5 text-nav-link hover:text-nav-hover font-medium text-[15px] transition-colors py-2"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1.5 text-nav-link hover:text-nav-hover font-medium text-[15px] transition-colors py-2">
        {item.label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-96 bg-popover border border-border rounded-lg shadow-lg py-2 z-50 max-h-96 overflow-y-auto"
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                to={child.href}
                className="block px-4 py-2 text-[13px] text-nav-link hover:text-nav-hover hover:bg-muted transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border overflow-hidden"
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full py-2.5 text-[14px] font-medium text-nav-link"
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform ${expandedItem === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {expandedItem === item.label && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {item.children.map((child) => (
                            <Link 
                              key={child.href} 
                              to={child.href} 
                              className="block py-2 text-[13px] text-muted-foreground hover:text-nav-hover"
                              onClick={onClose}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link 
                    to={item.href} 
                    className="block py-2.5 text-[14px] font-medium text-nav-link"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link to="/donate" onClick={onClose}>
                <Button variant="donate" className="w-full">
                  <Heart size={16} />
                  Make A Donation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-[#f8f9fa] shadow-sm border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <img 
                src={logo1} 
                alt="Geeta Shakti Cancer Care Foundation" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <NavDropdown key={item.label} item={item} />
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link to="/donate">
                <Button variant="donate" className="hidden sm:inline-flex" size="default">
                  <Heart size={16} />
                  Make A Donation
                </Button>
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-foreground"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </nav>
    </header>
  );
};
