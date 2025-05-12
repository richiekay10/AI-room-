import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

// Types
export type ToastVariant = 'default' | 'destructive' | 'success';

export type ToastProps = {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
};

type ToastContextValue = {
  toast: (props: Omit<ToastProps, 'id'>) => void;
  dismiss: (id: string) => void;
};

// Create context
const ToastContext = createContext<ToastContextValue | undefined>(undefined);

// Provider component
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = (props: Omit<ToastProps, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, ...props }]);
  };

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 max-w-sm">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onDismiss={() => dismiss(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// Hook to use the toast context
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

// Toast component
const Toast = ({
  id,
  title,
  description,
  variant = 'default',
  duration = 5000,
  onDismiss,
}: ToastProps & { onDismiss: () => void }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onDismiss, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss]);

  return (
    <div
      className={cn(
        'p-4 rounded-lg shadow-lg flex gap-3 items-start max-w-sm animate-slideIn transition-opacity',
        variant === 'default' && 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100',
        variant === 'destructive' && 'bg-red-600 text-white',
        variant === 'success' && 'bg-green-600 text-white',
      )}
    >
      <div className="flex-1">
        {title && <h3 className="font-medium text-sm">{title}</h3>}
        {description && (
          <p className={cn(
            "text-xs mt-1",
            variant === 'default' && "text-slate-500 dark:text-slate-400",
            (variant === 'destructive' || variant === 'success') && "text-white/90"
          )}>
            {description}
          </p>
        )}
      </div>
      <button
        onClick={onDismiss}
        className={cn(
          "rounded-full p-0.5 transition-colors",
          variant === 'default' && "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100",
          (variant === 'destructive' || variant === 'success') && "text-white/80 hover:text-white"
        )}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

// Simple function for showing toasts outside of components
let toastFn: (props: Omit<ToastProps, 'id'>) => void;

export const toast = (props: Omit<ToastProps, 'id'>) => {
  if (toastFn) {
    toastFn(props);
  } else {
    console.warn('Toast function called before it was initialized');
  }
};

// Component that initializes the toast function
export const Toaster = () => {
  const { toast: toastContext } = useToast();
  
  useEffect(() => {
    toastFn = toastContext;
    return () => {
      toastFn = undefined as any;
    };
  }, [toastContext]);
  
  return null;
};

export default ToastProvider;