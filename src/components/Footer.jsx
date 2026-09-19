const quickLinks = [
  ["Home", "/"],
  ["Shop", "/shop"],
  ["Season special", "/sale"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/rida_cr0chet988"],
  ["TikTok", "https://www.tiktok.com/@rida_crochet988"],
  ["YouTube", "https://www.youtube.com/@yarnify988"],
];

const linkClass = "footer-link type-small self-start border-0 bg-transparent p-0 text-left text-cream/85 transition hover:text-coral";

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-ink px-5 py-16 text-cream sm:px-8 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 pb-14 md:flex-row md:pb-20">
        <div>
          <div className="type-display-md text-cream">Yarnify<span className="text-coral">.</span></div>
          <p className="type-small mt-2 text-cream/65">Crochet handmade<br />creative loops.</p>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-12">
          <div className="flex min-w-0 flex-col gap-3">
            <span className="font-mono text-[9px] uppercase text-coral">Quick links</span>
            {quickLinks.map(([label, path]) => (
              <button key={path} type="button" className={linkClass} onClick={() => onNavigate(path)}>{label}</button>
            ))}
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <span className="font-mono text-[9px] uppercase text-coral">Contact</span>
            <a className="type-small break-all text-cream/85 transition hover:text-coral" href="mailto:binte.shahid789@gmail.com">binte.shahid789@gmail.com</a>
            <button type="button" className={linkClass} onClick={() => onNavigate("/contact")}>Contact page ↗</button>
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <span className="font-mono text-[9px] uppercase text-coral">Follow us</span>
            {socialLinks.map(([label, url]) => (
              <a key={label} className="type-small text-cream/85 transition hover:text-coral" href={url} target="_blank" rel="noreferrer">{label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl justify-between gap-5 border-t border-white/15 pt-5 font-mono text-[10px] text-white/40">
        <span>© 2026 Yarnify Studio</span>
        <span>Made slowly, with joy.</span>
      </div>
    </footer>
  );
}
