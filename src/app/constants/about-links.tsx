import { ReactNode } from 'react';
import EmailIcon from '@Icons/EmailIcon';
import GitHubIcon from '@Icons/GitHubIcon';
import LinkedInIcon from '@Icons/LinkedInIcon';
import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from '@Utils/links';

const ICON_SIZE = 'h-5';

type TButtonsLinks = {
  text: string;
  icon: ReactNode;
  href: string;
};

export const BUTTONS_LINKS: TButtonsLinks[] = [
  {
    text: 'LinkedIn',
    icon: <LinkedInIcon className={ICON_SIZE} />,
    href: LINKEDIN_LINK
  },
  {
    text: 'GitHub',
    icon: <GitHubIcon className={ICON_SIZE} />,
    href: GITHUB_LINK
  },
  {
    text: 'nc.corradini@gmail.com',
    icon: <EmailIcon className={ICON_SIZE} />,
    href: GMAIL_LINK
  }
];
