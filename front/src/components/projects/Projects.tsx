import { ProjectsCarousel } from ".";
import { Page } from "../common";
import projects from "../../data/projects";

const Projects = () => {
    return (
        <div>
            <Page title="Projects">
                <></>
            </Page>
            <ProjectsCarousel projects={projects} />
        </div>
    );
};

export default Projects;
