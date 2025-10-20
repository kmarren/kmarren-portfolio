import waddle from "../assets/Waddle.png";
import headshot from "../assets/headshot.png";

export type Project = {
    title: string
    description: string
    details: string
    link: string
    image: string
}

export const projects: Project[] = [
    {
        title: "Waddle",
        description: "University of South Carolina Event Discovery Platform",
        details: "Python, Django, SQLite",
        link: "https://capstone.cse.sc.edu/video/2025/Waddle/",
        image: waddle
    },
    {
        title: "Project 2",
        description: "This is a project",
        details: "These are the frameworks and languages i used",
        link: "#",
        image: headshot
    },
    {
        title: "Project 3",
        description: "This is a project",
        details: "These are the frameworks and languages i used",
        link: "#",
        image: headshot
    },
    {
        title: "Project 4",
        description: "This is a project",
        details: "These are the frameworks and languages i used",
        link: "#",
        image: headshot
    },
];
