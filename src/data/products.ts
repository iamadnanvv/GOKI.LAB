import roach from "@/assets/sticker-roach.png";
import textSticker from "@/assets/sticker-text.png";
import ballot from "@/assets/sticker-ballot.png";
import fist from "@/assets/sticker-fist.png";
import speech from "@/assets/sticker-speech.png";
import crown from "@/assets/sticker-crown.png";
import jobs from "@/assets/sticker-jobs.png";
import dinosaurs from "@/assets/sticker-dinosaurs.png";
import squash from "@/assets/sticker-squash.png";
import caution from "@/assets/sticker-caution.png";
import member from "@/assets/sticker-member.png";
import future from "@/assets/sticker-future.png";
import youth from "@/assets/sticker-youth.png";
import proud from "@/assets/sticker-proud.png";
import lazy from "@/assets/sticker-lazy.png";
import bilingual from "@/assets/sticker-bilingual.png";

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
  category: string;
};

const IMG_POOL = [
  roach, textSticker, ballot, fist, speech, crown,
  jobs, dinosaurs, squash, caution, member, future,
  youth, proud, lazy, bilingual,
];

const ACCENTS = ["bg-neon", "bg-signal", "bg-volt"];
const TAGS = ["Bestseller", "Limited", "New", "Fresh", "Popular", "Drop 01", "CJP Pick", "Fan Fav", "Rare"];
const PRICES = [99, 119, 129, 149, 159, 169, 179, 199, 219, 229];

type Seed = {
  slug: string;
  title: string;
  desc: string;
  story: string;
  category: string;
};

const seeds: Seed[] = [
  // Original core 6
  { slug: "shady-roach", title: "Shady Roach", desc: "For laptops that survive anything.", story: "The one who scurries through blackouts, budget cuts and broken promises. Wears shades because the future's bright — apparently.", category: "Die-cut Mascot" },
  { slug: "main-bhi-cockroach", title: "Main Bhi Cockroach", desc: "The one that started the whole mess.", story: "Bold type, bolder claim. The original statement piece for anyone tired of pretending everything's fine.", category: "Slogan" },
  { slug: "ballot-bug", title: "Ballot Bug", desc: "Democracy has small feet.", story: "A gentle reminder that every vote counts — even the ones cast by six-legged citizens with strong opinions.", category: "Democracy" },
  { slug: "paint-the-town", title: "Paint The Town", desc: "For quiet rebels with loud brushes.", story: "A fist gripping a paintbrush. Because the loudest protest is often the one you make in colour.", category: "Free Speech" },
  { slug: "opinions-included", title: "Opinions Included", desc: "A speech bubble for your water bottle.", story: "A wearable disclaimer for the loud, the opinionated, and the mildly annoyed. Batteries not required.", category: "Free Speech" },
  { slug: "king-kachra", title: "King Kachra", desc: "Every empire has its bugs.", story: "A crowned cockroach ruling over a landfill of empty promises. Long may he reign, briefly.", category: "Satire" },

  // New CJP core slogans
  { slug: "still-standing-since-the-dinosaurs", title: "Still Standing Since The Dinosaurs", desc: "Older than your excuses.", story: "Circular campaign badge. Vintage propaganda seal. A quiet flex from a species that has outlasted meteors, empires and manifestos.", category: "Campaign Badge" },
  { slug: "you-cannot-squash-a-movement", title: "You Cannot Squash A Movement", desc: "A boot. A bug. A message.", story: "A cartoon boot descending on a cockroach that is very much still flexing. Retro Soviet-meme energy for anyone who has been underestimated.", category: "Propaganda Poster" },
  { slug: "proud-cockroach", title: "Proud Cockroach", desc: "Wear the insult. Own the anthem.", story: "Circular red seal, saluting mascot. For everyone who was called a pest and decided to make it a personality trait.", category: "Campaign Badge" },
  { slug: "voice-of-the-lazy-and-unemployed", title: "Voice Of The Lazy & Unemployed", desc: "For beanbag revolutionaries.", story: "A cockroach on a beanbag with chai and a placard. A love letter to everyone whose most productive act today was thinking clearly.", category: "Satire" },
  { slug: "official-cockroach-member", title: "Official Cockroach Member", desc: "Membership: zero rupees. Forever.", story: "A vintage members-only card sticker. No fees, no forms, no photo ID — you were born into this.", category: "Campaign Badge" },
  { slug: "where-are-the-jobs", title: "Where Are The Jobs?", desc: "Asking for a generation.", story: "A helmeted cockroach holding a placard. A question that keeps getting louder because the answer keeps getting quieter.", category: "Unemployment" },
  { slug: "listen-to-indias-youth", title: "Listen To India's Youth", desc: "Megaphone included.", story: "A cockroach and an oversized vintage microphone. Because 'we'll consider it' is not a response.", category: "Free Speech" },
  { slug: "our-future-is-not-for-sale", title: "Our Future Is Not For Sale", desc: "Not now, not next quarter.", story: "A torch-bearing mascot in a circular seal. A refusal wrapped in a badge.", category: "Democracy" },
  { slug: "resign-education-minister", title: "Resign Education Minister", desc: "A satirical suggestion.", story: "Warning-label satire aimed at the office, not the person. Because syllabi shouldn't feel like optional reading.", category: "Education" },
  { slug: "opinions-ahead-caution", title: "Caution: Opinions Ahead", desc: "Yellow means loud.", story: "Hazard triangle, megaphone-wielding roach. A polite warning before you tag along.", category: "Warning Label" },
  { slug: "main-bhi-cockroach-devanagari", title: "मैं भी कॉकरोच", desc: "Bilingual. Bold. Yours.", story: "Devanagari and Latin type collide on a defiant mascot. For anyone whose protest is fluent in more than one language.", category: "Slogan" },
];

