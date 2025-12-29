import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
]

function Navbar({ darkMode, toggleDarkMode }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-dark-300/80' : 'bg-white/80'} backdrop-blur-lg border-b ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        &lt;Dev /&gt;
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        {/* Dark Mode Toggle */}
                        <motion.button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-lg ${darkMode ? 'bg-white/10 text-yellow-400' : 'bg-gray-100 text-gray-700'} hover:scale-110 transition-all`}
                            whileHover={{ rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <motion.button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-lg ${darkMode ? 'bg-white/10 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
                            whileTap={{ scale: 0.9 }}
                        >
                            {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
                        </motion.button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden ${darkMode ? 'bg-dark-200' : 'bg-white'} border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-2 text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
