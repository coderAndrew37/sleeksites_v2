"use client";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-100">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6"
          >
            <p className="font-bold text-lg mb-2">Chat with us! 👋</p>
            <p className="text-sm text-slate-500 mb-4">
              How can we help your business grow today?
            </p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold">
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-500/40"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white animate-pulse" />
      </motion.button>
    </div>
  );
}
