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
                  Hey! I’m a Full-Stack Developer who writes Go like it’s poetry and treats goroutines like confetti at a party 🎉—why live in one thread when you can spawn a thousand? Armed with a Holberton School badge (earned through blood, sweat, and 3am coding sprints), I craft apps that compile on the first try… okay, third. <br />
                  Currently diving headfirst into AR/VR, where I merge Go’s blazing speed with virtual worlds—because rendering 90 FPS shouldn’t feel like debugging a race condition. (Spoiler: It sometimes does. 🔥 RIP, my sanity.) <br />
                  Confidence level? fmt.Println("99%") (the missing 1% is reserved for “why is this pointer nil AGAIN?!” meltdowns). Whether I’m architecting bulletproof backends in Go or cobbling together a frontend with “artistic” CSS, I serve equal parts “I’ve got this” and “Wait, let me check the docs one more time…” <br />
                  P.S. My love for static typing is rivaled only by my fear of interface{} chaos. 🐹✨ <br />
                  P.P.S. Holberton taught me to code hard and pivot harder. Still waiting for my "Survived Pair Programming" merit badge. 💻⚡ 
                  </p>
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/DSC09269-Edit.jpg?height=400&width=400"
                    alt="Developer background"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
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
                    My grand plan? To build tech that matters—or at least makes your phone do something cooler than collect spam emails. 📱💥 Obsessed with emerging tech like AR/VR, where I get to play digital mad scientist—turning "what if?" into "holy $#!%, this works!" (Spoiler: 30% of the time, it works every time.) <br />
                    Confidence level? sudo confidence --level=99.9% (the 0.1% is me side-eyeing my own ideas at 2am). I’m out here coding solutions that maybe change the world, or definitely make someone’s day less boring. Think AR apps that turn grocery lists into quests 🗡️, or VR worlds where "ctrl+z" works on real life. <br />
                    Secret insecurity? I still panic when Git says "merge conflict." (We’re all just one git reset --hard away from tears, right?)<br />
                    P.S. My brain’s a Venn diagram of "this could revolutionize industries!" and "…but what if I made it spin?" 🔄✨ <br />
                    P.P.S. I’ve accepted that 80% of my "innovative solutions" are just me reinventing wheels… but with lasers. 🔦💥 <br />
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
