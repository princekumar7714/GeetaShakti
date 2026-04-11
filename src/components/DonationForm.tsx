import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Heart, Check, Smartphone, QrCode, Copy, CheckCircle2, Receipt, Printer } from "lucide-react";
import { toast } from "sonner";
import { whatsappService } from "@/services/whatsappService";
import DonationReceipt from "./DonationReceipt";

// ⚠️ REPLACE THIS with your actual UPI ID
const UPI_ID = "gccf@kotak";
const UPI_NAME = "Geeta Shakti Cancer Care Foundation";

const presetAmounts = [500, 1000, 2000, 5000, 10000, 25000];

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [step, setStep] = useState<"amount" | "details" | "pay" | "success">("amount");
  const [copied, setCopied] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  const upiUrl = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_NAME)}&am=${amount}&cu=INR&tn=${encodeURIComponent(`Donation by ${donorName || "Supporter"}`)}`;

  const handlePresetClick = (amt: number) => {
    setSelectedAmount(amt);
    setCustomAmount("");
  };

  const handleCustomChange = (val: string) => {
    const cleaned = val.replace(/\D/g, "");
    setCustomAmount(cleaned);
    setSelectedAmount(null);
  };

  const generateTransactionId = () => {
    return `GS${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    toast.success("UPI ID copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDonationSubmission = async () => {
    if (!donorName.trim() || !donorEmail.trim()) {
      toast.error("Please fill in your details first");
      return;
    }

    try {
      // Generate transaction ID
      const newTransactionId = generateTransactionId();
      setTransactionId(newTransactionId);

      const result = await whatsappService.sendFormSubmission({
        name: donorName,
        email: donorEmail,
        phone: donorPhone,
        message: `Donation amount: Rs. ${amount.toLocaleString("en-IN")}`,
        formType: "Donation",
        additionalData: {
          amount: amount,
          upiId: UPI_ID,
          paymentMethod: "UPI",
          transactionId: newTransactionId
        }
      });

      if (result.success) {
        toast.success("Donation details sent to WhatsApp successfully!");
        setStep("success");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to send WhatsApp message");
    }
  };

  const handleShowReceipt = () => {
    setShowReceipt(true);
  };

  const isAmountValid = amount >= 10;
  const isDetailsValid = donorName.trim().length > 0;

  return (
    <section id="donation-form" className="py-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Make a Donation</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Choose Your Donation Amount
          </h2>
          <p className="mt-4 text-muted-foreground">Every rupee counts in the fight against cancer.</p>
        </motion.div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[
            { key: "amount", label: "Amount" },
            { key: "details", label: "Details" },
            { key: "pay", label: "Pay" },
            { key: "success", label: "Success" },
          ].map((s, i) => (
            <div key={s.key} className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (s.key === "amount") setStep("amount");
                  if (s.key === "details" && isAmountValid) setStep("details");
                  if (s.key === "pay" && isAmountValid && isDetailsValid) setStep("pay");
                }}
                disabled={s.key === "success"}
                className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                  step === s.key
                    ? "bg-accent text-accent-foreground"
                    : (s.key === "amount" || (s.key === "details" && isAmountValid) || (s.key === "pay" && isDetailsValid))
                    ? "bg-muted text-muted-foreground hover:bg-accent/20"
                    : "bg-muted text-muted-foreground/40"
                } ${s.key === "success" ? "cursor-not-allowed" : ""}`}
              >
                {i + 1}
              </button>
              <span className={`text-xs font-medium hidden sm:block ${step === s.key ? "text-accent" : "text-muted-foreground"}`}>
                {s.label}
              </span>
              {i < 3 && <div className="w-8 sm:w-16 h-px bg-border" />}
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-card shadow-card overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Step 1: Amount */}
            {step === "amount" && (
              <motion.div
                key="amount"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-6 md:p-10"
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-6">Select Donation Amount (₹)</h3>
                <div className="grid grid-cols-3 gap-3">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => handlePresetClick(amt)}
                      className={`p-4 rounded-xl border-2 font-semibold tabular-nums transition-all hover:-translate-y-0.5 ${
                        selectedAmount === amt
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border bg-background text-card-foreground hover:border-accent/40"
                      }`}
                    >
                      ₹{amt.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Or enter custom amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">₹</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={customAmount}
                      onChange={(e) => handleCustomChange(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent tabular-nums"
                    />
                  </div>
                </div>

                {amount > 0 && (
                  <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-center gap-3">
                    <Heart size={20} className="text-accent flex-shrink-0" />
                    <p className="text-sm text-card-foreground">
                      Your donation of <span className="font-bold text-accent tabular-nums">₹{amount.toLocaleString("en-IN")}</span> can help provide care and support to cancer patients.
                    </p>
                  </div>
                )}

                <button
                  onClick={() => isAmountValid && setStep("details")}
                  disabled={!isAmountValid}
                  className="mt-6 w-full py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:-translate-y-0.5 transition-all shadow-sm disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  Continue — ₹{amount > 0 ? amount.toLocaleString("en-IN") : "0"}
                </button>
              </motion.div>
            )}

            {/* Step 2: Details */}
            {step === "details" && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-6 md:p-10"
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-6">Your Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1.5 block">Full Name *</label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Your full name"
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-1.5 block">Email (optional)</label>
                      <input
                        type="email"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="your@email.com"
                        maxLength={255}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-1.5 block">Phone (optional)</label>
                      <input
                        type="tel"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        maxLength={15}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setStep("amount")}
                    className="px-6 py-3.5 border border-border text-card-foreground font-medium rounded-xl hover:bg-muted transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => isDetailsValid && setStep("pay")}
                    disabled={!isDetailsValid}
                    className="flex-1 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:-translate-y-0.5 transition-all shadow-sm disabled:opacity-40 disabled:hover:translate-y-0"
                  >
                    Proceed to Pay — ₹{amount.toLocaleString("en-IN")}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Pay */}
            {step === "pay" && (
              <motion.div
                key="pay"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-6 md:p-10"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Pay via UPI</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Scan the QR code or tap the button below to pay <span className="font-bold text-accent tabular-nums">₹{amount.toLocaleString("en-IN")}</span>
                  </p>

                  {/* QR Code */}
                  <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-background border border-border">
                    <div className="p-3 bg-background rounded-xl">
                      <QRCodeSVG
                        value={upiUrl}
                        size={200}
                        level="H"
                        includeMargin={false}
                        bgColor="transparent"
                        fgColor="hsl(222, 47%, 11%)"
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <QrCode size={16} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Scan with any UPI app</span>
                    </div>
                  </div>

                  {/* UPI ID Copy */}
                  <div className="mt-6 p-4 rounded-xl bg-muted flex items-center justify-between gap-3">
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">UPI ID</p>
                      <p className="text-sm font-mono font-semibold text-card-foreground">{UPI_ID}</p>
                    </div>
                    <button
                      onClick={handleCopyUPI}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border text-xs font-medium text-card-foreground hover:bg-accent/10 transition-colors"
                    >
                      {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  {/* Pay with UPI App Button */}
                  <a
                    href={upiUrl}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <Smartphone size={18} />
                    Pay ₹{amount.toLocaleString("en-IN")} with UPI App
                  </a>

                  <p className="mt-3 text-xs text-muted-foreground">
                    Works with Google Pay, PhonePe, Paytm, BHIM & all UPI apps
                  </p>

                  {/* Success confirmation */}
                  <div className="mt-8 p-4 rounded-xl border border-border bg-muted/50">
                    <div className="flex items-center gap-2 justify-center text-sm text-card-foreground">
                      <CheckCircle2 size={16} className="text-accent" />
                      <span>After payment, you'll receive a confirmation on your UPI app</span>
                    </div>
                  </div>

                  {/* WhatsApp Notification Button */}
                  <button
                    onClick={handleDonationSubmission}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 py-3.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-sm"
                  >
                    <Smartphone size={18} />
                    Send Donation Details to WhatsApp
                  </button>

                  <button
                    onClick={() => setStep("amount")}
                    className="mt-4 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    ← Change amount
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Success */}
            {step === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-6 md:p-10 text-center"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your donation of <span className="font-bold text-accent tabular-nums">Rs. {amount.toLocaleString("en-IN")}</span> has been received.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl p-4 mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Transaction ID</div>
                  <div className="font-mono font-semibold text-card-foreground">{transactionId}</div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-sm text-muted-foreground">
                    A confirmation has been sent to your WhatsApp. You will also receive an email receipt shortly.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Your contribution helps us provide care and support to cancer patients.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleShowReceipt}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <Receipt size={18} />
                    View Receipt
                  </button>
                  <button
                    onClick={() => {
                      // Reset form for new donation
                      setStep("amount");
                      setSelectedAmount(1000);
                      setCustomAmount("");
                      setDonorName("");
                      setDonorEmail("");
                      setDonorPhone("");
                      setTransactionId("");
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-card-foreground font-medium rounded-xl hover:bg-muted transition-colors"
                  >
                    Make Another Donation
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Donation Receipt Modal */}
      <DonationReceipt
        isVisible={showReceipt}
        onClose={() => setShowReceipt(false)}
        donationData={{
          donorName,
          donorEmail,
          donorPhone,
          amount,
          transactionId,
          paymentMethod: "UPI",
          timestamp: new Date()
        }}
      />
    </section>
  );
}
