import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, TrendingUp, BookOpen } from 'lucide-react';

const Education = () => {
    const education = [
        {
            id: 1,
            institution: 'Lovely Professional University',
            degree: 'Bachelor of Technology',
            field: 'Computer Science and Engineering',
            location: 'Phagwara, Punjab',
            duration: "Since Aug' 2023",
            score: 'CGPA: 8.13',
            image: '/education/lpu.png',
            color: '#4F46E5',
            gradient: 'from-indigo-600 to-purple-600',
            icon: <GraduationCap size={32} />
        },
        {
            id: 2,
            institution: 'Munam Public School',
            degree: 'Intermediate',
            field: 'Higher Secondary Education',
            location: 'Hazaribagh, Jharkhand',
            duration: "Apr' 22 – Mar' 23",
            score: 'Percentage: 78.6%',
            image: '/education/munam.png',
            color: '#059669',
            gradient: 'from-emerald-600 to-teal-600',
            icon: <BookOpen size={32} />
        },
        {
            id: 3,
            institution: 'Angels High School',
            degree: 'Matriculation',
            field: 'Secondary Education',
            location: 'Hazaribagh, Jharkhand',
            duration: "Apr' 20 – Mar' 21",
            score: 'Percentage: 91%',
            image: '/education/AHS.png',
            color: '#DC2626',
            gradient: 'from-red-600 to-pink-600',
            icon: <Award size={32} />
        },
    ];

    return (
        <section id="education" className="py-20 bg-primary relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow" />
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
                            <GraduationCap className="text-indigo-500" size={44} />
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                            Education
                        </h2>
                    </motion.div>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        My academic journey and educational milestones
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden lg:block" />

                    {/* Education Cards */}
                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    } flex-col gap-8`}
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                    className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-10"
                                >
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                                        style={{
                                            backgroundColor: edu.color,
                                            boxShadow: `0 0 30px ${edu.color}80`
                                        }}
                                    >
                                        <div className="text-white">
                                            {edu.icon}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Card */}
                                <div className="w-full lg:w-[calc(50%-4rem)]">
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className="relative group"
                                    >
                                        {/* Glow Effect */}
                                        <div
                                            className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                                            style={{
                                                background: `linear-gradient(135deg, ${edu.color}, transparent)`
                                            }}
                                        />

                                        {/* Main Card */}
                                        <div className={`relative bg-gradient-to-br ${edu.gradient} p-1 rounded-3xl shadow-2xl`}>
                                            <div className="bg-secondary rounded-3xl overflow-hidden">
                                                {/* Image */}
                                                <div className="relative h-48 overflow-hidden">
                                                    <img
                                                        src={edu.image}
                                                        alt={edu.institution}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />

                                                    {/* Score Badge */}
                                                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${edu.gradient} px-4 py-2 rounded-full backdrop-blur-xl`}>
                                                        <div className="flex items-center gap-2">
                                                            <TrendingUp size={16} className="text-white" />
                                                            <span className="text-white font-bold text-sm">{edu.score}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6">
                                                    {/* Institution */}
                                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                                                        {edu.institution}
                                                    </h3>

                                                    {/* Degree */}
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <div
                                                            className="w-2 h-2 rounded-full"
                                                            style={{ backgroundColor: edu.color }}
                                                        />
                                                        <p className="text-lg font-semibold text-gray-300">
                                                            {edu.degree}
                                                        </p>
                                                    </div>

                                                    {/* Field */}
                                                    <p className="text-gray-400 mb-4">{edu.field}</p>

                                                    {/* Details */}
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2 text-gray-400">
                                                            <MapPin size={16} style={{ color: edu.color }} />
                                                            <span className="text-sm">{edu.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-400">
                                                            <Calendar size={16} style={{ color: edu.color }} />
                                                            <span className="text-sm">{edu.duration}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Decorative Corner */}
                                                <div
                                                    className="absolute bottom-0 right-0 w-24 h-24 opacity-10"
                                                    style={{
                                                        background: `radial-gradient(circle at bottom right, ${edu.color}, transparent)`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="w-full lg:w-[calc(50%-4rem)] hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center">
                        <GraduationCap className="mx-auto mb-3 text-indigo-400" size={36} />
                        <p className="text-3xl font-bold text-white mb-1">B.Tech</p>
                        <p className="text-gray-400 text-sm">Current Degree</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center">
                        <TrendingUp className="mx-auto mb-3 text-purple-400" size={36} />
                        <p className="text-3xl font-bold text-white mb-1">8.13</p>
                        <p className="text-gray-400 text-sm">Current CGPA</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center">
                        <Award className="mx-auto mb-3 text-pink-400" size={36} />
                        <p className="text-3xl font-bold text-white mb-1">91%</p>
                        <p className="text-gray-400 text-sm">Best Score</p>
                    </div>
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

export default Education;
