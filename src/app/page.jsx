"use client"
import { useState } from "react"
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

  // Restart function
  const handleRestart = () => {
    setScreen(1)
    setShowRestart(false)
    setShowHug(false)
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#fff5f8]">
      
      {/* --- GRAPH/GRID DESIGN START --- */}
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
      {/* --- GRAPH/GRID DESIGN END --- */}

      {/* Floating Sparkles in Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Screens */}
      <div className="relative z-10 w-full h-full">
        {screen === 1 && <FirstScreen onNext={() => setScreen(2)} />}
        {screen === 2 && <SecondScreen onNext={() => setScreen(3)} />}
        {screen === 3 && <ThirdScreen onNext={() => setScreen(4)} />}
        {screen === 4 && (
          <FourthScreen 
            onShowOverlay={() => setShowHug(true)} 
            onFinish={() => setShowRestart(true)} 
          />
        )}
      </div>

      {/* --- CREDIT PART ADDED BACK --- */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-none italic text-gray-500/80 text-sm sm:text-base" style={{ fontFamily: 'cursive' }}>
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
