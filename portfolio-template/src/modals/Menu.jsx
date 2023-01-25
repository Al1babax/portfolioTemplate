import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export function Menu(props) {
    const { menuOpen, setMenuOpen } = props;

    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    const [hoverLink, setHoverLink] = useState([false, false, false, false]);

    // Scroll to element using refs
    function scrollToElement(pixels) {
        window.scrollTo({
            top: pixels,
            left: 0,
            behavior: "smooth",
        });
    }

    function closeMenu() {
        setMenuOpen(!menuOpen);
    }

    function handleHoverLink(index) {
        const newHoverLink = [...hoverLink];
        newHoverLink[index] = !newHoverLink[index];
        setHoverLink(newHoverLink);
    }

    return (
        <div className={`menu w-[380px] 2xl:w-full h-screen md:h-full bg-gradient-to-tl from-neutral-800 via-neutral-600 to-red-400 absolute top-0 z-50 md:z-10 ${menuOpen ? "left-0" : "-left-[470px]"} duration-1000 ease-in-out`}>
            <div className="links bg-green-0 w-3/4 h-3/4 text-white z-50 md:z-0">
                <button className="mt-4 mx-10" onClick={closeMenu}>
                    <p className="text-4xl">x</p>
                </button>
                <div className="links2 bg-red-0 flex flex-col gap-8 text-3xl font-bold tracking-tight my-60 pl-20 z-50">
                    <button
                        onMouseEnter={() => handleHoverLink(0)}
                        onMouseLeave={() => handleHoverLink(0)}
                        className="bg-green-0"
                        onClick={() => scrollToElement(0)}>
                        <p className="flex flex-col items-center relative">
                            Home
                            {hoverLink[0] && <div className="bar w-24 h-4 bg-black opacity-20 -bottom-1 -z-10 absolute"></div>}
                        </p>
                    </button>
                    <button onMouseEnter={() => handleHoverLink(1)} onMouseLeave={() => handleHoverLink(1)} onClick={() => scrollToElement(960)} className="z-50">
                        <p className="flex flex-col items-center relative z-50">
                            Projects
                            {hoverLink[1] && <div className="bar w-[120px] h-4 bg-black opacity-20 -bottom-1 -z-10 absolute"></div>}
                        </p>
                    </button>
                    <button onMouseEnter={() => handleHoverLink(2)} onMouseLeave={() => handleHoverLink(2)}onClick={() => scrollToElement(960*2)}>
                        <p className="flex flex-col items-center relative">
                            Experience
                            {hoverLink[2] && <div className="bar w-[170px] h-4 bg-black opacity-20 -bottom-1 -z-10 absolute"></div>}
                        </p>
                    </button>
                    <button onMouseEnter={() => handleHoverLink(3)} onMouseLeave={() => handleHoverLink(3)}onClick={() => scrollToElement(960*3)}>
                        <p className="flex flex-col items-center relative">
                            Contact
                            {hoverLink[3] && <div className="bar w-[120px] h-4 bg-black opacity-20 -bottom-1 -z-10 absolute"></div>}
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}