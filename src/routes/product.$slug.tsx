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
  Share2,
  Check,
  ShoppingBag,
} from "lucide-react";
import {
  getProduct,
  productReviews,
  relatedProducts,
  sizesFor,
  specsFor,
} from "@/data/products";
import { RazorpayButton } from "@/components/RazorpayButton";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.title} — GOKI.LAB ${p.category}` : "Drop — GOKI.LAB";
    const description = p
      ? `${p.desc} Limited ${p.drop} release from GOKI.LAB — original anime & gaming artwork, numbered run of ${p.edition}.`
      : "Limited-edition anime and gaming drop from GOKI.LAB.";
    const url = `https://cockroches.lovable.app/product/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                name: p.title,
                description: p.story,
                category: p.category,
                brand: { "@type": "Brand", name: "GOKI.LAB" },
                offers: {
                  "@type": "Offer",
                  price: p.price,
                  priceCurrency: "INR",
                  url,
                  availability: "https://schema.org/InStock",
                },
              }),
            },
          ]
        : undefined,
    };
  },
  notFoundComponent: () => (
    <div className="min-h-dvh grid place-items-center bg-void text-paper px-4 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-cyber">404</p>
        <h1 className="mt-3 font-display font-bold text-4xl uppercase">Drop not found</h1>
        <Link to="/" className="mt-6 inline-block rounded-xl bg-plasma px-6 py-3 text-sm font-bold hover:bg-cyber hover:text-void transition">
          Back to shop
        </Link>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const sizes = sizesFor(product.kind);
  const specs = specsFor(product.kind);
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState(1);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [wished, setWished] = useState(false);
  const related = useMemo(() => relatedProducts(product.slug), [product.slug]);

  const unitPrice = product.price + sizes[size].priceMod;
  const total = unitPrice * qty;
  const avgStars = (
    productReviews.reduce((a, r) => a + r.stars, 0) / productReviews.length
  ).toFixed(1);
  const isFlat = product.kind !== "sticker";

  return (
    <div className="min-h-dvh bg-void text-paper font-sans antialiased selection:bg-plasma selection:text-paper">
      <header className="sticky top-0 z-40 border-b border-plasma/20 bg-void/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold hover:text-cyber transition">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-plasma font-display text-lg font-bold">ゴ</span>
            <span className="font-display text-base font-bold">GOKI<span className="text-cyber">.LAB</span></span>
          </Link>
          <button aria-label="Share this drop" className="grid h-10 w-10 place-items-center rounded-xl hover:bg-plasma/20 transition">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-10">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-widest text-mist/70">
          <Link to="/" className="hover:text-cyber">Shop</Link> / {product.category} / <span className="text-paper">{product.title}</span>
        </nav>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square rounded-3xl border border-plasma/30 bg-gradient-to-br from-abyss to-deep/30 grid place-items-center overflow-hidden">
              <span className={`${product.accent} absolute top-4 left-4 z-10 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full px-2.5 py-1`}>
                {product.tag}
              </span>
              <button
                onClick={() => setWished((w) => !w)}
                aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
                className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-void/70 backdrop-blur hover:bg-magenta hover:text-void transition"
              >
                <Heart className={`h-4 w-4 ${wished ? "fill-magenta text-magenta" : ""}`} />
              </button>
              <img
                src={product.gallery[activeImg]}
                alt={product.title}
                width={1024}
                height={1024}
                fetchPriority="high"
                className={isFlat && activeImg === 0 ? "h-full w-full object-cover" : "w-2/3 max-w-md sticker-shadow transition duration-500"}
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.gallery.map((g: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-2xl border grid place-items-center bg-abyss overflow-hidden transition ${
                    activeImg === i ? "border-cyber" : "border-plasma/25 hover:border-plasma"
                  }`}
                  aria-label={`View image ${i + 1} of ${product.title}`}
                >
                  <img src={g} alt="" loading="lazy" width={1024} height={1024} className={isFlat && i === 0 ? "h-full w-full object-cover" : "w-2/3"} />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-cyber">{product.drop} · {product.category}</p>
            <h1 className="mt-2 font-display font-bold text-4xl sm:text-6xl uppercase leading-[0.92]">{product.title}</h1>
            <p className="mt-2 font-mono text-sm text-mist/70">{product.jp}</p>

            <div className="mt-4 flex items-center gap-3 text-sm">
              <div className="flex text-cyber">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(Number(avgStars)) ? "fill-current" : ""}`} />
                ))}
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-mist">
                {avgStars} · {productReviews.length} reviews
              </span>
            </div>

            <p className="mt-5 text-lg text-mist">{product.story}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display font-bold text-4xl">₹{unitPrice}</span>
              <span className="text-sm text-mist/60 line-through">₹{product.mrp + sizes[size].priceMod}</span>
              <span className="text-xs font-mono uppercase tracking-widest text-magenta">
                Save ₹{product.mrp - product.price}
              </span>
            </div>

            {/* Edition meter */}
            <div className="mt-6 rounded-2xl border border-plasma/30 bg-abyss p-4">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-mist">
                <span>Edition of {product.edition}</span>
                <span className="text-cyber">{product.remaining} left</span>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-plasma/20 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-plasma to-cyber" style={{ width: `${Math.round((product.remaining / product.edition) * 100)}%` }} />
              </div>
              <p className="mt-3 text-xs text-mist/70">Retired permanently once the run sells out. No reprints.</p>
            </div>

            {/* Size */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-widest">
                  {product.kind === "collectible" ? "Bundle" : "Size"} · {sizes[size].dim}
                </p>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {sizes.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setSize(i)}
                    aria-pressed={size === i}
                    className={`rounded-2xl border py-3 text-center transition ${
                      size === i ? "border-cyber bg-cyber text-void" : "border-plasma/30 text-mist hover:border-plasma hover:text-paper"
                    }`}
                  >
                    <p className="font-display font-bold text-xl leading-none">{s.label}</p>
                    <p className="mt-1 text-[10px] font-mono uppercase tracking-widest opacity-75">{s.dim}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-widest">Quantity</p>
              <div className="mt-3 flex items-center gap-4">
                <div className="inline-flex items-center rounded-xl border border-plasma/40">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="grid h-11 w-11 place-items-center rounded-l-xl hover:bg-plasma transition">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-display font-bold text-xl">{qty}</span>
                  <button onClick={() => setQty((q) => Math.min(99, q + 1))} aria-label="Increase quantity" className="grid h-11 w-11 place-items-center rounded-r-xl hover:bg-plasma transition">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-mist">Total <span className="font-display font-bold text-paper text-lg">₹{total}</span></span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 space-y-3">
              <button
                onClick={() => {
                  setAdded(true);
                  setTimeout(() => setAdded(false), 2000);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-plasma py-4 font-bold hover:bg-cyber hover:text-void transition glow-plasma"
              >
                {added ? <><Check className="h-4 w-4" /> Added to cart</> : <><ShoppingBag className="h-4 w-4" /> Add to Cart · ₹{total}</>}
              </button>
              <div className="rounded-2xl border border-dashed border-plasma/40 bg-abyss p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-mist">Buy now · secure payment</p>
                <div className="mt-3 flex justify-center">
                  <RazorpayButton />
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-plasma/30 px-4 py-3">
                <ShieldCheck className="h-5 w-5 text-cyber" />
                <span className="font-bold text-sm">Secure Checkout</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-plasma/30 px-4 py-3">
                <Truck className="h-5 w-5 text-cyber" />
                <span className="font-bold text-sm">Ships in 48 hrs</span>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-plasma/25 bg-abyss p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-cyber">Specs</p>
              <ul className="mt-3 grid grid-cols-2 gap-3 text-sm text-mist">
                {specs.map((s) => (
                  <li key={s} className="flex items-center gap-2"><Check className="h-4 w-4 text-cyber shrink-0" /> {s}</li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-[11px] font-mono text-mist/60 leading-relaxed">
              NOTE — Original artwork by GOKI.LAB. Not affiliated with, licensed by, or endorsed by any anime studio, game publisher, or franchise.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-plasma/20 bg-abyss">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cyber">Reviews</p>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl uppercase leading-[0.95]">Verified Drops.</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex text-cyber">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-mist">{avgStars} / 5 · verified buyers</span>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productReviews.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-2xl border border-plasma/25 bg-void p-6">
                <div className="flex text-cyber">
                  {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-5 border-t border-plasma/20 pt-4">
                  <p className="font-bold">{r.name}</p>
                  <p className="text-xs font-mono uppercase tracking-wider text-mist/70">{r.role}</p>
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
            <p className="font-mono text-xs uppercase tracking-widest text-cyber">Same collection</p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl uppercase leading-[0.95]">More {product.category}.</h2>
          </div>
          <Link to="/" className="text-sm font-bold text-cyber hover:text-paper transition">View all drops →</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.id}
              to="/product/$slug"
              params={{ slug: p.slug }}
              className="group relative rounded-2xl border border-plasma/25 bg-abyss p-4 transition duration-300 hover:-translate-y-1.5 hover:border-cyber/60"
            >
              <span className={`${p.accent} absolute top-3 left-3 z-10 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full px-2.5 py-1`}>
                {p.tag}
              </span>
              <div className="relative grid place-items-center h-52 rounded-xl bg-gradient-to-br from-void to-deep/40 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className={`transition duration-500 group-hover:scale-110 ${p.kind === "sticker" ? "w-36 sticker-shadow group-hover:-rotate-6" : "h-full w-full object-cover"}`} />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-bold uppercase text-lg leading-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-mist">{p.desc}</p>
                </div>
                <p className="font-display font-bold text-xl">₹{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
