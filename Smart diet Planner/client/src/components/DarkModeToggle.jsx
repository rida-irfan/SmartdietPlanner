import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', enabled);
  }, [enabled]);

  return (
    <button
      type="button"
      onClick={() => setEnabled((prev) => !prev)}
      className="inline-flex items-center gap-2 rounded-full border border-leaf-200 bg-white dark:bg-navy-900 dark:border-navy-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 transition-all hover:border-leaf-400 hover:dark:border-primary-500 hover:shadow-soft"
    >
      {enabled ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      <span>{enabled ? 'Dark' : 'Light'} mode</span>
    </button>
  );
};

export default DarkModeToggle;
