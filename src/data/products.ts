import roach from "@/assets/sticker-roach.png";
import textSticker from "@/assets/sticker-text.png";
import ballot from "@/assets/sticker-ballot.png";
import fist from "@/assets/sticker-fist.png";
import speech from "@/assets/sticker-speech.png";
import crown from "@/assets/sticker-crown.png";

export type Product = {
  id: number;
  slug: string;
  img: string;
  gallery: string[];
  title: string;
  desc: string;
  story: string;
  price: number;
  tag: string;
  accent: string;
};

export const products: Product[] = [
  { id: 1, slug: "shady-roach", img: roach, gallery: [roach, textSticker, ballot], title: "Shady Roach", desc: "For laptops that survive anything.", story: "The one who scurries through blackouts, budget cuts and broken promises. Wears shades because the future's bright — apparently.", price: 149, tag: "Bestseller", accent: "bg-neon" },
  { id: 2, slug: "main-bhi-cockroach", img: textSticker, gallery: [textSticker, roach, speech], title: "Main Bhi Cockroach", desc: "The one that started the whole mess.", story: "Bold type, bolder claim. The original statement piece for anyone tired of pretending everything's fine.", price: 199, tag: "Limited", accent: "bg-signal" },
  { id: 3, slug: "ballot-bug", img: ballot, gallery: [ballot, crown, textSticker], title: "Ballot Bug", desc: "Democracy has small feet.", story: "A gentle reminder that every vote counts — even the ones cast by six-legged citizens with strong opinions.", price: 179, tag: "New", accent: "bg-volt" },
  { id: 4, slug: "paint-the-town", img: fist, gallery: [fist, speech, roach], title: "Paint The Town", desc: "For quiet rebels with loud brushes.", story: "A fist gripping a paintbrush. Because the loudest protest is often the one you make in colour.", price: 159, tag: "Fresh", accent: "bg-neon" },
  { id: 5, slug: "opinions-included", img: speech, gallery: [speech, textSticker, fist], title: "Opinions Included", desc: "A speech bubble for your water bottle.", story: "A wearable disclaimer for the loud, the opinionated, and the mildly annoyed. Batteries not required.", price: 129, tag: "Popular", accent: "bg-signal" },
  { id: 6, slug: "king-kachra", img: crown, gallery: [crown, ballot, roach], title: "King Kachra", desc: "Every empire has its bugs.", story: "A crowned cockroach ruling over a landfill of empty promises. Long may he reign, briefly.", price: 229, tag: "Drop 01", accent: "bg-volt" },
];

export const sizes = [
  { label: "S", dim: "3 in", priceMod: -30 },
  { label: "M", dim: "4 in", priceMod: 0 },
  { label: "L", dim: "6 in", priceMod: 60 },
  { label: "XL", dim: "8 in", priceMod: 140 },
];

export const productReviews = [
  { name: "Ananya R.", role: "Design student, Bengaluru", stars: 5, text: "The print is unreal. Colors pop, edges are clean. My laptop finally has a personality." },
  { name: "Kabir M.", role: "Illustrator, Mumbai", stars: 5, text: "Survived monsoon, coffee spills and airport security. These are the real MVPs." },
  { name: "Sneha P.", role: "Grad student, Delhi", stars: 5, text: "Shipping was quick and the packaging felt like a mini art drop. Chef's kiss." },
  { name: "Rehan K.", role: "Skater, Pune", stars: 4, text: "Stuck one on my board six months ago. Still bright, still sticking, still funny." },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, count = 3) {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}