import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
}

export default function LeadForm({
  isOpen,
  onClose,
  planName,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    budget: "",
    services: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Replace this URL with your actual Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/a/macros/hookhunters.com/s/AKfycby6oiTpuGWhTxdmjLJQg3m84vLfLJL8CHve3l2e4GCKBZ-8IfGDXEAvWv4NV449I5jl/exec";

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          website: formData.website || "N/A",
          budget: formData.budget,
          services: formData.services,
          description: formData.description,
          timestamp: new Date().toISOString(),
        }),
      });

      // With mode: 'no-cors', we can't read the response, so assume success
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          website: "",
          budget: "",
          services: "",
          description: "",
        });
      }, 2000);
    } catch (err) {
      setIsSubmitting(false);
      setError(
        "Failed to submit form. Please try again or contact us directly.",
      );
      console.error("Form submission error:", err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Form Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center rounded-t-2xl">
                <div>
                  <h2 className="text-3xl font-bold text-[#1c3439]">
                    Get Your Growth Plan
                  </h2>
                  {planName && (
                    <p className="text-gray-600 mt-1">
                      Selected Plan: {planName}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="px-8 py-6 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Monthly Marketing Budget *
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                    placeholder="₹XX,XXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="services"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Services Needed *
                  </label>
                  <select
                    id="services"
                    name="services"
                    required
                    value={formData.services}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="Performance Marketing">
                      Performance Marketing
                    </option>
                    <option value="Website Design">
                      Website Design
                    </option>
                    <option value="Creative Design">
                      Creative Design
                    </option>
                    <option value="Video Editing">
                      Video Editing
                    </option>
                    <option value="Blogs">Blogs</option>
                    <option value="Full Growth Plan">
                      Full Growth Plan
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your marketing goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full py-4 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-[#1c3439]/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : isSubmitted
                      ? "✓ Submitted!"
                      : "Get My Growth Plan"}
                </button>

                {error && (
                  <p className="text-xs text-red-500 text-center mt-2">
                    {error}
                  </p>
                )}

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to receive
                  marketing communications from HookHunters.
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}