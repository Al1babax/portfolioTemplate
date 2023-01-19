import { ProjectCard } from "../modals/ProjectCard"
import { useState } from "react";
import { SingleProject } from "../modals/SingleProject";
import test1 from "../resources/images/test1.jpeg";
import test2 from "../resources/images/test2.jpeg";
import test3 from "../resources/images/test3.jpeg";


export function Projects2() {
    const [projectNumber, setProjectNumber] = useState(1);
    const [projectOpen, setProjectOpen] = useState(false);


    const projects = {
        1: {
            id: 1,
            name: "Project 1",
            description: "This is project 1",
            longDescription: "This is a long description of project 1",
            thumbnail: test1,
            githubLink: "",
            liveLink: "",
            images: [
                {
                    image: test3,
                    legend: "Legend 1"
                },
                {
                    image: test2,
                    legend: "Legend 2"
                },
                {
                    image: test1,
                    legend: "Legend 3"
                },
            ],
        },
        2: {
            id: 2,
            name: "Project 2",
            description: "This is project 2",
            longDescription: "This is a long description of project 2",
            thumbnail: "",
            githubLink: "",
            liveLink: "",
            images: [],
        },
        3: {
            id: 3,
            name: "Project 3",
            description: "This is project 3",
            longDescription: "This is a long description of project 3",
            thumbnail: "",
            githubLink: "",
            liveLink: "",
            images: [],
        },
        4: {
            id: 4,
            name: "Project 4",
            description: "This is project 4",
            longDescription: "This is a long description of project 4",
            thumbnail: "",
            githubLink: "",
            liveLink: "",
            images: [],
        },
        5: {
            id: 5,
            name: "Project 5",
            description: "This is project 5",
            longDescription: "This is a long description of project 5",
            thumbnail: "",
            githubLink: "",
            liveLink: "",
            images: [],
        },
        6: {
            id: 6,
            name: "Project 6",
            description: "This is project 6",
            longDescription: "This is a long description of project 6",
            thumbnail: "",
            githubLink: "",
            liveLink: "",
            images: [],
        },
    }

    let projectsHTML = [];

    for (let i = 1; i <= Object.keys(projects).length; i++) {
        projectsHTML.push(
            <ProjectCard
                key={i}
                id={projects[i].id}
                name={projects[i].name}
                description={projects[i].description}
                longDescription={projects[i].longDescription}
                thumbnail={projects[i].thumbnail}
                githubLink={projects[i].githubLink}
                liveLink={projects[i].liveLink}
                setProjectNumber={setProjectNumber}
                setProjectOpen={setProjectOpen}
            />
        )
    }


    return (
        <div className="sidebar w-full bg-neutral-800 h-[960px] flex justify-center items-center z-30 overflow-hidden">
            {
                projectOpen && <SingleProject
                    id={projects[projectNumber].id}
                    name={projects[projectNumber].name}
                    description={projects[projectNumber].description}
                    longDescription={projects[projectNumber].longDescription}
                    githubLink={projects[projectNumber].githubLink}
                    liveLink={projects[projectNumber].liveLink}
                    setProjectOpen={setProjectOpen}
                    projectNumber={projectNumber}
                    projectOpen={projectOpen}
                    images={projects[projectNumber].images}
                />
            }
            <div className={`projects bg-green-0 grid grid-cols-3 grid-rows-2 gap-5 ${projectOpen ? "-translate-x-[2000px]" : ""} duration-500 ease-in-out`}>
                {projectsHTML}
            </div>
        </div >
    )
}