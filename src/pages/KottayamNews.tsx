import React from 'react';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';

function KottayamNews() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Kottayam News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NewsCard
            news={{
              title: "New Cultural Center Opens in Kottayam",
              content: "The state-of-the-art facility aims to preserve and promote local arts and traditions",
              image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80",
              date: "October 15, 2023",
              category: "Culture",
              author: "Staff Reporter"
            }}
          />
          <NewsCard
            news={{
              title: "Rubber Plantation Initiatives Boost Local Economy",
              content: "Government announces new support measures for rubber farmers in the district",
              image: "https://images.unsplash.com/photo-1598335624134-5bceb5de202d?auto=format&fit=crop&q=80",
              date: "October 14, 2023",
              category: "Economy",
              author: "Staff Reporter"
            }}
          />
          <NewsCard
            news={{
              title: "Educational Excellence: Kottayam Tops Literacy Rankings",
              content: "District maintains its position as an educational hub in Kerala",
              image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
              date: "October 13, 2023",
              category: "Education",
              author: "Staff Reporter"
            }}
          />
          <NewsCard
            news={{
              title: "Infrastructure Development Projects Announced",
              content: "New road and bridge projects to improve connectivity in rural areas",
              image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80",
              date: "October 12, 2023",
              category: "Infrastructure",
              author: "Staff Reporter"
            }}
          />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default KottayamNews;