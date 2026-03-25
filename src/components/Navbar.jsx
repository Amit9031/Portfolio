import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Training', href: '#training' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Entertainment', href: '#entertainment' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: '/newcv2027.pdf', download: true },
    ];

    return (
        <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-accent">Portfolio.</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    download={link.download ? "Amit_Ranjan_CV.pdf" : undefined}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${link.name === 'Resume'
                                        ? 'text-accent hover:text-accent/80 font-semibold'
                                        : 'text-gray-300 hover:text-accent'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-primary border-b border-white/10"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                download={link.download ? "Amit_Ranjan_CV.pdf" : undefined}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${link.name === 'Resume'
                                    ? 'text-accent hover:text-accent/80 font-semibold'
                                    : 'text-gray-300 hover:text-accent'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
