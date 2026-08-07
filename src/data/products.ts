import mecha from "@/assets/goki-mecha.png";
import controller from "@/assets/goki-controller.png";
import magical from "@/assets/goki-magical.png";
import pixel from "@/assets/goki-pixel.png";
import kaiju from "@/assets/goki-kaiju.png";
import ninja from "@/assets/goki-ninja.png";
import deskmat from "@/assets/goki-deskmat.jpg";
import collectibles from "@/assets/goki-collectibles.jpg";

export type Kind = "sticker" | "deskmat" | "collectible";

export type Product = {
  id: number;
  slug: string;
  kind: Kind;
  img: string;
  gallery: string[];
  title: string;
  jp: string;
  desc: string;
  story: string;
  price: number;
  mrp: number;
  tag: string;
  accent: string;
  category: string;
  drop: string;
  edition: number;
  remaining: number;
};

const ACCENTS = ["bg-plasma text-paper", "bg-cyber text-void", "bg-magenta text-void"];

type Seed = {
  slug: string;
  title: string;
  jp: string;
  desc: string;
  story: string;
  category: string;
  kind: Kind;
  img: string;
};

const STICKER_IMGS = [mecha, controller, magical, pixel, kaiju, ninja];

const seeds: Seed[] = [
  // ---------- ANIME ----------
  { slug: "roach-7-mecha-pilot", title: "Roach-7 Mecha Pilot", jp: "ロー7", desc: "Chibi pilot. Full holo finish.", story: "Unit ROACH-7 launched from a Neo-Tokyo hangar with two antennae, zero fear and a cockpit that smells faintly of instant noodles. Holographic laminate shifts indigo to cyan as you tilt it.", category: "Anime", kind: "sticker", img: mecha },
  { slug: "magical-goki-chan", title: "Magical Goki-chan", jp: "まほうゴキちゃん", desc: "Shoujo sparkle, pest-core heart.", story: "Transformation sequence: 14 seconds, four costume changes, one very confused exterminator. Soft pastel holo with glitter flake laminate.", category: "Anime", kind: "sticker", img: magical },
  { slug: "shinobi-goki", title: "Shinobi Goki", jp: "忍ゴキ", desc: "Katana out. Shadow clone optional.", story: "Trained in the dark under the fridge for a thousand nights. Gold metallic outline, shonen speed lines, one very serious headband.", category: "Anime", kind: "sticker", img: ninja },
  { slug: "kaiju-tokyo-kaimetsu", title: "Kaiju: Tokyo Kaimetsu", jp: "東京壊滅", desc: "Skyscraper-scale. Sticker-sized.", story: "The city built the lights. The kaiju just walked through them. Full-bleed neon poster art with deep magenta bloom, printed on 5-year vinyl.", category: "Anime", kind: "sticker", img: kaiju },
  { slug: "senpai-noticed-me", title: "Senpai Noticed Me", jp: "先輩", desc: "Blush lines included.", story: "The single most devastating four-word arc in fiction, rendered as a chibi roach vibrating with emotional damage.", category: "Anime", kind: "sticker", img: magical },
  { slug: "isekai-truck-kun", title: "Isekai'd By Truck-kun", jp: "異世界", desc: "New world. Same six legs.", story: "Reincarnated as the strongest pest in another world. Stat sheet included, charisma dumped, survivability maxed.", category: "Anime", kind: "sticker", img: mecha },
  { slug: "final-form-unlocked", title: "Final Form Unlocked", jp: "最終形態", desc: "Power-up aura die-cut.", story: "Three episodes of screaming, one transformation, infinite screen shake. Chrome-edge laminate that catches every light in the room.", category: "Anime", kind: "sticker", img: kaiju },
  { slug: "goki-cafe-maid", title: "Goki Café Maid", jp: "メイド喫茶", desc: "Omurice, but make it feral.", story: "Welcome home, master. Your table is under the sink. Pastel indigo palette with foil heart accents.", category: "Anime", kind: "sticker", img: magical },
  { slug: "cyber-antennae", title: "Cyber Antennae", jp: "サイバー", desc: "Wired for the night city.", story: "Two antennae, forty-eight ports, one very bad idea. Chrome-and-cyan cyberpunk portrait with circuit etching.", category: "Anime", kind: "sticker", img: mecha },
  { slug: "sakura-scurry", title: "Sakura Scurry", jp: "桜", desc: "Petals falling. Legs moving.", story: "Spring arc. Soft focus. A single roach sprinting through pink petals toward a confession that will never happen.", category: "Anime", kind: "sticker", img: magical },

  // ---------- GAMING ----------
  { slug: "one-up-goki", title: "1UP Goki", jp: "1UP", desc: "8-bit sprite. Full health bar.", story: "Respawns faster than your patience. True pixel-grid art printed sharp enough to count the pixels.", category: "Gaming", kind: "sticker", img: pixel },
  { slug: "game-over-never", title: "Game Over? Never.", jp: "ゲームオーバー", desc: "CRT glow arcade badge.", story: "The screen said GAME OVER. The roach inserted another coin. Circular arcade badge with scanline print texture.", category: "Gaming", kind: "sticker", img: controller },
  { slug: "controller-goblin", title: "Controller Goblin", jp: "コントローラー", desc: "For the 3am ranked grind.", story: "Six legs means six buttons at once. Nobody has beaten this thing in a fighting game since 2019.", category: "Gaming", kind: "sticker", img: controller },
  { slug: "respawn-badge", title: "Respawn Badge", jp: "リスポーン", desc: "Circular esports patch style.", story: "Death is a suggestion. A crest-style badge for anyone whose K/D is bad but whose spirit is unbreakable.", category: "Gaming", kind: "sticker", img: pixel },
  { slug: "boss-fight-imminent", title: "Boss Fight Imminent", jp: "ボス戦", desc: "Warning label, gamer edition.", story: "Hazard-yellow bar, health gauge filling, one absolutely enormous insect. Stick it on the door of anyone who owns a mechanical keyboard.", category: "Gaming", kind: "sticker", img: kaiju },
  { slug: "afk-forever", title: "AFK Forever", jp: "離席中", desc: "Status: permanently away.", story: "Away from keyboard, present in spirit, feeding on crumbs. A quiet flex for the chronically logged-off.", category: "Gaming", kind: "sticker", img: controller },
  { slug: "lag-is-not-my-fault", title: "Lag Is Not My Fault", jp: "ラグ", desc: "Glitch-print die-cut.", story: "Ping 340. Excuses infinite. Printed with a deliberate RGB-split glitch offset that looks like your worst match.", category: "Gaming", kind: "sticker", img: pixel },
  { slug: "loot-goblin-drop", title: "Loot Goblin Drop", jp: "レアドロップ", desc: "Legendary rarity foil.", story: "0.4% drop rate, 100% attitude. Gold-foil rarity border on holographic stock.", category: "Gaming", kind: "sticker", img: ninja },
  { slug: "speedrun-any-percent", title: "Speedrun Any%", jp: "スピードラン", desc: "World record holder, allegedly.", story: "Clipped through three walls and the kitchen counter. Timer graphic prints with a genuine split table.", category: "Gaming", kind: "sticker", img: pixel },
  { slug: "no-scope-antenna", title: "No-Scope Antenna", jp: "ノースコープ", desc: "Crosshair die-cut.", story: "One antenna up, one eye closed, zero regrets. Neon crosshair on matte black stock.", category: "Gaming", kind: "sticker", img: ninja },
  { slug: "gg-ez", title: "GG EZ", jp: "GG", desc: "Two letters. Endless consequences.", story: "Chunky arcade type with a smug little mascot. Ships with no apology.", category: "Gaming", kind: "sticker", img: controller },
  { slug: "one-more-run", title: "One More Run", jp: "もう一回", desc: "The most expensive lie in gaming.", story: "It is 4:12am. This is run seventeen. The mascot on this sticker believes in you anyway.", category: "Gaming", kind: "sticker", img: pixel },

  // ---------- DESK MATS ----------
  { slug: "deskmat-neo-goki-city", title: "Neo Goki City XL Desk Mat", jp: "ネオゴキ", desc: "900×400mm neon cityscape.", story: "A full-bleed rain-slick Neo-Tokyo skyline with a chrome roach walking through the reflections. Stitched edges, 4mm non-slip rubber base, micro-woven cloth top tuned for low-friction glides.", category: "Desk Mats", kind: "deskmat", img: deskmat },
  { slug: "deskmat-mecha-hangar", title: "Mecha Hangar XL Desk Mat", jp: "格納庫", desc: "Blueprint indigo, ROACH-7 schematics.", story: "Technical schematics of Unit ROACH-7 in glowing indigo linework across a deep navy field. Reads like a hangar wall, plays like a control surface.", category: "Desk Mats", kind: "deskmat", img: deskmat },
  { slug: "deskmat-arcade-scanline", title: "Arcade Scanline Desk Mat", jp: "アーケード", desc: "CRT gradient, pixel border.", story: "A hard scanline gradient bleeding cyan into magenta with a pixel-sprite border march along the bottom edge. Feels like the cabinet you grew up on.", category: "Desk Mats", kind: "deskmat", img: deskmat },
  { slug: "deskmat-sakura-void", title: "Sakura Void Desk Mat", jp: "桜の虚無", desc: "Petals over deep navy.", story: "Quiet one. Pink petals drifting across a near-black indigo void with a single silhouette in the corner. For desks that need less noise.", category: "Desk Mats", kind: "deskmat", img: deskmat },
  { slug: "deskmat-kaiju-skyline", title: "Kaiju Skyline Desk Mat", jp: "怪獣", desc: "Panoramic monster panorama.", story: "The full kaiju poster stretched across 900mm of desk. Everyone on your call will ask about it.", category: "Desk Mats", kind: "deskmat", img: deskmat },
  { slug: "deskmat-compact-goki", title: "Goki Compact Desk Mat", jp: "コンパクト", desc: "600×300mm for small setups.", story: "Same stitched build, tuned for 60% boards and tight desks. Mascot centred, minimal type, maximum grip.", category: "Desk Mats", kind: "deskmat", img: deskmat },

  // ---------- COLLECTIBLES ----------
  { slug: "roachy-hard-enamel-pin", title: "Roachy Hard Enamel Pin", jp: "ピンバッジ", desc: "Gold plated. Numbered card.", story: "38mm hard enamel, polished gold plating, double rubber clutch, mounted on a numbered limited-edition backing card. Cute. Chaotic. Unstoppable.", category: "Collectibles", kind: "collectible", img: collectibles },
  { slug: "goki-acrylic-keychain", title: "Goki Acrylic Keychain", jp: "アクリルキーホルダー", desc: "Double-sided, star clasp.", story: "3mm clear acrylic, printed both sides, epoxy-coated edges, gold star charm. Survives keys, bags and being sat on.", category: "Collectibles", kind: "collectible", img: collectibles },
  { slug: "mecha-pilot-standee", title: "Mecha Pilot Acrylic Standee", jp: "アクリルスタンド", desc: "140mm shelf presence.", story: "ROACH-7 on a weighted acrylic base with a printed hangar-floor plate. Built to loom politely next to your monitor.", category: "Collectibles", kind: "collectible", img: collectibles },
  { slug: "holo-art-card-set", title: "Holo Art Card Set (5)", jp: "ホロカード", desc: "Five refractor cards, sleeved.", story: "Five 63×88mm rainbow-refractor cards featuring the full mascot roster, sleeved and boxed. Numbered on the reverse.", category: "Collectibles", kind: "collectible", img: collectibles },
  { slug: "blind-box-pin-mystery", title: "Blind Box Mystery Pin", jp: "ブラインドボックス", desc: "1 of 8. One is a chase.", story: "Eight designs sealed in identical foil. One of them is a glow-in-the-dark chase pin limited to 40 units across the whole run. Good luck.", category: "Collectibles", kind: "collectible", img: collectibles },
  { slug: "kaiju-vinyl-figure", title: "Kaiju Goki Vinyl Figure", jp: "ソフビ", desc: "110mm sofubi-style figure.", story: "Soft vinyl, hand-sprayed indigo-to-magenta fade, articulated head. Comes in a window box with the original kaiju poster art.", category: "Collectibles", kind: "collectible", img: collectibles },
  { slug: "shinobi-keycap", title: "Shinobi Artisan Keycap", jp: "キーキャップ", desc: "Resin. Cherry MX stem.", story: "Hand-cast resin escape key with a suspended shinobi silhouette and gold leaf. Every one is slightly different. That is the point.", category: "Collectibles", kind: "collectible", img: collectibles },
  { slug: "goki-sticker-vault", title: "Goki Sticker Vault (25)", jp: "ステッカーセット", desc: "25 randomized die-cuts.", story: "A sealed pouch of twenty-five randomized stickers from every drop, including at least two retired designs. Best value in the shop.", category: "Collectibles", kind: "collectible", img: collectibles },
];

