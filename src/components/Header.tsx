import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, LinkedinIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/#services" },
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
  };

  const renderLink = (l: typeof navLinks[0], className: string, onClick?: () => void) => {
    if (l.href.includes("#") && l.href.startsWith("/")) {
      if (location.pathname === "/" && l.href.startsWith("/#")) {
        return (
          <a key={l.href} href={l.href.replace("/", "")} className={className} onClick={onClick}>
            {l.label}
          </a>
        );
      }
      return (
        <Link key={l.href} to={l.href} className={className} onClick={onClick}>
          {l.label}
        </Link>
      );
    }
    return (
      <Link key={l.href} to={l.href} className={className} onClick={onClick}>
        {l.label}
      </Link>
    );
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail size={13} /> support@geetashakti.com
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> Basement and FF, BLK-03, Sector 121, Noida
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone size={13} /> +91 8114222222
            </span>

            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/geetashakticancercare" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition flex items-center"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://twitter.com/geetashakticancer" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition flex items-center"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="https://www.instagram.com/geetashakticancercare" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition flex items-center"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="hover:text-blue-700 transition flex items-center"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Geeta Shakti Cancer Care Foundation"
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) =>
              renderLink(
                l,
                `px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(l.href)
                    ? "text-accent"
                    : "text-foreground/80 hover:text-primary"
                }`
              )
            )}

            <Link
              to="/donate"
              className="ml-4 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-md hover:-translate-y-0.5 transition-all shadow-sm"
            >
              Make A Donation
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-border overflow-hidden bg-background"
            >
              <nav className="container py-4 flex flex-col gap-1">
                {navLinks.map((l) =>
                  renderLink(
                    l,
                    `px-4 py-3 text-sm font-medium rounded-md ${
                      isActive(l.href)
                        ? "text-accent bg-accent/5"
                        : "text-foreground/80 hover:bg-muted"
                    }`,
                    () => setOpen(false)
                  )
                )}

                <Link
                  to="/donate"
                  onClick={() => setOpen(false)}
                  className="mt-2 px-5 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-md text-center"
                >
                  Make A Donation
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}