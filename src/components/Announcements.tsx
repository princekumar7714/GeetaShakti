import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, X, AlertTriangle, Info, CheckCircle } from "lucide-react";

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: "low" | "medium" | "high";
  active: boolean;
}

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [dismissed, setDismissed] = useState<string[]>([]);

  useEffect(() => {
    // Load announcements from localStorage
    const savedAnnouncements = localStorage.getItem("adminAnnouncements");
    if (savedAnnouncements) {
      const parsed = JSON.parse(savedAnnouncements);
      setAnnouncements(parsed.filter((a: Announcement) => a.active));
    }

    // Load dismissed announcements
    const savedDismissed = localStorage.getItem("dismissedAnnouncements");
    if (savedDismissed) {
      setDismissed(JSON.parse(savedDismissed));
    }
  }, []);

  const dismissAnnouncement = (id: string) => {
    const newDismissed = [...dismissed, id];
    setDismissed(newDismissed);
    localStorage.setItem("dismissedAnnouncements", JSON.stringify(newDismissed));
  };

  const visibleAnnouncements = announcements.filter(a => !dismissed.includes(a.id));

  if (visibleAnnouncements.length === 0) {
    return null;
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case "medium":
        return <Info className="w-5 h-5 text-yellow-500" />;
      case "low":
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <Megaphone className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-50 border-red-200 text-red-800";
      case "medium":
        return "bg-yellow-50 border-yellow-200 text-yellow-800";
      case "low":
        return "bg-blue-50 border-blue-200 text-blue-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  return (
    <div className="fixed top-20 right-4 z-40 max-w-sm space-y-3">
      <AnimatePresence>
        {visibleAnnouncements.map((announcement) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className={`rounded-lg shadow-lg border p-4 ${getPriorityStyles(announcement.priority)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="flex-shrink-0 mt-0.5">
                  {getPriorityIcon(announcement.priority)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold mb-1">
                    {announcement.title}
                  </h4>
                  <p className="text-sm opacity-90 mb-2">
                    {announcement.content}
                  </p>
                  <p className="text-xs opacity-75">
                    {new Date(announcement.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <button
                onClick={() => dismissAnnouncement(announcement.id)}
                className="flex-shrink-0 ml-2 opacity-75 hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
