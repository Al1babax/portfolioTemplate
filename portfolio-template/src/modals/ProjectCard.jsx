import { useState } from "react";

export function ProjectCard(props) {

    const [isHovered, setIsHovered] = useState(false);

    const {
        id,
        name,
        description,
        longDescription,
        thumbnail,
        githubLink,
        liveLink,
        setProjectNumber,
        setProjectOpen,
    } = props;

    function mouseEnter() {
        setIsHovered(true);
    }

    function mouseLeave() {
        setIsHovered(false);
    }

    function openProject() {
        setProjectNumber(id);
        setProjectOpen(true);
    }

    return (
        <button className="projectCard w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] bg-slate-600 overflow-hidden relative" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={openProject}>
            <div className={`info absolute z-40 bg-black bg-opacity-[60%] w-full h-full flex flex-col justify-end gap-4 pb-5 pl-5 text-white ${isHovered ? "" : "lg:-translate-x-[500px]"} duration-500 ease-in-out`}>
                <h1 className="name z-40 text-xl">{name}</h1>
                <div className="desc flex items-center gap-2">
                    <div className="line w-6 h-[2px] bg-white z-40"></div>
                    <p className="description z-40">{description}</p>
                </div>
            </div>
            <img src={thumbnail} alt="" className="w-full h-full" />
        </button>
    )
}