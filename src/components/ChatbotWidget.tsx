import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Search, Phone, Scissors, Users } from "lucide-react";

const options = [
  { icon: Search, label: "Find a Screening Camp", action: "https://wa.me/918114222222?text=I%20want%20to%20find%20a%20screening%20camp" },
  { icon: Phone, label: "Speak to a Counselor", action: "https://wa.me/918114222222?text=I%20want%20to%20speak%20to%20a%20counselor" },
  { icon: Scissors, label: "How to Donate Hair", action: "https://wa.me/918114222222?text=I%20want%20to%20donate%20hair" },
  { icon: Users, label: "Volunteer", action: "https://wa.me/918114222222?text=I%20want%20to%20volunteer" },
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            className="mb-4 w-72 rounded-2xl bg-card shadow-lg border border-border overflow-hidden"
          >
            <div className="p-4 bg-primary">
              <p className="text-sm font-semibold text-primary-foreground">How can we help you today?</p>
              <p className="text-xs text-primary-foreground/70 mt-1">Select an option below</p>
            </div>
            <div className="p-3 space-y-2">
              {options.map((opt) => (
                <a
                  key={opt.label}
                  href={opt.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <opt.icon size={16} />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{opt.label}</span>
                </a>
              ))}
            </div>
            <div className="p-3 border-t border-border">
              <a
                href="https://wa.me/918114222222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 text-sm font-semibold hover:bg-green-700 transition-colors"
                style={{ color: "white" }}
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:-translate-y-0.5 transition-all animate-chat-pulse"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
