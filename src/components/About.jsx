import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Cpu, Database, Globe, Layout, Server, GitBranch, Brain, Sparkles } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'React', icon: <Layout size={20} />, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: <Palette size={20} />, color: '#38B2AC' },
        { name: 'Python', icon: <Terminal size={20} />, color: '#3776AB' },
        { name: 'OpenCV', icon: <Cpu size={20} />, color: '#5C3EE8' },
        { name: 'Node.js', icon: <Server size={20} />, color: '#339933' },
        { name: 'SQL', icon: <Database size={20} />, color: '#00758F' },
        { name: 'Git', icon: <GitBranch size={20} />, color: '#F05032' },
        { name: 'Machine Learning', icon: <Brain size={20} />, color: '#FF6F00' },
        { name: 'HTML5/CSS3', icon: <Globe size={20} />, color: '#E34F26' },
        { name: 'MongoDB', icon: <Database size={20} />, color: '#47A248' },
        { name: 'Data Structures', icon: <Code size={20} />, color: '#A8B9CC' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="about" className="py-20 bg-secondary relative overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <Sparkles className="text-accent animate-pulse" size={28} />
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-purple-400">
                            About Me
                        </h2>
                        <Sparkles className="text-purple-400 animate-pulse" size={28} />
                    </motion.div>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-accent via-purple-500 to-blue-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Spotlight effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50 animate-pulse" />

                        <div className="relative bg-primary/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
                            <motion.p
                                className="text-gray-300 text-lg leading-relaxed mb-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                I am a passionate developer with a strong focus on <strong className="text-accent">Data Science and Machine Learning</strong> and <strong className="text-purple-400">Web Development</strong>.
                                My expertise spans across building intelligent systems using <strong className="text-blue-400">Python</strong> and <strong className="text-cyan-400">OpenCV</strong>, to crafting responsive web applications with <strong className="text-accent">React</strong>.
                            </motion.p>
                            <motion.p
                                className="text-gray-300 text-lg leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                I have a proven track record of developing innovative solutions, from traffic congestion prediction models to real-time facial expression detection.
                                I am constantly learning and applying new technologies to solve complex problems.
                            </motion.p>

                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent rounded-tl-2xl opacity-50" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500 rounded-br-2xl opacity-50" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative"
                    >
                        {/* Animated glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl animate-pulse" />

                        <div className="relative bg-gradient-to-br from-primary/60 via-primary/40 to-primary/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-8 bg-gradient-to-b from-accent to-purple-500 rounded-full" />
                                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                    My Tech Stack
                                </h3>
                            </div>

                            <motion.div
                                className="grid grid-cols-3 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: [0, -5, 5, 0],
                                            transition: { duration: 0.3 }
                                        }}
                                        className="flex flex-col items-center justify-center gap-2 text-center cursor-pointer group relative"
                                    >
                                        {/* Glow effect on hover */}
                                        <div
                                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                                            style={{ backgroundColor: skill.color + '40' }}
                                        />

                                        <div
                                            className="relative w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center border border-white/5 shadow-lg transition-all duration-300 group-hover:border-opacity-100 group-hover:shadow-2xl"
                                            style={{
                                                color: skill.color,
                                                borderColor: skill.color + '80',
                                                boxShadow: `0 0 20px ${skill.color}40`
                                            }}
                                        >
                                            {skill.icon}
                                        </div>
                                        <span className="relative text-xs text-gray-400 group-hover:text-white transition-colors font-medium">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Add custom animation for slow spin */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default About;
