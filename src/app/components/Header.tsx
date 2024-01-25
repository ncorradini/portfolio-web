'use client';

import React from 'react';
import { SwitcherMode } from '@Shared/SwitcherMode';
import ContactIcon from '@Icons/ContactIcon';
import { LINKEDIN_LINK } from '@Utils/links';

function Header() {
  return (
    <header className="sticky top-0 z-50 h-[60px] w-full backdrop-blur">
      <div className="container m-auto flex h-full items-center justify-end gap-5 px-4 md:px-0">
        <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
          <ContactIcon className="h-4 w-4 text-black dark:text-white" />
        </a>
        <SwitcherMode />
      </div>
    </header>
  );
}

export default Header;
