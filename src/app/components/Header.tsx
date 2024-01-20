'use client';

import React from 'react';
import { SwitcherMode } from '@Shared/SwitcherMode';
import { LINK_SECTIONS } from '@Constants/header-links';

function Header() {
  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId || '');

    if (targetElement) {
      const offset = 60;
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 h-[60px] w-full border-b border-solid border-silverSand bg-[#ffffff29] backdrop-blur dark:border-onyx dark:bg-[#1014184a]">
      <div className="container m-auto flex h-full items-center">
        <nav className="ml-auto flex h-full w-fit items-center gap-5 px-4 text-sm font-light text-chineseBlack md:px-0 dark:text-platinum/75">
          {LINK_SECTIONS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavigation}
              className="hidden transition duration-200 hover:text-darkSilver md:block dark:hover:text-white"
            >
              {link.text}
            </a>
          ))}
          <SwitcherMode />
        </nav>
      </div>
    </header>
  );
}

export default Header;
