import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
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
                <div className="animate-fade-in">
                    {/* Greeting */}
                    <p className={`text-lg md:text-xl ${darkMode ? 'text-primary-400' : 'text-primary-600'} font-medium mb-4`}>
                        Hello, I'm
                    </p>

                    {/* Name */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                        <span className="gradient-text">Nayendra Ajidiwanto Jaelani</span>
                    </h1>

                    {/* Role */}
                    <h2 className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} animate-slide-up delay-100`}>
                        Informatics & Software Engineering Student
                    </h2>

                    {/* Tagline */}
                    <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'} animate-slide-up delay-200`}>
                        Passionate about web development and software engineering. Building modern applications and constantly learning new technologies.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up delay-300">
                        <a
                            href="#projects"
                            className="btn-primary hover:scale-105 transition-transform"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="btn-secondary hover:scale-105 transition-transform"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 animate-slide-up delay-400">
                        <a
                            href="https://github.com/nyndfrj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 rounded-xl ${darkMode ? 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'} transition-all hover:scale-110 hover:-translate-y-1`}
                            aria-label="GitHub"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://instagram.com/nyndra.aj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 rounded-xl ${darkMode ? 'bg-white/5 text-gray-300 hover:text-pink-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:text-pink-600 hover:bg-gray-200'} transition-all hover:scale-110 hover:-translate-y-1`}
                            aria-label="Instagram"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="mailto:nayendra@example.com"
                            className={`p-3 rounded-xl ${darkMode ? 'bg-white/5 text-gray-300 hover:text-primary-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:text-primary-600 hover:bg-gray-200'} transition-all hover:scale-110 hover:-translate-y-1`}
                            aria-label="Email"
                        >
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <a href="#about" className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        <HiChevronDown size={32} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
