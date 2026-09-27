/* =========================================================
   AURA STUDIO — PORTFOLIO DATA
   This is the only file you edit to add, remove or reorder work.
   The website builds the portfolio from this list automatically.

   TO ADD A NEW DESIGN
   1. Export it from Canva/Photoshop as JPG or WebP (about 2000 px on the long side).
   2. Put it in  images/portfolio/full/  (for example  my-new-poster.jpg).
   3. Optional: a smaller copy (about 800 px) in  images/portfolio/thumb/  loads faster.
   4. Copy one block below, paste it where you want it to appear, and edit it.

   FIELDS
   id           Short unique name, lowercase with dashes. Also used in share links.
   title        Shown under the design.
   categories   One or more filter ids from PORTFOLIO_FILTERS (see bottom of this file).
   size         Format shown under the title, e.g. "A4 flyer" or "Banner, 5 × 3 ft".
   image        The full-size image (required).
   thumb        Smaller image for the grid (optional; uses image if left out).
   gallery      Extra images for the same project, e.g. other sizes (optional).
   description  One or two sentences shown when the design is opened.
   year         e.g. "2026" (optional; hidden when empty).
   featured     true = also shown on the homepage (keep this to about 8).
   visible      false = hidden everywhere without deleting it.
   ========================================================= */

