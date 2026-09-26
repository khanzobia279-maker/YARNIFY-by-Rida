import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import HomeExtras from "./components/HomeExtras.jsx";
import LazyImage from "./components/LazyImage.jsx";
import Contact from "./components/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx";
import products from "./data/products.js";

const ORDER_EMAIL = "binte.shahid789@gmail.com";

const saleProducts = [
  products.find((product) => product.name === "Blossom shoulder bag"),
  products.find((product) => product.name === "Sunburst market tote"),
  products.find((product) => product.name === "Crochet market basket"),
  products.find((product) => product.name === "Red rose gajray"),
  products.find((product) => product.name === "Yellow flower gajray"),
].filter(Boolean);
const reviewStorageKey = "yarnify-reviews";

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Builds a pre-filled order email from whatever is in the bag.
function buildOrderMailto(items) {
  const subject = `Yarnify order request (${items.length} item${items.length > 1 ? "s" : ""})`;
  const lines = items.map((item, index) => `${index + 1}. ${item.name}${item.price ? ` - $${item.price}` : ""}`);
  const body = [
    "Hi Yarnify, I would like to order the following:",
    "",
    ...lines,
    "",
    "My name:",
    "My delivery address:",
    "My phone number:",
  ].join("\n");
  return `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function GlobalFilter({ onNavigate, onClose }) {
  return (
    <div className="fixed inset-x-0 top-[112px] z-10 border-b border-line bg-surface px-5 py-5 shadow-lg sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 text-sm">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[.1em] text-ink/50">Browse by</span>
        <button className="rounded-full border border-line bg-transparent px-4 py-2 text-ink transition hover:border-clay hover:text-clay" onClick={() => { onNavigate("/shop"); onClose(); }}>All pieces</button>
        <button className="rounded-full border border-line bg-transparent px-4 py-2 text-ink transition hover:border-clay hover:text-clay" onClick={() => { onNavigate("/shop"); onClose(); }}>Bags</button>
        <button className="rounded-full border border-clay bg-clay px-4 py-2 text-white" onClick={() => { onNavigate("/sale"); onClose(); }}>Season sale</button>
        <button className="ml-auto border-0 bg-transparent px-2 py-2 text-ink/50 underline underline-offset-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose, onContact }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-ink/55 px-5 py-8" role="presentation" onMouseDown={onClose}>
      <div className="relative grid max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-surface md:grid-cols-2" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border-0 bg-cream text-xl text-ink transition hover:bg-clay hover:text-white" onClick={onClose} aria-label="Close product details">×</button>
        <div className={`aspect-square bg-[#e6d9ca] tone-${product.tone}`}><img className="h-full w-full object-cover" src={product.image} alt={product.name} /></div>
        <div className="flex flex-col justify-center p-7 sm:p-9"><p className="eyebrow">{product.category}</p><h2 id="product-modal-title" className="type-display-md">{product.name}</h2><p className="mt-5 text-sm leading-7 text-ink/65">A handmade crochet piece, carefully made in small batches for bright homes, easy gifting, and everyday joy.</p>{product.sale && <p className="mt-6 border-t border-line pt-5 font-mono text-[10px] uppercase text-clay">Season sale</p>}<button className="button-dark mt-7 justify-center" onClick={onContact}>Ask about this piece <span>↗</span></button></div>
      </div>
    </div>
  );
}

