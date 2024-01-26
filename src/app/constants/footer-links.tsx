import { ReactNode } from 'react';
import EmailIcon from '@Icons/EmailIcon';
import GitHubIcon from '@Icons/GitHubIcon';
import LinkedInIcon from '@Icons/LinkedInIcon';
import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from '@Utils/links';

const STYLES =
  'h-4 dark:text-white/50 dark:hover:text-white text-black/50 hover:text-black transition duration-300';

type TFooterLinks = {
  icon: ReactNode;
  href: string;
};

export const FOOTER_LINKS: TFooterLinks[] = [
  {
    icon: <LinkedInIcon className={STYLES} />,
    href: LINKEDIN_LINK
  },
  {
    icon: <GitHubIcon className={STYLES} />,
    href: GITHUB_LINK
  },
  {
    icon: <EmailIcon className={STYLES} />,
    href: GMAIL_LINK
  }
];
