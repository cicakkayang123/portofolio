import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCode, HiLightningBolt, HiPuzzle } from 'react-icons/hi'

function About({ darkMode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const highlights = [
        {
            icon: HiCode,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable code following best practices',
        },
        {
            icon: HiLightningBolt,
            title: 'Fast Learner',
            description: 'Quick to adapt to new technologies and frameworks',
        },
        {
            icon: HiPuzzle,
            title: 'Problem Solver',
            description: 'Breaking down complex challenges into elegant solutions',
        },
    ]

    return (
        <section id="about" className={`py-24 ${darkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="section-title">About Me</h2>
                        <p className="section-subtitle">
                            Get to know me better
                        </p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Passionate about creating digital experiences
                            </h3>

                            <div className={`space-y-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                                <p>
                                    I'm a Full-Stack Developer with 3+ years of experience building modern web applications.
                                    My journey in tech started with curiosity about how websites work, which evolved into a
                                    deep passion for creating intuitive digital experiences.
                                </p>
                                <p>
                                    I specialize in React, Node.js, and cloud technologies, with a strong foundation in
                                    both frontend and backend development. I believe in writing clean, maintainable code
                                    and staying updated with the latest industry trends.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, contributing to
                                    open-source projects, or sharing knowledge with the developer community.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-8">
                                {[
                                    { number: '3+', label: 'Years Experience' },
                                    { number: '20+', label: 'Projects Completed' },
                                    { number: '10+', label: 'Happy Clients' },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    >
                                        <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                                        <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column - Highlights */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className={`p-6 rounded-2xl ${darkMode ? 'glass' : 'bg-white shadow-lg'} card-hover`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl ${darkMode ? 'bg-primary-500/20' : 'bg-primary-100'}`}>
                                            <item.icon className={`w-6 h-6 ${darkMode ? 'text-primary-400' : 'text-primary-600'}`} />
                                        </div>
                                        <div>
                                            <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {item.title}
                                            </h4>
                                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
