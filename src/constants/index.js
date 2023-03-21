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

  ycce,
  addicor,
  orbit_tree,
  qmul,
  atos_syntel,
  syntel,
  carrent,
  jobit,
  tripguide,
  threejs,
  analysis,
  python,
  etl,
  ml,
  dl,
  tableau,
  dbsql,
  airflow,
  kafka,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Analysis",
    icon: analysis,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "ETL",
    icon: etl,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
  {
    name: "Deep Learning",
    icon: dl,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Apache Airflow",
    icon: airflow,
  },
  {
    name: "dbsql",
    icon: dbsql,
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
    name: "Apache Kafka",
    icon: kafka,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bachelors of Engineering",
    company_name: "Yeshwantrao Chavan College of Engineering, Nagpur (YCCE)",
    icon: ycce,
    iconBg: "#E6DEDD",
    date: "2013 - 2017",
    points: [
      "Completed graduation in Computer Science in July 2017",
      "Published a paper on 'Grid Computing in Parallel Computing'",
      "Implemented a monitoring and attendance app for traffic police officers to clock-in or clock-out according to their locations",
    ],
  },
  {
    title: "Software Intern/Developer",
    company_name: " Orbit Tree",
    icon: orbit_tree,
    iconBg: "#E6DEDD",
    date: "2017 - 2018",
    points: [
      "Started working as a software intern on a startup.",
      "Worked on python scripts and SQL queries on company internal website.",
      "Code analysis and debugging for internal website with python and JavaScript.",
    ],
  },
  {
    title: "ETL Developer",
    company_name: "Syntel",
    icon: syntel,
    iconBg: "#E6DEDD",
    date: "2018 - 2019",
    points: [
      "Implemented over 50 stored procedures in using SQL server, and use the same stored procedures for report development in SSRS, tableau maintaining the ETL pipelines with maximum efficiency.",
      "Maintained data pipeline up-time of 99% while ingesting insurance data across 8 different primary data sources using SQL server, SSIS, SSMS and Python.",
      "Communicated with clients and business analysts about data pipelines that drove efficiency KPIs up by 22%. Involved in Agile Methodologies and SCRUM Process.",
      "Worked with client to understand business needs and translate those business needs into actionable reports in Tableau, saving 15 hours of manual work in a week.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Atos-Syntel",
    icon: atos_syntel,
    iconBg: "#E6DEDD",
    date: "2019 - 2020",
    points: [
      "Designed and implemented a real-time data pipeline to process semi-structured data by integrating 80 million raw records from multiple data sources with SSIS, tableau and python.",
      "Automated ETL processes across billions of rows of data, which reduced manual workload by 21% monthly.",
      "Data visualization and analysis with python using business logic and client requirements.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Addicor Technologies",
    icon: addicor,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Develop and test the website with Python Django, maintain the backend along with database management.",
      "Debugging and analysing the root cause of errors and fixing them.",
    ],
  },
  {
    title: "Masters in MSc Big Data Science",
    company_name: "Queen Mary University, London",
    icon: qmul,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Worked on a few personal projects including machine learning, deep learning and hadoop 3.x.",
      "Implemented real-time sign language recognition, created multiple variants of dataset for American Sign Language to train the models",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
