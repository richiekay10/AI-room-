import React, { useState } from 'react';
import { before1, after1, before2, after2, before3, after3, beforeAfterPairs } from '../constants/sampleImages';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';

const roomCategories = [
  { id: 'all', name: 'All Designs' },
  { id: 'living-room', name: 'Living Rooms' },
  { id: 'bedroom', name: 'Bedrooms' },
  { id: 'kitchen', name: 'Kitchens' },
  { id: 'bathroom', name: 'Bathrooms' },
  { id: 'office', name: 'Home Offices' }
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Extended gallery items
  const galleryItems = [
    {
      id: 1,
      category: 'living-room',
      beforeImage: before1,
      afterImage: after1,
      title: 'Modern Living Room',
      style: 'Modern',
    },
    {
      id: 2,
      category: 'kitchen',
      beforeImage: before2,
      afterImage: after2,
      title: 'Scandinavian Kitchen',
      style: 'Scandinavian',
    },
    {
      id: 3,
      category: 'bedroom',
      beforeImage: before3,
      afterImage: after3,
      title: 'Luxury Bedroom',
      style: 'Luxury',
    },
    // Add all the before/after pairs from the constants
    ...beforeAfterPairs.map((pair, index) => ({
      id: index + 4,
      category: ['living-room', 'bedroom', 'kitchen', 'bathroom', 'office'][Math.floor(Math.random() * 5)],
      beforeImage: pair.before,
      afterImage: pair.after,
      title: `Amazing ${['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Home Office'][Math.floor(Math.random() * 5)]} Redesign`,
      style: ['Modern', 'Minimalist', 'Scandinavian', 'Industrial', 'Luxury', 'Coastal', 'Bohemian'][Math.floor(Math.random() * 7)],
    })),
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Design Gallery</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Browse through our collection of amazing room transformations created with RoomGPT.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-12">
        <TabsList className="w-full max-w-2xl mx-auto flex overflow-x-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
          {roomCategories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="flex-1 whitespace-nowrap"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl bg-white dark:bg-slate-800">
            <div className="relative h-64 overflow-hidden">
              <BeforeAfterSlider 
                beforeImage={item.beforeImage} 
                afterImage={item.afterImage} 
                height={256}
              />
              <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                {item.style}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {roomCategories.find(cat => cat.id === item.category)?.name || 'Room'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;