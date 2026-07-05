import {
  Compass,
  Rocket,
  Users,
} from "lucide-react";

/* ---------------------------------------------------------------
   CONTENT — edit these arrays to update the site. No build step,
   no backend: just change the data and the page updates.
---------------------------------------------------------------- */
export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Board" },
  { href: "#join", label: "Join" },
];

// Add more partners here as they're confirmed — the marquee picks them up automatically.
export const PARTNERS = [
  { name: "IIT", logo: "https://res.cloudinary.com/p9t0mxll/image/upload/v1783212471/IIT_2_uo3qp3.png" },
  { name: "IEEE IIT SB", logo: "https://res.cloudinary.com/p9t0mxll/image/upload/v1783212514/1.COLORS_copy-8_isf7rp.png", width: 220, height: 96, padding: "4px 6px" },
];

export const EVENTS = [
  {
    date: "September 26",
    title: "AI and IoT for Early Detection of Hypertension",
    partners: "IEEE EMBS IIT × IEEE EMBS EPS",
  },
];

export const GOALS = [
  {
    icon: Compass,
    title: "Learn beyond the syllabus",
    copy:
      "Workshops and short courses in biomedical signal processing, medical imaging, and wearable sensing — taught by students, for students.",
  },
  {
    icon: Rocket,
    title: "Build things that matter",
    copy:
      "Project teams turn ideas into working prototypes: assistive devices, low-cost diagnostics, biosignal wearables. You ship, not just study.",
  },
  {
    icon: Users,
    title: "Connect the dots",
    copy:
      "A direct line to the global IEEE EMBS network — researchers, alumni, and health-tech companies looking for exactly the kind of student who shows up here.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Fill the interest form",
    copy: "Two minutes, no experience required. Tell us what pulls you in.",
  },
  {
    n: "02",
    title: "Come to orientation",
    copy: "Meet the board, see what's running this term, ask anything.",
  },
  {
    n: "03",
    title: "Pick your track",
    copy: "A project team, a workshop series, or the crew that runs events.",
  },
];

// TODO: swap in your real board — names, roles, and photo URLs.
export const BOARD = [
  { name: "Emna ANNABI", role: "Chair", initials: "EA", photo: "https://res.cloudinary.com/p9t0mxll/image/upload/v1783210719/tmp_8a2b3738-85ba-4262-840b-3e27bceaab09_gg2xgn.jpg" },
  { name: "Sirine ROUIS", role: "Vice Chair", initials: "SR", photo: "https://res.cloudinary.com/p9t0mxll/image/upload/v1783210531/cbb86482-15e0-444d-adb9-316e6549f17a_mbjtpy.jpg" },
  { name: "Ismail BOUJELBENE", role: "Secretary", initials: "IB", photo: "https://res.cloudinary.com/p9t0mxll/image/upload/v1783210652/Ismail_Boujelben_us17al.png" },
  { name: "Mohamed ZOUARI", role: "Webmaster", initials: "MZ", photo: "https://res.cloudinary.com/p9t0mxll/image/upload/v1783211496/IMG_1648_qkeowd.png" },
  { name: "Mohamed Aziz MOALLA", role: "Media Manager", initials: "MM", photo: "https://res.cloudinary.com/p9t0mxll/image/upload/v1783211635/MohamedAzizMOALLA_pdt0yt.png" },
];
