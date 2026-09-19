import SKILLS from "@/assets/skills";

// Type definition
export interface ISkill {
    name: string;
    description: string;
    icon: ImageMetadata;
    link: string;
}

// #region Web Fundamentals & Languages
export const WebLanguagesStack = [
    {
        name: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: SKILLS.HtmlIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: SKILLS.CssIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: SKILLS.JsIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: SKILLS.TsIcon,
        link: "https://www.typescriptlang.org/",
    },
    {
        name: "Python",
        description: "High-level, general-purpose programming language focused on readability and rapid development.",
        icon: SKILLS.PythonIcon,
        link: "https://www.python.org/",
    },
    {
        name: "Java",
        description: "Object-oriented programming language widely used for enterprise, Android, and backend applications.",
        icon: SKILLS.JavaIcon,
        link: "https://www.oracle.com/java/",
    },
    {
        name: "PHP",
        description: "Server-side scripting language for building dynamic web applications.",
        icon: SKILLS.PhpIcon,
        link: "https://www.php.net/",
    },
] as const;
// #endregion

// #region Frontend & UI Libraries
export const FrontendLibrariesStack = [
    {
        name: "React.js",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: SKILLS.ReactIcon,
        link: "https://react.dev/",
    },
] as const;
// #endregion

// #region State & Events
export const StateEventStack = [
    {
        name: "Socket.io",
        description: "Real-time bidirectional communication library for building interactive web applications.",
        icon: SKILLS.SocketIoIcon,
        link: "https://socket.io/",
    },
] as const;
// #endregion

// #region Backend & APIs
export const BackendApisStack = [
    {
        name: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architectures.",
        icon: SKILLS.NodeIcon,
        link: "https://nodejs.org/",
    },
    {
        name: "Express.js",
        description: "Minimal and flexible Node.js web framework for building APIs and web applications.",
        icon: SKILLS.ExpressIcon,
        link: "https://expressjs.com/",
    },
    {
        name: "Flask",
        description: "Lightweight Python web framework used for building web applications and APIs.",
        icon: SKILLS.FlaskIcon,
        link: "https://flask.palletsprojects.com/",
    },
    {
        name: "PHP",
        description: "Server-side scripting language for building dynamic web applications.",
        icon: SKILLS.PhpIcon,
        link: "https://www.php.net/",
    },
    {
        name: "REST API",
        description: "Architectural style for designing networked applications using standardized HTTP methods and resources.",
        icon: SKILLS.RestApiIcon,
        link: "https://restfulapi.net/",
    },
    {
        name: "Firebase",
        description: "Backend-as-a-service platform offering authentication, real-time databases, storage, and hosting.",
        icon: SKILLS.FirebaseIcon,
        link: "https://firebase.google.com/",
    },
    {
        name: "Auth.js",
        description: "Authentication library designed for modern web applications, providing secure authentication features and integrations.",
        icon: SKILLS.NextAuthIcon,
        link: "https://authjs.dev/",
    },
    {
        name: "Google APIs",
        description: "Suite of APIs and services for integrating Google products and services into applications.",
        icon: SKILLS.GoogleCloud,
        link: "https://developers.google.com/",
    },
] as const;
// #endregion

// #region Databases, Caching & ORM
export const DatabaseStack = [
    {
        name: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for storing and managing data efficiently.",
        icon: SKILLS.MongoIcon,
        link: "https://www.mongodb.com/",
    },
    {
        name: "MySQL",
        description: "Open-source relational database management system for structured data.",
        icon: SKILLS.MysqlIcon,
        link: "https://www.mysql.com/",
    },
    {
        name: "PostgreSQL",
        description: "Advanced open-source relational database with strong SQL compliance and extensibility.",
        icon: SKILLS.PostgresIcon,
        link: "https://www.postgresql.org/",
    },
    {
        name: "MariaDB",
        description: "Open-source relational database management system compatible with MySQL for storing and managing structured data.",
        icon: SKILLS.MariaDBIcon,
        link: "https://mariadb.org/",
    },
    {
        name: "SQLite",
        description: "Lightweight, serverless relational database engine commonly used for local and embedded applications.",
        icon: SKILLS.SQLiteIcon,
        link: "https://www.sqlite.org/",
    },
    {
        name: "DBeaver",
        description: "Database management and development tool for working with SQL databases and database systems.",
        icon: SKILLS.DbeaverIcon,
        link: "https://dbeaver.io/",
    },
] as const;
// #endregion

// #region Data Analytics
export const DataAnalyticsStack = [
    {
        name: "Data Analysis",
        description: "Analyzing data to identify patterns, trends, relationships, and useful insights.",
        icon: SKILLS.DataAnalysisIcon,
        link: "https://pandas.pydata.org/",
    },
    {
        name: "Data Visualization",
        description: "Presenting data through charts and visual representations to make information easier to understand.",
        icon: SKILLS.DataVisualizationIcon,
        link: "https://matplotlib.org/",
    },
    {
        name: "Data Cleaning",
        description: "Preparing datasets by identifying and handling missing, duplicate, incorrect, or inconsistent data.",
        icon: SKILLS.DataCleaningIcon,
        link: "https://pandas.pydata.org/",
    },
    {
        name: "Basic Statistics",
        description: "Applying basic statistical concepts to summarize, interpret, and understand data.",
        icon: SKILLS.StatisticsIcon,
        link: "https://www.r-project.org/",
    },
] as const;
// #endregion

