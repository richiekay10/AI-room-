import React from 'react';
import { cn } from '../lib/utils';

interface RoomStyle {
  id: string;
  name: string;
  description: string;
}

interface RoomStyleSelectorProps {
  styles: RoomStyle[];
  selectedStyle: string | null;
  onSelectStyle: (styleId: string) => void;
}

const RoomStyleSelector: React.FC<RoomStyleSelectorProps> = ({ 
  styles, 
  selectedStyle, 
  onSelectStyle 
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {styles.map((style) => (
        <button
          key={style.id}
          className={cn(
            "flex flex-col items-start p-4 rounded-lg border transition-all text-left",
            selectedStyle === style.id
              ? "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700"
              : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800"
          )}
          onClick={() => onSelectStyle(style.id)}
        >
          <div className="flex items-center w-full">
            <span className={cn(
              "text-sm font-medium",
              selectedStyle === style.id 
                ? "text-indigo-700 dark:text-indigo-300" 
                : "text-slate-900 dark:text-white"
            )}>
              {style.name}
            </span>
            <div className={cn(
              "ml-auto rounded-full border w-4 h-4 flex items-center justify-center",
              selectedStyle === style.id 
                ? "border-indigo-500 bg-indigo-500" 
                : "border-slate-300 dark:border-slate-600"
            )}>
              {selectedStyle === style.id && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {style.description}
          </p>
        </button>
      ))}
    </div>
  );
};

export default RoomStyleSelector;