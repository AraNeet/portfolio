"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Code2Icon, Trophy, Briefcase, GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Counter } from "./counter"
import Link from "next/link"

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const translateX = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="relative py-24 bg-black overflow-hidden">
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
              I'M <span className="text-white">ARAMIS MARTINEZ</span>,<br />
              SOFTWARE ENGINEER.
            </h1>
            <div className="prose prose-invert">
              <p>
                Specialized in <strong>full-stack development</strong> with expertise in
                <strong> Python</strong>, <strong>JavaScript</strong>, and <strong>Go</strong>. Currently pursuing AR/VR
                development with Unity and C#. Experienced in building web applications using modern frameworks like{" "}
                <strong>React</strong> and <strong>Fiber</strong>.
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

        {/* Education Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 bg-black/50 border border-cyan-900/30">
            <h3 className="text-xl font-semibold text-sky-300 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white">Holberton Coding School</h4>
                <p className="text-gray-400">Computer Science and Software Engineering</p>
                <p className="text-sm text-gray-500">Graduating July 2024</p>
              </div>
              <div>
                <h4 className="font-medium text-white">Holberton Coding School</h4>
                <p className="text-gray-400">AR/VR Specialization with Unity & C#</p>
                <p className="text-sm text-gray-500">Expected May 2025</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-black/50 border border-cyan-900/30">
            <h3 className="text-xl font-semibold text-sky-300 mb-4">Recent Projects</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white">Bravus - Booking Application</h4>
                <p className="text-gray-400">Full-stack booking app built with Go Fiber & React</p>
                <p className="text-sm text-gray-500">June 2024</p>
              </div>
              <div>
                <h4 className="font-medium text-white">Hbnb - AirBnB Clone</h4>
                <p className="text-gray-400">Full-stack web app using Flask & JavaScript</p>
                <p className="text-sm text-gray-500">June 2024</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: translateY }}>
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      </motion.div>
    </section>
  )
}

function StatsCard({ icon, title, value, prefix = "" }) {
  return (
    <Card className="p-6 bg-black/50 border border-cyan-900/30">
      <div className="text-cyan-400 mb-4">{icon}</div>
      <div className="space-y-2">
        <div className="text-3xl font-bold text-white">
          <Counter from={0} to={value} duration={2}>
            {(value) => (
              <span>
                {prefix}
                {value}
              </span>
            )}
          </Counter>
        </div>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </Card>
  )
}