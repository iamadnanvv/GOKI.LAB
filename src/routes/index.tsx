import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  Instagram,
  Droplets,
  Sun,
  Sparkles,
  ShieldCheck,
  Truck,
  Star,
  Plus,
  X,
  ArrowRight,
} from "lucide-react";
import roach from "@/assets/sticker-roach.png";
import textSticker from "@/assets/sticker-text.png";
import ballot from "@/assets/sticker-ballot.png";
import fist from "@/assets/sticker-fist.png";
import speech from "@/assets/sticker-speech.png";
import crown from "@/assets/sticker-crown.png";
import laptop from "@/assets/lifestyle-laptop.jpg";
import bottle from "@/assets/lifestyle-bottle.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const products = [
  { id: 1, img: roach, title: "Shady Roach", desc: "For laptops that survive anything.", price: 149, tag: "Bestseller", accent: "bg-neon" },
  { id: 2, img: textSticker, title: "Main Bhi Cockroach", desc: "The one that started the whole mess.", price: 199, tag: "Limited", accent: "bg-signal" },
  { id: 3, img: ballot, title: "Ballot Bug", desc: "Democracy has small feet.", price: 179, tag: "New", accent: "bg-volt" },
  { id: 4, img: fist, title: "Paint The Town", desc: "For quiet rebels with loud brushes.", price: 159, tag: "Fresh", accent: "bg-neon" },
  { id: 5, img: speech, title: "Opinions Included", desc: "A speech bubble for your water bottle.", price: 129, tag: "Popular", accent: "bg-signal" },
  { id: 6, img: crown, title: "King Kachra", desc: "Every empire has its bugs.", price: 229, tag: "Drop 01", accent: "bg-volt" },
];

const collections = [
  { name: "Satirical Icons", count: 12 },
  { name: "Civic Humor", count: 18 },
  { name: "Laptop Stickers", count: 24 },
  { name: "Water Bottle Collection", count: 16 },
  { name: "Phone Stickers", count: 9 },
  { name: "Limited Edition Drops", count: 6 },
];

const reviews = [
  { name: "Ananya R.", role: "Design student, Bengaluru", stars: 5, text: "The print is unreal. Colors pop, edges are clean. My laptop finally has a personality." },
  { name: "Kabir M.", role: "Illustrator, Mumbai", stars: 5, text: "Survived monsoon, coffee spills and airport security. These are the real MVPs." },
  { name: "Sneha P.", role: "Grad student, Delhi", stars: 5, text: "Shipping was quick and the packaging felt like a mini art drop. Chef's kiss." },
  { name: "Rehan K.", role: "Skater, Pune", stars: 5, text: "Stuck one on my board six months ago. Still bright, still sticking, still funny." },
];

