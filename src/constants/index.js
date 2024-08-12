import {
    mobile,
    backend,
    fullstack,
    frontend,
    creator,
    web,
    nrel,
    rockville,
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
    carrent,
    jobit,
    tripguide,
    threejs,
    mianwali,
    leetbank,
    embedded,
    carinworld,
    snaptask
  } from "../assets";
  
  export const navLinks = [
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
    {
      id: "resume",
      title: "Resume",
    },
  ];
  
  const services = [
    {
      title: "Fullstack",
      icon: fullstack,
    },
    {
      title: "Frontend",
      icon: frontend,
    },
    {
      title: "Backend",
      icon: backend,
    }
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
      title: "Software Engineer Intern",
      company_name: "National Renewable Energy Laboratory (NREL)",
      icon: nrel,
      iconBg: "#E6DEDD",
      date: "July 2024 - Sep 2024",
      points: [
        "Developed an Angular application for the US Department of Energy (DOE), enhances building data management by 25%.",
        "Tailor-made Python backend APIs, integrated with the DOE’s energy platform for 800,000+ square feet of building data.",
        "Participating in code reviews and demos applying constructive feedback to application",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "Rockville Technologies",
      icon: rockville,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Feb 2023",
      points: [
        "Optimized frontend scripts, reducing code bloat by 10% through strategic script removal, and ID-to-class conversion.",
        "Executed lazy loading techniques to enhance loading speeds, resulting in a 9% reduced loading time",
        "Implemented responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "IT Technician",
      company_name: "Mianwali Education Trust",
      icon: mianwali,
      iconBg: "#E6DEDD",
      date: "March 2021 - Present",
      points: [
        "Engineered a responsive website utilizing modern web frameworks; resulting in a 30% surge in user email inquiries",
        "Revitalized IT infrastructure, elevating operational efficiency by 15% through optimized system configurations",
        "Tutoring sessions with students teaching IT and programming fundamentals.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "LeetBank",
      description:
        "Web-based platform that is designed to help you store and manage your LeetCode questions efficiently.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "red-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      video: leetbank,
      source_code_link: "https://github.com/rahmanMian/LeetBank",
    },
    {
      name: "Self Driving Car in Gen World",
      description:
        "Users can construct neighborhoods using a UI dashboard or pull real world data! This provides a path for a ML trained car to drive in.",
      tags: [
        {
          name: "vanillajs",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      video: carinworld,
      source_code_link: "https://github.com/rahmanMian/Self-Driving-Car-in-User-Gen-World",
    },
    {
      name: "SnapTask",
      description:
        "A personal learning project to traverse the intricacies of React. A one-of-one task managing app with a smooth drag and drop functionality.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      video: snaptask,
      source_code_link: "https://github.com/rahmanMian/SnapTask",
    },
    {
      name: "ML Gesture Detection",
      description:
        "An ESP32-S3 microcontroller and an MPU6050 sensor is used to capture complex gesture data, classifying them using machine learning.",
      tags: [
        {
          name: "esp32-s3",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      video: embedded,
      source_code_link: "https://github.com/rahmanMian/ML-Complex-Gesture-Detection",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };