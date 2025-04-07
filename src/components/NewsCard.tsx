import React from 'react';
import { Calendar, User } from 'lucide-react';

interface NewsProps {
  news: {
    title: string;
    image: string;
    category: string;
    date: string;
    author: string;
    content: string;
  };
}

const NewsCard = ({ news }: NewsProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
      <img 
        src={news.image} 
        alt={news.title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {news.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(news.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <User className="w-4 h-4 mr-1" />
            {news.author}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">{news.title}</h2>
        <p className="text-gray-600 mb-4">{news.content}</p>
        
        <div className="flex justify-between items-center">
          <button className="text-yellow-600 hover:text-yellow-700">
            Previous Article
          </button>
          <button className="text-yellow-600 hover:text-yellow-700">
            Next Article
          </button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;