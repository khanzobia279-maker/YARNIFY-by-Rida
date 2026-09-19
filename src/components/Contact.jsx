export default function Contact({ product }) {
	const emailSubject = product ? `Yarnify question about ${product.name}` : "Yarnify enquiry";
	const emailBody = product ? `Hi Yarnify, I would like to ask about the ${product.name}.` : "Hi Yarnify, I would like to ask about a handmade piece.";
	const emailLink = `mailto:binte.shahid789@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

	return (
		<main className="contact-page bg-paper px-5 py-16 sm:px-8 md:py-24">
			<section className="mx-auto max-w-3xl border border-line bg-cream px-6 py-12 text-center shadow-[12px_12px_0_rgba(186,94,66,.12)] sm:px-12 md:py-16">
				<img src="/images/favicon.png" alt="Yarnify" className="mx-auto h-20 w-20 rounded-full object-cover" />
				<p className="eyebrow mt-8">Contact Yarnify</p>
				<h1 className="type-display-xl">Let’s make<br /><em className="text-clay">something lovely.</em></h1>
				<p className="mx-auto mt-6 max-w-md text-sm leading-7 text-ink/60">For custom crochet, questions, orders, or just a hello, reach us through any of these links.</p>
				{product && <div className="contact-handoff mx-auto mt-8 flex max-w-sm items-center gap-3 border border-clay/25 bg-white/60 p-3 text-left"><img src={product.image} alt="" className="h-14 w-14 object-cover" /><div><p className="font-mono text-[9px] uppercase tracking-[.1em] text-clay">You’re asking about</p><strong className="text-sm text-ink">{product.name}</strong></div></div>}
				<div className="mx-auto mt-10 grid max-w-sm gap-3 text-left">
					<a className="contact-link" href={emailLink}><span>✉</span><strong>Email us</strong><small>{product ? "Ask about this piece" : "binte.shahid789@gmail.com"}</small><b>↗</b></a>
					<a className="contact-link" href="https://www.instagram.com/rida_cr0chet988" target="_blank" rel="noreferrer"><span>◎</span><strong>Instagram</strong><small>@rida_cr0chet988</small><b>↗</b></a>
					<a className="contact-link" href="https://www.tiktok.com/@rida_crochet988" target="_blank" rel="noreferrer"><span>♪</span><strong>TikTok</strong><small>@rida_crochet988</small><b>↗</b></a>
					<a className="contact-link" href="https://www.youtube.com/@yarnify988" target="_blank" rel="noreferrer"><span>▶</span><strong>YouTube</strong><small>@yarnify988</small><b>↗</b></a>
				</div>
			</section>
		</main>
	);
}
