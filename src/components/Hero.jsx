import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'

function Hero({ darkMode }) {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float delay-300" />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Greeting */}
                    <motion.p
                        className={`text-lg md:text-xl ${darkMode ? 'text-primary-400' : 'text-primary-600'} font-medium mb-4`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="gradient-text">John Doe</span>
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Full-Stack Developer
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Building modern, scalable web applications with clean code and exceptional user experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.a
                            href="#projects"
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        className="flex justify-center gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        {[
                            { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                            { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                            { icon: FaEnvelope, href: 'mailto:hello@example.com', label: 'Email' },
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-xl ${darkMode ? 'bg-white/5 text-gray-300 hover:text-primary-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:text-primary-600 hover:bg-gray-200'} transition-all`}
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, y: { repeat: Infinity, duration: 2 } }}
                >
                    <a href="#about" className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        <HiChevronDown size={32} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
