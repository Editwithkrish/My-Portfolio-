"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function LoadingScreen() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-black dark:from-gray-100 dark:to-white z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-red-700 bg-clip-text text-transparent">
          Krishna Kumar Jha
        </h1>
      </motion.div>

      <div className="relative w-64 h-2 bg-gray-800 dark:bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose-500 to-red-700 rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-gray-400 dark:text-gray-600"
      >
        <div className="flex space-x-3">
          {["Developer", "Designer", "Creator"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.2 }}
              className="text-lg"
            >
              {word}
              {i < 2 && <span className="text-rose-500 mx-1">•</span>}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
