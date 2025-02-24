"use client"

import { motion } from "framer-motion"
import { Code2Icon, Trophy, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import StatsCard from "./stats-card"
import NeptuneScene from "./neptune-scene"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Neptune Background */}
      <div className="absolute inset-0">
        <NeptuneScene />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-black/50 via-cyan-950/10 to-black/50">
        <motion.div
          className="min-h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <StatsCard icon={<Code2Icon className="w-8 h-8" />} title="Programming Languages" value={6} prefix="" />
                <StatsCard icon={<Trophy className="w-8 h-8" />} title="Certifications" value={2} />
                <StatsCard icon={<Briefcase className="w-8 h-8" />} title="Projects Completed" value={2} prefix="+" />
                <StatsCard icon={<GraduationCap className="w-8 h-8" />} title="Specializations" value={2} />
              </motion.div>

              {/* Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-cyan-400">Full Stack Developer</h2>
                <h1 className="text-4xl font-bold text-sky-300">
                  I AM <span className="text-white">ARAMIS MARTINEZ</span>,<br />
                  SOFTWARE ENGINEER.
                </h1>
                <div className="prose prose-invert">
                  <p>
                    Specialized in <strong>full-stack development</strong> with expertise in
                    <strong> Python</strong>, <strong>JavaScript</strong>, and <strong>Go</strong>. Currently pursuing
                    AR/VR development with Unity and C#. Experienced in building web applications using modern
                    frameworks like <strong>React</strong> and <strong>Fiber</strong>.
                  </p>
                </div>

                {/* Skills Section */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-sky-300">Programming</h3>
                    <ul className="text-gray-400 space-y-1">
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>C++</li>
                      <li>Go</li>
                      <li>HTML/CSS</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-sky-300">Tools</h3>
                    <ul className="text-gray-400 space-y-1">
                      <li>Photoshop</li>
                      <li>Illustrator</li>
                      <li>Premiere Pro</li>
                      <li>Git/GitHub</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link href="mailto:martinezcruzaj@gmail.com">
                    <Button className="bg-cyan-500 hover:bg-cyan-600">Contact Me</Button>
                  </Link>
                  <Link href="tel:939-439-5156">
                    <Button variant="outline" className="border-cyan-900/30 hover:border-cyan-400/50">
                      939-439-5156
                    </Button>
                  </Link>
                </div>

                <div className="flex gap-4 text-sm text-gray-400">
                  <Link href="https://www.linkedin.com/" className="hover:text-cyan-400">
                    LinkedIn
                  </Link>
                  <Link href="https://github.com/" className="hover:text-cyan-400">
                    GitHub
                  </Link>
                  <span>Cidra, Puerto Rico 00739</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
