"use client"

import { motion } from "framer-motion"
import UranusScene from "@/components/uranus-scene"
import Image from "next/image"
import ParticleEffect from "../ParticleEffect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const MotionButton = motion(Button)
export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Uranus Background */}
      <div className="fixed inset-0 pointer-events-none">
        <UranusScene />
        <ParticleEffect />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section className="min-h-screen bg-gradient-to-b from-black/50 via-cyan-950/10 to-black/50">
          <motion.div
            className="container mx-auto px-4 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-20 text-cyan-400"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            
            <div className="space-y-32">
              {/* Background Section */}
              <motion.div
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-sky-300">Background</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    I am a passionate Full Stack Developer with a strong foundation in computer science
                    and software engineering. Currently pursuing advanced studies in AR/VR development,
                    I bring creativity and technical expertise to every project.
                  </p>
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/DSC09269-Edit.jpg?height=400&width=400"
                    alt="Developer background"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Goals Section */}
              <motion.div
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden md:order-1">
                  <Image
                    src="/raytheon-1.jpg?height=400&width=400"
                    alt="Future goals"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-6 md:order-2">
                  <h3 className="text-2xl font-semibold text-sky-300">Goals</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    My goal is to create innovative solutions that make a difference. I am particularly
                    interested in emerging technologies like AR/VR and their potential to transform
                    how we interact with digital content.
                  </p>
                </div> 
              </motion.div>
               <motion.div
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <Link href="/#skills">
                    <MotionButton className="bg-cyan-500 hover:bg-cyan-400">
                      Skills & Expertise
                    </MotionButton>
                  </Link>
              </motion.div>
            </div> 
          </motion.div> 
        </section>
      </div>
    </div>
  )
}
