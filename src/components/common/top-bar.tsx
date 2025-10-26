import React from 'react';

const TopBar: React.FC = () => {
  return (
    <aside className="py-4 bg-green-500 text-green-900 text-center relative z-10">
      Want to learn how to build websites like this one? Visit{' '}
      <a
        href="https://www.pixelrocket.store"
        className="underline hover:no-underline"
      >
        Pixel Rocket
      </a>
    </aside>
  );
};

export default TopBar;