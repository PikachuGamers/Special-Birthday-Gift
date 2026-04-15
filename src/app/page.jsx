"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FirstScreen from "@/components/FirstScreen"
import SecondScreen from "@/components/SecondScreen"
import ThirdScreen from "@/components/ThirdScreen"
import FourthScreen from "@/components/FourthScreen"
import HugOverlay from "@/components/HugOverlay"
import RestartOverlay from "@/components/RestartOverlay"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [showHugOverlay, setShowHugOverlay] = useState(false)
  const [showRestartOverlay, setShowRestartOverlay] = useState(false)

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
    // FIX: Changed from min-h-screen to h-[100dvh] to avoid mobile scrolling issues
    <main className="h-[100dvh] w-full relative overflow-hidden bg-[#fff5f8] flex flex-col items-center justify-center">
      
      {/* Grid Design Layer */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]" 
        style={{
          backgroundImage: `
            linear-gradient(#ffb6c1 1px, transparent 1px), 
            linear-gradient(90deg, #ffb6c1 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-pink-300 rounded-full blur-[1px]"
            style={{
              width: '6px', height: '6px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -60, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Content Wrapper - Standardized Height */}
      <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            {currentScreen === 0 && <FirstScreen onNext={() => setCurrentScreen(1)} />}
            {currentScreen === 1 && <SecondScreen onNext={() => setCurrentScreen(2)} />}
            {currentScreen === 2 && <ThirdScreen onNext={() => setCurrentScreen(3)} />}
            {currentScreen === 3 && <FourthScreen onShowOverlay={() => setShowHugOverlay(true)} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <HugOverlay show={showHugOverlay} onClose={handleHugClose} />
      <RestartOverlay show={showRestartOverlay} onRestart={handleRestart} />

      {/* Credit - Forced Bottom-Right */}
      <div className="fixed bottom-4 right-4 z-40 italic text-gray-500/80 text-[12px] sm:text-sm font-bold pointer-events-none" style={{ fontFamily: 'cursive' }}>
        For TaraGovindRam
      </div>
    </main>
  )
}