function BagDrawer({ items, onRemove, onClose }) {
  const orderHref = items.length > 0 ? buildOrderMailto(items) : undefined;

  return (
    <aside id="bag-drawer" className="fixed right-0 top-[122px] z-[25] w-full max-w-md border-l border-line bg-surface p-6 shadow-2xl" aria-label="Your bag">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-line pb-4"><div><p className="eyebrow mb-2">Your bag</p><h2 className="type-display-md">{items.length ? `${items.length} piece${items.length > 1 ? "s" : ""}` : "Nothing yet"}</h2></div><button className="border-0 bg-transparent text-sm text-ink/60 underline underline-offset-4 hover:text-clay" onClick={onClose}>Close</button></div>
      {items.length === 0 ? <p className="py-8 text-sm leading-7 text-ink/60">Choose a handmade piece and it will appear here.</p> : <div className="grid max-h-[55vh] gap-4 overflow-y-auto">{items.map((item, index) => <article key={`${item.name}-${index}`} className="flex gap-4 border-b border-line pb-4"><img className="h-24 w-24 shrink-0 object-cover" src={item.image} alt={item.name} /><div className="min-w-0 flex-1"><h3 className="type-small font-semibold">{item.name}</h3><p className="mt-1 font-mono text-[10px] uppercase text-ink/50">{item.category}</p><button className="mt-3 border-0 bg-transparent p-0 text-xs text-clay underline underline-offset-4" onClick={() => onRemove(index)}>Remove</button></div></article>)}</div>}
      {items.length > 0 && (
        <a href={orderHref} className="button-dark mt-6 w-full justify-center">
          Place order <span>↗</span>
        </a>
      )}
      {items.length > 0 && (
        <p className="mt-3 text-center text-xs text-ink/50">
          This opens your email app with your order pre-filled. We'll confirm details and payment with you directly.
        </p>
      )}
    </aside>
  );
}

