import { ISkillIcon } from "../components/common";

const skillList: ISkillIcon[] = [
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg",
        title: "Bootstrap"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        title: "C"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
        title: "GIt"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
        title: "Github"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        title: "JavaScript"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        title: "Jest"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
        title: "jQuery"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
        title: "Jupyter"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        title: "Linux"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        title: "MongoDB"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
        title: "Node.js"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg",
        title: "Pandas"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
        title: "PostgreSQL"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
        title: "Python"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg",
        title: "Qt"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        title: "Redux"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        title: "Sass"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        title: "TypeScript"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
        title: "Ubuntu"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
        title: "VSCode"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original-wordmark.svg",
        title: "Anaconda"
    }
].sort((a, b) => a.title.localeCompare(b.title));

export default skillList;
