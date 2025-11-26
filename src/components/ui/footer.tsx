import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 text-center text-sm border-t transition-colors duration-300
      bg-white text-gray-600 border-gray-200
      dark:bg-slate-950 dark:text-gray-400 dark:border-gray-800"
    >
      <p>
        Made with{' '}
        <span role="img" aria-label="love" className="text-red-500">
          ❤️
        </span>{' '}
        Zeensabbath
      </p>
    </footer>
  );
};

export default Footer;