function SalePage({ onAdd, onSelect }) {
  return (
    <main className="sale-page bg-paper">
      <section className="sale-hero relative mx-auto grid min-h-[545px] max-w-7xl items-center gap-10 overflow-hidden bg-coral px-6 py-20 text-[#fff0e9] sm:px-10 md:grid-cols-[1fr_.8fr] md:px-[8%]">
        <div>
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[.12em] text-[#ffc6b4]">The seasonal edit / limited pieces</p>
          <h1 className="type-display-xl">Little luxuries,<br /><em>lovingly made.</em></h1>
          <p className="type-body my-7 max-w-[315px] text-[#f8d6ca]">Slow-made favorites for sunlit days, gifting, and everything in between.</p>
          <button className="inline-flex items-center gap-6 bg-[#f9e9dc] px-5 py-4 text-xs font-semibold text-ink" onClick={() => document.getElementById("sale-grid").scrollIntoView({ behavior: "smooth" })}>
            Shop sale <span>↘</span>
          </button>
        </div><div className="sale-hero-image editorial-frame rotate-2"><LazyImage src="/images/pink%20rose%20gajray.jpg" alt="Pink rose gajray crochet accessory" aspect="aspect-[4/3]" className="min-h-[280px]" /></div>
      </section>
      <section id="sale-grid" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div><p className="eyebrow">Limited time only</p><h2 className="type-display-md">Season specials</h2></div>
          <p className="max-w-[230px] text-xs leading-7 text-ink/60">Small-batch pieces with a little extra sunshine in every stitch.</p>
        </div>
        <ProductGrid products={saleProducts} onAdd={onAdd} onSelect={onSelect} compact />
      </section>
    </main>
  );
}

function ShopPage({ onAdd, onSelect }) {
  const [category, setCategory] = useState("All pieces");
  const [showFilters, setShowFilters] = useState(false);
  const [saleOnly, setSaleOnly] = useState(false);
  const categories = ["All pieces", "Bags", "Home", "Little gifts"];
  const filtered = products.filter((product) => {
    const matchesCategory = category === "All pieces" || product.category === category;
    return matchesCategory && (!saleOnly || product.sale);
  });

  return (
    <main className="shop-page mx-auto max-w-7xl px-5 py-8 sm:px-8 md:py-12">
      <div className="shop-masthead mb-14 grid gap-8 bg-coral px-6 py-12 text-[#fff4ed] sm:px-10 md:grid-cols-[1.1fr_.9fr] md:items-end md:px-16 md:py-16"><div><p className="mb-5 font-mono text-[10px] uppercase tracking-[.14em] text-[#ffd4c6]">The Yarnify collection / 2026</p><h1 className="type-display-xl">Yarnify.<br /><span className="text-[#402f26]">Made to be</span><br /><em>lived in.</em></h1></div><p className="type-body max-w-[310px] text-[#ffe3d8] md:justify-self-end">Hand-crocheted objects for bright homes, slow mornings, and the people you love.</p></div>
      <div className="mb-9 flex gap-5 overflow-x-auto border-b border-line" role="tablist" aria-label="Product categories">
        <button className={`flex shrink-0 items-center gap-2 border-0 border-r border-line bg-transparent pb-3 pr-6 text-xs ${showFilters || saleOnly ? "text-clay" : "text-ink"}`} aria-label="Filter products" onClick={() => setShowFilters(!showFilters)}><span className="inline-block h-3 w-3 bg-current [clip-path:polygon(0_0,100%_0,62%_46%,62%_100%,38%_100%,38%_46%)]" />Filter</button>
        {categories.map((item) => <button key={item} className={`shrink-0 border-0 border-b pb-3 text-xs ${category === item ? "border-ink text-ink" : "border-transparent text-ink/50"}`} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      {showFilters && <div className="mb-9 flex flex-wrap items-center gap-4 border border-line bg-surface px-4 py-4 text-sm"><span className="font-mono text-[11px] uppercase tracking-[.1em] text-ink/50">Refine pieces</span><button className={`rounded-full border px-4 py-2 ${saleOnly ? "border-clay bg-clay text-white" : "border-line bg-transparent text-ink"}`} onClick={() => setSaleOnly(!saleOnly)}>Sale only</button><button className="border-0 bg-transparent px-2 py-2 text-ink/50 underline underline-offset-4" onClick={() => { setSaleOnly(false); setCategory("All pieces"); }}>Clear filters</button></div>}
      <ProductGrid products={filtered} onAdd={onAdd} onSelect={onSelect} />
    </main>
  );
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [cart, setCart] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviews, setReviews] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(reviewStorageKey) || "[]");
    } catch {
      return [];
    }
  });
  const [contactProduct, setContactProduct] = useState(null);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(reviewStorageKey, JSON.stringify(reviews));
  }, [reviews]);

  const addToCart = (product) => { setCart((items) => [...items, product]); setBagOpen(true); };
  const openContact = (product) => {
    setSelectedProduct(null);
    setContactProduct(product);
    navigate("/contact");
  };
  const submitReview = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setReviews((items) => [{ name: formData.get("name"), rating: Number(formData.get("rating")), comment: formData.get("comment") }, ...items]);
    event.currentTarget.reset();
  };
  const page = path === "/shop" ? <ShopPage onAdd={addToCart} onSelect={setSelectedProduct} /> : path === "/about" ? <About reviews={reviews} onSubmitReview={submitReview} onNavigate={navigate} /> : path === "/contact" ? <Contact product={contactProduct} /> : path === "/sale" ? <SalePage onAdd={addToCart} onSelect={setSelectedProduct} /> : <><Hero onNavigate={navigate} onAdd={addToCart} /><HomeExtras onNavigate={navigate} part="before" /><ProductGrid products={products} onAdd={addToCart} onSelect={setSelectedProduct} /><HomeExtras onNavigate={navigate} part="after" /><About preview onNavigate={navigate} /></>;

  return (
    <div className="site-shell">
      <Header cartCount={cart.length} onNavigate={navigate} currentPath={path} filterOpen={filterOpen} onToggleFilter={() => setFilterOpen(!filterOpen)} bagOpen={bagOpen} onBagToggle={() => setBagOpen(!bagOpen)} />
      {filterOpen && <GlobalFilter onNavigate={navigate} onClose={() => setFilterOpen(false)} />}
      {page}
      <Footer onNavigate={navigate} />
      {bagOpen && <BagDrawer items={cart} onRemove={(index) => setCart((items) => items.filter((_, itemIndex) => itemIndex !== index))} onClose={() => setBagOpen(false)} />}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onContact={() => openContact(selectedProduct)} />
      <BackToTop />
    </div>
  );
}
