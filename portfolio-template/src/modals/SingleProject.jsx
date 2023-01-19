import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function SingleProject(props) {

    const [componentPosition, setComponentPosition] = useState("translate-x-[2000px]")

    const {
        id,
        name,
        description,
        longDescription,
        githubLink,
        liveLink,
        setProjectOpen,
        projectNumber,
        projectOpen,
        images,
    } = props;

    function closeProject() {
        setProjectOpen(false);
    }

    if (projectNumber === id && projectOpen) {
        setTimeout(() => {
            setComponentPosition("translate-x-[20px]")
        }, 100)
    }

    let carouseDivs = [];

    for (let i = 0; i < images.length; i++) {
        carouseDivs.push(
            <div key={i}>
                <img src={images[i].image} alt="" className="w-full h-full" />
            </div>
        )
    }

    const linksCSS = "text-xl border-2 border-red-400 rounded-[90px] px-8 py-2 hover:bg-red-400 hover:text-white transition duration-500 ease-in-out text-white flex justify-center items-center"

    return (
        <div className={` bg-neutral-800 min-w-full h-[960px] z-30 ${componentPosition} duration-500 ease-in-out relative flex justify-center items-center gap-14`} >
            <button className="close w-10 h-10 p-10 absolute right-10 top-0" onClick={closeProject}>
                <p className="text-7xl text-red-600">x</p>
            </button>
            <div className="leftContent w-[700px] h-[500px] bg-green-0">
                <div className="carousel w-full h-full">
                    <Carousel autoPlay="true" infiniteLoop="true" dynamicHeight="true">
                        {carouseDivs}
                    </Carousel>
                </div>
            </div>
            <div className="rightContent w-[500px] h-[500px] bg-neutral-800 flex flex-col gap-10 p-5">
                <h1 className="name text-3xl text-red-400">{name}</h1>
                <p className="longDescription text-xl text-slate-300">{longDescription}</p>
                <div className="links flex gap-5 pt-24">
                    <a href={githubLink} target="_blank" rel="noreferrer" className={`${linksCSS}`}>
                        <p>Github</p>
                    </a>
                    <a href={liveLink} target="_blank" rel="noreferrer" className={`${linksCSS}`}>
                        <p>Live</p>
                    </a>
                </div>
            </div>
        </div>
    )
}