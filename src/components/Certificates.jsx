import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Download, X, ChevronLeft, ChevronRight, Trophy, Star } from 'lucide-react';

const Certificates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const certificates = [
        {
            id: 1,
            title: 'Responsive Web Design',
            image: '/certificates/certificate-1.png',
            issuer: 'freeCodeCamp',
            date: 'July 2024',
            color: '#3B82F6',
            gradient: 'from-blue-500 via-blue-600 to-cyan-600',
        },
        {
            id: 2,
            title: 'Professional Certificate 2',
            image: '/certificates/certificate-2.png',
            issuer: 'Certification Authority',
            date: '2024',
            color: '#8B5CF6',
            gradient: 'from-purple-500 via-purple-600 to-pink-600',
        },
        {
            id: 3,
            title: 'Professional Certificate 3',
            image: '/certificates/certificate-3.png',
            issuer: 'Certification Authority',
            date: '2024',
            color: '#10B981',
            gradient: 'from-emerald-500 via-green-600 to-teal-600',
        },
        {
            id: 4,
            title: 'Professional Certificate 4',
            image: '/certificates/certificate-4.png',
            issuer: 'Certification Authority',
            date: '2024',
            color: '#F59E0B',
            gradient: 'from-amber-500 via-orange-600 to-red-600',
        },
        {
            id: 5,
            title: 'Professional Certificate 5',
            image: '/certificates/certificate-5.png',
            issuer: 'Certification Authority',
            date: '2024',
            color: '#EC4899',
            gradient: 'from-pink-500 via-rose-600 to-red-600',
        },
        {
            id: 6,
            title: 'Professional Certificate 6',
            image: '/certificates/certificate-6.png',
            issuer: 'Certification Authority',
            date: '2024',
            color: '#06B6D4',
            gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
        },
        {
            id: 7,
            title: 'Professional Certificate 7',
            image: '/certificates/certificate-7.png',
            issuer: 'Certification Authority',
            date: '2024',
            color: '#8B5CF6',
            gradient: 'from-violet-500 via-purple-600 to-fuchsia-600',
        },
    ];

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certificates" className="py-20 bg-gradient-to-b from-primary via-secondary to-primary relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Trophy className="text-yellow-500" size={44} />
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                            Certifications
                        </h2>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            <Star className="text-orange-500" size={40} />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="w-40 h-1.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full shadow-lg shadow-orange-500/50"
                        initial={{ width: 0 }}
                        whileInView={{ width: 160 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        Navigate through my professional achievements
                    </p>
                </motion.div>

                {/* Stacked Cards Container */}
                <div className="relative max-w-4xl mx-auto" style={{ perspective: '1500px', minHeight: '600px' }}>
                    {/* Stack of Cards Behind */}
                    <div className="relative h-full">
                        {certificates.map((cert, index) => {
                            const offset = index - currentIndex;
                            const isVisible = Math.abs(offset) <= 2;

                            if (!isVisible) return null;

                            return (
                                <motion.div
                                    key={cert.id}
                                    className="absolute inset-0 w-full"
                                    initial={false}
                                    animate={{
                                        scale: offset === 0 ? 1 : 1 - Math.abs(offset) * 0.08,
                                        y: offset === 0 ? 0 : Math.abs(offset) * 30,
                                        x: offset * 40,
                                        rotateY: offset * 8,
                                        rotateZ: offset === 0 ? 0 : offset * -5,
                                        rotate: offset === 0 ? 0 : offset * -3,
                                        opacity: offset === 0 ? 1 : 0.6 - Math.abs(offset) * 0.2,
                                        zIndex: 10 - Math.abs(offset),
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    {/* Certificate Card */}
                                    <div className={`relative bg-gradient-to-br ${cert.gradient} p-1 rounded-3xl shadow-2xl`}>
                                        <div className="bg-secondary rounded-3xl overflow-hidden">
                                            {/* Certificate Image */}
                                            <div className="relative">
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="w-full h-auto"
                                                />

                                                {/* Overlay for non-active cards */}
                                                {offset !== 0 && (
                                                    <div className="absolute inset-0 bg-black/40" />
                                                )}

                                                {/* Active Card Info */}
                                                {offset === 0 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.3 }}
                                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6"
                                                    >
                                                        <div className="flex items-end justify-between">
                                                            <div className="flex-1">
                                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                                    {cert.title}
                                                                </h3>
                                                                <p className="text-white/80 text-sm mb-1">
                                                                    {cert.issuer}
                                                                </p>
                                                                <p className="text-white/60 text-sm">
                                                                    {cert.date}
                                                                </p>
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <button
                                                                    onClick={() => setSelectedCert(cert)}
                                                                    className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-xl text-white transition-all hover:scale-110"
                                                                >
                                                                    <Award size={20} />
                                                                </button>
                                                                <a
                                                                    href={cert.image}
                                                                    download={`${cert.title}.png`}
                                                                    className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-xl text-white transition-all hover:scale-110"
                                                                >
                                                                    <Download size={20} />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>

                                            {/* Certificate Number Badge */}
                                            <div className="absolute top-4 left-4">
                                                <div
                                                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-white text-xl backdrop-blur-xl border-2 border-white/20 shadow-lg"
                                                    style={{ backgroundColor: `${cert.color}80` }}
                                                >
                                                    {cert.id}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all hover:scale-110 z-50"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all hover:scale-110 z-50"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mt-12">
                    {certificates.map((cert, index) => (
                        <button
                            key={cert.id}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className="relative group"
                        >
                            <div
                                className={`transition-all duration-300 ${index === currentIndex ? 'w-12 h-3' : 'w-3 h-3 hover:scale-125'
                                    } rounded-full`}
                                style={{
                                    backgroundColor: index === currentIndex ? cert.color : '#ffffff40',
                                    boxShadow: index === currentIndex ? `0 0 20px ${cert.color}80` : 'none',
                                }}
                            />
                        </button>
                    ))}
                </div>

                {/* Counter */}
                <div className="text-center mt-6">
                    <p className="text-gray-400 text-lg">
                        <span
                            className="font-bold text-3xl"
                            style={{ color: certificates[currentIndex].color }}
                        >
                            {currentIndex + 1}
                        </span>
                        <span className="mx-2">/</span>
                        <span className="text-white font-semibold">{certificates.length}</span>
                        <span className="ml-2">Certifications</span>
                    </p>
                </div>
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, rotateY: -90, opacity: 0 }}
                            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                            exit={{ scale: 0.5, rotateY: 90, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-6xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                            >
                                <X size={24} />
                            </button>

                            {/* Certificate */}
                            <div className={`bg-gradient-to-br ${selectedCert.gradient} p-1 rounded-3xl`}>
                                <div className="bg-secondary rounded-3xl overflow-hidden">
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        className="w-full h-auto"
                                    />
                                    <div className={`p-6 bg-gradient-to-r ${selectedCert.gradient}`}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                                                <p className="text-white/80">{selectedCert.issuer} • {selectedCert.date}</p>
                                            </div>
                                            <a
                                                href={selectedCert.image}
                                                download={`${selectedCert.title}.png`}
                                                className="bg-white/20 hover:bg-white/30 backdrop-blur-xl text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                                            >
                                                <Download size={20} />
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Custom Styles */}
            <style jsx>{`
                .delay-1000 {
                    animation-delay: 1000ms;
                }
            `}</style>
        </section>
    );
};

export default Certificates;
