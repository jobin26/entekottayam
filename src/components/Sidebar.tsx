import React from 'react';
import { Search } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Ente Kottayam Live Updates</h3>
        <div className="text-sm text-gray-600 mb-2">April 2025</div>
        <ul className="space-y-4">
          <li className="border-b pb-2">
            <a href="#" className="hover:text-yellow-600">കോട്ടയം മെഡിക്കൽ കോളേജിൽ പുതിയ വാർഡ്</a>
          </li>
          <li className="border-b pb-2">
            <a href="#" className="hover:text-yellow-600">നഗരസഭ പുതിയ പദ്ധതികൾ പ്രഖ്യാപിച്ചു</a>
          </li>
          <li className="border-b pb-2">
            <a href="#" className="hover:text-yellow-600">കുമരകം ടൂറിസം: പുതിയ പദ്ധതികൾ</a>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Kottayam News</h3>
        <img
          src="https://images.unsplash.com/photo-1601891430120-ff5f45d6a44d?auto=format&fit=crop&q=80&w=800"
          alt="Kottayam Railway Station"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-600">
          കോട്ടയം റെയിൽവേ സ്റ്റേഷൻ നവീകരണം പൂർത്തിയായി
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;