import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Code, Download, Instagram } from 'lucide-react';
import profilePic from '../assets/profile.jpeg';

// Preload the typing audio
const typingAudio = new Audio('/typesound.mp3');
typingAudio.volume = 0.5;
typingAudio.loop = true;

const Typewriter = ({ text, delay = 100, startDelay = 0, className = "" }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [started, setStarted] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
            setIsTyping(true);

            // Try to play audio immediately (might be blocked)
            const playPromise = typingAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // If blocked, add listeners to play on FIRST interaction
                    const unlockAudio = () => {
                        typingAudio.play().catch(() => { });
                        // Remove listeners once triggered
                        ['click', 'mousemove', 'keydown', 'touchstart'].forEach(event =>
                            document.removeEventListener(event, unlockAudio)
                        );
                    };

                    ['click', 'mousemove', 'keydown', 'touchstart'].forEach(event =>
                        document.addEventListener(event, unlockAudio)
                    );
                });
            }
        }, startDelay);
        return () => clearTimeout(timeout);
    }, [startDelay]);

    useEffect(() => {
        if (started && currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        } else if (currentIndex >= text.length) {
            setIsTyping(false);
            typingAudio.pause();
            typingAudio.currentTime = 0;
        }
    }, [currentIndex, delay, text, started]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            typingAudio.pause();
            typingAudio.currentTime = 0;
        };
    }, []);

    return (
        <span className={className}>
            {currentText}
            {currentIndex < text.length && (
                <span className="animate-pulse border-r-2 border-accent ml-1 h-full inline-block align-middle">&nbsp;</span>
            )}
        </span>
    );
};

const Hero = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Attempt to play on mount
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay prevented:", error);
                    // Add a one-time listener to play on interaction
                    const playOnInteraction = () => {
                        if (audioRef.current) {
                            audioRef.current.play().catch(e => console.error("Play failed:", e));
                        }
                        document.removeEventListener('click', playOnInteraction);
                        document.removeEventListener('keydown', playOnInteraction);
                        document.removeEventListener('touchstart', playOnInteraction);
                    };

                    document.addEventListener('click', playOnInteraction);
                    document.addEventListener('keydown', playOnInteraction);
                    document.addEventListener('touchstart', playOnInteraction);
                });
            }
        }
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Hidden audio element */}
            <audio ref={audioRef} src="/welsound.mp3" preload="auto" />

            {/* Background gradient blobs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-accent font-medium text-lg mb-4 tracking-wide">HELLO, I'M</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight h-20 md:h-24">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            <Typewriter text="Amit Ranjan" delay={150} />
                        </span>
                    </h1>
                    <div className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl leading-relaxed min-h-[100px]">
                        <Typewriter
                            text="Blending Full-Stack engineering with Data Science and AI to build intelligent, visually stunning, and high-performance applications."
                            delay={50}
                            startDelay={2000}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-accent hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
                        >
                            View Work
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="/amit-cv-2025.docx"
                            download="Amit_Ranjan_CV.docx"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
                        >
                            <Download className="mr-2 h-5 w-5" />
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition-all hover:scale-105 shadow-lg shadow-green-500/25"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-6 justify-center md:justify-start">
                        <a href="https://github.com/Amit9031" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all shadow-lg hover:shadow-white/20">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/amitranjans/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-[#0077b5] hover:bg-white/10 hover:scale-110 transition-all shadow-lg hover:shadow-[#0077b5]/30">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://leetcode.com/u/disOKPPQ7K/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-[#ffa116] hover:bg-white/10 hover:scale-110 transition-all shadow-lg hover:shadow-[#ffa116]/30">
                            <Code size={24} />
                        </a>
                        <a href="https://www.instagram.com/_a.mit_._/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-[#E1306C] hover:bg-white/10 hover:scale-110 transition-all shadow-lg hover:shadow-[#E1306C]/30">
                            <Instagram size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-64 h-64 md:w-96 md:h-96 mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                        <img
                            src={profilePic}
                            alt="Amit Ranjan"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