function Index() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-dvh bg-paper text-ink font-sans antialiased selection:bg-neon selection:text-ink">
      {/* Announcement bar */}
      <div className="bg-ink text-paper text-[11px] sm:text-xs font-mono uppercase tracking-widest overflow-hidden">
        <div className="flex whitespace-nowrap anim-marquee py-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 px-4">
              <span>Free shipping over ₹499</span>
              <span className="text-neon">●</span>
              <span>Drop 01 — Limited Edition Live</span>
              <span className="text-signal">●</span>
              <span>Independent artwork · not affiliated</span>
              <span className="text-volt">●</span>
              <span>Tag #MainBhiCockroachArt</span>
              <span className="text-neon">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-neon font-display text-lg">M</span>
            <span className="font-display text-sm sm:text-base leading-none">
              MAIN BHI<br /><span className="text-signal">COCKROACH<span className="text-ink">.ART</span></span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#shop" className="hover:text-signal transition">Shop</a>
            <a href="#collections" className="hover:text-signal transition">Collections</a>
            <a href="#quality" className="hover:text-signal transition">Quality</a>
            <a href="#wild" className="hover:text-signal transition">In The Wild</a>
            <a href="#about" className="hover:text-signal transition">About</a>
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <button aria-label="Search" className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5"><Search className="h-4 w-4" /></button>
            <button aria-label="Wishlist" className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5"><Heart className="h-4 w-4" /></button>
            <button aria-label="Cart" className="relative grid h-10 w-10 place-items-center rounded-full bg-ink text-paper">
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-neon text-ink text-[10px] font-bold px-1">
                  {cartCount}
                </span>
              )}
            </button>
            <button aria-label="Menu" className="md:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#ffd60a20,transparent_50%),radial-gradient(circle_at_80%_60%,#7cff4f25,transparent_45%)]" />
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-24 sm:px-6 sm:pt-16 sm:pb-32 lg:px-10 lg:pt-20 lg:pb-40">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-8 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper/70 px-3 py-1 text-[11px] font-mono uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
                Drop 01 · Independent Artwork
              </div>
              <h1 className="mt-5 font-display uppercase leading-[0.88] tracking-tight text-[3rem] sm:text-[5rem] lg:text-[7rem]">
                Art That<br />
                <span className="text-signal">Sticks.</span><br />
                Opinions <span className="relative inline-block">
                  <span className="relative z-10">Included.</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 sm:h-5 bg-neon -z-0" />
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-base sm:text-lg text-ink/70">
                Independent satirical vinyl stickers inspired by modern civic conversations. Designed for creators, students, artists, and people who enjoy bold visual storytelling.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#shop" className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-paper transition hover:bg-signal">
                  Shop Stickers
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a href="#collections" className="inline-flex items-center gap-3 rounded-full border-2 border-ink px-6 py-3.5 text-sm font-bold hover:bg-ink hover:text-paper transition">
                  Explore Collection
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono uppercase tracking-wider text-ink/60">
                <span className="flex items-center gap-2"><Droplets className="h-3.5 w-3.5" /> Waterproof</span>
                <span className="flex items-center gap-2"><Sun className="h-3.5 w-3.5" /> UV Resistant</span>
                <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> Premium Vinyl</span>
              </div>
            </div>

            {/* Floating sticker stage */}
            <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
              <div className="absolute inset-0 rounded-[2rem] border-2 border-dashed border-ink/15" />
              <img src={roach} alt="" width={768} height={768} className="absolute top-4 left-6 w-48 sm:w-60 lg:w-72 sticker-shadow anim-float-a" />
              <img src={textSticker} alt="" width={768} height={768} className="absolute top-24 right-2 w-44 sm:w-56 lg:w-64 sticker-shadow anim-float-b" />
              <img src={ballot} alt="" width={768} height={768} className="absolute bottom-6 left-16 w-40 sm:w-48 lg:w-56 sticker-shadow anim-float-c" />
              <img src={speech} alt="" width={768} height={768} className="absolute bottom-16 right-10 w-36 sm:w-44 lg:w-52 sticker-shadow anim-float-a" />
            </div>
          </div>
        </div>

        {/* Bottom tape */}
        <div className="border-y-2 border-ink bg-ink text-paper overflow-hidden">
          <div className="flex whitespace-nowrap anim-marquee py-4 font-display uppercase text-3xl sm:text-5xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-8 px-4">
                <span>Peel</span><span className="text-neon">✱</span>
                <span>Stick</span><span className="text-signal">✱</span>
                <span>Repeat</span><span className="text-volt">✱</span>
                <span>Main Bhi Cockroach</span><span className="text-neon">✱</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-signal">01 / Mission</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase leading-[0.95]">
              Creative<br />Civic<br />Expression
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-ink/80">
            <p>
              We create original satirical artwork that encourages conversation, creativity, and self-expression. Every sticker is independently illustrated and produced using premium vinyl materials.
            </p>
            <p>
              Our work celebrates artistic freedom and thoughtful commentary while remaining entirely independent from any political organization or campaign.
            </p>
            <div className="mt-8 rounded-2xl border-2 border-dashed border-ink/25 bg-fog/60 p-5 text-sm font-mono text-ink/70">
              <span className="text-signal font-bold">DISCLAIMER —</span> Independent artwork. Not official merchandise. Not affiliated with any political party, movement, campaign, or organization.
            </div>
          </div>
        </div>
      </section>

      {/* Shop grid */}
      <section id="shop" className="bg-ink text-paper grain">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-neon">02 / The Drop</p>
              <h2 className="mt-3 font-display text-4xl sm:text-6xl uppercase leading-[0.95]">
                Stick <span className="text-signal">Different.</span>
              </h2>
            </div>
            <a href="#" className="text-sm font-bold underline underline-offset-4 decoration-neon hover:text-neon">View all 85 designs →</a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.id} className="group relative rounded-3xl bg-paper text-ink p-5 transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                <div className="absolute top-4 left-4 z-10">
                  <span className={`${p.accent} text-ink text-[10px] font-mono font-bold uppercase tracking-widest rounded-full px-2.5 py-1`}>
                    {p.tag}
                  </span>
                </div>
                <button aria-label="Wishlist" className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-paper/80 backdrop-blur hover:bg-signal hover:text-paper transition">
                  <Heart className="h-4 w-4" />
                </button>
                <div className="relative grid place-items-center h-56 rounded-2xl bg-gradient-to-br from-fog to-paper overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={768} height={768} className="w-40 sticker-shadow transition duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                </div>
                <div className="mt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display uppercase text-xl leading-tight">{p.title}</h3>
                      <p className="mt-1 text-sm text-ink/60">{p.desc}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-display text-2xl">₹{p.price}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Vinyl", "Waterproof", "UV-proof"].map((b) => (
                      <span key={b} className="text-[10px] font-mono uppercase tracking-widest rounded-full border border-ink/20 px-2 py-0.5">{b}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <button onClick={() => setCartCount((c) => c + 1)} className="flex-1 rounded-full bg-ink text-paper py-2.5 text-sm font-bold hover:bg-signal transition">
                      Add to Cart
                    </button>
                    <button aria-label="Quick view" className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink hover:bg-neon transition">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-signal">03 / Collections</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl uppercase leading-[0.95]">Pick Your Poison.</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <a key={c.name} href="#" className={`group relative overflow-hidden rounded-3xl border-2 border-ink p-6 min-h-[180px] flex flex-col justify-between transition hover:-translate-y-1 ${
              i % 3 === 0 ? "bg-neon" : i % 3 === 1 ? "bg-volt" : "bg-paper"
            }`}>
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-widest">0{i + 1}</span>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </div>
              <div>
                <h3 className="font-display uppercase text-2xl sm:text-3xl leading-none">{c.name}</h3>
                <p className="mt-2 text-sm text-ink/70">{c.count} designs</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="bg-fog grain">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <img src={laptop} alt="Laptop covered in vinyl stickers" loading="lazy" width={1200} height={900} className="rounded-3xl border-4 border-ink object-cover w-full aspect-[4/3]" />
              <img src={crown} alt="" width={768} height={768} className="hidden sm:block absolute -bottom-8 -left-8 w-32 sticker-shadow rotate-12" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-signal">04 / Made Right</p>
              <h2 className="mt-3 font-display text-4xl sm:text-6xl uppercase leading-[0.95]">
                Premium Vinyl.<br />
                <span className="text-signal">Built To Survive.</span>
              </h2>
              <p className="mt-5 text-lg text-ink/70 max-w-lg">
                Printed on 5-year outdoor vinyl with a matte laminate. Made for laptops, bottles, notebooks, helmets, skateboards and every other surface worth talking about.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: Sparkles, label: "Premium Vinyl" },
                  { icon: Droplets, label: "Waterproof" },
                  { icon: ShieldCheck, label: "Scratch Resistant" },
                  { icon: Sun, label: "Fade Resistant" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3 rounded-2xl bg-paper border-2 border-ink px-4 py-3">
                    <f.icon className="h-5 w-5 text-signal" />
                    <span className="font-bold text-sm">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wild / Instagram */}
      <section id="wild" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-signal">05 / In The Wild</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl uppercase leading-[0.95]">Seen On The Streets.</h2>
            <p className="mt-3 text-ink/70 max-w-md">Tag <span className="font-bold text-ink">#MainBhiCockroachArt</span> to get featured.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-3 text-sm font-bold hover:bg-ink hover:text-paper transition">
            <Instagram className="h-4 w-4" /> Follow @mainbhicockroach.art
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[laptop, bottle, laptop, bottle, laptop, bottle].map((src, i) => (
            <a key={i} href="#" className="group relative block aspect-square overflow-hidden rounded-2xl border-2 border-ink">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition grid place-items-center">
                <Instagram className="h-6 w-6 text-paper opacity-0 group-hover:opacity-100 transition" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink text-paper grain">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-neon">06 / Community</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl uppercase leading-[0.95]">
              Loud <span className="text-neon">Reviews.</span><br />Louder Fans.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
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

      {/* Payments / trust */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="rounded-3xl bg-neon border-4 border-ink p-8 sm:p-12 grid gap-8 lg:grid-cols-[2fr_1fr] items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-[0.95]">
              Checkout that respects your time.
            </h2>
            <p className="mt-3 text-ink/80 max-w-lg">
              Guest checkout, secure payments, order tracking, wishlist, discount codes and a cart drawer that actually works.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Razorpay", "Stripe", "UPI", "Google Pay", "Apple Pay", "Cards"].map((p) => (
                <span key={p} className="rounded-full bg-ink text-paper px-3 py-1.5 text-xs font-mono uppercase tracking-widest">{p}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 rounded-2xl border-2 border-ink bg-paper p-5">
              <ShieldCheck className="h-6 w-6" />
              <p className="mt-2 font-bold">Secure Checkout</p>
              <p className="text-xs text-ink/60">256-bit encrypted</p>
            </div>
            <div className="flex-1 rounded-2xl border-2 border-ink bg-paper p-5">
              <Truck className="h-6 w-6" />
              <p className="mt-2 font-bold">Fast Shipping</p>
              <p className="text-xs text-ink/60">Ships in 48 hrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <p className="font-display text-3xl uppercase leading-none">
                Main Bhi<br /><span className="text-signal">Cockroach<span className="text-neon">.art</span></span>
              </p>
              <p className="mt-4 text-sm text-paper/70 max-w-xs">
                Independent satirical vinyl stickers, illustrated and shipped from a small studio.
              </p>
              <div className="mt-6 flex gap-2">
                <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-paper/20 hover:bg-neon hover:text-ink hover:border-neon transition">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
            {[
              { title: "Shop", items: ["All Stickers", "Collections", "Limited Drops", "Gift Cards"] },
              { title: "Help", items: ["Shipping", "Returns", "FAQ", "Contact"] },
              { title: "Studio", items: ["About", "Journal", "Privacy Policy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="font-mono text-xs uppercase tracking-widest text-neon">{col.title}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {col.items.map((i) => (
                    <li key={i}><a href="#" className="text-paper/80 hover:text-paper hover:underline underline-offset-4">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-paper/15 p-5 text-xs sm:text-sm font-mono text-paper/60 leading-relaxed">
            <span className="text-signal font-bold">NOTICE —</span> All designs are independently created satirical artwork intended for artistic expression. They are not official merchandise and do not represent or endorse any political party, campaign, organization, or movement.
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-paper/50 font-mono uppercase tracking-widest">
            <span>© {new Date().getFullYear()} Main Bhi Cockroach Art</span>
            <span>Made with ink & attitude</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
