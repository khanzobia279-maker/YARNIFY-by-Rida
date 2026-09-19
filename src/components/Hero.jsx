import LazyImage from "./LazyImage.jsx";

export default function Hero({ onNavigate }) {
  return (
    <section className="hero-editorial bg-coral px-4 py-4 sm:px-7 md:px-10 md:py-7">
      <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center overflow-hidden bg-cream px-6 py-14 sm:px-10 md:grid-cols-[.95fr_1.05fr] md:px-[7%] md:py-16">
        <div className="hero-stamp absolute right-5 top-5 font-mono text-[9px] uppercase tracking-[.16em] text-clay md:right-10 md:top-8">Yarnify studio / 2026</div>
        <div className="relative z-10 min-w-0 md:pr-8">
          <p className="eyebrow">The new handmade edit</p>
          <h1 className="hero-title font-display text-ink">Crochet<br /><span>handmade</span><br />creative loops</h1>
          <p className="type-body my-7 max-w-[350px] text-ink/65">Soft objects, bright details, and little rituals made slowly for everyday life.</p>
          <button className="button-dark" onClick={() => onNavigate("/shop")}>Explore the collection <span className="text-lg">↗</span></button>
          <div className="mt-12 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-ink/50"><span className="h-px w-7 bg-clay" />Small batch / made by hand</div>
        </div>
        <div className="hero-art relative mt-10 min-w-0 md:mt-0">
          <div className="hero-image"><LazyImage src="/images/gajry-w-rose.png" alt="Red rose gajray crochet hair accessory" aspect="aspect-[4/3]" className="min-h-[350px] bg-[#ddc7b7] md:min-h-[510px]" /></div>
          <div className="absolute bottom-4 right-3 grid h-[72px] w-[72px] place-items-center rounded-full bg-clay text-center font-mono text-xs leading-tight text-white md:bottom-8 md:-right-5 md:h-[92px] md:w-[92px]">01<br /><span className="text-[9px] opacity-60">/ 04</span></div>
          <p className="absolute -bottom-8 left-2 font-mono text-[10px] uppercase tracking-[.1em] text-ink/50 md:-left-9 md:bottom-3 md:-rotate-90 md:origin-left">Red rose gajray / studio piece</p>
        </div>
        <div className="pointer-events-none absolute -bottom-12 -left-8 font-display text-[11rem] leading-none text-clay/10 md:text-[17rem]">Y</div>
      </div>
    </section>
  );
}
