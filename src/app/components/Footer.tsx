import { FOOTER_LINKS } from '@Constants/footer-links';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container m-auto mt-5 flex items-center justify-between border-t border-solid border-silverSand pb-10 pt-5 dark:border-onyx">
      <p className="text-xs text-black/75 md:text-sm dark:text-white/50">
        © Corradini Nicolás {currentYear}
      </p>
      <nav className="flex gap-5">
        {FOOTER_LINKS.map((button) => (
          <a href={button.href} target="_blank" rel="noreferrer">
            {button.icon}
          </a>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
