"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion" // Maine ise framer-motion kar diya hai for stability
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
    <div className="min-h-screen relative overflow-hidden bg-[#fff5f8]">
      
      {/* --- PREMIUM GRID DESIGN START --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]" 
        style={{
          backgroundImage: `
            linear-gradient(#ffb6c1 1.5px, transparent 1.5px), 
            linear-gradient(90deg, #ffb6c1 1.5px, transparent 1.5px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      {/* --- PREMIUM GRID DESIGN END --- */}

      {/* --- FLOATING PARTICLES START --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-[1px]"
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        {/* Glowy blobs for depth */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-200/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/40 rounded-full blur-[120px]"></div>
      </div>
      {/* --- FLOATING PARTICLES END --- */}

      <div className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="min-h-screen will-change-transform"
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      <HugOverlay show={showHugOverlay} onClose={handleHugClose} />
      <RestartOverlay show={showRestartOverlay} onRestart={handleRestart} />

      {/* Watermark/Credit */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-6 right-6 text-[14px] text-gray-600/80 pointer-events-none z-40 font-bold italic"
        style={{ fontFamily: 'cursive' }}
      >
        For TaraGovindRam
      </motion.div>
    </div>
  )
}
