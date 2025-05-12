import React, { createContext, useContext, useState, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type TabsContextType = {
  value: string;
  onValueChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
}

export const Tabs = ({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  ...props
}: TabsProps) => {
  const [tabValue, setTabValue] = useState(defaultValue);
  const currentValue = value !== undefined ? value : tabValue;
  
  const handleValueChange = (newValue: string) => {
    setTabValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export const TabsList = ({ children, className, ...props }: TabsListProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-md p-1 space-x-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const TabsTrigger = ({ value, children, className, onClick, ...props }: TabsTriggerProps) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }
  
  const { value: selectedValue, onValueChange } = context;
  const isSelected = selectedValue === value;
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isSelected
          ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm"
          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100",
        className
      )}
      onClick={() => {
        onValueChange(value);
        onClick?.();
      }}
      {...props}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export const TabsContent = ({ value, children, className, ...props }: TabsContentProps) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }
  
  const { value: selectedValue } = context;
  
  if (selectedValue !== value) {
    return null;
  }
  
  return (
    <div
      className={cn("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", className)}
      {...props}
    >
      {children}
    </div>
  );
};