import { HiAcademicCap } from 'react-icons/hi'

const educations = [
    {
        institution: 'Politeknik Negeri Jakarta',
        degree: 'D4 Teknik Informatika',
        period: '2023 - Present',
        description: 'Currently pursuing a degree in Informatics Engineering, focusing on software development and web technologies.',
        isCurrent: true,
    },
    {
        institution: 'CCIT FT-UI',
        degree: 'Information Technology Program',
        period: '2023 - 2025',
        description: 'Professional development program in Information Technology at Universitas Indonesia.',
        isCurrent: false,
    },
    {
        institution: 'SMA Islam Terpadu Almadinah',
        degree: 'High School Diploma',
        period: '2020 - 2023',
        description: 'Completed high school education with focus on science and technology.',
        isCurrent: false,
    },
    {
        institution: 'SMP Negeri 02 Cibinong',
        degree: 'Junior High School',
        period: '2017 - 2020',
        description: 'Completed junior high school education.',
        isCurrent: false,
    },
    {
        institution: 'SD Negeri 01 Cipayung',
        degree: 'Elementary School',
        period: '2011 - 2017',
        description: 'Completed elementary education.',
        isCurrent: false,
    },
]

function Experience({ darkMode }) {
    return (
        <section id="experience" className={`py-24 ${darkMode ? 'bg-dark-300' : 'bg-white'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">
                        My academic journey
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-primary-500/30' : 'bg-primary-200'}`} />

                    {/* Timeline items */}
                    <div className="space-y-8">
                        {educations.map((edu, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Icon */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${edu.isCurrent
                                            ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white ring-4 ring-primary-500/30'
                                            : darkMode
                                                ? 'bg-primary-600 text-white'
                                                : 'bg-primary-500 text-white'
                                        } shadow-lg`}>
                                        <HiAcademicCap size={20} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className={`p-6 rounded-2xl ${darkMode ? 'glass' : 'bg-gray-50 shadow-md'} card-hover hover:scale-[1.02] transition-transform ${edu.isCurrent ? 'ring-2 ring-primary-500/50' : ''}`}>
                                        {/* Period Badge */}
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${edu.isCurrent
                                                ? 'bg-gradient-to-r from-primary-500/20 to-purple-500/20 text-primary-300'
                                                : darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {edu.period}
                                            {edu.isCurrent && <span className="ml-2">• Current</span>}
                                        </span>

                                        <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {edu.institution}
                                        </h3>

                                        <p className={`text-sm font-medium mb-3 ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                                            {edu.degree}
                                        </p>

                                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
