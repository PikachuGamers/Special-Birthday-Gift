"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import { Heart, Star, Smile, Sun, Gift, ArrowRight, Sparkles } from "lucide-react"
import "swiper/css"
import "swiper/css/effect-cards"

export default function SecondScreen({ onNext }) {
  const thankYouCards = [
    {
      text: "Thank You Meri Banne ke Liye or Mujhe Choose Karne ke liye",
      icon: Heart,
      gradient: "from-pink-400 via-pink-500 to-rose-500",
      glow: "shadow-pink-500/50",
      iconColor: "text-white",
    },
    {
      text: "Thank You Meri Life ko itna jayda Special Banane ke Liye",
      icon: Star,
      gradient: "from-amber-300 via-yellow-500 to-orange-500",
      glow: "shadow-yellow-500/50",
      iconColor: "text-white",
    },
    {
      text: "Thank You har roj meri Khushi ki Vajah banne ke liye",
      icon: Smile,
      gradient: "from-emerald-400 via-green-500 to-teal-500",
      glow: "shadow-green-500/50",
      iconColor: "text-white",
    },
    {
      text: "Thank you soo much yaar mere liye itna sab karne ke liye 💖",
      icon: Sun,
      gradient: "from-orange-400 via-orange-500 to-red-500",
      glow: "shadow-orange-500/40",
      iconColor: "text-white",
    },
    {
      text: "I Love You Soooo Much 🥰🥰 Meri Payarii Wifey Ji ",
      icon: Gift,
      gradient: "from-violet-400 via-purple-500 to-indigo-500",
      glow: "shadow-purple-500/50",
      iconColor: "text-white",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart size={Math.random() * 30 + 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 relative z-10"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent leading-tight relative z-10 pb-2"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Kuchh Baate mere dil se...
        </motion.h2>
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
            filter: [
              "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))",
              "drop-shadow(0 0 40px rgba(236, 72, 153, 0.9))",
              "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))",
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="text-pink-500 flex justify-center mt-4"
        >
          <Gift size={48} />
        </motion.div>
      </motion.div>

      {/* cards container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-[320px] mb-12 relative z-10"
      >
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="w-full h-80"
          cardsEffect={{
            perSlideOffset: 10,
            perSlideRotate: 4,
            rotate: true,
            slideShadows: true,
          }}
        >
          {thankYouCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <SwiperSlide key={index} className="overflow-hidden rounded-[2rem]">
                <motion.div
                  className={`w-full h-full bg-gradient-to-br ${card.gradient} p-8 flex flex-col items-center justify-center text-center shadow-2xl ${card.glow} relative`}
                >
                  {/* Glass overlay effect */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                  
                  {/* Decorative particles inside card */}
                  <div className="absolute top-4 right-4 text-white/30"><Sparkles size={16} /></div>
                  <div className="absolute bottom-6 left-6 text-white/20"><Heart size={14} fill="currentColor" /></div>

                  {/* Icon with premium animation */}
                  {card.icon &&
                    <motion.div
                      className={`mb-6 p-5 bg-white/20 rounded-full backdrop-blur-md ${card.iconColor} shadow-xl border border-white/40 z-10`}
                      animate={{
                        y: [-8, 8, -8],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <IconComponent size={36} strokeWidth={2.5} />
                    </motion.div>
                  }

                  {/* Text with premium styling */}
                  <p className="text-xl font-bold text-white leading-snug relative z-10 drop-shadow-md px-2">
                    {card.text}
                  </p>

                </motion.div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        
        {/* Helper text for user */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="text-center text-gray-500 text-sm mt-4 font-medium"
        >
          ← Swipe to read more →
        </motion.p>
      </motion.div>

      {/* button */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-xl font-black rounded-full shadow-2xl overflow-hidden group border border-white/40"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        <span className="relative z-10 flex items-center gap-3">
          Abhi or bhi hai
          <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
        </span>
      </motion.button>
    </div>
  )
}
