"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion" // Ensure this is framer-motion
import FirstScreen from "@/components/FirstScreen"
import SecondScreen from "@/components/SecondScreen"
import ThirdScreen from "@/components/ThirdScreen"
import FourthScreen from "@/components/FourthScreen"
import HugOverlay from "@/components/HugOverlay"
import RestartOverlay from "@/components/RestartOverlay"

export default function Home() {
  const [screen, setScreen] = useState(1)
  const [showHug, setShowHug] = useState(false)
  const [showRestart, setShowRestart] = useState(false)

  const handleRestart = () => {
    setScreen(1)
    setShowRestart(false)
    setShowHug(false)
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#fff5f8]">
      
      {/* --- BACKGROUND DESIGN (GRAPH/GRID) --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.12]" 
        style={{
          backgroundImage: `
            linear-gradient(#ff69b4 1.5px, transparent 1.5px), 
            linear-gradient(90deg, #ff69b4 1.5px, transparent 1.5px)
          `,
          backgroundSize: '35px 35px'
        }}
      ></div>

      {/* Floating Sparkles in Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Screens with Animation Wrapper */}
      <div className="relative z-10 w-full h-full min-h-screen flex items-center justify-center">
        {/* AnimatePresence ensures entry/exit animations work */}
        <AnimatePresence mode="wait">
          {screen === 1 && (
            <motion.div 
              key="screen1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full flex items-center justify-center"
            >
              <FirstScreen onNext={() => setScreen(2)} />
            </motion.div>
          )}

          {screen === 2 && (
            <motion.div 
              key="screen2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full flex items-center justify-center"
            >
              <SecondScreen onNext={() => setScreen(3)} />
            </motion.div>
          )}

          {screen === 3 && (
            <motion.div 
              key="screen3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full flex items-center justify-center"
            >
              <ThirdScreen onNext={() => setScreen(4)} />
            </motion.div>
          )}

          {screen === 4 && (
            <motion.div 
              key="screen4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full flex items-center justify-center"
            >
              <FourthScreen 
                onShowOverlay={() => setShowHug(true)} 
                onFinish={() => setShowRestart(true)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- CREDIT PART --- */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-none italic text-gray-500/80 text-sm sm:text-base font-bold" style={{ fontFamily: 'cursive' }}>
        @TaraGovindRam
      </div>

      {/* Overlays */}
      <HugOverlay 
        show={showHug} 
        onClose={() => {
          setShowHug(false)
          setShowRestart(true)
        }} 
      />

      <RestartOverlay 
        show={showRestart} 
        onRestart={handleRestart} 
      />

    </main>
  )
}
