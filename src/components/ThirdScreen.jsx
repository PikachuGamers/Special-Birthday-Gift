"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCreative, Navigation, Autoplay } from "swiper/modules"
import { Camera, Heart, Sparkles, Star } from "lucide-react"
import "swiper/css"
import "swiper/css/effect-creative"
import "swiper/css/navigation"

export default function ThirdScreen({ onNext }) {
  // FIX: Paths ke aage se '/' hata diya hai taaki GitHub Pages par images load ho sakein
  const photos = [
    { src: "images/1.jpg", alt: "Memory 1" },
    { src: "images/2.jpg", alt: "Memory 2" },
    { src: "images/3.jpg", alt: "Memory 3" },
    { src: "images/4.jpg", alt: "Memory 4" },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden">
      
      {/* --- PREMIUM FLOATING DECORATIONS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0 ? <Camera size={28} /> : i % 3 === 1 ? <Star size={20} fill="currentColor" /> : <Sparkles size={24} />}
          </motion.div>
        ))}
      </div>

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10 relative z-10"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight pb-2"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Mera payara sa bacha 😚
        </motion.h2>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, -15, 0],
            filter: [
              "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
              "drop-shadow(0 0 40px rgba(59, 130, 246, 0.9))",
              "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-blue-500 flex justify-center mt-4"
        >
          <Camera size={56} />
        </motion.div>
      </motion.div>

      {/* Premium photo gallery */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-sm mb-12 relative z-10"
      >
        <Swiper
          grabCursor={true}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-25%", 0, -1],
              rotate: [0, 0, -5],
            },
            next: {
              translate: ["110%", 0, 0],
            },
          }}
          navigation={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[EffectCreative, Navigation, Autoplay]}
          className="w-full h-[450px] md:h-[500px] rounded-[2.5rem] premium-photo-swiper shadow-2xl"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index} className="bg-transparent">
              <motion.div
                className="w-full h-full bg-gradient-to-br from-pink-200 via-white to-blue-200 rounded-[2.5rem] p-4 shadow-2xl relative overflow-hidden border-4 border-white"
              >
                {/* Image Frame */}
                <div className="w-full h-full bg-gray-100 rounded-[2rem] overflow-hidden shadow-inner relative group">
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none"></div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 right-4 text-pink-500 drop-shadow-lg">
                    <Heart size={24} fill="currentColor" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-blue-400 drop-shadow-lg">
                    <Sparkles size={20} />
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[shimmer_3s_infinite] pointer-events-none"></div>

              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <p className="text-center text-blue-400/60 text-sm mt-4 font-bold tracking-widest">
           MEMORIES THAT LAST FOREVER 
        </p>
      </motion.div>

      {/* Premium button */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 25px 50px rgba(59, 130, 246, 0.5)",
          y: -8,
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="relative px-12 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-2xl font-black rounded-full shadow-2xl overflow-hidden group border-b-4 border-blue-800 z-10"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        <span className="relative z-10 flex items-center gap-3">
          Ek or Baaki hai...
          <Sparkles size={24} className="animate-pulse" />
        </span>
      </motion.button>
    </div>
  )
}
