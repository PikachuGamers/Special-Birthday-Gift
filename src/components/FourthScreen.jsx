"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Heart, Sparkles, Star, Moon } from "lucide-react"

export default function FourthScreen({ onShowOverlay }) {
  const [displayedText, setDisplayedText] = useState("")
  const [showButton, setShowButton] = useState(false)
  const scrollRef = useRef(null)

  const specialMessage = `Meri Payari Wifey Ji,

Sach batau toh aapke saath har din bahut special hota hai ❤️ Aapne meri life mein itni khushi bhar di hai ki ab aapke bina sab kuch adhura lagta hai 🥺

Aapki smile dekh kar mera poora din ban jata hai 🤭  Humesha mera saath dene aur mujhe samajhne ke liye thank you 🥰  

Aap meri sabse achhi dost bhi ho aur mera sab kuch bhi 🤌 I Love you so much meri Payari Sweetheart 😘💖 Me Bata nhi sakta ki aap mere liye kitni jayda Special ho 🥹 or Aaj ka Din mere liye Kitna Jayda Khas hai ✨🤌

Aaj hi vo din hai jab aap es duniya me aaye the 💓 Happiest Birthday Meri Payarii Wifey ji 💖🎉  
 
I wish ki Bhagwan aapki har ek Wish ko pura kre ☺️ Aapko har ek chiz mile jo aapko chahiye 💗 Aapke Saare Dream pure ho or aap Hamesha khush raho 🥰`

  const endingText = "Ek last chiz hai jo me chahta hu ki me hamesha kar saku"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < specialMessage.length) {
        setDisplayedText(specialMessage.slice(0, index + 1))
        index++

        // Auto-scroll logic for mobile
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
      } else {
        clearInterval(timer)
        setTimeout(() => setShowButton(true), 800)
      }
    }, 45) // Slightly adjusted speed for better readability

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0 ? <Heart size={20} fill="currentColor" /> : i % 3 === 1 ? <Star size={18} /> : <Moon size={16} />}
          </motion.div>
        ))}
      </div>

      {/* message container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-2xl mb-12 relative z-10 will-change-transform"
      >
        <div className="relative">
          {/* External decorative elements */}
          <div className="absolute -top-6 -left-6 text-pink-500 animate-bounce">
            <Heart size={32} fill="currentColor" />
          </div>
          <div className="absolute -top-6 -right-6 text-purple-500">
            <Sparkles size={28} />
          </div>

          {/* Letter/Note container */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(236,72,153,0.3)] border border-white/60 relative overflow-hidden">
            
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/50 pointer-events-none"></div>

            <div
              ref={scrollRef}
              className="h-[400px] overflow-y-auto custom-scrollbar relative z-10 pr-2"
              style={{ scrollBehavior: "smooth" }}
            >
              <p className="text-gray-800 leading-relaxed text-lg md:text-xl whitespace-pre-line font-semibold font-sans">
                {displayedText}
                {displayedText.length !== specialMessage.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block w-1 h-6 bg-pink-500 ml-1 rounded-full align-middle"
                  />
                )}
              </p>
            </div>
          </div>

          {/* Dynamic Glow Effect based on typing */}
          <div className={`absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-[2.5rem] blur-3xl -z-10 transition-opacity duration-1000 ${showButton ? 'opacity-100' : 'opacity-40'}`}></div>
        </div>
      </motion.div>

      {/* Ending text and button - Only shows after typing */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10"
          >
            <motion.p
              className="text-gray-700 text-xl md:text-2xl mb-6 font-black flex flex-col items-center justify-center gap-3"
              animate={{
                textShadow: [
                  "0 0 10px rgba(236, 72, 153, 0.3)",
                  "0 0 25px rgba(236, 72, 153, 0.6)",
                  "0 0 10px rgba(236, 72, 153, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {endingText}
              <motion.span
                animate={{ 
                  scale: [1, 1.4, 1],
                  rotate: [0, 10, -10, 0] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-pink-500"
              >
                <Heart size={36} fill="currentColor" />
              </motion.span>
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 30px 60px rgba(236, 72, 153, 0.4)",
                y: -8,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onShowOverlay}
              className="relative px-12 py-5 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 text-white text-2xl font-black rounded-full shadow-2xl overflow-hidden group border-b-4 border-pink-900"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <span className="relative z-10 flex items-center gap-3">
                Dekhne ke liye yaha par Click kro
                <Sparkles size={24} className="animate-pulse" />
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
