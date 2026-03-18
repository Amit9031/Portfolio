import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Sparkles, Rocket, Star } from 'lucide-react';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            title: 'Loan Prediction Analysis',
            desc: 'Machine learning model for analyzing financial data and predicting loan approval probabilities with high accuracy.',
            tags: ['Python', 'Machine Learning', 'Data Analysis'],
            link: 'https://github.com/Amit9031/Loan-Predictive-Analytics',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            color: '#3B82F6',
            gradient: 'from-blue-500 via-blue-600 to-cyan-600',
            icon: <Rocket size={24} />
        },
        {
            title: 'Facial Expression Detection',
            desc: 'Real-time emotion recognition system using OpenCV that accurately maps facial expressions to emojis.',
            tags: ['OpenCV', 'Python', 'Computer Vision'],
            link: 'https://github.com/Amit9031/Real-time-facial-expression-detection-with-Emoji-using-Open-cv',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            color: '#8B5CF6',
            gradient: 'from-purple-500 via-purple-600 to-pink-600',
            icon: <Sparkles size={24} />
        },
        {
            title: 'Restaurant Ordering System',
            desc: 'Comprehensive digital solution for seamless food ordering and efficient table reservation management.',
            tags: ['Full Stack', 'Database', 'UI/UX'],
            link: 'https://github.com/Amit9031/food-ordering-and-table-reservation-system-for-restaurants',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            color: '#10B981',
            gradient: 'from-emerald-500 via-green-600 to-teal-600',
            icon: <Star size={24} />
        },
        {
            title: 'QR Entry Gate System',
            desc: 'Real-time university gate entry recorder system for automated and seamless access management.',
            tags: ['Java', 'Spring Boot', 'DevOps'],
            link: 'https://github.com/Amit9031/university-entry-system',
            image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            color: '#F59E0B',
            gradient: 'from-amber-500 via-orange-600 to-red-600',
            icon: <Code2 size={24} />
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-primary via-secondary to-primary relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow" />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, type: "spring", bounce: 0.5 }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Rocket className="text-blue-500" size={44} />
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Featured Projects
                        </h2>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Sparkles className="text-purple-500" size={40} />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="w-40 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"
                        initial={{ width: 0 }}
                        whileInView={{ width: 160 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        Innovative solutions built with cutting-edge technologies
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative"
                        >
                            {/* Glow Effect */}
                            <motion.div
                                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(135deg, ${project.color}, transparent)`
                                }}
                                animate={{
                                    scale: hoveredIndex === index ? [1, 1.05, 1] : 1,
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            {/* Card */}
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className={`relative bg-gradient-to-br ${project.gradient} p-1 rounded-3xl shadow-2xl overflow-hidden`}
                            >
                                <div className="bg-secondary rounded-3xl overflow-hidden h-full">
                                    {/* Image Section */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />

                                        {/* Floating Icon */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{
                                                opacity: hoveredIndex === index ? 1 : 0,
                                                scale: hoveredIndex === index ? 1 : 0,
                                                rotate: hoveredIndex === index ? 360 : 0
                                            }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute top-4 left-4 w-16 h-16 rounded-2xl flex items-center justify-center text-white backdrop-blur-xl border-2 border-white/20"
                                            style={{ backgroundColor: `${project.color}80` }}
                                        >
                                            {project.icon}
                                        </motion.div>

                                        {/* Action Buttons */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{
                                                opacity: hoveredIndex === index ? 1 : 0,
                                                y: hoveredIndex === index ? 0 : 20
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute top-4 right-4 flex gap-2"
                                        >
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 backdrop-blur-xl rounded-xl text-white hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
                                            >
                                                <Github size={20} />
                                            </a>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 backdrop-blur-xl rounded-xl text-white hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        </motion.div>

                                        {/* Project Number */}
                                        <div className="absolute bottom-4 left-4">
                                            <motion.div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-white text-2xl backdrop-blur-xl border-2 border-white/20 shadow-lg"
                                                style={{ backgroundColor: `${project.color}60` }}
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {index + 1}
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                            {project.title}
                                        </h3>

                                        {/* Decorative Line */}
                                        <motion.div
                                            className="h-1 rounded-full mb-4"
                                            style={{ backgroundColor: project.color }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '60px' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.1 }}
                                        />

                                        {/* Description */}
                                        <p className="text-gray-400 mb-4 leading-relaxed">
                                            {project.desc}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 + i * 0.05 }}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className="px-3 py-1.5 text-sm font-semibold rounded-lg border-2 transition-all cursor-default"
                                                    style={{
                                                        backgroundColor: `${project.color}20`,
                                                        borderColor: `${project.color}60`,
                                                        color: project.color
                                                    }}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Gradient Bar */}
                                    <div
                                        className="h-2"
                                        style={{
                                            background: `linear-gradient(90deg, ${project.color}, transparent)`
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <a
                        href="https://github.com/Amit9031"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
                    >
                        <Github size={24} />
                        View All Projects on GitHub
                        <ExternalLink size={20} />
                    </a>
                </motion.div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 30s linear infinite;
                }
                .delay-1000 {
                    animation-delay: 1000ms;
                }
            `}</style>
        </section>
    );
};

export default Projects;
