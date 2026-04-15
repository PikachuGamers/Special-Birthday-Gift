"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FirstScreen from "@/components/FirstScreen"
import SecondScreen from "@/components/SecondScreen"
import ThirdScreen from "@/components/ThirdScreen"
import FourthScreen from "@/components/FourthScreen"
import HugOverlay from "@/components/HugOverlay"
import RestartOverlay from "@/components/RestartOverlay"
import { Heart } from "lucide-react" // Particles ke liye Heart icon

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [showHugOverlay, setShowHugOverlay] = useState(false)
  const [showRestartOverlay, setShowRestartOverlay] = useState(false)

  const screens = [
    <FirstScreen key="first" onNext={() => setCurrentScreen(1)} />,
    <SecondScreen key="second" onNext={() => setCurrentScreen(2)} />,
    <ThirdScreen key="third" onNext={() => setCurrentScreen(3)} />,
    <FourthScreen key="fourth" onShowOverlay={() => setShowHugOverlay(true)} />,
  ]

  const handleRestart = () => {
    setCurrentScreen(0)
    setShowHugOverlay(false)
    setShowRestartOverlay(false)
  }

  const handleHugClose = () => {
    setShowHugOverlay(false)
    setShowRestartOverlay(true)
  }

  return (
    <main className="h-[100dvh] w-full relative overflow-hidden bg-[#fff5f8] flex flex-col items-center justify-center">
      
      {/* 1. PREMIUM GRID DESIGN (Added back correctly) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#ffb6c1 1.5px, transparent 1.5px), 
            linear-gradient(90deg, #ffb6c1 1.5px, transparent 1.5px)
          `,
          backgroundSize: '35px 35px'
        }}
      ></div>

      {/* 2. FLOATING LOVE PARTICLES (Added correctly) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/40" // Love themed particles
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart size={Math.random() * 15 + 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* 3. MAIN CONTENT (SCREENS) */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full w-full flex items-center justify-center will-change-transform"
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. OVERLAYS */}
      <HugOverlay show={showHugOverlay} onClose={handleHugClose} />
      <RestartOverlay show={showRestartOverlay} onRestart={handleRestart} />

      {/* 5. WATERMARK/CREDIT */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="fixed bottom-6 right-6 text-[14px] text-gray-500/80 pointer-events-none z-40 font-bold italic"
        style={{ fontFamily: 'Grand Hotel, cursive' }}
      >
        For TaraGovindRam
      </motion.div>

    </main>
  )
}