// #region Networking
export const NetworkingStack = [
    {
        name: "Computer Networking",
        description: "Fundamentals of connecting computers and devices to communicate and share resources over networks.",
        icon: SKILLS.NetworkingIcon,
        link: "https://www.cisco.com/",
    },
    {
        name: "TCP/IP",
        description: "Core networking protocols used for communication between devices across networks.",
        icon: SKILLS.TcpIpIcon,
        link: "https://www.rfc-editor.org/rfc/rfc9293",
    },
    {
        name: "IP Addressing",
        description: "Understanding IP addresses and their role in identifying and communicating with devices on a network.",
        icon: SKILLS.IpAddressingIcon,
        link: "https://www.cisco.com/",
    },
] as const;
// #endregion

// #region Cloud, Storage & DevOps
export const CloudDevOpsStack = [
    {
        name: "Docker",
        description: "Containerization platform for packaging applications and their dependencies into portable containers.",
        icon: SKILLS.DockerIcon,
        link: "https://www.docker.com/",
    },
    {
        name: "Firebase",
        description: "Backend-as-a-service platform offering authentication, real-time databases, storage, and hosting.",
        icon: SKILLS.FirebaseIcon,
        link: "https://firebase.google.com/",
    },
    {
        name: "Google Cloud",
        description: "Cloud platform providing infrastructure, storage, and managed services for deploying applications.",
        icon: SKILLS.GoogleCloud,
        link: "https://cloud.google.com/",
    },
    {
        name: "Netlify",
        description: "Platform for deploying and hosting modern web projects with built-in CI/CD and serverless functions.",
        icon: SKILLS.NetlifyIcon,
        link: "https://www.netlify.com/",
    },
    {
        name: "Vercel",
        description: "Deployment platform for modern web applications and frontend frameworks.",
        icon: SKILLS.VercelIcon,
        link: "https://vercel.com/",
    },
    {
        name: "Render",
        description: "Cloud platform for hosting web services, static sites, and background workers.",
        icon: SKILLS.RenderIcon,
        link: "https://render.com/",
    },
] as const;
// #endregion

// #region Tooling, Testing & Observability
export const ToolingTestingStack = [
    {
        name: "Git",
        description: "Distributed version control system for tracking changes and collaborating on code.",
        icon: SKILLS.GitIcon,
        link: "https://git-scm.com/",
    },
    {
        name: "GitHub",
        description: "Code hosting platform for Git repositories with collaboration and development tools.",
        icon: SKILLS.GithubIcon,
        link: "https://github.com/",
    },
    {
        name: "npm",
        description: "Package manager for JavaScript used to install and manage project dependencies.",
        icon: SKILLS.NpmIcon,
        link: "https://www.npmjs.com/",
    },
    {
        name: "Bun",
        description: "All-in-one JavaScript runtime, bundler, and test runner focused on performance.",
        icon: SKILLS.BunIcon,
        link: "https://bun.sh/",
    },
    {
        name: "Vite",
        description: "Modern build tooling for web development with rapid startup and hot module replacement.",
        icon: SKILLS.ViteIcon,
        link: "https://vite.dev/",
    },
] as const;
// #endregion

// #region Configuration & Templating
export const ConfigTemplatingStack = [
    {
        name: "JSON",
        description: "Lightweight data-interchange format widely used for APIs, configuration, and structured data.",
        icon: SKILLS.JsonIcon,
        link: "https://www.json.org/",
    },
] as const;
// #endregion

// #region IDEs & Design Tools
export const IdesDesignStack = [
    {
        name: "VS Code",
        description: "Lightweight, extensible source-code editor with rich ecosystem and debugging support.",
        icon: SKILLS.VsCodeIcon,
        link: "https://code.visualstudio.com/",
    },
    {
        name: "Visual Studio",
        description: "Integrated development environment for .NET, C++, and other Microsoft-stack applications.",
        icon: SKILLS.VisualStudioIcon,
        link: "https://visualstudio.microsoft.com/",
    },
    {
        name: "Android Studio",
        description: "Official IDE for Android development with integrated tools for building and profiling apps.",
        icon: SKILLS.AndroidStudioIcon,
        link: "https://developer.android.com/studio",
    },
    {
        name: "Figma",
        description: "Collaborative interface design tool for creating UI designs, prototypes, and design systems.",
        icon: SKILLS.FigmaIcon,
        link: "https://www.figma.com/",
    },
] as const;
// #endregion

export default {
    WebLanguagesStack,
    FrontendLibrariesStack,
    StateEventStack,
    BackendApisStack,
    DatabaseStack,
    DataAnalyticsStack,
    NetworkingStack,
    CloudDevOpsStack,
    ToolingTestingStack,
    ConfigTemplatingStack,
    IdesDesignStack,
};