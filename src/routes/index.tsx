import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  Instagram,
  Sparkles,
  ShieldCheck,
  Truck,
  Star,
  ArrowRight,
  Zap,
  Gamepad2,
  Timer,
  X,
} from "lucide-react";
import mecha from "@/assets/goki-mecha.png";
import kaiju from "@/assets/goki-kaiju.png";
import pixel from "@/assets/goki-pixel.png";
import magical from "@/assets/goki-magical.png";
import deskmat from "@/assets/goki-deskmat.jpg";
import collectibles from "@/assets/goki-collectibles.jpg";
import { products, categories, productReviews } from "@/data/products";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GOKI.LAB — Anime & Gaming Stickers, Desk Mats, Collectibles" },
      {
        name: "description",
        content:
          "Limited-edition anime and gaming drops from GOKI.LAB: holographic die-cut stickers, XL desk mats, enamel pins and collectibles built around one unkillable mascot.",
      },
      { property: "og:title", content: "GOKI.LAB — Anime & Gaming Drop Shop" },
      {
        property: "og:description",
        content:
          "Holo anime stickers, arcade gaming die-cuts, XL desk mats and numbered collectibles. Limited drops. Infinite lives.",
      },
      { property: "og:url", content: "https://cockroches.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cockroches.lovable.app/" }],
  }),
});

const collectionCards = [
  { name: "Anime Die-Cuts", jp: "アニメ", img: magical, count: 10, href: "Anime" },
  { name: "Gaming Stickers", jp: "ゲーム", img: pixel, count: 12, href: "Gaming" },
  { name: "XL Desk Mats", jp: "デスクマット", img: deskmat, count: 6, href: "Desk Mats" },
  { name: "Collectibles", jp: "グッズ", img: collectibles, count: 8, href: "Collectibles" },
];

