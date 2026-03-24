import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Loader2, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        if (serviceId === 'YOUR_SERVICE_ID') {
            setTimeout(() => {
                setLoading(false);
                alert("✨ DEMO SUCCESS! \n\nThe form works visually. To actually receive emails, replace 'YOUR_SERVICE_ID' in Contact.jsx with your real EmailJS keys.");
                e.target.reset();
                setIsModalOpen(false);
            }, 2000);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                alert("Message sent successfully!");
                e.target.reset();
                setIsModalOpen(false);
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <>
            <section id="contact" className="py-16 bg-secondary">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get In Touch</h2>
                        <p className="text-gray-400 mb-8">Let's discuss your next project</p>

                        {/* Get In Touch Button */}
                        <motion.button
                            onClick={() => setIsModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-bold rounded-lg transition-all shadow-lg inline-flex items-center gap-2"
                        >
                            <Mail size={20} />
                            Send Me a Message
                        </motion.button>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                    >
                        {/* Email */}
                        <div className="bg-primary/50 rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-colors text-center">
                            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Mail className="text-accent" size={24} />
                            </div>
                            <p className="text-gray-400 text-sm mb-2">Email</p>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=amitrajr7@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-sm font-medium hover:text-accent transition-colors break-all"
                            >
                                amitrajr7@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="bg-primary/50 rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-colors text-center">
                            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Phone className="text-accent" size={24} />
                            </div>
                            <p className="text-gray-400 text-sm mb-2">Phone</p>
                            <a
                                href="tel:+918709522829"
                                className="text-white text-sm font-medium hover:text-accent transition-colors"
                            >
                                +91 87095 22829
                            </a>
                        </div>

                        {/* Location */}
                        <div className="bg-primary/50 rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-colors text-center">
                            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MapPin className="text-accent" size={24} />
                            </div>
                            <p className="text-gray-400 text-sm mb-2">Location</p>
                            <p className="text-white text-sm font-medium">Phagwara, Punjab</p>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <div className="text-center mt-10">
                        <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://github.com/Amit9031"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-primary/50 hover:bg-accent/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent transition-all border border-white/5 hover:border-accent/30"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/amitranjans/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-primary/50 hover:bg-accent/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent transition-all border border-white/5 hover:border-accent/30"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-secondary rounded-2xl border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-secondary border-b border-white/10 p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                                    <p className="text-gray-400 text-sm mt-1">Fill out the form below and I'll get back to you soon</p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-10 h-10 bg-primary hover:bg-accent/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent transition-all"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6">
                                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                                    {/* Name & Email Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">Name *</label>
                                            <input
                                                type="text"
                                                name="user_name"
                                                required
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 bg-primary border border-white/10 focus:border-accent rounded-lg text-white text-sm placeholder-gray-500 transition-colors outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">Email *</label>
                                            <input
                                                type="email"
                                                name="user_email"
                                                required
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 bg-primary border border-white/10 focus:border-accent rounded-lg text-white text-sm placeholder-gray-500 transition-colors outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="block text-white text-sm font-medium mb-2">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Project discussion"
                                            className="w-full px-4 py-3 bg-primary border border-white/10 focus:border-accent rounded-lg text-white text-sm placeholder-gray-500 transition-colors outline-none"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-white text-sm font-medium mb-2">Message *</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows="6"
                                            placeholder="Tell me about your project..."
                                            className="w-full px-4 py-3 bg-primary border border-white/10 focus:border-accent rounded-lg text-white text-sm placeholder-gray-500 transition-colors outline-none resize-none"
                                        />
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3 pt-2">
                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(false)}
                                            className="px-6 py-3 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition-colors border border-white/10"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="flex-1 py-3 bg-accent hover:bg-accent/90 text-primary font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={18} />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send size={18} />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Contact;
