"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Utensils, Plane, Camera, Music, Book, Coffee, Smile, User } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function PersonalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("about")

  const personalInterests = [
    { icon: <Plane className="h-6 w-6" />, label: "Travel", color: "bg-blue-500" },
    { icon: <Utensils className="h-6 w-6" />, label: "Food", color: "bg-orange-500" },
    { icon: <Camera className="h-6 w-6" />, label: "Photography", color: "bg-purple-500" },
    { icon: <Music className="h-6 w-6" />, label: "Music", color: "bg-green-500" },
    { icon: <Book className="h-6 w-6" />, label: "Reading", color: "bg-yellow-500" },
    { icon: <Coffee className="h-6 w-6" />, label: "Coffee", color: "bg-amber-700" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="personal" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-rose-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute rounded-full flex items-center justify-center text-rose-500/30",
              i % 3 === 0 ? "text-3xl" : i % 3 === 1 ? "text-4xl" : "text-2xl",
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {i % 5 === 0 ? "✈️" : i % 5 === 1 ? "🍕" : i % 5 === 2 ? "📷" : i % 5 === 3 ? "🎵" : "📚"}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Badge className="px-4 py-2 text-base bg-rose-500/10 text-rose-400 border-rose-500/20" variant="outline">
              <Heart className="h-4 w-4 mr-2" /> Personal
            </Badge>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Beyond The Code</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the keyboard. Life is more than just code and pixels!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border-2 border-rose-500/20 shadow-[0_0_25px_rgba(225,29,72,0.2)]">
                <Image
                  src="https://ik.imagekit.io/ufv2mnqwt/portfolio/WhatsApp%20Image%202025-05-16%20at%2009.23.34_8588b86a.jpg?updatedAt=1747481323908"
                  alt="Krishna Kumar Jha"
                  fill
                  className="object-cover"
                />

                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-transparent"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-5 -right-5 w-20 h-20 bg-rose-500/30 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute -bottom-5 -left-5 w-20 h-20 bg-rose-500/30 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md border border-rose-500/20 px-4 py-2 rounded-full shadow-lg z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(225,29,72,0.4)",
                }}
              >
                <p className="text-sm text-rose-200 text-center flex items-center">
                  <Smile className="h-4 w-4 mr-2 text-rose-500" />
                  <span>Adventurous spirit, creative mind!</span>
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-rose-500/10 shadow-[0_0_15px_rgba(225,29,72,0.15)] overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <User className="h-6 w-6 text-rose-500 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                  </div>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      I'm an adventurous and creative individual who loves exploring new places and cultures. I have a
                      deep appreciation for food and enjoy trying out different cuisines.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      While I'm generally calm and focused, I tend to be funny and lively once I get comfortable with
                      people. I value creativity in both my work and life, and I'm always looking for new ways to
                      express ideas—whether through travel, design, or storytelling.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="pt-4 border-t border-rose-500/10 mt-6"
                    >
                      <h4 className="text-lg font-semibold text-white mb-4">My Interests</h4>

                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="flex flex-wrap gap-3"
                      >
                        {personalInterests.map((interest, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className={cn(
                              "px-4 py-2 rounded-full flex items-center",
                              interest.color + "/10 hover:" + interest.color + "/20 transition-colors duration-300",
                            )}
                          >
                            <span className="mr-2">{interest.icon}</span>
                            <span className="text-white">{interest.label}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="pt-4 border-t border-rose-500/10 mt-6"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">Fun Fact</h4>
                      <p className="text-gray-300 italic">
                        "I once debugged code for 8 hours only to find I had a typo in a variable name. Now I name all
                        my variables after food when I'm hungry—it's harder to misspell 'pizza'!"
                      </p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
