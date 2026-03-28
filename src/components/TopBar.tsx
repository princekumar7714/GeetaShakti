import { Mail, MapPin, Facebook, Twitter, Instagram, LinkedinIcon } from "lucide-react";

const TopBar = () => (
  <div className="bg-[#8b1538] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-[13px]">
      
      {/* Left Side */}
      <div className="flex items-center gap-6">
        <a
          href="mailto:support@geetashakti.com"
          className="flex items-center gap-1.5 hover:text-gray-300 transition-colors"
        >
          <Mail size={14} />
          <span className="hidden sm:inline">support@geetashakti.com</span>
        </a>

        <span className="flex items-center gap-1.5">
          <MapPin size={14} />
          <span className="hidden md:inline">
            Basement and FF, BLK-03, Sector 121, Noida
          </span>
        </span>
      </div>

      {/* Right Side (Social Icons) */}
      <div className="flex items-center gap-3">
        {[
          { Icon: Facebook, href: "https://www.facebook.com/geetashakticancercare" },
          { Icon: Twitter, href: "https://twitter.com/geetashakticancer" },
          { Icon: Instagram, href: "https://www.instagram.com/geetashakticancercare" },
          { 
            Icon: LinkedinIcon, 
            href: "#" 
          }
        ].map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="social-link"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopBar;