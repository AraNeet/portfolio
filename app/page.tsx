"use client"

import { motion } from "framer-motion"
import { Code2Icon, Briefcase, Mail, Phone, Boxes, Paperclip } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NeptuneScene from "@/components/neptune-scene"
import { AnimatedText } from "@/components/animated-text"
import ParticleEffect from "@/components/ParticleEffect"
import { Timeline } from "@/components/timeline"


const MotionButton = motion(Button)

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <NeptuneScene />
        <ParticleEffect />
      </div>

      {/* Content sections with semi-transparent backgrounds */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen">
          <motion.section
            className="min-h-screen flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="container mx-auto px-4 py-20 text-center">
              <AnimatedText text="Aramis" className="text-6xl md:text-8xl font-bold tracking-tight mb-6 " />
              <AnimatedText text="Martinez" className="text-6xl md:text-8xl font-bold tracking-tight mb-6" />
              <motion.h2
                className="text-xl md:text-2xl text-cyan-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Software Engineer, Game Developer, & AR/VR Enjoyer.
              </motion.h2>

              <motion.div
                className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link href="mailto:martinezcruzaj@gmail.com" className="flex items-center gap-2 hover:text-cyan-400">
                  <Mail className="w-4 h-4" /> martinezcruzaj@gmail.com
                </Link>
                <Link href="tel:939-439-5156" className="flex items-center gap-2 hover:text-cyan-400">
                  <Phone className="w-4 h-4" /> 939-439-5156
                </Link> 
              </motion.div>
              <motion.div>
                <Link href="/aboutme">
                  <MotionButton
                    className="bg-cyan-500 hover:bg-cyan-900 text-xl md:text-2xl text-white mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  > About Me </MotionButton>
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-zinc-900/50 backdrop-blur-sm">
          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Skills & Expertise
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SkillCard
                title="Programming Languages"
                skills={["Python", "C#", "Go", "JS/TS", "HTML/CSS"]}
                icon={<Code2Icon />}
              />
              <SkillCard
                title="Technologies"
                skills={["Git", "SQL/NOSQL", ".NET"]}
                icon={<Boxes />}
              />
              <SkillCard
                title="Frameworks"
                skills={["React", "Reflex", "Unity", "Flask", "FiberGO"]}
                icon={<Paperclip/>}
              />
              <SkillCard
                title="Creative Tools"
                skills={["Photoshop", "Premiere Pro", "Blender", "DaVinci Resolve"]}
                icon={<Briefcase />}
              />
            </div> 
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-cyan-950/10 backdrop-blur-sm">
          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
            <Link href="https://github.com/AraNeet/holbertonschool-ar-vr-portfolio-project">
              <ProjectCard
                title="Rift"
                description="A simple AR Dungeon Crawler."
                tech={["Unity", "C#"]}
                role="Game Developer"
                date="May 2025"
              />
            </Link>
            <Link href="https://github.com/AraNeet/Bravus">
              <ProjectCard
                title="Bravus"
                description="A booking app that helps business owners organize themselves"
                tech={["Go", "Fiber", "React", "Gorm"]}
                role="Fullstack Developer"
                date="June 2024"
              />
            </Link>
            <Link href="https://github.com/AraNeet/holbertonschool-AirBnB_clone_v4">
              <ProjectCard
                title="Hbnb"
                description="AirBnB Clone built to learn web development fundamentals"
                tech={["Python", "Flask", "SQLAlchemy", "JavaScript"]}
                role="Fullstack Developer"
                date="June 2024"
              />
            </Link>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-zinc-900/50 backdrop-blur-sm">
          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-cyan-400"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Professional Experience
            </motion.h2>
              <Timeline
                items={[
                  {
                    title: "Student Tutor",
                    company: "Holberton Coding School",
                    location: "San Juan, PR",
                    date: "November 2024 - Current",
                    description:
                      "Provided one-on-one and group tutoring to students in Holberton Coding School, clarifying complex concepts and improving comprehension through tailored explanations.",
                  },
                  {
                    title: "Crew Member",
                    company: "McDonald's",
                    location: "Ocala, FL and Cidra, PR",
                    date: "December 2021 - December 2024",
                    description:
                      "Assisted in the training and supervising of a team of 3 employees under the manager's guidance, showcasing leadership and organizational abilities.",
                  },
                  {
                    title: "Sandwich Artist",
                    company: "Subway",
                    location: "Belleview, FL",
                    date: "September 2021 - November 2021",
                    description:
                    "Managed the opening and closing store procedures, conducted inventory counts, and oversaw the safe to ensure precision in financial records and a secure financial environment.",
                  },
                ]}
              />
          </motion.div>
        </section>
        {/* Education Section */}
        <section className="py-20 bg-cyan-950/10 backdrop-blur-sm">
          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ rotate: -5, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Education & Certifications
            </motion.h2>
            <div className="grid md:grid-cols-1 gap-6 place-items-center">
              <Card className="p-10 bg-black/50 border border-cyan-900/30 hover:border-cyan-400/50 transition-colors">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white">Holberton Coding School</h4>
                    <p className="text-gray-400">Computer Science and Software Engineering</p>
                    <p className="text-sm text-gray-500">Graduated July 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Holberton Coding School</h4>
                    <p className="text-gray-400">AR/VR Specialization with Unity & C#</p>
                    <p className="text-sm text-gray-500">Graduated May 2025</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-zinc-900/50 backdrop-blur-sm">
          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Lets Connect
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="mailto:martinezcruzaj@gmail.com">
                <Button className="bg-cyan-500 hover:bg-cyan-900">Email Me</Button>
              </Link>
              <Link href="https://www.linkedin.com/in/aramis-martinez-a1a507296/">
                <Button className="bg-cyan-500 hover:bg-cyan-900">
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/araneet">
                <Button className="bg-cyan-500 hover:bg-cyan-900">
                  GitHub
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
}
// Helper Components
function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 bg-black/50 border border-cyan-900/30 hover:border-cyan-400/50 transition-colors">
        <div className="text-cyan-400 mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <ul className="space-y-2 text-gray-400">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  role: string
  date: string
}
function ProjectCard({ title, description, tech, role, date }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotateZ: 0.5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 bg-black/50 border border-cyan-900/30 hover:border-cyan-400/50 transition-colors">
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, index) => (
            <span key={index} className="px-2 py-1 bg-sky-500/10 text-sky-300 rounded text-sm">
              {t}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          <p>{role}</p>
          <p>{date}</p>
        </div>
      </Card>
    </motion.div>
  )
}
