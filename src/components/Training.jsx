import React from 'react';
import { motion } from 'framer-motion';
import { Database, Calendar, Code2 } from 'lucide-react';

const Training = () => {
    const trainings = [
        {
            id: 1,
            institution: 'Cipher School',
            course: 'Data Structures and Algorithm using C++',
            duration: "Jun' 25 – Jul' 25",
            points: [
                'Gained strong understanding of core DSA concepts, including arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching.',
                'Developed problem-solving skills through hands-on coding practice and algorithmic challenges.'
            ],
            color: '#10B981', // Emerald
            gradient: 'from-emerald-600 to-teal-600',
            icon: <Code2 size={32} />
        }
    ];

    return (
        <section id="training" className="py-20 bg-secondary relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Database className="text-emerald-500" size={44} />
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500">
                            Training
                        </h2>
                    </motion.div>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full shadow-lg shadow-teal-500/50"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        Professional skill development and hands-on learning
                    </p>
                </motion.div>

                {/* Training List */}
                <div className="space-y-8 max-w-4xl mx-auto">
                    {trainings.map((training, index) => (
                        <motion.div
                            key={training.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Glow Effect */}
                            <div
                                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(135deg, ${training.color}, transparent)`
                                }}
                            />

                            {/* Card Content */}
                            <div className="relative bg-primary/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row gap-8 items-start">
                                {/* Icon & Duration */}
                                <div className="flex flex-col items-center flex-shrink-0 md:w-48 pt-2">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg"
                                        style={{
                                            background: `linear-gradient(135deg, ${training.color}, #000000)`,
                                            boxShadow: `0 0 20px ${training.color}40`
                                        }}
                                    >
                                        {training.icon}
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 px-4 py-2 bg-secondary rounded-full border border-white/5 text-sm whitespace-nowrap">
                                        <Calendar size={14} className="text-emerald-400" />
                                        {training.duration}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                        {training.institution}
                                    </h3>
                                    <div className="text-xl font-semibold text-gray-300 mb-6 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        {training.course}
                                    </div>

                                    <ul className="space-y-3">
                                        {training.points.map((point, i) => (
                                            <li key={i} className="flex gap-3 text-gray-400 items-start">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                                                <span className="leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                .delay-1000 {
                    animation-delay: 1000ms;
                }
            `}</style>
        </section>
    );
};

export default Training;
