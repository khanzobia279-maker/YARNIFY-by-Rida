import LazyImage from "./LazyImage.jsx";

export default function HomeExtras({ onNavigate, part = "all" }) {
  const showBefore = part === "all" || part === "before";
  const showAfter = part === "all" || part === "after";

  return (
    <>
      {showBefore && <section className="editorial-band bg-coral px-5 py-10 text-[#fff4ed] sm:px-8 md:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_auto_1fr]"><p className="font-mono text-[10px] uppercase tracking-[.14em] text-[#ffd4c6]">01 / Small batch</p><h2 className="type-display-md text-center">Made to be<br /><em>kept.</em></h2><p className="max-w-[250px] justify-self-end text-sm leading-7 text-[#ffe3d8]">Thoughtful crochet for bright homes, slow mornings, and the people you love.</p></div>
      </section>}

      {showBefore && <section className="bg-surface px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.75fr_1.25fr] md:items-end"><div><p className="eyebrow">Find your next favorite</p><h2 className="type-display-lg text-ink">Objects with<br /><em className="text-clay">character.</em></h2></div><p className="type-body max-w-md text-muted md:justify-self-end">A considered collection of bags, gifts, and soft home pieces. Every one is made by hand, one loop at a time.</p></div>
      </section>}

      {showAfter && <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24"><div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">A peek at crochet projects we love</p><h2 className="type-display-md text-ink">The studio<br /><em className="text-clay">diary.</em></h2></div><p className="max-w-[250px] text-sm leading-7 text-muted">Color, texture, and a little joy in every frame.</p></div><div className="editorial-grid grid grid-cols-2 gap-3 md:grid-cols-4"><LazyImage src="/images/COUPLE%20BERA%20KEYCHAIN%20%20.PNG" alt="Crochet bear keychain pair" className="md:col-span-1 md:row-span-2" /><LazyImage src="/images/fllower%20sweater.PNG" alt="Floral crochet sweater" /><LazyImage src="/images/rose%20flower.png" alt="Crochet rose flower" /><LazyImage src="/images/blue%20sewter%20.png" alt="Blue crochet sweater" className="md:col-span-2" /></div></section>}

      {showAfter && <section className="bg-surface px-5 py-16 sm:px-8 md:py-24"><div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow">Learn, make, repeat</p><h2 className="type-display-md text-ink">Patterns &amp;<br /><em className="text-clay">Tutorials</em></h2><p className="type-body mt-5 max-w-md text-muted">From cuddly amigurumi to chunky throws, browse step-by-step inspiration made for makers of every level.</p><button className="button-dark mt-7" onClick={() => onNavigate("/sale")}>Browse seasonal picks <span>↗</span></button></div><div className="editorial-frame"><LazyImage src="/images/crochet%20basket%20.png" alt="Crochet basket for tutorial inspiration" aspect="aspect-[4/3]" /></div></div></section>}
    </>
  );
}