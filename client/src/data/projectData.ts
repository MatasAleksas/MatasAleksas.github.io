export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    repoUrl: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Java Chat System",
        description: "A fully functioning chat room built using a client-server concept. Users can connect to a server and chat with other users on the same server.",
        imageUrl: "/public/vite.svg",
        technologies: ["Java", "Server/User Sockets", "Swing"],
        repoUrl: "https://github.com/MatasAleksas/Chat-System",
    },
    {
        id: 2,
        title: "Iris Classifier",
        description: "Uses machine learning to correctly identify iris flowers into 3 species. Setosa, Versicolor, and Virginica. Based on their unique features. The model is built using scikit-learn and trained on the iris data set.",
        imageUrl: "/public/vite.svg",
        technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
        repoUrl: "https://github.com/MatasAleksas/Iris-Classifier",
    },
    {
        id: 3,
        title: "Nerd-Wallet Credit Card Scraper",
        description: "This project was my attempt at creating a website scraper to collect the name and info of the best credit cards according to Nerd Wallet. It creates a text file and puts the info of the credit cards.",
        imageUrl: "/public/vite.svg",
        technologies: ["Python", "Selenium", "BeautifulSoup4", "Time"],
        repoUrl: "https://github.com/MatasAleksas/Credit-Card-Scraper",
    },
    {
        id: 4,
        title: "Cookie Clicker Clone",
        description: "This was my attempt at making a cookie clicker clone back when I was in high school...",
        imageUrl: "/public/vite.svg",
        technologies: ["Unity", "C#"],
        repoUrl: "https://baltic1.itch.io/cookie-clicker-clone",
    },
];