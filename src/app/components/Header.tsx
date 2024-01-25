'use client';

import React from 'react';
import { SwitcherMode } from '@Shared/SwitcherMode';

function Header() {
  return (
    <header className="sticky top-0 z-50 h-[60px] w-full backdrop-blur">
      <div className="container m-auto flex h-full">
        <nav className="ml-auto flex h-full items-center px-4 md:px-0">
          <SwitcherMode />
        </nav>
      </div>
    </header>
  );
}

export default Header;
