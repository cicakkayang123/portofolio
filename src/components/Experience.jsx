import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi'

const experiences = [
    {
        type: 'work',
        title: 'Senior Full-Stack Developer',
        organization: 'Tech Company Inc.',
        period: '2022 - Present',
        description: 'Leading development of enterprise web applications. Managing a team of 5 developers and implementing best practices.',
    },
    {
        type: 'work',
        title: 'Full-Stack Developer',
        organization: 'Digital Agency',
        period: '2020 - 2022',
        description: 'Developed and maintained multiple client projects using React, Node.js, and cloud technologies.',
    },
    {
        type: 'education',
        title: 'Bachelor of Computer Science',
        organization: 'State University',
        period: '2016 - 2020',
        description: 'Graduated with honors. Specialized in Software Engineering and Web Technologies.',
    },
]

function Experience({ darkMode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="experience" className={`py-24 ${darkMode ? 'bg-dark-300' : 'bg-white'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="section-title">Experience & Education</h2>
                        <p className="section-subtitle">
                            My professional journey
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-primary-500/30' : 'bg-primary-200'}`} />

                        {/* Timeline items */}
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    {/* Icon */}
                                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode
                                                ? 'bg-primary-600 text-white'
                                                : 'bg-primary-500 text-white'
                                            } shadow-lg`}>
                                            {exp.type === 'work' ? <HiBriefcase size={20} /> : <HiAcademicCap size={20} />}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <motion.div
                                            className={`p-6 rounded-2xl ${darkMode ? 'glass' : 'bg-gray-50 shadow-md'} card-hover`}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${exp.type === 'work'
                                                    ? darkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'
                                                    : darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {exp.period}
                                            </span>

                                            <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {exp.title}
                                            </h3>

                                            <p className={`text-sm font-medium mb-3 ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                                                {exp.organization}
                                            </p>

                                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {exp.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
