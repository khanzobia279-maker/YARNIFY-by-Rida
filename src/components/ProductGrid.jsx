import LazyImage from "./LazyImage.jsx";

export default function ProductGrid({ products, onAdd, onSelect, featured = false, compact = false }) {
  return (
    <section className={`mx-auto max-w-7xl border-t border-line px-5 py-16 sm:px-8 md:py-24 ${compact ? "border-0 pt-0" : ""}`}>
      {featured && <div className="mb-10 flex items-end justify-between gap-6"><div><p className="eyebrow">A few favorites</p><h2 className="type-display-md">Good things,<br /><em className="text-clay">gathered here.</em></h2></div><button className="text-link" onClick={() => window.history.pushState({}, "", "/shop") || window.dispatchEvent(new PopStateEvent("popstate"))}>View all pieces ↗</button></div>}
      <div className="product-grid grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-6">
        {products.map((product) => (
          <article key={product.name} className="product-card group min-w-0 cursor-pointer" onClick={() => onSelect(product)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onSelect(product); } }} role="button" tabIndex="0">
            <div className={`product-image relative aspect-square overflow-hidden bg-[#e6d9ca] tone-${product.tone}`}>
              <LazyImage src={product.image} alt={product.name} eager={product.name === "Crochet tissue box cover"} />
              {product.sale && <span className="absolute left-3 top-3 bg-clay px-2 py-1 font-mono text-[10px] uppercase text-white">Sale</span>}
              <button className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full border-0 bg-cream text-xl text-ink opacity-100 transition hover:bg-clay hover:text-white md:opacity-0 md:group-hover:opacity-100" onClick={(event) => { event.stopPropagation(); onAdd(product); }} aria-label={`Add ${product.name} to bag`}>+</button>
            </div>
            <div className="flex justify-between gap-2 pt-3"><div><h3 className="type-small mb-1 font-semibold">{product.name}</h3><p className="font-mono text-[10px] uppercase text-ink/50">{product.category}</p></div></div>
          </article>
        ))}
      </div>
    </section>
  );
}