const priceFor = (kind: Kind, i: number) => {
  if (kind === "deskmat") return [1699, 1899, 1999, 2199, 2299, 1499][i % 6];
  if (kind === "collectible") return [599, 399, 749, 649, 449, 1299, 899, 999][i % 8];
  return [149, 179, 199, 219, 249, 169][i % 6];
};

const DROPS = ["Drop 01 · Neo-Tokyo", "Drop 02 · Continue?", "Drop 03 · Final Form"];

export const products: Product[] = seeds.map((s, i) => {
  const price = priceFor(s.kind, i);
  const edition = s.kind === "collectible" ? 200 : s.kind === "deskmat" ? 150 : 500;
  const remaining = Math.max(6, Math.round(edition * (0.12 + ((i * 37) % 61) / 100)));
  const tags = ["Limited", "New Drop", "Holo", "Restocked", "Chase", "Fan Fav", "Last Units"];
  return {
    id: i + 1,
    slug: s.slug,
    kind: s.kind,
    img: s.img,
    gallery: [s.img, STICKER_IMGS[(i + 1) % STICKER_IMGS.length], STICKER_IMGS[(i + 3) % STICKER_IMGS.length]],
    title: s.title,
    jp: s.jp,
    desc: s.desc,
    story: s.story,
    price,
    mrp: Math.round(price * 1.35),
    tag: remaining < 40 ? "Last Units" : tags[i % tags.length],
    accent: ACCENTS[i % ACCENTS.length],
    category: s.category,
    drop: DROPS[i % DROPS.length],
    edition,
    remaining,
  };
});

