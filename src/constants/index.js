import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    danyl,
    leo,
    threejs,
    projet3,
    projet6,
    projet7,
    foneke

} from "../assets";

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Dévelopeur d'Applications",
        icon: web,
    },
    {
        title: "Dévelopeur ReactJs",
        icon: mobile,
    },
    {
        title: "Dévelopeur Backend",
        icon: backend,
    },
    {
        title: "Createur de contenu",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Fonéke",
        icon: foneke,
        iconBg: "#E6DEDD",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer frontend",
        company_name: "Groupe Up",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Mouhamed est l’un des meilleurs étudiants que j’ai eu plaisir à suivre durant son bachelor de développeur web au sein de OpenClassrooms. Il a su s’adapter aux différents challenges et relever tous les défis pour réussir ses projets avec brio en fournissant un travail de haute qualité. Autonome, rigoureux et bon communicant, Mouhamed est un bon développeur, passionné, qui a su démontrer toutes ses qualités au fil de son avancée au sein de la formation. De plus, il dispose de véritables qualités humaines qui font qu'il est toujours prêt à aider les autres et à prendre des initiatives. C’est pour toutes ces qualités que je recommande Mouhamed !",
        name: "Danyl Semmache",
        designation: "Scrum Master",
        company: "OC",
        image: danyl,
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Mouhamed does.",
        name: "Leo Grambert",
        designation: "Développeur Front",
        company: "DEF Corp",
        image: leo,
    },
];

const projects = [
    {
        name: "Kanap",
        description:
            "Web-based platform that allows users to select, and add to cart various new design sofas.",
        tags: [
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
            {
                name: "Html",
                color: "green-text-gradient",
            },
            {
                name: "Css",
                color: "pink-text-gradient",
            },
        ],
        image: projet3,
        source_code_link: "https://github.com/modough/kanap",
    },
    {
        name: "Senbooking",
        description:
            "Web application that enables users to search for hotels rooms availabilities, view estimated prices, and book on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDb",
                color: "green-text-gradient",
            },
            {
                name: "NodeJs",
                color: "pink-text-gradient",
            },
            {
                name: "Express",
                color: "orange-text-gradient",
            },
        ],
        image: projet6,
        source_code_link: "https://github.com/modough/senbooking/",
    },
    {
        name: "Marvel Universe",
        description:
            "A quiz app from the marvel characters, strictly made for marvel fans, from beginner to master.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },
            {
                name: "Styled components",
                color: "pink-text-gradient",
            },
            {
                name: "Marvel API",
                color: "orange-text-gradient",
            },
        ],
        image: projet7,
        source_code_link: "https://github.com/modough/marvelquiz",
    },
];

export { navLinks, services, technologies, experiences, testimonials, projects };