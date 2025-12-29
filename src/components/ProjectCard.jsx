import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function ProjectCard({ project, darkMode, index }) {
    return (
        <motion.div
            className={`group rounded-2xl overflow-hidden ${darkMode ? 'glass' : 'bg-white shadow-lg'} card-hover`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            layout
        >
            {/* Project Image Placeholder */}
            <div className={`h-48 ${darkMode ? 'bg-gradient-to-br from-primary-600/30 to-purple-600/30' : 'bg-gradient-to-br from-primary-100 to-purple-100'} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-4xl font-bold ${darkMode ? 'text-white/20' : 'text-primary-300'}`}>
                        {project.name.charAt(0)}
                    </span>
                </div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub size={20} />
                        </motion.a>
                    )}
                    {project.demo && (
                        <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaExternalLinkAlt size={18} />
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${darkMode
                        ? 'bg-primary-500/20 text-primary-300'
                        : 'bg-primary-100 text-primary-700'
                    }`}>
                    {project.category}
                </span>

                {/* Project Name */}
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.name}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                </p>

                {/* Role */}
                <p className={`text-xs mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span className="font-medium">Role:</span> {project.role}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
