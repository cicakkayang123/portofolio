import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const categories = ['All', 'Web', 'Mobile', 'Data', 'Computer Vision']

function Projects({ darkMode }) {
    const [activeCategory, setActiveCategory] = useState('All')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory)

    return (
        <section id="projects" className={`py-24 ${darkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">
                            A selection of projects I've worked on
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/25'
                                        : darkMode
                                            ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        layout
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    darkMode={darkMode}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* No projects message */}
                    {filteredProjects.length === 0 && (
                        <motion.p
                            className={`text-center py-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            No projects found in this category.
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
