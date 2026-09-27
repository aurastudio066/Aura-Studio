/* =========================================================
   AURA STUDIO — TYPESETTING SAMPLES
   Each document shows 2–3 preview pages, never the full paper.

   TO ADD A DOCUMENT
   1. Export 2–3 pages of the PDF as images (about 1240 px wide).
   2. Put them in  images/typesetting/full/  (thumbnails optional in /thumb/).
   3. Copy a block below and edit it. The first page is the cover in the grid.

   medium      "Sinhala" or "English" (drives the Sinhala | English switch)
   level       e.g. "A/L", "O/L", "Campus"
   type        e.g. "Tute", "MCQ paper", "Model paper", "Notes"
   pageCount   Total pages in the real document (shown as "7 pages")
   features    What the pages show off: tables, diagrams, equations…
   ========================================================= */

window.TYPESETTING = [
  {
    id: "sm-chem-rates-of-reaction-tute",
    title: "Rates of reaction tute",
    medium: "Sinhala",
    level: "A/L",
    subject: "Chemistry",
    type: "Tute",
    pageCount: 7,
    features: ["Diagrams", "Equations", "Tables"],
    pages: ["images/typesetting/full/sm-chem-rates-of-reaction-tute-p03.webp", "images/typesetting/full/sm-chem-rates-of-reaction-tute-p01.webp"],
    thumbs: ["images/typesetting/thumb/sm-chem-rates-of-reaction-tute-p03.webp", "images/typesetting/thumb/sm-chem-rates-of-reaction-tute-p01.webp"],
    visible: true
  },
  {
    id: "sm-chem-structured-questions",
    title: "Structured questions: bonding and atomic structure",
    medium: "Sinhala",
    level: "A/L",
    subject: "Chemistry",
    type: "Structured questions",
    pageCount: 5,
    features: ["Lewis structures", "Tables", "Diagrams"],
    pages: ["images/typesetting/full/sm-chem-structured-questions-p02.webp", "images/typesetting/full/sm-chem-structured-questions-p04.webp"],
    thumbs: ["images/typesetting/thumb/sm-chem-structured-questions-p02.webp", "images/typesetting/thumb/sm-chem-structured-questions-p04.webp"],
    visible: true
  },
  {
    id: "sm-chem-model-questions",
    title: "General chemistry model questions",
    medium: "Sinhala",
    level: "A/L",
    subject: "Chemistry",
    type: "Model questions",
    pageCount: 14,
    features: ["Lewis structures", "Tables", "Graphs"],
    pages: ["images/typesetting/full/sm-chem-model-questions-p01.webp", "images/typesetting/full/sm-chem-model-questions-p10.webp"],
    thumbs: ["images/typesetting/thumb/sm-chem-model-questions-p01.webp", "images/typesetting/thumb/sm-chem-model-questions-p10.webp"],
    visible: true
  },
  {
    id: "sm-chem-mcq-paper",
    title: "Chemistry MCQ paper",
    medium: "Sinhala",
    level: "A/L",
    subject: "Chemistry",
    type: "MCQ paper",
    pageCount: 6,
    features: ["Tables", "Orbital diagrams", "Chemical structures"],
    pages: ["images/typesetting/full/sm-chem-mcq-paper-p02.webp", "images/typesetting/full/sm-chem-mcq-paper-p03.webp"],
    thumbs: ["images/typesetting/thumb/sm-chem-mcq-paper-p02.webp", "images/typesetting/thumb/sm-chem-mcq-paper-p03.webp"],
    visible: true
  },
  {
    id: "sm-chem-atomic-structure-mcq",
    title: "Atomic structure MCQ question bank",
    medium: "Sinhala",
    level: "A/L",
    subject: "Chemistry",
    type: "Question bank",
    pageCount: 26,
    features: ["Equations", "Tables"],
    pages: ["images/typesetting/full/sm-chem-atomic-structure-mcq-p02.webp", "images/typesetting/full/sm-chem-atomic-structure-mcq-p03.webp"],
    thumbs: ["images/typesetting/thumb/sm-chem-atomic-structure-mcq-p02.webp", "images/typesetting/thumb/sm-chem-atomic-structure-mcq-p03.webp"],
    visible: true
  },
  {
    id: "sm-phy-centre-of-gravity-tute",
    title: "Centre of gravity and friction tute",
    medium: "Sinhala",
    level: "A/L",
    subject: "Physics",
    type: "Tute",
    pageCount: 31,
    features: ["Diagrams", "Equations"],
    pages: ["images/typesetting/full/sm-phy-centre-of-gravity-tute-p03.webp", "images/typesetting/full/sm-phy-centre-of-gravity-tute-p08.webp"],
    thumbs: ["images/typesetting/thumb/sm-phy-centre-of-gravity-tute-p03.webp", "images/typesetting/thumb/sm-phy-centre-of-gravity-tute-p08.webp"],
    visible: true
  },
  {
    id: "em-chem-mcq-paper",
    title: "Chemistry MCQ paper",
    medium: "English",
    level: "A/L",
    subject: "Chemistry",
    type: "MCQ paper",
    pageCount: 8,
    features: ["Formulas", "Lewis structures", "Tables"],
    pages: ["images/typesetting/full/em-chem-mcq-paper-p03.webp", "images/typesetting/full/em-chem-mcq-paper-p07.webp"],
    thumbs: ["images/typesetting/thumb/em-chem-mcq-paper-p03.webp", "images/typesetting/thumb/em-chem-mcq-paper-p07.webp"],
    visible: true
  },
  {
    id: "em-chem-model-paper",
    title: "Chemistry model paper: MCQ, structured and essay",
    medium: "English",
    level: "A/L",
    subject: "Chemistry",
    type: "Model paper",
    pageCount: 17,
    features: ["Graphs", "Tables", "Lewis structures"],
    pages: ["images/typesetting/full/em-chem-model-paper-p02.webp", "images/typesetting/full/em-chem-model-paper-p11.webp"],
    thumbs: ["images/typesetting/thumb/em-chem-model-paper-p02.webp", "images/typesetting/thumb/em-chem-model-paper-p11.webp"],
    visible: true
  },
  {
    id: "em-chem-bonds-past-papers",
    title: "Bonds: past paper questions by year",
    medium: "English",
    level: "A/L",
    subject: "Chemistry",
    type: "Past paper compilation",
    pageCount: 19,
    features: ["Chemical structures", "Tables"],
    pages: ["images/typesetting/full/em-chem-bonds-past-papers-p01.webp", "images/typesetting/full/em-chem-bonds-past-papers-p05.webp"],
    thumbs: ["images/typesetting/thumb/em-chem-bonds-past-papers-p01.webp", "images/typesetting/thumb/em-chem-bonds-past-papers-p05.webp"],
    visible: true
  },
  {
    id: "em-chem-atomic-structure-past-papers",
    title: "Atomic structure: past paper questions by year",
    medium: "English",
    level: "A/L",
    subject: "Chemistry",
    type: "Past paper compilation",
    pageCount: 29,
    features: ["Tables", "Diagrams"],
    pages: ["images/typesetting/full/em-chem-atomic-structure-past-papers-p01.webp", "images/typesetting/full/em-chem-atomic-structure-past-papers-p07.webp"],
    thumbs: ["images/typesetting/thumb/em-chem-atomic-structure-past-papers-p01.webp", "images/typesetting/thumb/em-chem-atomic-structure-past-papers-p07.webp"],
    visible: true
  },
  {
    id: "em-phy-newtons-laws-notes",
    title: "Newton's laws of motion notes",
    medium: "English",
    level: "A/L",
    subject: "Physics",
    type: "Notes",
    pageCount: 33,
    features: ["Diagrams", "Equations"],
    pages: ["images/typesetting/full/em-phy-newtons-laws-notes-p05.webp", "images/typesetting/full/em-phy-newtons-laws-notes-p07.webp"],
    thumbs: ["images/typesetting/thumb/em-phy-newtons-laws-notes-p05.webp", "images/typesetting/thumb/em-phy-newtons-laws-notes-p07.webp"],
    visible: true
  },
  {
    id: "em-phy-paper-2-model",
    title: "Physics Paper II model paper",
    medium: "English",
    level: "A/L",
    subject: "Physics",
    type: "Model paper",
    pageCount: 8,
    features: ["Ray diagrams", "Graphs"],
    pages: ["images/typesetting/full/em-phy-paper-2-model-p02.webp", "images/typesetting/full/em-phy-paper-2-model-p07.webp"],
    thumbs: ["images/typesetting/thumb/em-phy-paper-2-model-p02.webp", "images/typesetting/thumb/em-phy-paper-2-model-p07.webp"],
    visible: true
  },
  {
    id: "em-phy-paper-1-mcq",
    title: "Physics Paper I MCQ",
    medium: "English",
    level: "A/L",
    subject: "Physics",
    type: "MCQ paper",
    pageCount: 9,
    features: ["Diagrams", "Graphs"],
    pages: ["images/typesetting/full/em-phy-paper-1-mcq-p02.webp", "images/typesetting/full/em-phy-paper-1-mcq-p03.webp"],
    thumbs: ["images/typesetting/thumb/em-phy-paper-1-mcq-p02.webp", "images/typesetting/thumb/em-phy-paper-1-mcq-p03.webp"],
    visible: true
  }
];
