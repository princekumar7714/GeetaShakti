import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Print, Mail, Share2, CheckCircle, Calendar, User, Phone, CreditCard, Building } from "lucide-react";
import { toast } from "sonner";

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

export default function DonationReceipt({ isVisible, onClose, donationData }: DonationReceiptProps) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const generateTransactionId = () => {
    return `GS${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      // Create receipt content for printing
      const receiptContent = generateReceiptHTML();
      
      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(receiptContent);
        printWindow.document.close();
        
        // Wait for content to load, then trigger print
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 500);
        
        toast.success("Receipt ready for download!");
      }
    } catch (error) {
      toast.error("Failed to generate receipt");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handlePrint = () => {
    window.print();
    toast.success("Print dialog opened");
  };

  const handleEmailReceipt = () => {
    const subject = encodeURIComponent(`Donation Receipt - Geeta Shakti Foundation - ${donationData.transactionId}`);
    const body = encodeURIComponent(
      `Dear ${donationData.donorName},\n\n` +
      `Thank you for your generous donation of Rs. ${donationData.amount.toLocaleString('en-IN')} to Geeta Shakti Cancer Care Foundation.\n\n` +
      `Transaction Details:\n` +
      `Transaction ID: ${donationData.transactionId}\n` +
      `Date: ${donationData.timestamp.toLocaleDateString('en-IN')}\n` +
      `Amount: Rs. ${donationData.amount.toLocaleString('en-IN')}\n` +
      `Payment Method: ${donationData.paymentMethod}\n\n` +
      `Your contribution helps us continue our mission of providing care and support to cancer patients.\n\n` +
      `This receipt can be used for tax purposes under Section 80G of the Income Tax Act.\n\n` +
      `With gratitude,\n` +
      `Geeta Shakti Cancer Care Foundation`
    );
    
    window.location.href = `mailto:${donationData.donorEmail}?subject=${subject}&body=${body}`;
  };

  const generateReceiptHTML = () => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Donation Receipt - Geeta Shakti Foundation</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
          .header { text-align: center; border-bottom: 2px solid #e5e7eb; padding-bottom: 20px; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #dc2626; margin-bottom: 10px; }
          .receipt-title { font-size: 28px; font-weight: bold; color: #1f2937; margin-bottom: 5px; }
          .receipt-subtitle { color: #6b7280; font-size: 16px; }
          .section { margin-bottom: 25px; }
          .section-title { font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 10px; }
          .info-grid { display: grid; grid-template-columns: 200px 1fr; gap: 8px; }
          .info-label { font-weight: 600; color: #4b5563; }
          .info-value { color: #1f2937; }
          .amount-display { font-size: 24px; font-weight: bold; color: #dc2626; text-align: center; margin: 20px 0; padding: 15px; background: #fef2f2; border-radius: 8px; }
          .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px; }
          .thank-you { text-align: center; font-style: italic; color: #059669; margin: 20px 0; font-size: 16px; }
          @media print { body { margin: 20px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">Geeta Shakti Cancer Care Foundation</div>
          <div class="receipt-title">DONATION RECEIPT</div>
          <div class="receipt-subtitle">Tax Exempt under Section 80G</div>
        </div>
        
        <div class="section">
          <div class="section-title">Donor Information</div>
          <div class="info-grid">
            <div class="info-label">Name:</div>
            <div class="info-value">${donationData.donorName}</div>
            <div class="info-label">Email:</div>
            <div class="info-value">${donationData.donorEmail || 'Not provided'}</div>
            <div class="info-label">Phone:</div>
            <div class="info-value">${donationData.donorPhone || 'Not provided'}</div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">Donation Details</div>
          <div class="info-grid">
            <div class="info-label">Transaction ID:</div>
            <div class="info-value">${donationData.transactionId}</div>
            <div class="info-label">Date:</div>
            <div class="info-value">${donationData.timestamp.toLocaleDateString('en-IN')} ${donationData.timestamp.toLocaleTimeString('en-IN')}</div>
            <div class="info-label">Payment Method:</div>
            <div class="info-value">${donationData.paymentMethod}</div>
          </div>
        </div>
        
        <div class="amount-display">
          Rs. ${donationData.amount.toLocaleString('en-IN')}
        </div>
        
        <div class="thank-you">
          Thank you for your generous contribution to our mission of providing care and support to cancer patients.
        </div>
        
        <div class="section">
          <div class="section-title">Organization Details</div>
          <div class="info-grid">
            <div class="info-label">Organization:</div>
            <div class="info-value">Geeta Shakti Cancer Care Foundation</div>
            <div class="info-label">Address:</div>
            <div class="info-value">[Your Organization Address]</div>
            <div class="info-label">Phone:</div>
            <div class="info-value">+91 81142 22222</div>
            <div class="info-label">Email:</div>
            <div class="info-value">info@geetashakti.org</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This receipt is computer generated and does not require a signature.</p>
          <p>For any queries, please contact us at the above address or phone number.</p>
          <p>This receipt is valid for tax deduction under Section 80G of the Income Tax Act, 1961.</p>
        </div>
      </body>
      </html>
    `;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={24} />
                    <h2 className="text-2xl font-bold">Donation Receipt</h2>
                  </div>
                  <p className="text-red-100">Thank you for your generous contribution!</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Receipt Content */}
            <div className="p-6">
              {/* Transaction ID */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 font-medium">Transaction ID</p>
                    <p className="text-lg font-bold text-green-800">{donationData.transactionId}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-600 font-medium">Date & Time</p>
                    <p className="text-sm text-green-800">
                      {donationData.timestamp.toLocaleDateString('en-IN')}<br />
                      {donationData.timestamp.toLocaleTimeString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Donor Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <User size={20} />
                  Donor Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">{donationData.donorName}</span>
                  </div>
                  {donationData.donorEmail && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{donationData.donorEmail}</span>
                    </div>
                  )}
                  {donationData.donorPhone && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-medium">{donationData.donorPhone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Donation Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard size={20} />
                  Donation Details
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-medium">{donationData.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Amount:</span>
                    <span className="text-2xl font-bold text-red-600">
                      Rs. {donationData.amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Organization Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Building size={20} />
                  Organization Details
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="font-semibold">Geeta Shakti Cancer Care Foundation</div>
                  <div className="text-gray-600">
                    Registered under Section 80G of Income Tax Act, 1961
                  </div>
                  <div className="text-gray-600">Phone: +91 81142 22222</div>
                  <div className="text-gray-600">Email: info@geetashakti.org</div>
                </div>
              </div>

              {/* Tax Benefit Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <div className="text-blue-600 mt-1">
                    <Calendar size={16} />
                  </div>
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Tax Benefit Information</p>
                    <p>
                      This donation is eligible for tax deduction under Section 80G of the Income Tax Act, 1961. 
                      Please retain this receipt for your tax filing purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isGeneratingPDF}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  <Download size={18} />
                  <span className="hidden sm:inline">PDF</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Print size={18} />
                  <span className="hidden sm:inline">Print</span>
                </button>
                <button
                  onClick={handleEmailReceipt}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail size={18} />
                  <span className="hidden sm:inline">Email</span>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Receipt link copied!");
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Share2 size={18} />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
              <p className="text-center text-sm text-gray-600">
                This receipt is computer generated and valid for tax purposes.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
