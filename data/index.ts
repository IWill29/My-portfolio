export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Job for me is not just work, it's a playground for creativity and growth.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/image-1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Next.js and Laravel are my main weapons.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Full-stack developer with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/programing-2.avif",
  },

  {
    id: 5,
    title: "Currently seeking clients for e-commerce projects and developing automated AI agents.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    spareVideo: "/programming-vid.mp4", 
  },
  {
    id: 6,
    title: "Do you want discuss your future projects with me together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce watch store with Shopify",
    des: "Explore my  Shopify-powered e-commerce watch store, showcasing my expertise in creating seamless online shopping experiences with a focus on design and functionality.",
    img: "/project-1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/react.svg", "/shopify.svg"],
    link: "https://e-comshop.vercel.app/",
  },
  {
    id: 2,
    title: "Simple to do list app with MERN stack",
    des: "A straightforward to-do list application built with the MERN stack, demonstrating CRUD operations and user authentication.",
    img: "/project-2.png",
    iconLists: ["/mongo.svg", "/express.svg", "/react.svg", "/node.svg"],
    link: "https://event-hub-lin0.onrender.com/",
  },
  {
    id: 3,
    title: "DriveEast.lv — Magebit Bootcamp Project",
    des: "Full-stack car marketplace built during Magebit IT Bootcamp 2026 — used cars, leasing, buyback, multilingual catalog, and an AI assistant for vehicle inquiries.",
    img: "/project-3.png",
    iconLists: ["/php.svg", "/laravel.svg", "/filament.svg", "/mariadb.svg", "/tail.svg", "/stripe.svg"],
    link: "https://east-squad.magebit.dev/en",
  },
  {
    id: 4,
    title: "Paradit X — Laravel E-Commerce Store",
    des: "Shoe e-commerce store built with Laravel 13, Inertia.js, React, and TypeScript — Stripe payments, PostgreSQL, and a polished shopping flow deployed on Vercel.",
    img: "/project-4.png",
    iconLists: ["/php.svg", "/laravel.svg", "/react.svg", "/tail.svg", "/stripe.svg", "/postgres.svg"],
    link: "https://e-comportf-project.vercel.app/",
  },
];

export const techStackIcons = [
  ...new Set(projects.flatMap((project) => project.iconLists)),
];

export const workExperience = [
  {
    id: 1,
    title: "IBM Full Stack Software Developer Certificate",
    desc: "Completed the IBM Full Stack Software Developer Professional Certificate, covering frontend, backend, cloud, and DevOps fundamentals.",
    className: "md:col-span-2",
    thumbnail: "/ibm.svg",
  },
  {
    id: 2,
    title: "Magebit IT Bootcamp 2026",
    desc: "Graduated from Magebit IT Bootcamp 2026 in Riga — an intensive program focused on real-world full-stack development skills.",
    className: "md:col-span-2",
    thumbnail: "/magebit.svg",
  },
  {
    id: 3,
    title: "Freelance dev",
    desc: "I help clients build complete e-commerce solutions — from design and development to payments and admin panels — while following core architectural principles.",
    className: "md:col-span-2",
    thumbnail: "/freelancer.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/IWill29",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "www.linkedin.com/in/agnis-kulakovs-951536268",
  },
];