// Additional 100+ slogans and concepts
const extraSeeds: [string, string, string, string, string][] = [
  // slug, title, desc, story, category
  ["squash-me-i-multiply", "Squash Me, I Multiply", "Bad math for bullies.", "A defiant roach with tiny clones splitting off. The more you push, the more of us show up.", "Resilience"],
  ["survivor-since-forever", "Survivor Since Forever", "Evolution's stubborn favourite.", "A geological timeline sticker with a roach at every era. Comes with quiet bragging rights.", "Resilience"],
  ["pests-with-principles", "Pests With Principles", "Ethics, but make it insect.", "A neat manifesto scroll clutched by six little legs. Read carefully — the fine print bites.", "Satire"],
  ["fear-us-we-vote", "Fear Us, We Vote", "Small feet, loud ballots.", "A marching column of roaches with tiny ballot papers. Turnout is a threat when you're this many.", "Democracy"],
  ["born-to-scurry", "Born To Scurry", "Legwork is a lifestyle.", "A speed-blur mascot with sneakers. For people who show up before the tear gas.", "Resilience"],
  ["price-of-onions", "Price Of Onions: A Tragedy", "Rupee-shaped grief.", "A weeping roach next to an onion priced like a luxury import. Kitchen politics is politics.", "Inflation"],
  ["thali-tax", "Thali Tax", "Everything on the plate, taxed.", "A cockroach with a fork and a shrinking thali. A little dinner, a lot of levy.", "Inflation"],
  ["degree-received-please-wait", "Degree Received. Please Wait.", "For the class of every year.", "A graduation cap on a cockroach clutching a resume that has developed sentience.", "Unemployment"],
  ["hire-us-cowards", "Hire Us, Cowards", "A polite little ultimatum.", "A mascot in a smart shirt, angry eyebrows. Applications sent: 400. Interviews: 2.", "Unemployment"],
  ["intern-forever", "Intern Forever", "Certificates, not salaries.", "A tired roach in a lanyard holding a stack of certificates and no bank alerts.", "Unemployment"],
  ["paper-leak-champions", "Paper Leak Champions", "A national sport.", "A trophy-holding roach with 'CONGRATS' confetti made of exam sheets. Bitter satire, no notes.", "Education"],
  ["syllabus-was-fiction", "The Syllabus Was Fiction", "Plot twists in every subject.", "A roach holding a textbook with pages flying off. Somewhere, a curriculum wept.", "Education"],
  ["fee-hike-fatigue", "Fee Hike Fatigue", "Tuition, but make it trauma.", "A cockroach in a graduation gown collapsing under a stack of invoices.", "Education"],
  ["scholar-and-a-scoundrel", "Scholar & A Scoundrel", "Merit, briefly.", "A cockroach in glasses holding a book and a molotov of ink. Learning is a threat again.", "Education"],
  ["read-a-book-cowards", "Read A Book, Cowards", "Preferably one you didn't ban.", "A stack of banned books with a roach reading gleefully on top.", "Free Speech"],
  ["banned-and-buzzing", "Banned & Buzzing", "The censor's greatest hits.", "A censored bar over a roach's mouth, still very obviously talking. Streisand approved.", "Free Speech"],
  ["free-the-feed", "Free The Feed", "For platforms that pretend.", "A phone with a roach breaking out of a suppressed post. Algorithms fear organized bugs.", "Free Speech"],
  ["quiet-quitting-loudly", "Quiet Quitting, Loudly", "Contradiction is the point.", "A roach holding a two-week notice like a placard. HR is confused; we are not.", "Satire"],
  ["chai-and-chaos", "Chai & Chaos", "Two national beverages.", "A steaming glass of cutting chai next to a roach with a matchstick. Iconic pair.", "Youth"],
  ["metro-manifesto", "Metro Manifesto", "Written between stations.", "A commuter roach with earbuds and a rolled-up placard. Rush hour radicals.", "Youth"],
  ["auto-rickshaw-anarchist", "Auto Rickshaw Anarchist", "Meter down, mood up.", "A roach hanging off an auto with hair flying. The city belongs to us if we tip well.", "Youth"],
  ["hostel-room-hero", "Hostel Room Hero", "Founding member since Sem 1.", "A dorm-room cockroach holding a chai mug like a scepter. The original activist.", "Youth"],
  ["cough-syrup-democracy", "Cough Syrup Democracy", "Two spoons of dissent.", "A satirical medicine bottle labeled 'For Chronic Silence'. Consult a citizen.", "Satire"],
  ["disclaimer-included", "Disclaimer Included", "Satire not sold separately.", "A tiny 'terms & conditions' scroll being read by a courtroom cockroach.", "Satire"],
  ["footnote-of-history", "Footnote Of History", "Where the truth actually lives.", "A cockroach highlighting a footnote in a giant history book. Details matter.", "Democracy"],
  ["press-not-pressed", "Press, Not Pressed", "Notebook out, hands up.", "A cockroach reporter with a mic. The story is still the story.", "Free Speech"],
  ["ban-lists-not-bugs", "Ban Lists, Not Bugs", "Lists get long. So do we.", "A roach crossing out a very long censorship list. Ink is cheap.", "Free Speech"],
  ["archive-everything", "Archive Everything", "Screenshots are civic duty.", "A cockroach with a giant filing cabinet labeled 'RECEIPTS'. Save. Save again.", "Democracy"],
  ["placard-in-my-tote", "Placard In My Tote", "Always ready.", "A cotton tote with a rolled placard poking out and a cockroach mascot patch.", "Youth"],
  ["mic-check-mic-check", "Mic Check, Mic Check", "Testing, testing.", "Two roaches on either side of a giant amp. Rehearsal for the town square.", "Free Speech"],
  ["assembly-required", "Assembly Required", "Some assembly. Lots of us.", "Flat-pack assembly diagram of a protest, IKEA-style. Tools: presence.", "Resilience"],
  ["small-legs-long-march", "Small Legs, Long March", "Distance is a mindset.", "A tiny cockroach army walking across a map. Kilometers are cheap.", "Resilience"],
  ["outlast-the-outrage", "Outlast The Outrage", "Cycles end. We don't.", "A calendar with all news cycles struck out and a smug roach in the corner.", "Resilience"],
  ["hope-is-a-tactic", "Hope Is A Tactic", "Also a strategy.", "A cockroach lighting a small paper lantern. Small light, long night.", "Resilience"],
  ["youth-is-not-a-phase", "Youth Is Not A Phase", "It's a demographic.", "A generational chart with a defiant roach at the top of the curve.", "Youth"],
  ["ok-boomer-with-love", "OK Boomer, With Love", "Softly, softly.", "A polite cockroach handing over a tiny bouquet and a resume.", "Youth"],
  ["main-character-energy", "Main Character Energy", "Show, don't scroll.", "A roach lit dramatically like a Bollywood poster. Cue the item number.", "Youth"],
  ["scroll-then-show-up", "Scroll, Then Show Up", "Feed to feet.", "A phone with legs and a cockroach jumping off it into the street.", "Youth"],
  ["not-a-vote-bank", "Not A Vote Bank", "A whole electorate.", "A giant piggy bank labeled 'YOUTH' being politely refused by a cockroach.", "Democracy"],
  ["press-esc-on-fear", "Press ESC On Fear", "A keyboard rebellion.", "A giant ESC key being pressed by a determined cockroach.", "Resilience"],
  ["ctrl-alt-defy", "Ctrl + Alt + Defy", "Three-finger salute.", "Three cockroach legs each on a key. Reboot in progress.", "Satire"],
  ["low-batt-still-loud", "Low Battery, Still Loud", "5% and shouting.", "A dying phone icon with a cockroach yelling out of the screen.", "Free Speech"],
  ["captcha-i-am-not-quiet", "Captcha: I Am Not Quiet", "Prove you are human.", "A captcha grid full of tiny cockroach silhouettes. Please select all.", "Satire"],
  ["algo-cannot-hold-us", "The Algorithm Cannot Hold Us", "Reach denied. Streets accepted.", "A cockroach breaking out of a graph line. Chart goes down; crowd goes up.", "Free Speech"],
  ["shadow-banned-street-approved", "Shadow-banned, Street-approved", "Offline is undefeated.", "A blurred profile pic with a mascot marching under it in bright colour.", "Free Speech"],
  ["press-freedom-please", "Press Freedom, Please", "It's not a favour.", "A vintage newspaper stand run by cockroaches. All headlines legible.", "Free Speech"],
  ["accountability-in-aisle-3", "Accountability, Aisle 3", "Between denial and delay.", "A grocery aisle sign with a very small stock label. Cockroach shopper skeptical.", "Democracy"],
  ["manifesto-not-menu", "Manifesto, Not Menu", "No à la carte democracy.", "A roach chef presenting a scroll on a silver platter.", "Democracy"],
  ["term-limits-please", "Term Limits, Please", "For everything.", "A giant hourglass with a tiny cockroach tapping the glass.", "Democracy"],
  ["taxation-with-frustration", "Taxation With Frustration", "A modern classic.", "A roach filing a tax return the size of a bedsheet.", "Inflation"],
  ["gst-on-my-grief", "GST On My Grief", "Also on my chai.", "A price tag stuck to a single tear rolling down a mascot's cheek.", "Inflation"],
  ["petrol-price-poetry", "Petrol Price Poetry", "A haiku in three digits.", "A pump nozzle spraying tiny sonnets over a horrified scooter-riding roach.", "Inflation"],
  ["load-shedding-loud-shouting", "Load-shedding, Loud-shouting", "Lights out. Voices up.", "A candle-lit rally by cockroaches. Power to the people; also just power.", "Resilience"],
  ["farmer-first-obviously", "Farmer First, Obviously", "The kitchen speaks.", "A tiny mascot bowing to a huge wheat stalk. Respect is not a slogan.", "Democracy"],
  ["small-shopkeeper-strong", "Small Shopkeeper, Strong Opinions", "The kirana knows.", "A roach behind a tiny counter with a very big ledger. Prices, memory, receipts.", "Inflation"],
  ["gig-work-glorified-hustle", "Gig Work, Glorified Hustle", "Ratings included.", "A helmet-wearing cockroach on a bike with a five-star badge and no benefits.", "Unemployment"],
  ["overworked-underpaid-online", "Overworked, Underpaid, Online", "Log in to log off never.", "A laptop with a roach glued to it and a coffee IV drip.", "Unemployment"],
  ["hr-said-family", "HR Said 'Family'", "The reddest flag.", "A cockroach at a family dinner with lawyers. Pass the NDA.", "Satire"],
  ["out-of-office-forever", "Out Of Office, Forever", "Auto-reply engaged.", "A beach-chair cockroach with a laptop showing 'MEETING DECLINED'.", "Satire"],
  ["dissent-is-devotion", "Dissent Is Devotion", "A quieter faith.", "A cockroach lighting a diya in front of a placard.", "Democracy"],
  ["cough-once-for-democracy", "Cough Once For Democracy", "Twice for a hearing.", "A roach at a doctor's clinic with a stethoscope on a ballot box.", "Satire"],
  ["parliament-of-pests", "A Parliament Of Pests", "In session, always.", "A grand chamber full of debating cockroaches in tiny reading glasses.", "Democracy"],
  ["policy-in-plain-english", "Policy In Plain English", "A radical proposal.", "A translator cockroach turning legalese into a paper airplane.", "Democracy"],
  ["ban-the-bans", "Ban The Bans", "Meta, and correct.", "A stamp saying BANNED over the word BAN. Cockroach grinning.", "Free Speech"],
  ["comedy-is-not-a-crime", "Comedy Is Not A Crime", "Comedians disagree softly.", "A cockroach at a mic with a courtroom sketch artist scribbling furiously.", "Free Speech"],
  ["meme-as-manifesto", "Meme As Manifesto", "Compressed politics.", "A cockroach in a museum next to a framed meme. Placard says 'Untitled, 2026'.", "Youth"],
  ["print-more-stickers", "Print More Stickers", "Directive from HQ.", "A tiny printer spitting out mascots endlessly. Ink budget: infinite.", "Satire"],
  ["paste-them-everywhere", "Paste Them Everywhere", "But not on cars you don't own.", "A lamp post densely layered with tiny cockroach stickers.", "Satire"],
  ["laptop-lid-liberation", "Laptop Lid Liberation", "One surface at a time.", "A cracked-open laptop lid with mascots as constellations.", "Youth"],
  ["water-bottle-warfare", "Water Bottle Warfare", "Hydrate, agitate.", "A dented steel bottle covered in mascots and slogans.", "Youth"],
  ["helmet-with-a-headline", "Helmet With A Headline", "Safety first, statement second.", "A scooter helmet with a big roach decal and a small heart.", "Youth"],
  ["notebook-of-nuisance", "Notebook Of Nuisance", "The margins are the point.", "A ruled notebook with cockroach doodles overtaking the equations.", "Education"],
  ["assembly-elects-itself", "The Assembly Elects Itself", "Skipping a step.", "A mascot handing a ballot to a mirror. Efficient. Suspicious.", "Democracy"],
  ["ideal-manifesto-loading", "Ideal Manifesto: Loading…", "0% forever.", "A loading bar on a scroll of promises.", "Satire"],
  ["election-eve-anxiety", "Election Eve Anxiety", "A national mood.", "A twitchy cockroach clutching a chai at 3 AM.", "Democracy"],
  ["exit-poll-shrug", "Exit Poll Shrug", "Nobody knows anything.", "A cockroach doing an exaggerated shrug next to a pie chart of pie.", "Democracy"],
  ["vote-then-vent", "Vote, Then Vent", "In that order.", "A ballot box with a megaphone welded to its side.", "Democracy"],
  ["scroll-vote-scream-repeat", "Scroll · Vote · Scream · Repeat", "A daily practice.", "A four-panel comic of a cockroach going through the cycle. Again.", "Youth"],
  ["nation-of-notifications", "Nation Of Notifications", "Ping. Ping. Riot.", "A phone lockscreen crammed with civic alerts, held by trembling roach legs.", "Youth"],
  ["main-character-in-a-crowd", "Main Character In A Crowd", "But so is everyone.", "A crowd of identical mascots, one with a small crown. Points made.", "Youth"],
  ["polite-not-passive", "Polite, Not Passive", "Please. And also, no.", "A tea-serving mascot handing over a decline slip on a saucer.", "Resilience"],
  ["cockroach-code-of-conduct", "Cockroach Code Of Conduct", "Article 1: Show Up.", "A stately scroll being read aloud by a mascot with reading glasses.", "Campaign Badge"],
  ["dictionary-of-dissent", "Dictionary Of Dissent", "Definitions expanded.", "A giant book labelled 'DISSENT' with cockroach bookmarks.", "Free Speech"],
  ["proof-of-presence", "Proof Of Presence", "A civic receipt.", "A tiny paper receipt printed with 'I WAS THERE' and a cockroach signature.", "Democracy"],
  ["turnout-is-a-love-language", "Turnout Is A Love Language", "Show up for the city.", "Little cockroach hearts marching to a polling booth.", "Democracy"],
  ["subscribe-to-your-country", "Subscribe To Your Country", "The rare good subscription.", "A cockroach handing over a form labelled 'Voter Registration'.", "Democracy"],
  ["read-the-fine-print", "Read The Fine Print", "It's usually the plot.", "A magnifying glass over a manifesto held by a suspicious mascot.", "Democracy"],
  ["small-town-big-mouth", "Small Town, Big Mouth", "The provinces speak.", "A cockroach on a village map with a comically large megaphone.", "Free Speech"],
  ["city-halls-are-ours", "City Halls Are Ours", "By blueprint.", "A mascot planting a tiny flag on a municipal building blueprint.", "Democracy"],
  ["ward-level-warriors", "Ward-Level Warriors", "The local is the point.", "A mascot pinning a ward map to a wall with actual pins.", "Democracy"],
  ["youth-council-forever", "Youth Council Forever", "Self-appointed. Self-respecting.", "A folding chair, a mascot, a hand-lettered sign. That's a council.", "Youth"],
  ["rti-rti-rti", "RTI · RTI · RTI", "A three-letter prayer.", "A trio of cockroaches filing identical requests at three different windows.", "Democracy"],
  ["citizen-first-consumer-later", "Citizen First, Consumer Later", "In that exact order.", "A shopping cart holding a ballot box, pushed by a mascot.", "Democracy"],
  ["fund-the-schools", "Fund The Schools", "Not the slogans.", "A tiny classroom on a scale outweighing a giant billboard.", "Education"],
  ["libraries-are-radical", "Libraries Are Radical", "Silence is not compliance.", "A cockroach reading contentedly under a 'QUIET PLEASE' sign.", "Education"],
  ["hospital-is-not-a-hobby", "A Hospital Is Not A Hobby", "Fund it like it matters.", "A stethoscope wrapped around a cockroach reading a spreadsheet.", "Democracy"],
  ["potholes-are-personal", "Potholes Are Personal", "Municipal romance.", "A pothole large enough to host a mascot's picnic.", "Satire"],
  ["traffic-is-a-policy-choice", "Traffic Is A Policy Choice", "So is fixing it.", "A signal light with a cockroach directing chaos with a flag.", "Democracy"],
  ["air-quality-anxiety", "Air Quality Anxiety Club", "Founding member.", "A mascot in a mask and a T-shirt that says 'PM 2.5? No thanks.'", "Democracy"],
  ["plant-a-tree-vote-too", "Plant A Tree, Vote Too", "Both count.", "A mascot with a sapling in one hand and a ballot in the other.", "Democracy"],
  ["small-acts-loud-echo", "Small Acts, Loud Echo", "You are the amplifier.", "One mascot shouting into a canyon full of returning mascot shadows.", "Resilience"],
  ["boring-is-a-victory", "Boring Is A Victory", "Working systems are quiet.", "A mascot at a desk stamping 'APPROVED' on a stack of ordinary requests.", "Democracy"],
  ["dont-scroll-away-democracy", "Don't Scroll Away Democracy", "Put the phone down. Sometimes.", "A giant hand about to swipe, blocked by a tiny mascot with a stop sign.", "Youth"],
  ["headlines-not-hexes", "Headlines, Not Hexes", "Facts over vibes.", "A newspaper being read by a mascot who is refusing a crystal ball.", "Free Speech"],
  ["independent-and-loud", "Independent & Loud", "The two settings.", "A mascot with a boombox on one shoulder and a scroll in the other hand.", "Free Speech"],
  ["fine-i-will-organize", "Fine, I Will Organize", "A reluctant hero arc.", "A tired mascot rolling up sleeves in front of a whiteboard.", "Resilience"],
  ["sticker-as-a-siren", "Sticker As A Siren", "Small. Persistent. Loud.", "A tiny cockroach sticker glowing on a lamp post at night.", "Satire"],
];

function build(): Product[] {
  const combined: Seed[] = [
    ...seeds,
    ...extraSeeds.map(([slug, title, desc, story, category]) => ({ slug, title, desc, story, category })),
  ];
  return combined.map((s, i) => {
    const img = IMG_POOL[i % IMG_POOL.length];
    const gallery = [
      img,
      IMG_POOL[(i + 3) % IMG_POOL.length],
      IMG_POOL[(i + 7) % IMG_POOL.length],
    ];
    return {
      id: i + 1,
      slug: s.slug,
      img,
      gallery,
      title: s.title,
      desc: s.desc,
      story: s.story,
      price: PRICES[i % PRICES.length],
      tag: TAGS[i % TAGS.length],
      accent: ACCENTS[i % ACCENTS.length],
      category: s.category,
    };
  });
}

export const products: Product[] = build();

export const categories: string[] = Array.from(new Set(products.map((p) => p.category)));

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