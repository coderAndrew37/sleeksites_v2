"use client";
import {
  MessageCircle,
  X,
  ChevronRight,
  Send,
  PenTool,
  ArrowLeft,
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = {
  START: "START",
  SERVICE: "SERVICE",
  OTHER_DESC: "OTHER_DESC",
  BUDGET: "BUDGET",
  TIMELINE: "TIMELINE",
  FINALIZING: "FINALIZING",
  SPAM_CHECK: "SPAM_CHECK",
};

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(STEPS.START);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [otherText, setOtherText] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);

  // 1. Persistence Logic: Load from Session Storage on Mount
  useEffect(() => {
    const savedProgress = sessionStorage.getItem("sleeksites_chat_progress");
    if (savedProgress) {
      const {
        step: savedStep,
        answers: savedAnswers,
        otherText: savedOther,
      } = JSON.parse(savedProgress);
      setStep(savedStep);
      setAnswers(savedAnswers);
      setOtherText(savedOther);
    }
  }, []);

  // 2. Persistence Logic: Save to Session Storage on Change
  useEffect(() => {
    if (step !== STEPS.START && step !== STEPS.SPAM_CHECK) {
      sessionStorage.setItem(
        "sleeksites_chat_progress",
        JSON.stringify({ step, answers, otherText }),
      );
    }
  }, [step, answers, otherText]);

  // 3. Track Start Time for Velocity Check
  useEffect(() => {
    if (isOpen && !startTime) {
      setStartTime(Date.now());
    }
  }, [isOpen, startTime]);

  const whatsappUrl = useMemo(() => {
    const phone = "254746577838"; // Replace with your actual WhatsApp number
    const service =
      answers.service === "Other" ? `Custom: ${otherText}` : answers.service;
    const baseMsg = `*New Inquiry from SleekSites*%0A%0A`;
    const details = `*Interested in:* ${service}%0A*Budget:* ${answers.budget}%0A*Timeline:* ${answers.timeline}`;
    return `https://wa.me/${phone}?text=${baseMsg}${details}`;
  }, [answers, otherText]);

  const handleAnswer = (key: string, value: string, nextStep: string) => {
    // Anti-Spam Check 1: Honeypot
    if (honeypot.length > 0) {
      setStep(STEPS.SPAM_CHECK);
      return;
    }

    // Anti-Spam Check 2: Velocity (Human can't finish in < 4 seconds)
    if (nextStep === STEPS.FINALIZING && startTime) {
      const secondsElapsed = (Date.now() - startTime) / 1000;
      if (secondsElapsed < 4) {
        setStep(STEPS.SPAM_CHECK);
        return;
      }
    }

    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep(nextStep);
  };

  const handleFinalSubmit = () => {
    // Clear everything once they've clicked the redirect
    sessionStorage.removeItem("sleeksites_chat_progress");
    setIsOpen(false);
    // Reset state after transition finishes
    setTimeout(() => {
      setStep(STEPS.START);
      setAnswers({});
      setOtherText("");
      setStartTime(null);
    }, 500);
  };

  const handleBack = () => {
    if (step === STEPS.OTHER_DESC) setStep(STEPS.SERVICE);
    else if (step === STEPS.BUDGET)
      setStep(answers.service === "Other" ? STEPS.OTHER_DESC : STEPS.SERVICE);
    else if (step === STEPS.TIMELINE) setStep(STEPS.BUDGET);
    else if (step === STEPS.FINALIZING) setStep(STEPS.TIMELINE);
    else if (step === STEPS.SERVICE) setStep(STEPS.START);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Honeypot Input: Hidden from humans, tempting for bots */}
      <input
        aria-label="website_url_verification"
        type="text"
        name="website_url_verification"
        className="absolute opacity-0 pointer-events-none -z-50"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="mb-4 w-[360px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Dynamic Header */}
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                {step !== STEPS.START && step !== STEPS.SPAM_CHECK && (
                  <button
                    aria-label="go back"
                    onClick={handleBack}
                    className="p-1 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                )}
                <div>
                  <p className="font-bold text-lg leading-none mb-1">
                    SleekSites
                  </p>
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                    Inquiry Assistant
                  </p>
                </div>
              </div>
              <button
                aria-label="close chat"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-7">
              <AnimatePresence mode="wait">
                {step === STEPS.START && (
                  <motion.div
                    key="start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="text-slate-700 font-medium mb-6 leading-relaxed">
                      Let&apos;s build something great. Answer 3 quick questions
                      to start our WhatsApp chat.
                    </p>
                    <button
                      onClick={() => setStep(STEPS.SERVICE)}
                      className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
                    >
                      Check Availability <ChevronRight size={18} />
                    </button>
                  </motion.div>
                )}

                {step === STEPS.SERVICE && (
                  <motion.div
                    key="service"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                      I need help with...
                    </p>
                    <div className="space-y-2">
                      {[
                        "Web Development",
                        "Content Strategy",
                        "SEO / Branding",
                      ].map((opt) => (
                        <button
                          key={opt}
                          onClick={() =>
                            handleAnswer("service", opt, STEPS.BUDGET)
                          }
                          className="w-full text-left p-4 rounded-xl border border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all font-semibold text-slate-700"
                        >
                          {opt}
                        </button>
                      ))}
                      <button
                        onClick={() =>
                          handleAnswer("service", "Other", STEPS.OTHER_DESC)
                        }
                        className="w-full text-left p-4 rounded-xl border border-dashed border-slate-300 hover:border-blue-500 hover:bg-slate-50 transition-all font-semibold text-slate-500 flex items-center gap-2"
                      >
                        <PenTool size={16} /> Something else...
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === STEPS.OTHER_DESC && (
                  <motion.div key="other_desc">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                      Briefly describe your project
                    </p>
                    <textarea
                      autoFocus
                      value={otherText}
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-0 text-slate-700 mb-4 h-24 outline-none resize-none"
                      placeholder="e.g. I need a real estate portal with map integration..."
                      onChange={(e) => setOtherText(e.target.value)}
                    />
                    <button
                      disabled={otherText.length < 5}
                      onClick={() =>
                        handleAnswer("service", "Other", STEPS.BUDGET)
                      }
                      className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold disabled:opacity-30 transition-all"
                    >
                      Continue
                    </button>
                  </motion.div>
                )}

                {step === STEPS.BUDGET && (
                  <motion.div
                    key="budget"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                      Investment Range
                    </p>
                    <div className="space-y-2">
                      {["Under KES 50k", "KES 50k - 100k", "KES 100k+"].map(
                        (opt) => (
                          <button
                            key={opt}
                            onClick={() =>
                              handleAnswer("budget", opt, STEPS.TIMELINE)
                            }
                            className="w-full text-left p-4 rounded-xl border border-slate-100 hover:border-blue-500 hover:bg-blue-50 font-semibold text-slate-700 transition-all"
                          >
                            {opt}
                          </button>
                        ),
                      )}
                    </div>
                  </motion.div>
                )}

                {step === STEPS.TIMELINE && (
                  <motion.div
                    key="timeline"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                      When do we start?
                    </p>
                    <div className="space-y-2">
                      {["Immediately", "1-3 Months", "Researching"].map(
                        (opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              handleAnswer("timeline", opt, STEPS.FINALIZING);
                            }}
                            className="w-full text-left p-4 rounded-xl border border-slate-100 hover:border-blue-500 hover:bg-blue-50 font-semibold text-slate-700 transition-all"
                          >
                            {opt}
                          </button>
                        ),
                      )}
                    </div>
                  </motion.div>
                )}

                {step === STEPS.FINALIZING && (
                  <motion.div key="final" className="text-center py-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <Send size={24} />
                    </div>
                    <p className="font-bold text-xl mb-2 text-slate-900">
                      Brief Complete!
                    </p>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      Your project details are ready. Open WhatsApp to finish
                      the inquiry.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleFinalSubmit}
                      className="block w-full bg-emerald-500 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 shadow-xl shadow-emerald-100 transition-all text-center"
                    >
                      Launch WhatsApp
                    </a>
                  </motion.div>
                )}

                {step === STEPS.SPAM_CHECK && (
                  <motion.div key="spam" className="text-center py-4">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={24} />
                    </div>
                    <p className="font-bold text-xl mb-2 text-slate-900">
                      Processing Brief
                    </p>
                    <p className="text-slate-500 text-sm">
                      Thank you for your interest. We are validating your data.
                      You can close this window now.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl relative"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-orange-500 border-2 border-white text-[9px] font-black items-center justify-center">
              1
            </span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