export const categories = ["All", "Anime", "Gaming", "Desk Mats", "Collectibles"] as const;

export const stickerSizes = [
  { label: "S", dim: '2"', priceMod: -30 },
  { label: "M", dim: '3"', priceMod: 0 },
  { label: "L", dim: '4"', priceMod: 40 },
  { label: "XL", dim: '5.5"', priceMod: 90 },
];

export const deskMatSizes = [
  { label: "M", dim: "600×300", priceMod: -300 },
  { label: "L", dim: "800×300", priceMod: 0 },
  { label: "XL", dim: "900×400", priceMod: 300 },
  { label: "XXL", dim: "1200×600", priceMod: 700 },
];

export const collectibleSizes = [
  { label: "1×", dim: "Single", priceMod: 0 },
  { label: "2×", dim: "Pair", priceMod: 500 },
  { label: "3×", dim: "Trio", priceMod: 950 },
  { label: "Set", dim: "Full run", priceMod: 1800 },
];

export const sizesFor = (kind: Kind) =>
  kind === "deskmat" ? deskMatSizes : kind === "collectible" ? collectibleSizes : stickerSizes;

export const specsFor = (kind: Kind) =>
  kind === "deskmat"
    ? ["Stitched edges", "4mm rubber base", "Micro-woven cloth", "Spill resistant"]
    : kind === "collectible"
      ? ["Numbered edition", "Gift-ready packaging", "Premium materials", "Never restocked"]
      : ["5-year vinyl", "Waterproof", "UV resistant", "Holo laminate"];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const relatedProducts = (slug: string) => {
  const current = getProduct(slug);
  return products
    .filter((p) => p.slug !== slug && (!current || p.category === current.category))
    .slice(0, 3);
};

export const productReviews = [
  { name: "Rhea T.", role: "Vtuber · Bengaluru", stars: 5, text: "The holo laminate on the mecha pilot is unreal on camera. Chat asked about it for twenty minutes straight." },
  { name: "Aditya S.", role: "Ranked grinder · Pune", stars: 5, text: "Desk mat glide is smooth without being slippery. Stitching hasn't frayed after four months of abuse." },
  { name: "Mei L.", role: "Con artist alley · Delhi", stars: 5, text: "Pulled the chase pin from the blind box on my second try. Plating is genuinely convention-grade." },
  { name: "Karan V.", role: "Keyboard builder · Mumbai", stars: 4, text: "Artisan keycap sits perfectly on MX. Wish more colourways existed — restock the indigo one please." },
];
