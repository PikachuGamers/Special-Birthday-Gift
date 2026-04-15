"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"

export default function FirstScreen({ onNext }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
            
            {/* --- PREMIUM FLOATING DECORATIONS --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-400/30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 20, 0],
                            rotate: [0, 360],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {i % 2 === 0 ? <Heart size={24} fill="currentColor" /> : <Sparkles size={20} />}
                    </motion.div>
                ))}
            </div>

            {/* GIF circle */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    bounce: 0.4,
                }}
                className="mb-12 relative z-10 will-change-transform"
            >
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                    {/* Premium glow layers - Enhanced */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-70 animate-pulse"></div>
                    <div className="absolute inset-2 bg-gradient-to-r from-rose-300 via-pink-400 to-purple-400 rounded-full blur-xl opacity-50"></div>

                    {/* container */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 p-1.5 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/95 via-pink-50/95 to-purple-50/95 backdrop-blur-md flex items-center justify-center relative overflow-hidden">
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 via-purple-200/50 to-blue-200/50 rounded-full"></div>

                            {/* Center gif with animation */}
                            <motion.div
                                animate={{
                                    filter: [
                                        "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))",
                                        "drop-shadow(0 0 40px rgba(236, 72, 153, 0.9))",
                                        "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))",
                                    ],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                                className="text-pink-500 relative z-10"
                            >
                                {/* Path fixed for GitHub Pages */}
                                <img src="gifs/hello.gif" className="w-36 md:w-44 -mb-7 relative z-10" alt="hello" />
                            </motion.div>

                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mb-16 space-y-4 relative z-10"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight pb-2"
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                >
                    Mujhe Aapse Kuchh Kahna Hai
                </motion.h1>
                <motion.p
                    className="text-2xl md:text-3xl font-bold text-gray-700 flex items-center justify-center gap-2"
                    animate={{
                        textShadow: [
                            "0 0 20px rgba(236, 72, 153, 0.4)",
                            "0 0 40px rgba(236, 72, 153, 0.7)",
                            "0 0 20px rgba(236, 72, 153, 0.4)",
                        ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    I Hope Appko Pasand Aayega 💖
                </motion.p>
            </motion.div>

            {/* Premium button - Enhanced Hover */}
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring", bounce: 0.5 }}
                whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 25px 50px rgba(236, 72, 153, 0.5)",
                    y: -5
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="relative px-12 py-5 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white text-2xl font-black rounded-full shadow-2xl overflow-hidden group border-b-4 border-pink-700 active:border-b-0"
            >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="relative z-10 flex items-center gap-3">
                    Yaha Click kro
                    <Heart size={24} fill="currentColor" className="mt-0.5" />
                </span>
            </motion.button>

        </div>
    )
}
