import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  Star,
  Droplets,
  Sun,
  Sparkles,
  Share2,
} from "lucide-react";
import {
  getProduct,
  productReviews,
  relatedProducts,
  sizes,
} from "@/data/products";
import { RazorpayButton } from "@/components/RazorpayButton";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.title} — Main Bhi Cockroach Art` : "Sticker — Main Bhi Cockroach Art";
    const description = p?.desc ?? "Premium independent satirical vinyl sticker.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                name: p.title,
                description: p.story,
                brand: { "@type": "Brand", name: "Main Bhi Cockroach Art" },
                offers: {
                  "@type": "Offer",
                  price: p.price,
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
              }),
            },
          ]
        : undefined,
    };
  },
  notFoundComponent: () => (
    <div className="min-h-dvh grid place-items-center bg-paper text-ink px-4 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-signal">404</p>
        <h1 className="mt-3 font-display text-4xl uppercase">Sticker not found</h1>
        <Link to="/" className="mt-6 inline-block rounded-full bg-ink text-paper px-6 py-3 text-sm font-bold hover:bg-signal transition">
          Back to shop
        </Link>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState(1); // M
  const [qty, setQty] = useState(1);
  const related = useMemo(() => relatedProducts(product.slug), [product.slug]);

  const unitPrice = product.price + sizes[size].priceMod;
  const total = unitPrice * qty;
  const avgStars = (
    productReviews.reduce((a, r) => a + r.stars, 0) / productReviews.length
  ).toFixed(1);

  return (
    <div className="min-h-dvh bg-paper text-ink font-sans antialiased selection:bg-neon selection:text-ink">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold hover:text-signal">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-neon font-display text-lg">M</span>
            <span className="font-display text-sm leading-none">
              MAIN BHI<br />
              <span className="text-signal">COCKROACH<span className="text-ink">.ART</span></span>
            </span>
          </Link>
          <button aria-label="Share" className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
          <Link to="/" className="hover:text-signal">Shop</Link> / {product.title}
        </p>
      </div>

      {/* Product */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square rounded-3xl border-2 border-ink bg-gradient-to-br from-fog to-paper grid place-items-center overflow-hidden">
              <span className={`${product.accent} absolute top-4 left-4 text-ink text-[10px] font-mono font-bold uppercase tracking-widest rounded-full px-2.5 py-1`}>
                {product.tag}
              </span>
              <button aria-label="Wishlist" className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-paper/80 backdrop-blur hover:bg-signal hover:text-paper transition">
                <Heart className="h-4 w-4" />
              </button>
              <img
                src={product.gallery[activeImg]}
                alt={product.title}
                className="w-2/3 max-w-md sticker-shadow transition duration-500"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.gallery.map((g: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-2xl border-2 grid place-items-center bg-fog transition ${
                    activeImg === i ? "border-signal" : "border-ink/15 hover:border-ink"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={g} alt="" className="w-2/3" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-signal">Independent Artwork</p>
            <h1 className="mt-2 font-display text-4xl sm:text-6xl uppercase leading-[0.95]">{product.title}</h1>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <div className="flex text-signal">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(Number(avgStars)) ? "fill-current" : ""}`} />
                ))}
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
                {avgStars} · {productReviews.length} reviews
              </span>
            </div>
            <p className="mt-5 text-lg text-ink/70">{product.story}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl">₹{unitPrice}</span>
              <span className="text-sm text-ink/50 line-through">₹{unitPrice + 50}</span>
              <span className="text-xs font-mono uppercase tracking-widest text-signal">Save ₹50</span>
            </div>

            {/* Size selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-widest">Size · {sizes[size].dim}</p>
                <button className="text-xs font-mono uppercase tracking-widest text-ink/50 hover:text-signal">Size guide</button>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {sizes.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setSize(i)}
                    className={`rounded-2xl border-2 py-3 text-center transition ${
                      size === i ? "border-ink bg-ink text-paper" : "border-ink/20 hover:border-ink"
                    }`}
                  >
                    <p className="font-display text-xl leading-none">{s.label}</p>
                    <p className="mt-1 text-[10px] font-mono uppercase tracking-widest opacity-70">{s.dim}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-widest">Quantity</p>
              <div className="mt-3 flex items-center gap-4">
                <div className="inline-flex items-center rounded-full border-2 border-ink">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease"
                    className="grid h-11 w-11 place-items-center hover:bg-ink hover:text-paper transition rounded-l-full"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-display text-xl">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    aria-label="Increase"
                    className="grid h-11 w-11 place-items-center hover:bg-ink hover:text-paper transition rounded-r-full"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-ink/60">Total <span className="font-display text-ink text-lg">₹{total}</span></span>
              </div>
            </div>

            {/* CTA + Razorpay */}
            <div className="mt-8 space-y-3">
              <button className="w-full rounded-full bg-ink text-paper py-4 font-bold hover:bg-signal transition">
                Add to Cart · ₹{total}
              </button>
              <div className="rounded-2xl border-2 border-dashed border-ink/25 bg-fog/60 p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
                  Buy now · secure payment
                </p>
                <div className="mt-3 flex justify-center">
                  <RazorpayButton />
                </div>
              </div>
            </div>

            {/* Trust strip */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-2xl border-2 border-ink px-4 py-3">
                <ShieldCheck className="h-5 w-5 text-signal" />
                <span className="font-bold text-sm">Secure Checkout</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border-2 border-ink px-4 py-3">
                <Truck className="h-5 w-5 text-signal" />
                <span className="font-bold text-sm">Ships in 48 hrs</span>
              </div>
            </div>

            {/* Specs */}
            <div className="mt-8 rounded-3xl bg-fog/60 border-2 border-ink/10 p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-signal">Specs</p>
              <ul className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> 5-year vinyl</li>
                <li className="flex items-center gap-2"><Droplets className="h-4 w-4" /> Waterproof</li>
                <li className="flex items-center gap-2"><Sun className="h-4 w-4" /> UV resistant</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Matte laminate</li>
              </ul>
            </div>

            <p className="mt-6 text-[11px] font-mono text-ink/50 leading-relaxed">
              DISCLAIMER — Independent satirical artwork. Not official merchandise. Not affiliated with any political party, campaign, movement or organization.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-ink text-paper grain">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-neon">Reviews</p>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl uppercase leading-[0.95]">
                What The <span className="text-neon">Fans</span> Say
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex text-neon">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="font-mono text-xs uppercase tracking-widest">
                {avgStars} / 5 · verified buyers
              </span>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productReviews.map((r) => (
              <figure key={r.name} className="rounded-3xl bg-paper text-ink p-6 flex flex-col">
                <div className="flex text-signal">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed flex-1">"{r.text}"</blockquote>
                <figcaption className="mt-5 pt-4 border-t border-ink/10">
                  <p className="font-bold">{r.name}</p>
                  <p className="text-xs font-mono uppercase tracking-wider text-ink/60">{r.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-signal">You might also like</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl uppercase leading-[0.95]">More To Stick.</h2>
          </div>
          <Link to="/" className="text-sm font-bold underline underline-offset-4 decoration-signal hover:text-signal">
            View all designs →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.id}
              to="/product/$slug"
              params={{ slug: p.slug }}
              className="group relative rounded-3xl border-2 border-ink p-5 transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
            >
              <span className={`${p.accent} absolute top-4 left-4 text-ink text-[10px] font-mono font-bold uppercase tracking-widest rounded-full px-2.5 py-1`}>
                {p.tag}
              </span>
              <div className="relative grid place-items-center h-56 rounded-2xl bg-gradient-to-br from-fog to-paper overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-40 sticker-shadow transition duration-500 group-hover:scale-110 group-hover:-rotate-6" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display uppercase text-xl leading-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{p.desc}</p>
                </div>
                <p className="font-display text-2xl">₹{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}