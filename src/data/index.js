export const aboutInfo = {
  aboutHero:
    "Hello, I'm Ali, a passionate full-stack developer with a deep love for front-end development. \n\n I specialize in crafting immersive and user-friendly web experiences using the power of JavaScript. Whether it's building responsive interfaces, optimizing user interactions, or breathing life into web applications, I thrive on the art of front-end development. Join me on a journey through my projects, where you'll discover the blend of creativity and technical prowess that defines my work.",
  aboutPageHero: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Sit amet mauris commodo quis imperdiet massa. Integer vitae justo eget magna. Sed cras ornare arcu dui vivamus arcu. Sociis natoque penatibus et magnis dis parturient montes. Dignissim cras tincidunt lobortis feugiat vivamus at. Aliquam faucibus purus in massa. Sapien nec sagittis aliquam malesuada bibendum arcu. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus.`,
};

export const workExperience = {
  tech: [
    {
      jobTitle: "Software Engineer & Mentor",
      employer: "Northcoders",
      description: "",
      bulletPoints: [],
      bulletPoints2: [],
    },
  ],
  nonTech: [
    {
      jobTitle: "First Line Manager",
      employer: "GXO Logistics",
      description: "",
      bulletPoints: [
        "Proficiently managed teams using Report Manager and SMART to track KPIs, performance, and attendance.",
        "Oversaw colleague management, including Return To Work Forms, Performance Packs, Investigation Packs, Risk Assessments, and Incident Packs.",
        "Delivered briefs to large teams, providing daily figures, targets, and crucial business information.",
        "Effectively communicated with large teams and crowds, utilizing communication equipment.",
        "Utilized Microsoft Excel and supply chain management software.",
        "Ensured adherence to Health & Safety guidelines, including COVID-19 measures.",
      ],
    },
    {
      jobTitle: "Event's Manager & Sales Coordinator",
      employer: "Thrill Pic Media",
      description: "",
      bulletPoints: [
        "Provided guidance and addressed inquiries from customers during event days.",
        "Successfully upsold customers on photographs and videos of their experiences.",
        "Ensured the proper functioning of camera and video equipment, troubleshooting technical issues.",
        "Drove to event locations and set up remote sites for event days.",
        "Handled and managed cash transactions during events.",
      ],
    },
    {
      jobTitle: "Warehouse & Website Manager",
      employer: "Get Wivvit Clothing",
      description: "",
      bulletPoints: [
        "Efficiently managed workforce scheduling, deliveries, and stock across multiple online storefronts.",
        "Led a team of 4-6 employees daily, ensuring smooth operations.",
        "Oversaw warehouse opening and closing procedures.",
        "Managed eBay and Amazon storefronts, including marketing activities.",
        "Conducted product photography and editing for online listings.",
      ],
    },
  ],
};

export const projects = [
  {
    name: "Poker Backer",
    slug: "poker-backer",
    type: "mobile",
    techStack: ["TypeScript", "NextJS", "Tailwind CSS"],
    shortDescription: "Web app built for mobile devices",
    description:
      "PokerBacker is a robust and user-friendly application designed to assist poker players who pay for others to enter tournaments (backers). This financial tracking tool helps manage and record transactions, providing a clear picture of your investment and its performance. PokerBacker is built using Next.js with React components for a seamless and responsive user experience.",
    githubLink: "https://github.com/Hard-Luck/poker-backer",
    liveLink: "https://www.poker-backer.com",
    images: [
      "/images/PokerBacker/homescreen.png",
      "/images/PokerBacker/friendscreen.png",
      "/images/PokerBacker/potscren.png",
    ],
  },
  {
    name: "Reconnect Reiki",
    slug: "reconnect-reiki",
    type: "desktop",
    techStack: ["TypeScript", "NextJS", "Tailwind CSS", "TRPC", "Prisma"],
    shortDescription: "Online blog for reiki services",
    description:
      "This website offers a seamless and engaging experience on both desktop and mobile devices, adapting to various screen sizes. It features a comprehensive blog posting system that regularly publishes informative and relevant content to keep users informed and engaged.\n\nBehind the scenes, the website is powered by a robust admin dashboard that efficiently manages various aspects of its online presence. This includes overseeing services, FAQs, and blog posts.\n\nThe website showcases the experiences and testimonials of valued customers, which can be managed and approved through the admin dashboard.\n\nBuilt with cutting-edge technologies, including Next.js for a fast and dynamic frontend, TypeScript for enhanced development and maintenance, Prisma for efficient database operations, and Tailwind CSS for a stylish and responsive design. Secure authentication is also a priority, with NextAuth.js safeguarding user data and providing a secure, personalized experience.\n\nExplore the website's services and blog posts, and feel free to get in touch for any inquiries. It's here to deliver a top-notch online experience for users.",
    githubLink: "https://github.com/itsaliabdallah/nerdpress",
    liveLink: "https://www.reconnectreiki.com",
    images: [
      "/images/ReconnectReiki/reconnecthome.png",
      "/images/ReconnectReiki/reconnectblogpost.png",
      "/images/ReconnectReiki/reconnectreviews.png",
    ],
  },
  {
    name: "Alitt",
    slug: "alitt",
    type: "mobile",
    techStack: ["JavaScript", "React"],
    shortDescription: "Recreation of a news site like reddit",
    description:
      "PokerBacker is a robust and user-friendly application designed to assist poker players who pay for others to enter tournaments (backers). This financial tracking tool helps manage and record transactions, providing a clear picture of your investment and its performance. PokerBacker is built using Next.js with React components for a seamless and responsive user experience.",
    githubLink: "https://github.com/itsaliabdallah/alitt",
    liveLink: "https://alitt.vercel.app/",
    images: [
      "/images/Alitt/login.png",
      "/images/Alitt/home.png",
      "/images/Alitt/post.png",
      "/images/Alitt/sidemenu.png",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/itsaliabdallah",
  linkedin: "https://www.linkedin.com/in/its-ali-abdallah/",
};

export const skills = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Next.js" },
  { name: "React" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "TRPC" },
  { name: "PostgreSQL" },
  { name: "Tailwind CSS" },
  { name: "Jest" },
  { name: "Prisma" },
];
