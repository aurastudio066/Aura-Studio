/* =========================================================
   AURA STUDIO — SERVICES
   Edit, reorder or add services here. The services grid and the
   contact form's "Service required" list both come from this file.

   symbol    One or two characters shown in the tile ("අA", "Fl"…)
   examples  A portfolio filter id to link to real work (optional).
             Leave it out and the card shows "Ask about this" instead,
             which opens WhatsApp with the service name.
   ========================================================= */

window.SERVICES = [
  { symbol: "අA", title: "Sinhala & English Typesetting", text: "Sinhala and English documents with tables, diagrams, equations and chemical structures set cleanly.", examples: "typesetting" },
  { symbol: "Tp", title: "Tute & Paper Making", text: "Tutes, model papers, MCQ papers and past paper collections, ready to print.", examples: "typesetting" },
  { symbol: "Ca", title: "Campus Assignments, Presentations & Posters", text: "Professionally formatted assignments, polished presentation slides and academic posters." },
  { symbol: "Sm", title: "Social Media Post Design", text: "Posts for classes, businesses and events, in Sinhala and English.", examples: "social" },
  { symbol: "Pm", title: "Facebook, TikTok & Instagram Page Management", text: "We run your pages with regular post designs and short videos." },
  { symbol: "Fl", title: "Handbill / Flyer Design", text: "Handbills and flyers that are easy to read at a glance.", examples: "flyers" },
  { symbol: "Bn", title: "Banner Design", text: "Large-format banners and posters, prepared at full print resolution.", examples: "banners" },
  { symbol: "Cv", title: "Cover Page Design", text: "Covers for tutes, papers and reports." },
  { symbol: "Th", title: "Thumbnail Design", text: "Video thumbnails that stand out in a feed." },
  { symbol: "Vd", title: "Short Promotional Video Creation", text: "Short promotional videos for Facebook, TikTok and Instagram." },
  { symbol: "Re", title: "CV / Resume Design", text: "Clean, professional CVs and resumes." },
  { symbol: "Br", title: "Branding & Advertising", text: "Brand visuals and advertising creatives for local businesses.", examples: "business" },
  { symbol: "+", title: "Other Creative Digital Services", text: "Need something else? Tell us what you have in mind." }
];

/* Homepage "Design categories" cards. Each opens the portfolio on that filter.
   cover = any image from images/portfolio/ or images/typesetting/ */
window.DESIGN_CATEGORIES = [
  { filter: "social", title: "Social media design", cover: "images/portfolio/thumb/al-physics-electric-fields.webp" },
  { filter: "flyers", title: "Posters & flyers", cover: "images/portfolio/thumb/al-physics-paper-class-flyer.webp" },
  { filter: "banners", title: "Banners & large format", cover: "images/portfolio/thumb/ol-commerce-institute-poster.webp" },
  { filter: "education", title: "Educational design", cover: "images/portfolio/thumb/institute-new-classes-2026.webp" },
  { filter: "typesetting", title: "Typesetting", cover: "images/typesetting/thumb/sm-phy-centre-of-gravity-tute-p03.webp" },
  { filter: "business", title: "Business promotion", cover: "images/portfolio/thumb/restaurant-food-menu.webp" }
];
