import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuButtonProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  hoverColor: string;
  textColor: string;
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  icon: Icon,
  title,
  description,
  bgColor,
  hoverColor,
  textColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${hoverColor} p-6 rounded-lg flex items-center space-x-4 transition-all`}
    >
      <Icon className="w-8 h-8" />
      <div className="text-left">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className={textColor}>{description}</p>
      </div>
    </button>
  );
};

export default MenuButton;