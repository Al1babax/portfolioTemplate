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
        <div className={` bg-neutral-0 w-[375px] h-[500px] lg:w-[800px] 2xl:w-[1000px] z-30 ${componentPosition} duration-500 ease-in-out relative flex 3xl:flex-row flex-col justify-center items-center 3xl:gap-14 sm:mt-14`}>
            <div className="mobile flex flex-row-reverse justify-center h-[300px] sm:h-full">
                <button className="close w-10 h-10 p-10 3xl:absolute right-10 bg-green-0 flex justify-center items-center -mt-[90px]" onClick={closeProject}>
                    <p className="text-7xl text-red-600">x</p>
                </button>
                <div className="leftContent w-full h-[500px] bg-green-0">
                    <div className="carousel w-full h-full">
                        <Carousel autoPlay="true" infiniteLoop="true" dynamicHeight="true">
                            {carouseDivs}
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="rightContent w-[375px] lg:w-[500pxpx] h-[500px] bg-neutral-800 flex flex-col gap-0 3xl:gap-10 3xl:p-5">
                <h1 className="name text-3xl text-red-400">{name}</h1>
                <p className="longDescription text-xl text-slate-300">{longDescription}</p>
                <div className="links flex gap-5 3xl:pt-24">
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