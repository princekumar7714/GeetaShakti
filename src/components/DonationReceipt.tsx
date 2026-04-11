import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Print,
  Mail,
  Share2,
  CheckCircle,
  Calendar,
  User,
  CreditCard,
  Building,
} from "lucide-react";
import { toast } from "sonner";
import html2pdf from "html2pdf.js";

interface DonationReceiptProps {
  isVisible: boolean;
  onClose: () => void;
  donationData: {
    donorName: string;
    donorEmail: string;
    donorPhone: string;
    amount: number;
    transactionId: string;
    paymentMethod: string;
    timestamp: Date;
  };
}

export default function DonationReceipt({
  isVisible,
  onClose,
  donationData,
}: DonationReceiptProps) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // ✅ Escape HTML (security fix)
  const escapeHTML = (str: string = "") =>
    str.replace(/[&<>"']/g, (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[tag] || tag)
    );

  // ✅ Generate Receipt HTML
  const generateReceiptHTML = () => {
    return `
      <div style="font-family: Arial; padding:20px;">
        <h2 style="text-align:center;color:#dc2626;">
          Geeta Shakti Cancer Care Foundation
        </h2>
        <h3 style="text-align:center;">Donation Receipt</h3>

        <p><b>Name:</b> ${escapeHTML(donationData.donorName)}</p>
        <p><b>Email:</b> ${escapeHTML(donationData.donorEmail)}</p>
        <p><b>Phone:</b> ${escapeHTML(donationData.donorPhone)}</p>

        <hr/>

        <p><b>Transaction ID:</b> ${donationData.transactionId}</p>
        <p><b>Date:</b> ${donationData.timestamp.toLocaleString("en-IN")}</p>
        <p><b>Payment Method:</b> ${donationData.paymentMethod}</p>

        <h2 style="color:#dc2626;">
          Amount: ₹${donationData.amount.toLocaleString("en-IN")}
        </h2>

        <p style="margin-top:20px;">
          This donation is eligible under Section 80G of Income Tax Act.
        </p>
      </div>
    `;
  };

  // ✅ Download PDF (FIXED)
  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const element = document.createElement("div");
      element.innerHTML = generateReceiptHTML();

      await html2pdf()
        .from(element)
        .save(`receipt-${donationData.transactionId}.pdf`);

      toast.success("PDF downloaded!");
    } catch (err) {
      toast.error("Failed to generate PDF");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // ✅ Print only receipt
  const handlePrint = () => {
    const content = generateReceiptHTML();
    const printWindow = window.open("", "_blank");

    if (printWindow) {
      printWindow.document.write(content);
      printWindow.document.close();
      printWindow.print();
    }
  };

  // ✅ Email (basic fallback)
  const handleEmailReceipt = () => {
    const subject = encodeURIComponent(
      `Donation Receipt - ${donationData.transactionId}`
    );

    const body = encodeURIComponent(
      `Thank you ${donationData.donorName} for donating ₹${donationData.amount}`
    );

    window.location.href = `mailto:${donationData.donorEmail}?subject=${subject}&body=${body}`;
  };

  // ✅ Share (modern + fallback)
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Donation Receipt",
          text: "Here is my donation receipt",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied!");
      }
    } catch {
      toast.error("Share failed");
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl p-6 max-w-xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle />
                <h2 className="text-xl font-bold">Receipt</h2>
              </div>
              <button onClick={onClose}>✕</button>
            </div>

            {/* Info */}
            <div className="space-y-2 text-sm">
              <p><b>Name:</b> {donationData.donorName}</p>
              <p><b>Amount:</b> ₹{donationData.amount}</p>
              <p><b>Transaction:</b> {donationData.transactionId}</p>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                className="bg-red-600 text-white p-2 rounded"
              >
                <Download size={16} />
                {isGeneratingPDF ? "Generating..." : "PDF"}
              </button>

              <button
                onClick={handlePrint}
                className="bg-gray-600 text-white p-2 rounded"
              >
                <Print size={16} /> Print
              </button>

              <button
                onClick={handleEmailReceipt}
                className="bg-blue-600 text-white p-2 rounded"
              >
                <Mail size={16} /> Email
              </button>

              <button
                onClick={handleShare}
                className="bg-green-600 text-white p-2 rounded"
              >
                <Share2 size={16} /> Share
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
