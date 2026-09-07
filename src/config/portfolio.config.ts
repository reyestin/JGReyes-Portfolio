import { Avatar_180, Avatar_250 } from "@assets/images";

// Importing SVGs as raw strings
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import TwitterIconRaw from "@assets/SVGs/Twitter.svg?raw";
import InstagramIconRaw from "@assets/SVGs/Instagram.svg?raw";
import GoogleIconRaw from "@assets/SVGs/Google.svg?raw";
import DiscordIconRaw from "@assets/SVGs/Discord.svg?raw";

import { LogoIcon } from "@/assets/SVGs";
import { ThemeOptions } from "../../scripts/generateThemes";

// Theme Configuration
export const themeConfig = ThemeOptions.DEFAULT;

// Site Configuration
export const siteConfig = {
    title: "JG Reyes | IT Student & Aspiring Developer",
    description: "Official portfolio of JG Reyes, a 4th-year Information Technology student seeking OJT opportunities. Experienced in building responsive web applications, frontend components, and practical software solutions.",
    googleSiteVerification: "YRAUUyc8TP4QJ1s53KAdLxcON9xifQf33BnLeP-F_5Y",
    keywords: "JG Reyes, JGReyes, IT Student, OJT Intern, IT Intern Portfolio, Web Developer Intern, Aspiring Software Engineer, React Developer, Frontend Developer, JavaScript Developer, TypeScript, HTML CSS, Modern Web Apps, Student Developer Portfolio",
    avatar: "https://raw.githubusercontent.com/JGReyes/JGReyes.github.io/main/Avatar.webp",
    siteUrl: "https://jgreyes.netlify.app/",
}

// Header Section
export const headerConfig = {
    logotext: "Portfolio.",
    actionButton: {
        text: "Resume",
        url: "/JGReyes Resume.pdf" // use full URL or Public Folder path
    },
}

// Hero Section
export const heroConfig = {
    salutation: "Hi👋🏻 My name is",
    firstName: "Justine.",
    lastName: "",
    position: "IT Student & Aspiring Developer",
    tagLine: {
        prefixText: "I turn ideas into",
        highlightedText: "Functional Code",
        suffixText: "through continuous learning."
    },
    avatar: Avatar_180,
    links: [
        {
            label: "GitHub",
            url: "https://github.com/reyestin",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/justine-grace-gabayeron-reyes/",
            icon: LinkedinIconRaw
        },
        {
            label: "X",
            url: "https://x.com/ismetin_",
            icon: TwitterIconRaw
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/ssup.tin/",
            icon: InstagramIconRaw
        },
        {
            label: "Google Search",
            url: "mailto: juga.reyes.ui@phinmaed.com",
            icon: GoogleIconRaw
        }
    ],
}

// About Section
export const aboutConfig = {
    aboutAvatar: Avatar_250,
    description: [
        "Hey there! 👋🏻 I'm Justine Grace G. Reyes, a 4th-year Information Technology student currently seeking an On-the-Job Training (OJT) / Internship placement.",
        "I enjoy building responsive web applications and practical software tools — with a strong focus on clean code, user-friendly design, and continuous learning.",
        "I naturally go deeper into problem-solving — optimizing features, refining UI elements, and ensuring systems run smoothly and efficiently.",
        "If your team is looking for a dedicated IT intern eager to contribute, learn, and tackle real-world challenges… I’d love to connect! 😄"
    ],
}

// Footer Section
export const footerConfig = {
    logo: LogoIcon,
    title: "JG Reyes | Portfolio.",
    links: [
        {
            label: "GitHub",
            url: "https://github.com/reyestin",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/justine-grace-gabayeron-reyes/",
            icon: LinkedinIconRaw
        },
        {
            label: "X",
            url: "https://x.com/ismetin_",
            icon: TwitterIconRaw
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/ssup.tin/",
            icon: InstagramIconRaw
        },
        {
            label: "Discord",
            url: "https://discord.gg/",
            icon: DiscordIconRaw
        },
        {
            label: "Google Search",
            url: "mailto: juga.reyes.ui@phinmaed.com",
            icon: GoogleIconRaw
        }
    ],
    copyrightText: `© Copyright ${new Date().getFullYear()
        } JG Reyes`
}

