import React from 'react';
import { motion } from 'framer-motion';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';

const KeralaNews = () => {
  const keralaNews = [
    {
      id: 1,
      title: "കേരളത്തിൽ പുതിയ വിദ്യാഭ്യാസ പദ്ധതികൾ",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800",
      category: "Education",
      date: "2025-04-01",
      author: "EnteKottayam",
      content: "കേരള സർക്കാർ പുതിയ വിദ്യാഭ്യാസ പദ്ധതികൾ പ്രഖ്യാപിച്ചു. ഈ പദ്ധതികൾ വിദ്യാർത്ഥികൾക്ക് കൂടുതൽ അവസരങ്ങൾ നൽകും..."
    },
    {
      id: 2,
      title: "കേരളത്തിലെ പുതിയ ടൂറിസം പദ്ധതികൾ",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800",
      category: "Tourism",
      date: "2025-04-01",
      author: "EnteKottayam",
      content: "കേരള ടൂറിസം വകുപ്പ് പുതിയ പദ്ധതികൾ പ്രഖ്യാപിച്ചു. ഇതോടെ സംസ്ഥാനത്തെ വിനോദസഞ്ചാര മേഖല കൂടുതൽ ശക്തമാകും..."
    },
    {
      id: 3,
      title: "കേരളത്തിൽ പുതിയ വ്യവസായ നയം",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
      category: "Business",
      date: "2025-04-01",
      author: "EnteKottayam",
      content: "കേരള സർക്കാർ പുതിയ വ്യവസായ നയം പ്രഖ്യാപിച്ചു. ഇതോടെ സംസ്ഥാനത്ത് കൂടുതൽ നിക്ഷേപങ്ങൾ എത്തുമെന്ന് പ്രതീക്ഷ..."
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
        <h1 className="text-3xl font-bold mb-8">Kerala News</h1>
        {keralaNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </motion.div>
      <Sidebar />
    </div>
  );
};

export default KeralaNews;