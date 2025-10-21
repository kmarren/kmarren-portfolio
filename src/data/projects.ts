import waddle from "../assets/Waddle.png";
import workout from "../assets/workout.png";

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
        title: "Workout Tracker",
        description: "A simple Android app to log workouts, track progress, and stay consistent with fitness goals",
        details: "Kotlin and modern Android components",
        link: "https://github.com/kmarren/workout-tracker",
        image: workout
    },
];
