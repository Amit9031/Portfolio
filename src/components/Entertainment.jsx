import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Play, Users, Eye, ThumbsUp } from 'lucide-react';

const Entertainment = () => {
    const channelStats = [
        { icon: <Users size={24} />, label: 'Subscribers', value: '3K+', color: '#FF0000' },
        { icon: <Eye size={24} />, label: 'Total Views', value: '50K+', color: '#00FF00' },
        { icon: <ThumbsUp size={24} />, label: 'Likes', value: '50K+', color: '#0000FF' },
    ];

    const videos = [
        {
            id: 1,
            title: 'Fuuny frinds but pados ne kari din kharab',
            thumbnail: '/uff.png',
            views: '5.2K',
            duration: '15:30',
            link: 'https://youtu.be/Vgdp_-W1IuA'
        },
        {
            id: 2,
            title: 'My YouTube Journey',
            thumbnail: '/amitlala.jpeg',
            views: '3.8K',
            duration: '12:45',
            link: 'https://youtu.be/gqMyFtWebcI'
        },
        {
            id: 3,
            title: 'Latest Adventures',
            thumbnail: 'https://img.youtube.com/vi/mTjtspN2vdo/maxresdefault.jpg',
            views: '7.1K',
            duration: '20:15',
            link: 'https://youtu.be/mTjtspN2vdo'
        },
    ];

    return (
        <section id="entertainment" className="py-20 bg-secondary relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-8"
                    >
                        Know me beyond the code — I'm more than just commits
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, type: "spring", bounce: 0.5 }}
                        className="flex items-center justify-center gap-3 mb-2"
                    >
                        <Youtube className="text-red-500" size={44} />
                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-pink-500">
                            YouTube
                        </h2>
                    </motion.div>

                    <motion.a
                        href="https://www.youtube.com/@Livelong_with_Amit"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="block text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-6 hover:scale-105 transition-transform cursor-pointer"
                    >
                        @justchill
                    </motion.a>
                    <motion.div
                        className="w-40 h-1.5 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-red-500/50"
                        initial={{ width: 0 }}
                        whileInView={{ width: 160 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                </motion.div>

                {/* Channel Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
                    {channelStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-primary/50 rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all text-center"
                        >
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                                style={{ backgroundColor: `${stat.color}20` }}
                            >
                                <div style={{ color: stat.color }}>
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {videos.map((video, index) => (
                        <motion.a
                            key={video.id}
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-primary rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all block"
                        >
                            {/* Thumbnail */}
                            <div className="relative aspect-video bg-gradient-to-br from-red-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                                {video.thumbnail.startsWith('http') || video.thumbnail.startsWith('/') ? (
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                ) : null}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                                <Play className="text-white/80 group-hover:text-white transition-colors relative z-10 drop-shadow-lg" size={64} />
                                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs font-semibold z-10">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <h3 className="text-white font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                                    {video.title}
                                </h3>
                                <p className="text-gray-400 text-sm flex items-center gap-2">
                                    <Eye size={16} />
                                    {video.views} views
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Subscribe Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.a
                        href="https://www.youtube.com/@Livelong_with_Amit"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/30"
                    >
                        <Youtube size={24} />
                        Subscribe to My Channel
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Entertainment;
