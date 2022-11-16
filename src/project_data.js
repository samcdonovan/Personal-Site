const projects = [
  {
    id: 0,
    title: "Twitter Sentiment Analysis",
    languages: [
      { lang: "Python", type: "py" }
    ],
    technologies: [
      { tech: "Pandas", type: "other" },
      { tech: "Tweepy", type: "other" },
      { tech: "Plotly", type: "other" },
      { tech: "Scikit-learn", type: "other" },
      { tech: "NLTK", type: "other" },
      { tech: "Threading", type: "other" },
      { tech: "MySQL", type: "db" }
    ],
    description: "Final year project, scraped 6000 tweets that were related to the FAANG companies’ climate change performance and implemented a Sentiment Analysis algorithm to measure public opinion.",
    link: "https://github.com/samcdonovan/Tweet-Scraper-With-Sentiment-Analysis"
  },
  {
    id: 1,
    title: "NBA Data Visualization Website",
    languages: [
      { lang: "JavaScript", type: "js" },
      { lang: "TypeScript", type: "ts" }
    ],
    technologies: [
      { tech: "AWS", type: "special" },
      { tech: "Lambda", type: "other" },
      { tech: "SageMaker", type: "other" },
      { tech: "Comprehend", type: "other" },
      { tech: "DynamoDB", type: "db" },
      { tech: "S3", type: "other" },
      { tech: "WebSockets", type: "other" }
    ],
    description:
      "Scraped data and Tweets about NBA teams and used a range of AWS functions to manage this data and produce predictions for future data using ML. This data was then used in the front-end with Plotly for data visualisation.",
    link: "https://github.com/samcdonovan/Data-Visualization-Website-NBA"
  },
  {
    id: 2,
    title: "Machine Learning Categoriser for handwritten digits (UCI)",
    languages: [
      { lang: "Java", type: "java" }
    ],
    description: "The UCI digits is a data set consisting of 5620 handwritten digits. I implemented 3 approaches for categorising these digits: Nearest Neighbour (98.3% acc.), Genetic Algorithm (Tournament Selection, Uniform Crossover, ~70.4% acc.) and Multilayer Perceptron (Sigmoid Transfer/Activation, MSE loss, ~93.6% acc.). Each of these were ran with two-fold tests for the 5620 digits.",
    link: "https://github.com/samcdonovan/Machine-Learning-Categoriser-for-UCI-Digits"
  },
  {
    id: 3,
    title: "Book Price Comparison Website",
    languages: [
      { lang: "Java", type: "java" },
      { lang: "JavaScript", type: "js" }
    ],
    technologies: [
      { tech: "Maven", type: "other" },
      { tech: "Hibernate", type: "other" },
      { tech: "Spring Beans", type: "other" },
      { tech: "Selenium", type: "other" },
      { tech: "JUnit", type: "db" },
      { tech: "Threas", type: "other" },
      { tech: "RESTful API", type: "special" },
      { tech: "MySQL", type: "db" }
    ],
    description: "Built a price comparison website for books from 5 different retailers. Used JSoup and Selenium web scraping, and a range of other Java frameworks/libraries to manage the project. Built a RESTful API, allowing the user to retrieve data from the database in JSON format.",
    link: "https://github.com/samcdonovan/Web-Scraping-Price-Comparison-Website"
  },
  {
    id: 4,
    title: "Travelling Salesperson Problem",
    languages: [
      { lang: "Java", type: "java" }
    ],
    description: "Implemented Held-Karp, a dynamic programming exact algorithm for the TSP that runs in less than 20 seconds for 20 cities. Also implemented a custom Hash Table implementation to provide O(1) get and put functions.",
    link: "https://github.com/samcdonovan/Held-Karp-TSP"
  },
  {
    id: 5,
    title: "E-Commerce Website",
    languages: [
      { lang: "JavaScript", type: "js" },
      { lang: "PHP", type: "php" }
    ],
    technologies: [
      { tech: "MongoDB", type: "db" }
    ],
    description: "Mock e-commerce website for trainers. Allowed the user to sign up for an account, add items to their basket, and 'purchase' those items (this data was stored in a local MongoDB database). A Content Management System (CMS) was implemented for this project, allowing 'staff' to manually check stock counts, change stock details and view/edit customer purchase history.",
    link: "https://github.com/samcdonovan/E-Commerce-Website"
  },
  {
    id: 6,
    title: "Tetris Game Website",
    languages: [
      { lang: "JavaScript", type: "js" },
      { lang: "PHP", type: "php" },
    ],
    description: "Created a local website and a JavaScript Tetris which can be played on the website. It also allows users to sign up for an account (stored in session storage) and save their high scores on a leaderboard.",
    link: "https://github.com/samcdonovan/Tetris-Website"
  },
  {
    id: 7,
    title: "Mock Running App (Single Page WebApp)",
    languages: [
      { lang: "JavaScript", type: "js" }
    ],
    technologies: [
      { tech: "Promises", type: "other" },
      { tech: "NodeJS", type: "other" },
      { tech: "MySQL", type: "db" }
    ],
    description: "Created a local website that acts as a running app. This is inspired by Strava, so allows users to record and post exercises, view a timeline of their friends' exercises, and comment and like those posts. As a pseudo social media site, it also allows users to create profiles and upload profile pictures.",
    link: "https://github.com/samcdonovan/Running-App-Single-Page-WebApp"
  },
  {
    id: 8,
    title: "Hashtable Library System",
    languages: [
      { lang: "C++", type: "cpp" }
    ],
    technologies: [
      { tech: "Catch2 (Testing)", type: "other" }
    ],
    description: "Implemented a Hash Table from scratch with linear probing for collision resolution and a custom String hash function. Works on a simple library system, where it can store, retrieve and delete books from the system and can realistically provide O(1) time complexity and good space complexity if the number of books is of a reasonable size.",
    link: "https://github.com/samcdonovan/CPP-Hashtable"
  },

  {
    id: 9,
    title: "Mock Voice User Interface",
    languages: [
      { lang: "JavaScript", type: "js" }
    ],
    technologies: [
      { tech: "WebKitSpeech", type: "other" }
    ],
    description: " Created a mock IDE which could be controlled by a voice user interface (VUI). This project was more about the exploration of how VUI's could be used in an educational setting, and was less about the implementation, but was highly interesting and very fun to create. The VUI is named 'CLIDE'.",
    link: "https://github.com/samcdonovan/Mock-Voice-User-interface"
  },
];

export default projects;