window.PORTFOLIO = [
  {
    id: "al-chemistry-2028-launch",
    title: "A/L Chemistry 2028 class launch",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/al-chemistry-2028-launch.webp",
    thumb: "images/portfolio/thumb/al-chemistry-2028-launch.webp",
    description: "Bilingual launch post for Sinhala- and English-medium A/L Chemistry classes, with a separate theory schedule for each medium.",
    year: "",
    featured: true,
    visible: true
  },
  {
    id: "new-year-2026-accounting",
    title: "New Year 2026 greeting",
    categories: ["social", "business"],
    size: "Social media post",
    image: "images/portfolio/full/new-year-2026-accounting.webp",
    thumb: "images/portfolio/thumb/new-year-2026-accounting.webp",
    description: "Gold-on-black New Year post for an accounting teacher, built around a cut-out portrait and 3D year numerals.",
    year: "",
    featured: true,
    visible: true
  },
  {
    id: "restaurant-delivery-poster",
    title: "Restaurant delivery poster",
    categories: ["banners", "business"],
    size: "Poster, 2 × 3 ft",
    image: "images/portfolio/full/restaurant-delivery-poster.webp",
    thumb: "images/portfolio/thumb/restaurant-delivery-poster.webp",
    description: "Sinhala delivery promotion for a restaurant, with food photography, a WhatsApp order number and delivery hours.",
    year: "",
    featured: true,
    visible: true
  },
  {
    id: "land-sale-post",
    title: "Land sale announcement",
    categories: ["social", "business"],
    size: "Social media post",
    image: "images/portfolio/full/land-sale-post.webp",
    thumb: "images/portfolio/thumb/land-sale-post.webp",
    description: "Sinhala property sale post for two land plots near a main road, listing plot sizes, approvals and a contact number.",
    year: "",
    featured: true,
    visible: true
  },
  {
    id: "al-physics-class-schedule",
    title: "A/L Physics class schedule",
    categories: ["flyers", "education"],
    size: "A4 flyer",
    image: "images/portfolio/full/al-physics-class-schedule.webp",
    thumb: "images/portfolio/thumb/al-physics-class-schedule.webp",
    description: "Black-and-white A4 schedule covering theory, revision and paper classes, with the lesson topics for each session.",
    year: "",
    featured: true,
    visible: true
  },
  {
    id: "al-economics-online-revision",
    title: "A/L Economics online revision",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/al-economics-online-revision.webp",
    thumb: "images/portfolio/thumb/al-economics-online-revision.webp",
    description: "Online revision campaign listing theory, lesson papers, revision, short notes and Zoom details, with a Sinhala schedule.",
    year: "",
    featured: true,
    visible: true
  },
  {
    id: "ol-commerce-banner",
    title: "O/L Commerce class banner",
    categories: ["banners", "education"],
    size: "Banner, 5 × 3 ft",
    image: "images/portfolio/full/ol-commerce-banner.webp",
    thumb: "images/portfolio/thumb/ol-commerce-banner.webp",
    description: "Wide banner for Grade 10 and 11 Commerce classes offered in Sinhala and English medium.",
    year: "",
    featured: true,
    visible: true
  },
  {
    id: "al-physics-revision-2027",
    title: "A/L Physics 2027 revision",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/al-physics-revision-2027.webp",
    thumb: "images/portfolio/thumb/al-physics-revision-2027.webp",
    description: "English-medium revision announcement starting with electric fields and vectors, with the date, time and venue.",
    year: "",
    featured: true,
    visible: true
  },
  {
    id: "music-concert-poster",
    title: "Concert poster",
    categories: ["social", "business"],
    size: "Social media post",
    image: "images/portfolio/full/music-concert-poster.webp",
    thumb: "images/portfolio/thumb/music-concert-poster.webp",
    description: "Event poster for a music concert in Colombo, with the lineup, date, venue and ticket details.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "restaurant-food-menu",
    title: "Restaurant food menu",
    categories: ["banners", "business"],
    size: "Menu board, 707 × 500 mm",
    image: "images/portfolio/full/restaurant-food-menu.webp",
    thumb: "images/portfolio/thumb/restaurant-food-menu.webp",
    gallery: ["images/portfolio/full/restaurant-food-menu-2.webp"],
    description: "The full menu in landscape and portrait layouts, with prices by portion size across every section.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "al-physics-electric-fields",
    title: "Electric fields online revision",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/al-physics-electric-fields.webp",
    thumb: "images/portfolio/thumb/al-physics-electric-fields.webp",
    description: "Sinhala schedule for a five-week online Physics revision series, with each lesson topic and date.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "al-physics-2028-launch",
    title: "A/L Physics 2028 class launch",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/al-physics-2028-launch.webp",
    thumb: "images/portfolio/thumb/al-physics-2028-launch.webp",
    description: "Launch post for Sinhala- and English-medium A/L Physics classes, with a cut-out portrait and class locations.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "al-chemistry-2027-revision",
    title: "A/L Chemistry 2027 revision and paper class",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/al-chemistry-2027-revision.webp",
    thumb: "images/portfolio/thumb/al-chemistry-2027-revision.webp",
    description: "English-medium announcement with separate revision and paper class schedules and the venue.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "al-physics-2027-paper-class",
    title: "A/L Physics 2027 paper class",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/al-physics-2027-paper-class.webp",
    thumb: "images/portfolio/thumb/al-physics-2027-paper-class.webp",
    description: "English-medium paper class announcement with twice-weekly times and a first-two-weeks-free offer.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "al-economics-2027-theory",
    title: "A/L Economics 2027 theory class",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/al-economics-2027-theory.webp",
    thumb: "images/portfolio/thumb/al-economics-2027-theory.webp",
    description: "Sinhala announcement for a new theory lesson, with the weekly day and time.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "ol-commerce-institute-poster",
    title: "O/L Commerce institute poster",
    categories: ["banners", "education"],
    size: "Poster, 3 × 4 ft",
    image: "images/portfolio/full/ol-commerce-institute-poster.webp",
    thumb: "images/portfolio/thumb/ol-commerce-institute-poster.webp",
    description: "Large-format poster for an institute's Commerce classes, with schedules for both grades and both mediums.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "land-clearing-flyer",
    title: "Land clearing and excavation flyer",
    categories: ["flyers", "business"],
    size: "A4 flyer",
    image: "images/portfolio/full/land-clearing-flyer.webp",
    thumb: "images/portfolio/thumb/land-clearing-flyer.webp",
    description: "English A4 flyer for a US contractor, covering services, equipment rental and contact numbers.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "al-chemistry-titration-class",
    title: "A/L Chemistry titration and redox class",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/al-chemistry-titration-class.webp",
    thumb: "images/portfolio/thumb/al-chemistry-titration-class.webp",
    description: "Square announcement for a revision and paper class, with a boxed date and the weekly times.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "ol-commerce-2026-sinhala",
    title: "O/L Commerce 2026 new classes",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/ol-commerce-2026-sinhala.webp",
    thumb: "images/portfolio/thumb/ol-commerce-2026-sinhala.webp",
    description: "Sinhala-medium post for Grade 10 and 11 Business and Accounting Studies classes, with times for each grade.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "ol-commerce-2026-english",
    title: "O/L Commerce 2026 new classes (English)",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/ol-commerce-2026-english.webp",
    thumb: "images/portfolio/thumb/ol-commerce-2026-english.webp",
    description: "English version of the Grade 10 and 11 class announcement, with weekend times.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "new-year-2026-commerce",
    title: "New Year 2026 greeting for students",
    categories: ["social", "business"],
    size: "Social media post",
    image: "images/portfolio/full/new-year-2026-commerce.webp",
    thumb: "images/portfolio/thumb/new-year-2026-commerce.webp",
    description: "New Year post for a Commerce teacher, with a short message to students.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "ol-commerce-paper-class",
    title: "O/L Commerce paper class",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/ol-commerce-paper-class.webp",
    thumb: "images/portfolio/thumb/ol-commerce-paper-class.webp",
    description: "Sinhala announcement for a syllabus-based paper class, with the start date and times for each grade.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "al-physics-paper-class-flyer",
    title: "A/L Physics paper class flyer",
    categories: ["flyers", "education"],
    size: "A4 flyer",
    image: "images/portfolio/full/al-physics-paper-class-flyer.webp",
    thumb: "images/portfolio/thumb/al-physics-paper-class-flyer.webp",
    description: "A4 flyer for a twice-weekly English-medium paper class, with what each day covers.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "al-physics-two-day-paper-class",
    title: "A/L Physics two-day paper class",
    categories: ["flyers", "education"],
    size: "A4 flyer",
    image: "images/portfolio/full/al-physics-two-day-paper-class.webp",
    thumb: "images/portfolio/thumb/al-physics-two-day-paper-class.webp",
    description: "Simple A4 flyer setting out day one and day two of a paper class, with times and venue.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "ol-commerce-bookmark",
    title: "O/L Commerce bookmark",
    categories: ["flyers", "education"],
    size: "Bookmark, front and back",
    image: "images/portfolio/full/ol-commerce-bookmark.webp",
    thumb: "images/portfolio/thumb/ol-commerce-bookmark.webp",
    description: "Two-sided bookmark for a Commerce class, shown front and back as a mockup.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "institute-new-classes-2026",
    title: "Institute new classes 2026",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/institute-new-classes-2026.webp",
    thumb: "images/portfolio/thumb/institute-new-classes-2026.webp",
    gallery: ["images/portfolio/full/institute-new-classes-2026-2.webp"],
    description: "Sinhala campaign for an institute's Grade 1 to 11 classes, in two layouts.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "sav-dansala",
    title: "Sav dansala post and banner",
    categories: ["social", "banners", "business"],
    size: "Post and 6 × 3 ft banner",
    image: "images/portfolio/full/sav-dansala.webp",
    thumb: "images/portfolio/thumb/sav-dansala.webp",
    gallery: ["images/portfolio/full/sav-dansala-2.webp"],
    description: "Sinhala community announcement for a sav dansala, as a square post and a wide banner.",
    year: "",
    featured: false,
    visible: true
  },
  {
    id: "al-chemistry-titration-a4",
    title: "A/L Chemistry titration and redox class (A4)",
    categories: ["flyers", "education"],
    size: "A4 flyer",
    image: "images/portfolio/full/al-chemistry-titration-a4.webp",
    thumb: "images/portfolio/thumb/al-chemistry-titration-a4.webp",
    description: "Earlier A4 version of the titration and redox class announcement.",
    year: "",
    featured: false,
    visible: false
  }
];

/* Filter buttons, in the order they appear.
   To add a category: add a line here, then use its id in a project's categories. */
window.PORTFOLIO_FILTERS = [
  { id: "all", label: "All" },
  { id: "social", label: "Social media" },
  { id: "flyers", label: "Flyers & handbills" },
  { id: "banners", label: "Banners & large format" },
  { id: "education", label: "Education" },
  { id: "business", label: "Business & events" },
  { id: "typesetting", label: "Typesetting" }
];
