import { FOOTER_LINKS } from '@Constants/footer-links';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container m-auto px-5 pb-10 md:px-0">
      <hr className="border-silverSand dark:border-onyx " />
      <div className="flex flex-col items-center justify-between gap-3 pt-5 md:flex-row">
        <p className="text-xs text-black/75 md:text-sm dark:text-white/50">
          © Corradini Nicolás {currentYear}
        </p>
        <nav className="flex gap-3">
          {FOOTER_LINKS.map((button) => (
            <a
              key={button.href}
              href={button.href}
              target="_blank"
              rel="noreferrer"
            >
              {button.icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
