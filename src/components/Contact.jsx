import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { HiMail, HiLocationMarker } from 'react-icons/hi'

function Contact({ darkMode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const contactLinks = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'hello@example.com',
            href: 'mailto:hello@example.com',
            color: 'from-red-500 to-orange-500',
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: '@johndoe',
            href: 'https://github.com',
            color: 'from-gray-600 to-gray-800',
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            value: 'John Doe',
            href: 'https://linkedin.com',
            color: 'from-blue-500 to-blue-700',
        },
    ]

    return (
        <section id="contact" className={`py-24 ${darkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-subtitle">
                            Have a project in mind or want to chat? Feel free to reach out!
                        </p>
                    </div>

                    {/* Contact Card */}
                    <motion.div
                        className={`p-8 md:p-12 rounded-3xl ${darkMode ? 'glass' : 'bg-white shadow-xl'} text-center`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Email CTA */}
                        <div className="mb-10">
                            <motion.div
                                className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${darkMode
                                        ? 'bg-gradient-to-r from-primary-600 to-purple-600'
                                        : 'bg-gradient-to-r from-primary-500 to-purple-500'
                                    }`}
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <HiMail className="w-10 h-10 text-white" />
                            </motion.div>

                            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Let's work together
                            </h3>

                            <p className={`mb-6 max-w-md mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                I'm currently available for freelance projects and full-time opportunities.
                                If you have a project that needs coding, I'd love to hear about it!
                            </p>

                            <motion.a
                                href="mailto:hello@example.com"
                                className="btn-primary inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaEnvelope />
                                Send me an email
                            </motion.a>
                        </div>

                        {/* Divider */}
                        <div className={`border-t ${darkMode ? 'border-white/10' : 'border-gray-200'} my-10`} />

                        {/* Social Links */}
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            {contactLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-4 p-4 rounded-xl ${darkMode
                                            ? 'bg-white/5 hover:bg-white/10'
                                            : 'bg-gray-50 hover:bg-gray-100'
                                        } transition-colors group`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${link.color}`}>
                                        <link.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                            {link.label}
                                        </div>
                                        <div className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                                            {link.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Location */}
                        <motion.div
                            className={`mt-10 flex items-center justify-center gap-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8 }}
                        >
                            <HiLocationMarker />
                            <span className="text-sm">Based in Indonesia • Available Worldwide</span>
                        </motion.div>
                    </motion.div>

                    {/* Made with love */}
                    <motion.p
                        className={`text-center mt-12 text-sm ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 }}
                    >
                        Made with <FaHeart className="inline text-red-500" /> using React & Tailwind CSS
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