function Index() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const visible = useMemo(() => {
    let list = products.filter((p) => cat === "All" || p.category === cat);
    if (q.trim()) {
      const needle = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(needle) ||
          p.desc.toLowerCase().includes(needle) ||
          p.category.toLowerCase().includes(needle),
      );
    }
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rare") list = [...list].sort((a, b) => a.remaining - b.remaining);
    return list;
  }, [cat, q, sort]);

  const toggleWish = (slug: string) =>
    setWishlist((w) => (w.includes(slug) ? w.filter((s) => s !== slug) : [...w, slug]));

  return (
    <div className="min-h-dvh bg-void text-paper font-sans antialiased selection:bg-plasma selection:text-paper">
      {/* Announcement */}
      <div className="border-b border-plasma/25 bg-abyss text-[11px] sm:text-xs font-mono uppercase tracking-widest overflow-hidden">
        <div className="flex whitespace-nowrap anim-marquee py-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 px-4 text-mist">
              <span>Drop 03 · Final Form — live now</span>
              <span className="text-cyber">◆</span>
              <span>Free shipping over ₹999</span>
              <span className="text-magenta">◆</span>
              <span>Numbered limited editions · never restocked</span>
              <span className="text-plasma">◆</span>
              <span>#GOKILAB</span>
              <span className="text-cyber">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-plasma/20 bg-void/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-plasma text-paper font-display text-lg font-bold">ゴ</span>
            <span className="font-display text-base font-bold leading-none tracking-tight">
              GOKI<span className="text-cyber">.LAB</span>
              <span className="block text-[9px] font-mono font-normal tracking-[0.25em] text-mist">ANIME · GAMING</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-mist">
            <a href="#shop" className="hover:text-cyber transition">Shop</a>
            <a href="#drops" className="hover:text-cyber transition">Drops</a>
            <a href="#collections" className="hover:text-cyber transition">Collections</a>
            <a href="#quality" className="hover:text-cyber transition">Quality</a>
            <a href="#lore" className="hover:text-cyber transition">Lore</a>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => setSearchOpen((s) => !s)} aria-label="Search" className="grid h-10 w-10 place-items-center rounded-xl hover:bg-plasma/20 transition">
              {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
            </button>
            <a href="#shop" aria-label={`Wishlist (${wishlist.length})`} className="relative grid h-10 w-10 place-items-center rounded-xl hover:bg-plasma/20 transition">
              <Heart className="h-4 w-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-magenta text-void text-[10px] font-bold px-1">{wishlist.length}</span>
              )}
            </a>
            <a href="#shop" aria-label={`Cart (${cartCount})`} className="relative grid h-10 w-10 place-items-center rounded-xl bg-plasma text-paper hover:bg-cyber hover:text-void transition">
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-cyber text-void text-[10px] font-bold px-1">{cartCount}</span>
              )}
            </a>
            <button onClick={() => setMenuOpen((m) => !m)} aria-label="Menu" className="md:hidden grid h-10 w-10 place-items-center rounded-xl hover:bg-plasma/20">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-plasma/20 bg-abyss px-4 py-3 sm:px-6 lg:px-10">
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search kaiju, keycaps, desk mats…"
              aria-label="Search products"
              className="w-full rounded-xl border border-plasma/40 bg-void px-4 py-3 text-sm text-paper placeholder:text-mist/60 outline-none focus:border-cyber"
            />
          </div>
        )}

        {menuOpen && (
          <nav className="md:hidden border-t border-plasma/20 bg-abyss px-4 py-4 flex flex-col gap-3 text-sm font-medium text-mist">
            {["shop", "drops", "collections", "quality", "lore"].map((h) => (
              <a key={h} href={`#${h}`} onClick={() => setMenuOpen(false)} className="capitalize hover:text-cyber">{h}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_15%,#4f46e540,transparent_55%),radial-gradient(circle_at_85%_70%,#67e8f925,transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyber/40 bg-cyber/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-cyber">
                <span className="h-1.5 w-1.5 rounded-full bg-cyber animate-pulse" />
                Drop 03 · Final Form · live
              </div>
              <h1 className="mt-5 font-display font-bold uppercase leading-[0.9] tracking-tight text-[2.9rem] sm:text-[4.5rem] lg:text-[5.75rem]">
                Limited<br />
                <span className="text-cyber">Drops.</span><br />
                Infinite <span className="relative inline-block">
                  <span className="relative z-10">Lives.</span>
                  <span className="absolute inset-x-0 bottom-1.5 h-3 sm:h-4 bg-plasma -z-0" />
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-base sm:text-lg text-mist">
                Anime and gaming culture, filtered through one unkillable mascot. Holographic die-cut stickers, XL desk mats, enamel pins and numbered collectibles — produced in small runs and never restocked.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#shop" className="group inline-flex items-center gap-3 rounded-xl bg-plasma px-6 py-3.5 text-sm font-bold hover:bg-cyber hover:text-void transition glow-plasma">
                  Shop The Drop
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a href="#collections" className="inline-flex items-center gap-3 rounded-xl border border-plasma/50 px-6 py-3.5 text-sm font-bold text-mist hover:border-cyber hover:text-cyber transition">
                  Browse Collections
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono uppercase tracking-wider text-mist/70">
                <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-cyber" /> Holo laminate</span>
                <span className="flex items-center gap-2"><Gamepad2 className="h-3.5 w-3.5 text-cyber" /> Gamer-grade mats</span>
                <span className="flex items-center gap-2"><Timer className="h-3.5 w-3.5 text-cyber" /> Numbered runs</span>
              </div>
            </div>

            <div className="relative h-[380px] sm:h-[520px]">
              <div className="absolute inset-0 rounded-[2rem] border border-plasma/30 bg-abyss/40 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-cyber/10 to-transparent anim-scan" />
              </div>
              <img src={mecha} alt="Roach-7 Mecha Pilot holographic anime sticker" fetchPriority="high" width={1024} height={1024} className="absolute top-2 left-4 w-44 sm:w-64 sticker-shadow anim-float-a" />
              <img src={kaiju} alt="" width={1024} height={1024} loading="lazy" className="absolute top-28 right-0 w-40 sm:w-56 sticker-shadow anim-float-b" />
              <img src={pixel} alt="" width={1024} height={1024} loading="lazy" className="absolute bottom-4 left-14 w-36 sm:w-48 sticker-shadow anim-float-c" />
              <img src={magical} alt="" width={1024} height={1024} loading="lazy" className="absolute bottom-16 right-8 w-32 sm:w-44 sticker-shadow anim-float-a" />
            </div>
          </div>
        </div>

        <div className="border-y border-plasma/25 bg-abyss overflow-hidden">
          <div className="flex whitespace-nowrap anim-marquee py-4 font-display font-bold uppercase text-2xl sm:text-4xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-8 px-4">
                <span>Peel</span><span className="text-cyber">✦</span>
                <span>Stick</span><span className="text-magenta">✦</span>
                <span>Respawn</span><span className="text-plasma">✦</span>
                <span>GOKI.LAB</span><span className="text-cyber">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drops */}
      <section id="drops" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-cyber">01 / Drop System</p>
        <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl uppercase leading-[0.95]">
          Small Runs. <span className="text-plasma">No Restocks.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-mist">
          Every design belongs to a numbered drop. When the run sells out, it retires — art is archived, never reprinted. That is the whole model.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { n: "Drop 01", t: "Neo-Tokyo", d: "Mecha pilots, kaiju skylines, cyber antennae. Rain-slick indigo everywhere.", s: "Sold out · archived" },
            { n: "Drop 02", t: "Continue?", d: "Arcade era. Pixel sprites, CRT scanlines, coin-op badges and desk mats.", s: "Low stock" },
            { n: "Drop 03", t: "Final Form", d: "Shonen power-ups, shinobi foils, artisan keycaps and the chase pin.", s: "Live now" },
          ].map((d) => (
            <div key={d.n} className="rounded-2xl border border-plasma/30 bg-abyss p-6 hover:border-cyber/60 transition">
              <p className="font-mono text-[11px] uppercase tracking-widest text-mist">{d.n}</p>
              <h3 className="mt-2 font-display font-bold uppercase text-2xl">{d.t}</h3>
              <p className="mt-2 text-sm text-mist">{d.d}</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-plasma/20 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-cyber">
                <Zap className="h-3 w-3" /> {d.s}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="border-y border-plasma/20 bg-abyss">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cyber">02 / Catalogue</p>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl uppercase leading-[0.95]">
                Everything In <span className="text-magenta">Stock.</span>
              </h2>
            </div>
            <label className="text-sm text-mist">
              <span className="sr-only">Sort products</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl border border-plasma/40 bg-void px-4 py-2.5 text-sm text-paper outline-none focus:border-cyber"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="rare">Rarest first</option>
              </select>
            </label>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-widest transition ${
                  cat === c ? "bg-cyber text-void" : "border border-plasma/40 text-mist hover:border-cyber hover:text-cyber"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-mist/70">{visible.length} products</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <article key={p.id} className="group relative flex flex-col rounded-2xl border border-plasma/25 bg-void p-4 transition duration-300 hover:-translate-y-1.5 hover:border-cyber/60 hover:glow-plasma">
                <div className="absolute top-3 left-3 z-10">
                  <span className={`${p.accent} text-[10px] font-mono font-bold uppercase tracking-widest rounded-full px-2.5 py-1`}>{p.tag}</span>
                </div>
                <button
                  onClick={() => toggleWish(p.slug)}
                  aria-label={`${wishlist.includes(p.slug) ? "Remove" : "Add"} ${p.title} ${wishlist.includes(p.slug) ? "from" : "to"} wishlist`}
                  className="absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-abyss/80 backdrop-blur hover:bg-magenta hover:text-void transition"
                >
                  <Heart className={`h-4 w-4 ${wishlist.includes(p.slug) ? "fill-magenta text-magenta" : ""}`} />
                </button>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="block">
                  <div className="relative grid place-items-center h-52 rounded-xl bg-gradient-to-br from-abyss to-deep/40 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className={`transition duration-500 group-hover:scale-110 ${p.kind === "sticker" ? "w-36 sticker-shadow group-hover:-rotate-6" : "h-full w-full object-cover"}`}
                    />
                  </div>
                </Link>
                <div className="mt-4 flex flex-1 flex-col">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-mist/70">{p.category} · {p.jp}</p>
                  <div className="mt-1.5 flex items-start justify-between gap-3">
                    <h3 className="font-display font-bold uppercase text-lg leading-tight">
                      <Link to="/product/$slug" params={{ slug: p.slug }} className="hover:text-cyber transition">{p.title}</Link>
                    </h3>
                    <div className="shrink-0 text-right">
                      <p className="font-display font-bold text-xl">₹{p.price}</p>
                      <p className="text-[11px] text-mist/60 line-through">₹{p.mrp}</p>
                    </div>
                  </div>
                  <p className="mt-1.5 text-sm text-mist">{p.desc}</p>

                  <div className="mt-4">
                    <div className="h-1 w-full rounded-full bg-plasma/20 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-plasma to-cyber" style={{ width: `${Math.round((p.remaining / p.edition) * 100)}%` }} />
                    </div>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-mist/70">
                      {p.remaining} of {p.edition} left · {p.drop}
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Link
                      to="/product/$slug"
                      params={{ slug: p.slug }}
                      className="flex-1 text-center rounded-xl bg-plasma py-2.5 text-sm font-bold hover:bg-cyber hover:text-void transition"
                    >
                      View Drop
                    </Link>
                    <button
                      onClick={() => setCartCount((c) => c + 1)}
                      aria-label={`Add ${p.title} to cart`}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-plasma/40 hover:border-cyber hover:text-cyber transition"
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-16 text-center font-mono text-sm uppercase tracking-widest text-mist">
              No drops match that search. Try "kaiju" or "keycap".
            </p>
          )}
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-cyber">03 / Collections</p>
        <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl uppercase leading-[0.95]">Pick Your Class.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collectionCards.map((c) => (
            <button
              key={c.name}
              onClick={() => {
                setCat(c.href);
                setQ("");
              }}
              className="group text-left rounded-2xl border border-plasma/25 bg-abyss overflow-hidden hover:border-cyber/60 transition"
            >
              <div className="relative h-40 grid place-items-center bg-gradient-to-br from-deep/50 to-void overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-mist/70">{c.jp}</p>
                <h3 className="mt-1 font-display font-bold uppercase text-lg">{c.name}</h3>
                <p className="mt-1 text-sm text-mist">{c.count} designs</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-cyber">Browse <ArrowRight className="h-3.5 w-3.5" /></span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="border-y border-plasma/20 bg-abyss">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-cyber">04 / Build Quality</p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl uppercase leading-[0.95]">
              Made To <span className="text-cyber">Outlive</span> Your Setup.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "5-year outdoor vinyl", d: "Waterproof, UV-stable, dishwasher-survivable. Tested on bottles, boards and bumper panels." },
                { t: "Holographic laminate", d: "Rainbow refractor and chrome finishes that shift under RGB lighting." },
                { t: "Stitched desk mats", d: "4mm rubber base, micro-woven cloth top, anti-fray stitched perimeter." },
                { t: "Convention-grade metal", d: "Hard enamel, polished plating, double clutch backs and numbered cards." },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl border border-plasma/30 bg-void p-5">
                  <h3 className="font-display font-bold uppercase text-base">{f.t}</h3>
                  <p className="mt-2 text-sm text-mist">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img src={deskmat} alt="Neo Goki City XL gaming desk mat on a dark RGB-lit desk" loading="lazy" width={1200} height={912} className="rounded-2xl border border-plasma/30 object-cover h-full w-full" />
            <img src={collectibles} alt="Collectible enamel pins and acrylic keychains of the Goki mascot" loading="lazy" width={1200} height={912} className="rounded-2xl border border-plasma/30 object-cover h-full w-full" />
          </div>
        </div>
      </section>

      {/* Lore */}
      <section id="lore" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-cyber">05 / Lore</p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl uppercase leading-[0.95]">
              One<br />Unkillable<br /><span className="text-magenta">Mascot</span>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-lg leading-relaxed text-mist">
            <p>
              GOKI.LAB is an independent art studio built around a single character: a cockroach that refuses to be deleted from the save file. He has been a mecha pilot, a magical girl, a kaiju, a shinobi and a 3am ranked grinder.
            </p>
            <p>
              Every design is original artwork drawn in-house, printed in small numbered runs, and archived when it sells out. No licensed characters, no reprints, no dead stock — just drops for people who take their desk setup and their fandoms seriously.
            </p>
            <div className="rounded-2xl border border-plasma/30 bg-abyss p-5 text-sm font-mono text-mist/80">
              <span className="text-cyber font-bold">NOTE —</span> All artwork is original and created by GOKI.LAB. We are not affiliated with, licensed by, or endorsed by any anime studio, game publisher, or franchise. Any resemblance to existing series is parody and homage.
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-plasma/20 bg-abyss">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cyber">06 / Reviews</p>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl uppercase leading-[0.95]">Verified Drops.</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex text-cyber">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-mist">4.9 / 5 · 2,400+ orders</span>
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

      {/* Trust */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 grid gap-4 sm:grid-cols-3">
        {[
          { icon: ShieldCheck, t: "Secure checkout", d: "Encrypted payments via Razorpay" },
          { icon: Truck, t: "Ships in 48 hours", d: "Tracked delivery across India" },
          { icon: Sparkles, t: "Print guarantee", d: "Misprint? We reship, no questions" },
        ].map((f) => (
          <div key={f.t} className="flex items-center gap-4 rounded-2xl border border-plasma/25 bg-abyss px-5 py-4">
            <f.icon className="h-6 w-6 text-cyber shrink-0" />
            <div>
              <p className="font-bold text-sm">{f.t}</p>
              <p className="text-xs text-mist">{f.d}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-plasma/25 bg-abyss">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-plasma font-display text-lg font-bold">ゴ</span>
                <span className="font-display text-lg font-bold">GOKI<span className="text-cyber">.LAB</span></span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-mist">
                Independent anime and gaming art studio. Limited drops of holographic stickers, XL desk mats, pins and collectibles — all original artwork, all numbered runs.
              </p>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl border border-plasma/40 px-4 py-2.5 text-sm font-bold hover:border-cyber hover:text-cyber transition">
                <Instagram className="h-4 w-4" /> @goki.lab
              </a>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-cyber">Shop</p>
                <ul className="mt-3 space-y-2 text-mist">
                  <li><a href="#shop" className="hover:text-paper">Anime stickers</a></li>
                  <li><a href="#shop" className="hover:text-paper">Gaming stickers</a></li>
                  <li><a href="#shop" className="hover:text-paper">Desk mats</a></li>
                  <li><a href="#shop" className="hover:text-paper">Collectibles</a></li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-cyber">Studio</p>
                <ul className="mt-3 space-y-2 text-mist">
                  <li><a href="#lore" className="hover:text-paper">Lore</a></li>
                  <li><a href="#drops" className="hover:text-paper">Drop system</a></li>
                  <li><a href="#quality" className="hover:text-paper">Materials</a></li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-cyber">Support</p>
                <ul className="mt-3 space-y-2 text-mist">
                  <li><a href="#quality" className="hover:text-paper">Shipping</a></li>
                  <li><a href="#quality" className="hover:text-paper">Returns</a></li>
                  <li><a href="mailto:hello@goki.lab" className="hover:text-paper">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-plasma/20 pt-6 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-mist/60">
            <p>© {new Date().getFullYear()} GOKI.LAB · Original artwork</p>
            <p>Not affiliated with any anime studio or game publisher</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
