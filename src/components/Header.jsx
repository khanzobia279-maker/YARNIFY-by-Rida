import { useState } from "react";

const links = [["Home", "/"], ["Shop", "/shop"], ["About", "/about"], ["Sale", "/sale"], ["Contact", "/contact"]];

export default function Header({ cartCount, onNavigate, filterOpen, onToggleFilter, onBagToggle, bagOpen, currentPath }) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="flex min-h-11 items-center justify-center gap-3 bg-clay px-4 text-center text-sm font-semibold text-white">
      <span>Special Sale</span>
      <button className="border-0 bg-transparent font-mono text-xs uppercase underline underline-offset-2" onClick={() => onNavigate("/sale")}>Shop now →</button>
      <span className="hidden sm:inline">Limited stock!</span>
    </div>
    <header className="sticky top-0 z-20 border-b border-primary/15 bg-surface/95 backdrop-blur-md">
      <div className="mx-auto grid h-[78px] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-5 px-4 sm:px-8 min-[381px]:px-5">
        <button className="flex items-center gap-3 border-0 bg-transparent font-display text-3xl text-ink" onClick={() => onNavigate("/")} aria-label="Yarnify home">
          <img src="/images/yarnify-logo.svg" alt="Yarnify logo" title="Yarnify home" className="h-10 w-auto min-[381px]:h-12" />
        </button>

        <nav className="hidden justify-self-center gap-8 md:flex">
          {links.map(([label, path]) => {
            const active = currentPath === path;
            return <button key={label} className={`nav-link border-0 bg-transparent text-sm transition hover:text-clay ${active ? "nav-link-active text-clay" : "text-ink/60"}`} onClick={() => onNavigate(path)} aria-current={active ? "page" : undefined}>{label}</button>;
          })}
        </nav>

        <div className="flex items-center gap-3 min-[381px]:gap-6">
          <button className="border-0 bg-transparent text-3xl text-ink" aria-label="Search">⌕</button>
          <button className={`flex items-center gap-2 border-0 bg-transparent text-base ${filterOpen ? "text-clay" : "text-ink"}`} aria-label="Open filters" onClick={onToggleFilter}><span className="inline-block h-4 w-4 bg-current [clip-path:polygon(0_0,100%_0,62%_46%,62%_100%,38%_100%,38%_46%)]" /><span className="mobile-label">Filter</span></button>
          <button className={`border-0 bg-transparent text-base ${bagOpen ? "text-clay" : "text-ink"}`} onClick={onBagToggle} aria-expanded={bagOpen} aria-controls="bag-drawer"><span className="mobile-label">Bag </span><span className="inline-grid h-8 min-w-8 place-items-center rounded-full bg-ink px-1 text-xs text-white">{cartCount}</span></button>
          <button className="border-0 bg-transparent text-2xl text-ink md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-5 border-t border-ink/10 px-5 py-5 md:hidden">
          <button className="flex items-center gap-2 border-0 bg-transparent p-0 text-left text-xs text-clay" onClick={() => { onToggleFilter(); setOpen(false); }}><span className="inline-block h-3 w-3 bg-current [clip-path:polygon(0_0,100%_0,62%_46%,62%_100%,38%_100%,38%_46%)]" />Filter</button>
          {links.map(([label, path]) => {
            const active = currentPath === path;
            return <button className={`border-0 bg-transparent text-left text-xs ${active ? "font-semibold text-clay" : "text-ink/70"}`} key={label} onClick={() => { onNavigate(path); setOpen(false); }}>{label}</button>;
          })}
        </nav>
      )}
    </header>
    </>
  );
}
