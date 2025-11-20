import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Amit Ranjan. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://github.com/Amit9031" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/amitranjans/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors hover:scale-110 transform">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://leetcode.com/u/disOKPPQ7K/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ffa116] transition-colors hover:scale-110 transform">
                        <Code size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
