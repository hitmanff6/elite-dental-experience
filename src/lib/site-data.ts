/**
 * Central content source for Aurelia Dental Studio.
 * All copy is original. Keeping it here keeps pages thin and type-safe.
 */

import heroClinic from "@/assets/hero-clinic.jpg";
import smileMakeover from "@/assets/smile-makeover.jpg";
import implants from "@/assets/implants.jpg";
import whitening from "@/assets/whitening.jpg";
import technologyImg from "@/assets/technology.jpg";
import clinicLounge from "@/assets/clinic-lounge.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

export const images = {
  heroClinic,
  smileMakeover,
  implants,
  whitening,
  technologyImg,
  clinicLounge,
  doctor1,
  doctor2,
  doctor3,
};

export const clinic = {
  name: "Aurelia Dental Studio",
  tagline: "Precision dentistry, quietly luxurious.",
  phone: "+1 (415) 555-0182",
  emergencyPhone: "+1 (415) 555-0911",
  whatsapp: "14155550182",
  email: "care@aureliadental.com",
  hours: [
    { day: "Monday – Thursday", time: "8:00 AM – 7:00 PM" },
    { day: "Friday", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday", time: "9:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Emergency care only" },
  ],
  locations: [
    {
      name: "Aurelia Harbour Studio",
      address: "218 Marina Crescent, Suite 900, San Francisco, CA 94111",
      phone: "+1 (415) 555-0182",
      note: "Flagship clinic · 8 suites · underground parking",
    },
    {
      name: "Aurelia Uptown Studio",
      address: "44 Presidio Row, Level 3, San Francisco, CA 94129",
      phone: "+1 (415) 555-0164",
      note: "Implant & surgical centre · CBCT imaging on site",
    },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export const whatsappLink = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
  "Hello Aurelia Dental Studio, I'd like to book a consultation.",
)}`;

/* ── Navigation ─────────────────────────────────────────── */

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

/* ── Trust metrics ──────────────────────────────────────── */

export const stats = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 15000, suffix: "+", label: "Smiles Transformed" },
  { value: 50, suffix: "+", label: "Clinical Awards" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
];

/* ── Why choose us ──────────────────────────────────────── */

export const advantages = [
  {
    icon: "Microscope",
    title: "Modern Technology",
    body: "3D intraoral scanning, guided implant surgery and same-day ceramics — no messy impressions, no guesswork.",
  },
  {
    icon: "GraduationCap",
    title: "Experienced Clinicians",
    body: "Board-certified specialists with fellowship training in implantology, prosthodontics and orthodontics.",
  },
  {
    icon: "Wallet",
    title: "Transparent Pricing",
    body: "Fixed written quotes before treatment starts, plus 0% interest plans across 6, 12 and 24 months.",
  },
  {
    icon: "HeartPulse",
    title: "Comfort-First Care",
    body: "Computer-controlled anaesthesia, warm blankets and optional sedation make appointments genuinely calm.",
  },
  {
    icon: "CalendarClock",
    title: "Flexible Appointments",
    body: "Early mornings, late evenings and Saturday clinics — booked in under 60 seconds online.",
  },
  {
    icon: "ScanLine",
    title: "Digital Diagnostics",
    body: "Low-dose CBCT and AI-assisted radiographs surface problems years before they become painful.",
  },
];

/* ── Services ───────────────────────────────────────────── */

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  icon: string;
  duration: string;
  from: string;
  benefits: string[];
  steps: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    short: "Permanent, natural-feeling replacements for missing teeth.",
    description:
      "Our implant programme uses CBCT-guided planning and surgical templates so the titanium fixture sits exactly where the final crown needs it. Most patients walk out with a provisional tooth the same day and return for the definitive ceramic once healing is complete.",
    image: implants,
    icon: "Anchor",
    duration: "1 – 4 visits",
    from: "$1,850",
    benefits: [
      "Guided placement accurate to within 0.3 mm",
      "Preserves jawbone and facial structure",
      "Same-day provisional crown in most cases",
      "10-year fixture warranty with routine reviews",
    ],
    steps: [
      { title: "3D assessment", body: "A low-dose CBCT scan maps bone volume, nerves and sinus position." },
      { title: "Digital planning", body: "We design the final tooth first, then plan the implant to match it." },
      { title: "Guided placement", body: "A printed surgical guide places the fixture in under an hour." },
      { title: "Final restoration", body: "A hand-layered zirconia crown is fitted and shade-matched." },
    ],
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    short: "A fully designed smile, previewed before we touch a tooth.",
    description:
      "A smile makeover blends whitening, alignment, veneers and gum contouring into one plan. We photograph and scan your face, design the smile digitally, then trial it in your mouth as a removable mock-up so you approve the result before anything is permanent.",
    image: smileMakeover,
    icon: "Sparkles",
    duration: "3 – 6 weeks",
    from: "$4,200",
    benefits: [
      "Digital Smile Design preview and trial smile",
      "Face-driven proportions, not template teeth",
      "Minimal or no-prep options where suitable",
      "Photographic shade matching under three light sources",
    ],
    steps: [
      { title: "Smile analysis", body: "Facial photography, video and scans capture how your smile moves." },
      { title: "Digital design", body: "We render the proposed smile and review it together on screen." },
      { title: "Trial smile", body: "A wearable mock-up lets you test the shape and length for a week." },
      { title: "Final artistry", body: "Ceramists hand-layer each unit for depth and natural translucency." },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    short: "Clinically supervised brightening without sensitivity.",
    description:
      "We combine an in-chair LED-activated session with custom take-home trays calibrated to your enamel. Desensitising agents are applied throughout, so the vast majority of patients report no discomfort at all.",
    image: whitening,
    icon: "Sun",
    duration: "60 – 90 minutes",
    from: "$390",
    benefits: [
      "Up to eight shades brighter in one visit",
      "Enamel-safe formulations with fluoride recovery",
      "Custom-milled trays for maintenance",
      "Complimentary six-month top-up gel",
    ],
    steps: [
      { title: "Shade record", body: "We photograph and log your starting shade for an honest comparison." },
      { title: "Protection", body: "Gums and lips are isolated with a light-cured barrier." },
      { title: "Activation", body: "Three LED cycles lift stain from within the enamel matrix." },
      { title: "Maintenance", body: "Take-home trays keep the result stable for years." },
    ],
  },
  {
    slug: "root-canal",
    title: "Root Canal Therapy",
    short: "Save the natural tooth — comfortably, in a single visit.",
    description:
      "Modern endodontics under magnification is nothing like its reputation. Using rotary nickel-titanium files, apex locators and a surgical microscope, we clean and seal the canal system precisely, usually in one appointment.",
    image: technologyImg,
    icon: "ShieldCheck",
    duration: "60 – 120 minutes",
    from: "$680",
    benefits: [
      "Microscope-assisted, single-visit protocol",
      "Painless computer-controlled anaesthesia",
      "Bioceramic sealing for long-term success",
      "Crown planning included in the quote",
    ],
    steps: [
      { title: "Diagnosis", body: "Pulp testing and radiographs confirm the source of pain." },
      { title: "Isolation", body: "A rubber dam keeps the field sterile throughout." },
      { title: "Cleaning & shaping", body: "Rotary instrumentation with continuous irrigation." },
      { title: "Seal & restore", body: "Bioceramic obturation, then a protective crown." },
    ],
  },
  {
    slug: "veneers",
    title: "Porcelain Veneers",
    short: "Hand-crafted ceramic that reads as real enamel.",
    description:
      "Ultra-thin lithium disilicate veneers correct shape, shade, chips and small gaps with minimal tooth reduction. Every unit is layered by a master ceramist and characterised to match the translucency of your natural teeth.",
    image: smileMakeover,
    icon: "Gem",
    duration: "2 – 3 visits",
    from: "$1,150 per tooth",
    benefits: [
      "0.3 mm minimal-prep technique where possible",
      "Stain-resistant, colour-stable ceramic",
      "Bonded under microscope for invisible margins",
      "Night guard included to protect your investment",
    ],
    steps: [
      { title: "Design", body: "Proportions are set from your face, lips and smile line." },
      { title: "Preparation", body: "Conservative reduction guided by the approved mock-up." },
      { title: "Craftsmanship", body: "Ceramists layer, fire and characterise each veneer." },
      { title: "Bonding", body: "Adhesive cementation with meticulous margin finishing." },
    ],
  },
  {
    slug: "braces-aligners",
    title: "Braces & Clear Aligners",
    short: "Discreet alignment planned with 3D movement simulation.",
    description:
      "Whether you choose ceramic brackets or clear aligners, treatment begins with a digital simulation of every tooth movement. You see the projected finish before starting, and remote monitoring reduces the number of chair visits.",
    image: technologyImg,
    icon: "AlignHorizontalDistributeCenter",
    duration: "6 – 18 months",
    from: "$2,950",
    benefits: [
      "3D movement preview at consultation",
      "Remote check-ins between appointments",
      "Ceramic, lingual and clear aligner options",
      "Fixed retainers included at completion",
    ],
    steps: [
      { title: "Records", body: "Scans, photographs and a cephalometric analysis." },
      { title: "Simulation", body: "We model the full movement sequence and share it with you." },
      { title: "Active phase", body: "Aligner changes or adjustments every four to eight weeks." },
      { title: "Retention", body: "Bonded retainers plus a clear night retainer." },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    short: "Gentle, playful visits that build lifelong confidence.",
    description:
      "Our children's suite is designed around calm: shorter appointments, tell-show-do explanations and no rushed treatment. Preventive sealants, fluoride varnish and habit coaching keep young patients cavity-free.",
    image: clinicLounge,
    icon: "Baby",
    duration: "30 – 45 minutes",
    from: "$120",
    benefits: [
      "Dedicated child-friendly suite and waiting lounge",
      "Preventive sealants and fluoride programmes",
      "Behaviour-guidance trained clinicians",
      "Parent coaching on diet and brushing technique",
    ],
    steps: [
      { title: "Meet & greet", body: "A no-treatment first visit to build familiarity." },
      { title: "Gentle exam", body: "Counting teeth, ride in the chair, photographs." },
      { title: "Prevention", body: "Cleaning, sealants and varnish as needed." },
      { title: "Home plan", body: "A simple routine parents can actually keep up." },
    ],
  },
  {
    slug: "emergency-dentistry",
    title: "Emergency Dentistry",
    short: "Same-day relief, seven days a week.",
    description:
      "Broken tooth, swelling, lost crown or sudden pain — call us and we will see you the same day. Our emergency line is answered by a clinician, not a call centre, so you get real advice within minutes.",
    image: clinicLounge,
    icon: "Siren",
    duration: "Same day",
    from: "$95 assessment",
    benefits: [
      "Clinician-answered emergency line",
      "Reserved same-day slots every weekday",
      "Trauma, swelling and pain protocols",
      "Fee credited toward definitive treatment",
    ],
    steps: [
      { title: "Call", body: "Speak to a dentist for immediate triage advice." },
      { title: "Rapid assessment", body: "Focused exam and radiograph on arrival." },
      { title: "Relief", body: "Pain and infection controlled the same visit." },
      { title: "Definitive plan", body: "A costed plan for the permanent repair." },
    ],
  },
];

/* ── Doctors ────────────────────────────────────────────── */

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
  focus: string[];
  linkedin: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-elena-marchetti",
    name: "Dr. Elena Marchetti",
    role: "Clinical Director & Prosthodontist",
    qualification: "DDS, MSc Prosthodontics",
    experience: "22 years",
    specialization: "Smile design & full-mouth rehabilitation",
    image: doctor1,
    bio: "Elena founded Aurelia after two decades rebuilding complex smiles across Europe and North America. She lectures internationally on digital smile design and believes the best dentistry is the kind nobody notices.",
    focus: ["Digital Smile Design", "Porcelain veneers", "Full-mouth rehabilitation", "Ceramic artistry"],
    linkedin: "https://linkedin.com",
  },
  {
    slug: "dr-julian-reyes",
    name: "Dr. Julian Reyes",
    role: "Implant & Oral Surgeon",
    qualification: "DMD, Fellow ITI Implantology",
    experience: "18 years",
    specialization: "Guided implantology & bone grafting",
    image: doctor2,
    bio: "Julian has placed more than 6,000 implants and pioneered our fully guided surgical workflow. His patients consistently describe the experience as calmer and faster than they expected.",
    focus: ["Guided implant surgery", "Sinus lift & grafting", "All-on-4 rehabilitation", "Sedation dentistry"],
    linkedin: "https://linkedin.com",
  },
  {
    slug: "dr-aria-nasser",
    name: "Dr. Aria Nasser",
    role: "Orthodontist & Pediatric Lead",
    qualification: "BDS, MOrth RCS",
    experience: "12 years",
    specialization: "Clear aligners & early interceptive care",
    image: doctor3,
    bio: "Aria splits her week between adult aligner cases and our children's suite. She is known for turning nervous first visits into something kids genuinely look forward to.",
    focus: ["Clear aligner therapy", "Ceramic & lingual braces", "Interceptive orthodontics", "Pediatric prevention"],
    linkedin: "https://linkedin.com",
  },
];

/* ── Technology ─────────────────────────────────────────── */

export const technologies = [
  {
    icon: "ScanLine",
    title: "3D Intraoral Scanning",
    body: "A wand-sized camera replaces impression trays, capturing 6,000 frames per second for a perfect digital model.",
  },
  {
    icon: "Radar",
    title: "Low-Dose CBCT",
    body: "Volumetric imaging at up to 80% less radiation, revealing bone, nerve and sinus anatomy in three dimensions.",
  },
  {
    icon: "Cpu",
    title: "Same-Day Ceramics",
    body: "In-house milling and sintering means crowns are designed, made and fitted within a single appointment.",
  },
  {
    icon: "Zap",
    title: "Soft-Tissue Laser",
    body: "Precise gum contouring with minimal bleeding, faster healing and, in most cases, no sutures.",
  },
  {
    icon: "Microscope",
    title: "Surgical Microscope",
    body: "Up to 25× magnification for endodontics and margin finishing that the naked eye simply cannot match.",
  },
  {
    icon: "Brain",
    title: "AI Radiograph Review",
    body: "Machine-learning analysis flags early caries and bone changes as a second pair of eyes on every scan.",
  },
];

/* ── Patient journey ────────────────────────────────────── */

export const journey = [
  { step: "01", title: "Consultation", body: "A relaxed 45-minute conversation about what you want to change." },
  { step: "02", title: "Digital Scan", body: "Scans, photographs and imaging build a complete digital twin." },
  { step: "03", title: "Treatment Plan", body: "Options, timelines and fixed written pricing — no surprises." },
  { step: "04", title: "Procedure", body: "Comfort-first appointments delivered by the relevant specialist." },
  { step: "05", title: "Recovery", body: "Written aftercare, a direct number and a check-in call next day." },
  { step: "06", title: "Follow-Up", body: "Reviews at 1 week, 3 months and annually to protect the result." },
];

/* ── Testimonials ───────────────────────────────────────── */

export const testimonials = [
  {
    name: "Naomi Feldstein",
    treatment: "Porcelain veneers",
    rating: 5,
    quote:
      "I spent two years researching clinics. Aurelia was the only one that showed me a trial smile before touching a tooth. The result looks like the teeth I should have been born with.",
    hasVideo: true,
  },
  {
    name: "Marcus Bell",
    treatment: "Dental implants",
    rating: 5,
    quote:
      "Dr. Reyes placed two implants in under an hour. I took one paracetamol that evening and went back to work the next morning. Genuinely astonishing.",
    hasVideo: false,
  },
  {
    name: "Priya Raghunathan",
    treatment: "Clear aligners",
    rating: 5,
    quote:
      "The 3D simulation showed exactly where my teeth would end up, and eleven months later that is precisely what happened. Remote check-ins meant only four visits total.",
    hasVideo: true,
  },
  {
    name: "Tomás Oliveira",
    treatment: "Root canal therapy",
    rating: 5,
    quote:
      "I arrived in serious pain at 8am and left comfortable by 10. Nobody made me feel bad for leaving it too long. That kindness mattered as much as the treatment.",
    hasVideo: false,
  },
  {
    name: "Hannah Kirk",
    treatment: "Smile makeover",
    rating: 5,
    quote:
      "Every stage was explained, photographed and costed up front. I paid exactly what the quote said. The whole thing felt more like a design studio than a dental practice.",
    hasVideo: false,
  },
  {
    name: "Daniel Osei",
    treatment: "Pediatric care",
    rating: 5,
    quote:
      "My daughter used to cry in waiting rooms. Dr. Nasser spent the first visit just counting her teeth. Now she asks when we are going back.",
    hasVideo: false,
  },
];

/* ── FAQ ────────────────────────────────────────────────── */

export const faqCategories = ["Treatments", "Comfort", "Pricing", "Appointments"] as const;
export type FaqCategory = (typeof faqCategories)[number];

export const faqs: { category: FaqCategory; question: string; answer: string }[] = [
  {
    category: "Treatments",
    question: "How long do dental implants actually last?",
    answer:
      "With good hygiene and routine reviews, the titanium fixture is designed to last decades — our own recall data shows over 97% still functioning at ten years. The visible crown typically needs replacing after 12 to 18 years, much like any other restoration.",
  },
  {
    category: "Treatments",
    question: "Will veneers damage my natural teeth?",
    answer:
      "Modern minimal-prep veneers remove roughly 0.3 mm of enamel, and in some cases nothing at all. We always show you the exact reduction planned on your digital model before you consent.",
  },
  {
    category: "Treatments",
    question: "Are clear aligners as effective as braces?",
    answer:
      "For the majority of crowding, spacing and mild bite corrections, yes. Complex skeletal cases still respond better to fixed appliances, and we will tell you honestly which category you fall into at consultation.",
  },
  {
    category: "Comfort",
    question: "I am genuinely anxious about the dentist. What can you do?",
    answer:
      "Tell us at booking and we will schedule a longer, treatment-free first visit. We offer computer-controlled anaesthesia that removes the sting of injections, noise-cancelling headphones, weighted blankets and oral or IV sedation where appropriate.",
  },
  {
    category: "Comfort",
    question: "Does a root canal hurt?",
    answer:
      "The pain people associate with root canals comes from the infection, not the treatment. Under proper anaesthesia the procedure feels similar to having a filling, and most patients report immediate relief afterwards.",
  },
  {
    category: "Comfort",
    question: "Can I bring someone with me?",
    answer:
      "Always. Our treatment suites have a companion chair, and for anxious patients we actively encourage bringing a friend or family member.",
  },
  {
    category: "Pricing",
    question: "Do you provide fixed quotes?",
    answer:
      "Yes. After your assessment you receive a written plan with itemised, fixed pricing. If anything changes clinically we pause and re-quote before proceeding — you will never receive an unexpected invoice.",
  },
  {
    category: "Pricing",
    question: "Do you offer payment plans?",
    answer:
      "We offer 0% interest plans over 6, 12 and 24 months, plus longer-term financing on larger reconstructive cases. Approval usually takes a few minutes at reception.",
  },
  {
    category: "Pricing",
    question: "Do you accept insurance?",
    answer:
      "We work with all major providers and submit pre-authorisations on your behalf. Our treatment coordinator will confirm your expected out-of-pocket amount before you commit.",
  },
  {
    category: "Appointments",
    question: "How quickly can I be seen?",
    answer:
      "New consultations are typically available within three to five working days. Emergencies are seen the same day — call our emergency line and a clinician will answer directly.",
  },
  {
    category: "Appointments",
    question: "What should I bring to my first visit?",
    answer:
      "A list of any medications, details of your insurance if you have it, and any recent radiographs from a previous dentist. Everything else we will capture on the day.",
  },
  {
    category: "Appointments",
    question: "Can I book outside working hours?",
    answer:
      "We hold early-morning slots from 7:30 AM and evening appointments until 7:00 PM Monday to Thursday, plus Saturday morning clinics.",
  },
];

/* ── Blog ───────────────────────────────────────────────── */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: { heading: string; body: string }[];
};

export const posts: Post[] = [
  {
    slug: "what-to-expect-from-a-smile-makeover",
    title: "What Actually Happens During a Smile Makeover",
    excerpt:
      "From the first photograph to the final polish — a transparent walkthrough of the six weeks that change how you smile.",
    category: "Cosmetic",
    date: "2026-07-14",
    readTime: "7 min read",
    author: "Dr. Elena Marchetti",
    image: smileMakeover,
    content: [
      {
        heading: "It starts with your face, not your teeth",
        body: "A smile that suits you is derived from facial proportions: the width of your smile against your face, how much tooth shows at rest, the curve of your lower lip. We photograph and film all of this before any clinical work is discussed, because teeth designed in isolation always look like teeth designed in isolation.",
      },
      {
        heading: "The design phase",
        body: "Your scans and photographs are combined into a digital model where we sculpt the proposed smile. You see it rendered on your own face, and we adjust length, width and character together. Nothing is manufactured until you are genuinely happy with what you are looking at.",
      },
      {
        heading: "The trial smile",
        body: "This is the step most clinics skip. We convert the approved design into a temporary resin mock-up worn over your existing teeth for a week. You eat with it, speak with it and show it to people whose opinion you trust. Any adjustment made at this stage costs nothing.",
      },
      {
        heading: "Craft and delivery",
        body: "Once approved, master ceramists hand-layer each unit, building translucency and surface texture in stages. Fitting appointments are unhurried — we bond under magnification and refine the margins until the transition to gum tissue is invisible.",
      },
    ],
  },
  {
    slug: "how-to-stop-tooth-sensitivity",
    title: "Why Your Teeth Are Sensitive — And What Reliably Fixes It",
    excerpt:
      "Cold water shouldn't hurt. Here are the five real causes of sensitivity and the evidence-backed way to treat each one.",
    category: "Prevention",
    date: "2026-06-02",
    readTime: "5 min read",
    author: "Dr. Aria Nasser",
    image: technologyImg,
    content: [
      {
        heading: "Sensitivity is a symptom, not a diagnosis",
        body: "Exposed dentine allows fluid movement inside microscopic tubules to stimulate the nerve. The question is always why the dentine became exposed — gum recession, enamel erosion, a cracked cusp, recent whitening or grinding all produce the same sensation through different mechanisms.",
      },
      {
        heading: "Brushing harder makes it worse",
        body: "Abrasive technique and medium-to-hard bristles wear away the very tissue protecting the nerve. A soft brush held at forty-five degrees, moved in small circles with almost no pressure, cleans better and preserves more.",
      },
      {
        heading: "Acid timing matters more than acid avoidance",
        body: "You do not need to give up citrus or sparkling water. You do need to stop brushing within thirty minutes of consuming them, because softened enamel abrades easily. Rinse with water, wait, then brush.",
      },
      {
        heading: "When to come in",
        body: "Sensitivity that lingers more than thirty seconds after a cold stimulus, or that wakes you at night, points to pulp involvement rather than simple dentine exposure. That deserves a same-week appointment, not a different toothpaste.",
      },
    ],
  },
  {
    slug: "are-dental-implants-worth-it",
    title: "Dental Implants vs. Bridges: An Honest Cost Comparison",
    excerpt:
      "Implants cost more up front. Over twenty years, the arithmetic often reverses. Here is the maths, laid out plainly.",
    category: "Implants",
    date: "2026-04-21",
    readTime: "6 min read",
    author: "Dr. Julian Reyes",
    image: implants,
    content: [
      {
        heading: "The up-front difference",
        body: "A three-unit bridge typically costs less than a single implant and crown. That comparison is accurate but incomplete, because it ignores what happens to the teeth either side and to the bone underneath.",
      },
      {
        heading: "The hidden cost of preparation",
        body: "A conventional bridge requires cutting down two healthy neighbouring teeth. Those teeth now carry the load of three and are statistically more likely to need root canal treatment later. Each of those interventions carries its own fee.",
      },
      {
        heading: "Bone is the long game",
        body: "An implant transmits chewing force into the jawbone, which preserves its volume. An empty socket under a bridge resorbs steadily, changing facial support and eventually making any future implant more complex and more expensive.",
      },
      {
        heading: "When a bridge is still the right answer",
        body: "Insufficient bone with a patient who declines grafting, certain medical conditions, or a neighbouring tooth already heavily restored can all make a bridge the sensible clinical choice. We will say so plainly when that is the case.",
      },
    ],
  },
  {
    slug: "children-first-dental-visit",
    title: "Your Child's First Dental Visit: A Parent's Playbook",
    excerpt:
      "The words you use at home matter more than anything we do in the chair. A practical guide to raising a confident patient.",
    category: "Pediatric",
    date: "2026-03-08",
    readTime: "4 min read",
    author: "Dr. Aria Nasser",
    image: clinicLounge,
    content: [
      {
        heading: "Come early, come often",
        body: "The first visit should happen around the first birthday, long before anything can go wrong. Early visits are about familiarity: the smell of the room, the sound of the chair, the friendly face. Nothing needs to be done.",
      },
      {
        heading: "Watch your vocabulary",
        body: "Words like hurt, needle, drill and brave introduce a fear that was not there. Say we are going to count your teeth. Avoid promising there will be nothing scary — that phrasing itself implies something might be.",
      },
      {
        heading: "Let them lead",
        body: "We use a tell-show-do approach: explain the instrument, demonstrate it on a finger, then use it. Children who feel in control almost never panic, and a child who says stop is always listened to.",
      },
      {
        heading: "Build the routine at home",
        body: "Two minutes, twice daily, with a fluoride paste appropriate for their age. Brush their teeth for them until they can reliably tie their own shoelaces — coordination for one is coordination for the other.",
      },
    ],
  },
];

/* ── Gallery / before-after ─────────────────────────────── */

export const galleryFilters = ["All", "Cosmetic", "Implants", "Orthodontics", "Clinic"] as const;

export const galleryItems = [
  { id: 1, title: "Ceramic veneer case, upper six", category: "Cosmetic", image: smileMakeover },
  { id: 2, title: "Guided single implant, lower molar", category: "Implants", image: implants },
  { id: 3, title: "LED-assisted whitening result", category: "Cosmetic", image: whitening },
  { id: 4, title: "Digital scanning suite", category: "Clinic", image: technologyImg },
  { id: 5, title: "Reception and patient lounge", category: "Clinic", image: clinicLounge },
  { id: 6, title: "Aligner finish, 11 months", category: "Orthodontics", image: smileMakeover },
  { id: 7, title: "Full-arch rehabilitation", category: "Implants", image: implants },
  { id: 8, title: "Treatment suite, harbour view", category: "Clinic", image: heroClinic },
];
