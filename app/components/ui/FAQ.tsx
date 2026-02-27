"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
// Import your constants and helper
import { PHONE_NUMBER, getWhatsAppUrl } from "@/lib/constants/contact";

const faqs = [
  {
    question: "What Is SleekSites Agency?",
    answer:
      "SleekSites is a professional online digital agency in Kenya that specializes in high-performance web development, SEO, and AI integration. We provide the same expert services you'd find in a physical office, but faster and fully digital.",
  },
  {
    question: "Do I Need To Visit Your Office Physically?",
    answer:
      "No. We operate as a fully digital agency. All consultations, project management, and deliveries are handled through our streamlined online workflow, saving you time and physical logistics.",
  },
  {
    question: "Is My Project Information Safe With You?",
    answer:
      "Absolutely. We use industry-standard encryption and secure cloud environments to ensure your data, credentials, and project details are protected at every stage of development.",
  },
  {
    question: "How Long Does It Take To Process A Request?",
    answer:
      "Project timelines vary by scope. Standard landing pages are typically delivered within 3-5 days, while complex web applications and SEO campaigns follow a strategic 4-week sprint cycle.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // Helper for the WhatsApp redirect
  const handleConsultation = () => {
    const url = getWhatsAppUrl(
      "Hello! I have some questions after reading your FAQ. I'd like to get a free consultation.",
    );
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Sticky Image */}
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100"
          >
            <img
              src="/faq-visual.webp"
              alt="Our workspace and creative tools"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Right Side: Accordion */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-orange-500 rounded-full" />
            <span className="font-bold text-slate-900 tracking-tight text-sm uppercase">
              Frequently Asked Questions
            </span>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-100">
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-xl font-bold tracking-tight transition-colors ${
                      activeIndex === i
                        ? "text-orange-500"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === i ? 180 : 0 }}
                    className={`${activeIndex === i ? "text-orange-500" : "text-slate-400"}`}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-slate-500 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're here to help! Contact us directly and we'll get back to you
            within hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WhatsApp CTA */}
            <button
              onClick={handleConsultation}
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/20 active:scale-95 transition-transform cursor-pointer"
            >
              Get Free Consultation
            </button>

            {/* Call CTA using Constant */}
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:text-white transition-colors active:scale-95 transition-transform flex items-center justify-center"
            >
              Call Us: +
              {PHONE_NUMBER.replace(/(\d{3})(\d{3})(\d+)/, "$1 $2 $3")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
