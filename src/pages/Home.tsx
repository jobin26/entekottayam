import React from 'react';
import { motion } from 'framer-motion';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const sampleNews = [
    {
      id: 1,
      title: "കോട്ടയം നഗരത്തിൽ പുതിയ വികസന പദ്ധതികൾ",
      image: "https://images.unsplash.com/photo-1580751667882-99d506a4c932?auto=format&fit=crop&q=80&w=800",
      category: "Kerala",
      date: "2025-04-01",
      author: "EnteKottayam",
      content: "കോട്ടയം നഗരത്തിന്റെ വികസനത്തിനായി പുതിയ പദ്ധതികൾ പ്രഖ്യാപിച്ചു..."
    },
    {
      id: 2,
      title: "കോട്ടയം റെയിൽവേ സ്റ്റേഷൻ നവീകരണം പൂർത്തിയായി",
      image: "https://images.unsplash.com/photo-1581262177000-8139a463e531?auto=format&fit=crop&q=80&w=800",
      category: "Kottayam",
      date: "2025-04-01",
      author: "EnteKottayam",
      content: "കോട്ടയം റെയിൽവേ സ്റ്റേഷന്റെ നവീകരണ പ്രവർത്തനങ്ങൾ പൂർത്തിയായി..."
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <motion.div 
        className="lg:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {sampleNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </motion.div>
      <Sidebar />
    </div>
  );
};

export default Home;