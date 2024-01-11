const projects = [
    {
        stack: ["TypeScript", "React", "Css", "Sass"],
        name: "Portfolio",
        description: "This app was created as my portfolio. Each component was coded from zero without any external library to show my skills in FrontEnd. It is responsive, so you can try it on your mobile.",
        highlights: ["without any external library", "FrontEnd", "responsive"],
        repository: "https://github.com/nravesz/Portfolio",
        hasDemo: true,
        demo: "https://portfolio-nravesz.vercel.app/"
    },
    {
        stack: ["TypeScript", "Node.Js", "Jest", "React"],
        name: "Cryptomonitor",
        description: "The app allows you to monitor cryptocurrency values and buy and sell according to customizable rules. I worked on the Rest API and the business logic. My tasks were: user authentication (we offered two options: normal login and Google Login), verification of permissions for administrator and guest roles, storage of the values through time and buying and selling the coins.\nThe Binance testing API was used to obtain the values and to buy and sell. To monitor changes in market values, we utilized websockets to establish communication with Binance.",
        highlights: ["Rest API", "business logic", "authentication", "Google Login", "buying and selling", "Binance testing API", "websockets"],
        repository: "https://github.com/nravesz/Cryptomonitor",
        hasDemo: false,
        demo: ""
    },
    {
        stack: ["TypeScript", "Node.Js", "Jest", "MongoDB", "React", "Css", "Sass", "React Redux", "JQuery"],
        name: "Genshin Impact Character Planner",
        description: "This app allows you to choose characters and select up to which level you want to take them, in order to know all the materials needed to level them up.\nOne of the challenges of this application was synchronizing the visual part with the changes the user made to the characters. This was crucial because any modification had to be reflected instantly, ensuring that the user would not have to reload the screen. To address this issue, React Redux was employed to manage the states of the components and to ensure robustness in the structure. Consequently, the components knew when to notify the backend about a change or when to update themselves.",
        highlights: ["synchronizing", "React Redux", "manage the states of the components", "robustness in the structure"],
        repository: "https://github.com/nravesz/genshin",
        hasDemo: true,
        demo: "https://genshin-planner.vercel.app/"
    },
    {
        stack: ["Python"],
        name: "Zero-Knowledge Proofs with STARK",
        description: "The objective of this project was to understand the STARK protocol to generate a proof to demonstrate the validity in the computations of our program without revealing information.",
        highlights: ["STARK protocol", "proof", "validity in the computations of our program"],
        repository: "https://github.com/nravesz/CriptografiaYBlockchain/tree/main/TP2",
        hasDemo: false,
        demo: ""
    },
    {
        stack: ["React Native", "Expo", "Boostrap"],
        name: "Ubademy App",
        description: "The app allows you to create both paid and free courses, subscribe to them, change your subscription tier, edit your created courses, add collaborators to them, create and edit exams. It was created with Expo and React Native. You can see some images in the repository. The app was based on Udemy.",
        highlights: ["Expo", "React Native", "Udemy"],
        repository: "https://github.com/MarcosRolando/taller2-ubademy-app",
        hasDemo: false,
        demo: ""
    },
    {
        stack: ["TypeScript", "Node.Js", "React"],
        name: "SafePawns",
        description: "The app is an AirBnB with two kinds of users: sitters and owners. Sitters offer their services to take care of pets in exchange for residing in the owner's house, and owners offer their homes in exchange for having their pets cared for. This app is useful for planning vacations without the need to pay for rent.\nThe goal of this project was its planning. For example, we created user stories with their respective story points, planned which user story would be in each sprint, studied potential users who might be interested in our application to better understand the features that needed implementation, and created charts to analyze our progress, etc.",
        highlights: ["AirBnB", "planning","user stories", "story points", "sprints", "charts"],
        repository: "https://github.com/RiedelNicolas/SafePaws",
        hasDemo: false,
        demo: ""
    },
    {
        stack: ["JavaScript", "React Native", "Expo"],
        name: "HomeSquad",
        description: "This app allows users to find individuals to perform specific tasks, and professionals who wish to offer their services (such as plumbing, carpentry, gardening, etc.) so that users can contact them. The app allows searching by categories, viewing ratings for each professional, leaving reviews, reading reviews from other users, initiating a chat for interaction with a professional, and maintaining a history of past hires, among its key features.",
        highlights: ["searching by categories", "viewing ratings", "reading reviews", "chat", "history of past hires"],
        repository: "https://github.com/RiedelNicolas/Homesquad",
        hasDemo: false,
        demo: ""
    },
    {
        stack: ["Python", "Pandas", "Seaborn"],
        name: "Data Analysis",
        description: "The factors influencing property prices in Mexico were analyzed from a dataset provided by a company. Based on this analysis, I participated with a team in a Kaggle competition created by the university to predict the prices of a set of properties. For this, we trained machine learning algorithms like Random Forest and XGBoost using the previous analysis to find the factors that help us to better predict the prices.",
        highliths: ["dataset", "Kaggle competition", "machine learning algorithms"],
        repository: "https://github.com/juankristal/7506-Datos",
        hasDemo: false,
        demo: ""
    }
];

export default projects;