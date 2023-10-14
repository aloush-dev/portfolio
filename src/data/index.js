export const aboutInfo = {
  aboutHero:
    "Hello, I'm Ali, a passionate full-stack developer with a deep love for front-end development. \n\n I specialize in crafting immersive and user-friendly web experiences using the power of JavaScript. Whether it's building responsive interfaces, optimizing user interactions, or breathing life into web applications, I thrive on the art of front-end development. Join me on a journey through my projects, where you'll discover the blend of creativity and technical prowess that defines my work.",
  aboutPageHero:
    "Hello, I'm Ali, a passionate full-stack developer with a deep love for front-end development. \n\n I specialize in crafting immersive and user-friendly web experiences using the power of JavaScript. Whether it's building responsive interfaces, optimizing user interactions, or breathing life into web applications, I thrive on the art of front-end development. Join me on a journey through my projects, where you'll discover the blend of creativity and technical prowess that defines my work.",
};

export const workExperience = {
  tech: [
    {
      jobTitle: "Software Engineer & Mentor",
      employer: "Northcoders",
      description:
        "In my role at Northcoders, I guide and mentor future software developers while actively contributing to software projects. I provide one-on-one mentorship, code reviews, and feedback to enhance students' work.\n\nI collaborate with cross-functional teams to develop web applications, ensuring high-quality solutions. I lead interactive coding sessions and discussions, fostering a culture of collaboration.\n\nI help students refine their problem-solving and debugging techniques and share industry insights for their career preparation. Creating an inclusive learning environment is central to my role. I tailor my mentoring techniques to meet individual needs and collaborate with fellow mentors to enhance the learning experience.\n\nIn summary, my role at Northcoders empowers students to become proficient software engineers, while I actively contribute to software development projects.",
      bulletPoints: [
        "Developed and maintained web applications using JavaScript, React, Node.js, and more.",
        "Collaborated with cross-functional teams to define project requirements and scope.",
        "Participated in the full software development lifecycle, from requirement analysis to deployment.",
        "Implemented best practices in software engineering, including version control, code reviews, and automated testing.",
        "Utilized agile methodologies to prioritize tasks and deliver features efficiently.",
        "Worked with databases (e.g., PostgreSQL) to design and optimize data models.",
        "Employed responsive web design principles and CSS frameworks for user-friendly interfaces.",
        "Demonstrated problem-solving skills by identifying and resolving technical challenges.",
        "Kept up-to-date with industry trends and emerging technologies through continuous learning.",
        "Contributed to Northcoders' learning environment and coding challenges.",
      ],
      bulletPoints2: [
        "Provided guidance and support to junior developers, fostering their growth.",
        "Conducted one-on-one mentoring sessions to address individual learning needs.",
        "Offered code reviews and feedback to enhance the quality of students' work.",
        "Facilitated interactive coding sessions and group discussions for collaborative learning.",
        "Assisted students in refining their problem-solving and debugging techniques.",
        "Shared industry insights and real-world experiences to prepare students for their careers.",
        "Empowered students to become proficient software engineers through mentorship.",
        "Created a supportive and inclusive learning environment for students as a positive mentor.",
        "Adapted mentoring techniques to meet the unique needs and learning styles of each mentee.",
        "Collaborated with fellow mentors and instructors to enhance the mentoring program's effectiveness.",
        "Contributed to the development of curriculum and coding challenges to ensure up-to-date content.",
      ],
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
  {
    name: "Quick My Link",
    slug: "quick-my-link",
    type: "desktop",
    techStack: ["Vue.js", "Vite", "JavaScript"],
    shortDescription: "URL shortener and click tracker",
    description:
      "I developed a user-friendly URL shortening web application using Vue.js as the front-end framework. This platform empowers users to easily shorten long URLs into concise links, making them more shareable and manageable.\n\nThe website also offers robust tracking capabilities, allowing users to monitor and analyze how often their shortened links are clicked. Additionally, it provides the flexibility to enable or disable links as needed, providing full control over the shared content.\n\nWith a clean and intuitive interface, this URL shortening tool streamlines the process of managing and tracking links, making it a valuable asset for enhancing online content distribution and analysis.",
    githubLink: "https://github.com/itsaliabdallah/url-shortener",
    liveLink: "https://quick-my-link.vercel.app/",
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
  codewars: "https://www.codewars.com/users/aloush",
};

export const education = [
  {
    school: "Northcoders",
    course: "Skills Bootcamp in Software Development",
    description:
      "As a Northcoders student, I underwent intensive and comprehensive coding bootcamp training. I developed expertise in modern web development technologies and practices, honed my problem-solving skills, and gained hands-on experience in software engineering. My time at Northcoders equipped me with the skills and knowledge necessary to embark on a successful career in the tech industry.",
  },
  {
    school: "Staffordshire University",
    course: "Film, TV & Radio Studies",
    description:
      "During my time at Staffordshire University, I pursued a degree in Film, TV, and Radio Studies. This program provided me with a deep understanding of the world of media and equipped me with the knowledge and critical thinking skills necessary to analyze and appreciate various forms of visual storytelling. I engaged in practical projects, research, and coursework that allowed me to explore the dynamic and creative field of film and media production. ",
  },
];

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
