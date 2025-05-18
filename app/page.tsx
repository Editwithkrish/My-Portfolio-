"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Timeline from "@/components/timeline"
import ScrollProgress from "@/components/scroll-progress"
import ThemeToggle from "@/components/theme-toggle"
import AnimatedSkillBars from "@/components/animated-skill-bars"
import SkillsChart from "@/components/skills-chart"
import EnhancedLoadingScreen from "@/components/enhanced-loading-screen"
import InternshipSection from "@/components/internship-section"
import FunnyCursor from "@/components/funny-cursor"
import DownloadCV from "@/components/download-cv"
import Achievements from "@/components/achievements"
import PersonalSection from "@/components/personal-section"
import SectionDivider from "@/components/section-divider"
import PreviousWorks from "@/components/previous-works"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState("home")
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "skills-chart",
        "achievements",
        "internship",
        "timeline",
        "projects",
        "previous-works",
        "personal",
        "services",
        "download-cv",
        "contact",
      ]

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Create refs for each section for smooth scrolling
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "skills-chart",
      "achievements",
      "internship",
      "timeline",
      "projects",
      "previous-works",
      "personal",
      "services",
      "download-cv",
      "contact",
    ]
    sections.forEach((section) => {
      sectionsRef.current[section] = document.getElementById(section)
    })
  }, [loading])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <EnhancedLoadingScreen key="loading" />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-black text-white"
          >
            <FunnyCursor />
            <ScrollProgress />
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <Navbar currentSection={currentSection} />

            <SectionWrapper id="home">
              <Hero />
            </SectionWrapper>

            <SectionWrapper id="about">
              <About />
            </SectionWrapper>

            <SectionWrapper id="skills">
              <AnimatedSkillBars />
            </SectionWrapper>

            <SectionWrapper id="skills-chart">
              <SkillsChart />
            </SectionWrapper>

            {/* Section Divider 1 */}
            <SectionDivider image="https://ik.imagekit.io/ufv2mnqwt/portfolio/84c3db16-e9e2-42ee-a034-23a40b961c22.jpeg?updatedAt=1747480932067" alt="Coding Journey" className="my-10" />

            <SectionWrapper id="achievements">
              <Achievements />
            </SectionWrapper>

            <SectionWrapper id="internship">
              <InternshipSection />
            </SectionWrapper>

            <SectionWrapper id="timeline">
              <Timeline />
            </SectionWrapper>

            {/* Section Divider 2 */}
            <SectionDivider
              image="https://ik.imagekit.io/ufv2mnqwt/portfolio/_programador%20_dev%20_developer.jpeg?updatedAt=1747481258816"
              alt="Creative Process"
              position="right"
              className="my-10"
            />

            <SectionWrapper id="projects">
              <Projects />
            </SectionWrapper>

            <SectionWrapper id="previous-works">
              <PreviousWorks />
            </SectionWrapper>

            <SectionWrapper id="personal">
              <PersonalSection />
            </SectionWrapper>

            {/* Section Divider 3 */}
            <SectionDivider
              image="https://ik.imagekit.io/ufv2mnqwt/portfolio/50%20Creative%20Negative%20Space%20Logo%20Designs%20-%202.jpeg"
              alt="Passion & Creativity"
              position="left"
              className="my-10"
            />

            <SectionWrapper id="services">
              <Services />
            </SectionWrapper>

            <SectionWrapper id="download-cv">
              <DownloadCV />
            </SectionWrapper>

            <SectionWrapper id="contact">
              <Contact />
            </SectionWrapper>

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}

// Section wrapper component for smooth transitions
function SectionWrapper({ children, id }: { children: React.ReactNode; id: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
    margin: "-100px 0px -100px 0px",
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="section-transition"
    >
      {children}
    </motion.div>
  )
}
