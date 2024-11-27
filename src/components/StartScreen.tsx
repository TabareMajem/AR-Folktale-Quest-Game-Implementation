import React from 'react';
import { Scroll, BookOpen, Trophy, Settings } from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import MenuButton from './ui/MenuButton';

const StartScreen: React.FC = () => {
  const { setCurrentQuest } = useGameStore();

  const menuItems = [
    {
      icon: Scroll,
      title: 'Start Quest',
      description: 'Begin your journey',
      bgColor: 'bg-indigo-600',
      hoverColor: 'hover:bg-indigo-700',
      textColor: 'text-indigo-200',
      onClick: () => setCurrentQuest('momotaro'),
    },
    {
      icon: BookOpen,
      title: 'Select Folktale',
      description: 'Choose your story',
      bgColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
      textColor: 'text-purple-200',
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'View your progress',
      bgColor: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700',
      textColor: 'text-pink-200',
    },
    {
      icon: Settings,
      title: 'Settings',
      description: 'Customize your experience',
      bgColor: 'bg-violet-600',
      hoverColor: 'hover:bg-violet-700',
      textColor: 'text-violet-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Folktale Quest
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuItems.map((item, index) => (
            <MenuButton key={index} {...item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <img
            src="https://images.unsplash.com/photo-1565017228608-75ad7c58f7c4"
            alt="Japanese Temple"
            className="rounded-lg mx-auto max-w-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default StartScreen;