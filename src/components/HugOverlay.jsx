"use client"

import { motion, AnimatePresence } from "framer-motion" // Maine 'motion/react' ko 'framer-motion' kar diya hai stability ke liye
import { Heart, Sparkles } from "lucide-react"

export default function HugOverlay({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-pink-950/40 backdrop-blur-xl z-[100] flex items-center justify-center p-4 overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 100 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              type: "spring",
              bounce: 0.3
            }}
            className="bg-white/95 rounded-[2.5rem] py-10 px-6 text-center shadow-[0_20px_50px_rgba(236,72,153,0.3)] max-w-sm w-full relative overflow-hidden border border-white"
          >
            {/* --- PREMIUM DECORATIVE BACKGROUND --- */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white pointer-events-none"></div>

            {/* Floating Hearts & Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-pink-300/50 pointer-events-none"
                style={{
                  left: `${Math.random() * 90}%`,
                  top: `${Math.random() * 90}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {i % 2 === 0 ? <Heart size={16} fill="currentColor" /> : <Sparkles size={14} />}
              </motion.div>
            ))}

            {/* --- HUG GIF --- */}
            <motion.div
              className="mb-8 relative z-10 flex justify-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-pink-200 blur-3xl opacity-40 rounded-full animate-pulse"></div>
                {/* FIX: Removed leading slash for GitHub Pages compatibility */}
                <img 
                  src="gifs/hug.gif" 
                  className="w-44 md:w-52 relative z-10 drop-shadow-2xl" 
                  alt="Huggy" 
                />
              </div>
            </motion.div>

            {/* --- TEXT CONTENT --- */}
            <div className="relative z-10 space-y-4 mb-10">
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                style={{ fontFamily: 'Grand Hotel, cursive' }}
              >
                Har roj Hug 😚
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-700 text-lg font-bold leading-relaxed px-2"
              >
                Me chahta hu ki me aapko har roj Hug kar saku kyuki me aapse bohoot jayda Payar karta hu ❤️
              </motion.p>
            </div>

            {/* --- BUTTON --- */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="relative px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xl font-black rounded-full shadow-[0_10px_30px_rgba(244,63,94,0.4)] z-10 group"
            >
              <span className="flex items-center gap-2">
                I feel it 💖
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
