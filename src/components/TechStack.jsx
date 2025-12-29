import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    SiReact, SiTailwindcss, SiFirebase, SiNodedotjs,
    SiLaravel, SiPostgresql, SiTypescript, SiNextdotjs,
    SiMongodb, SiDocker, SiGit, SiPython
} from 'react-icons/si'

const technologies = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
]

function TechStack({ darkMode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="tech" className={`py-24 ${darkMode ? 'bg-dark-300' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="section-title">Tech Stack</h2>
                        <p className="section-subtitle">
                            Technologies I work with to bring ideas to life
                        </p>
                    </div>

                    {/* Tech Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className={`group p-4 md:p-6 rounded-2xl ${darkMode ? 'glass' : 'bg-gray-50 shadow-md'} card-hover flex flex-col items-center justify-center gap-3`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <tech.icon
                                    className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110"
                                    style={{ color: tech.color }}
                                />
                                <span className={`text-xs md:text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TechStack
