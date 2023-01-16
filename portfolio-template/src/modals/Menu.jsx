import { useEffect } from "react";
import { useState } from "react";

export function Menu(props) {
    const { menuOpen, setMenuOpen } = props;

    const [hoverLink, setHoverLink] = useState([false, false, false, false]);

    function closeMenu() {
        setMenuOpen(!menuOpen);
    }

    function handleHoverLink(index) {
        const newHoverLink = [...hoverLink];
        newHoverLink[index] = !newHoverLink[index];
        setHoverLink(newHoverLink);
    }

    return (
        <div className={`menu w-full h-full bg-red-400 absolute top-0 z-10 ${menuOpen ? "left-0" : "-left-[470px]"} duration-1000 ease-in-out`}>
            <div className="links bg-green-0 w-3/4 h-3/4 text-white">
                <button className="mt-4 mx-10" onClick={closeMenu}>
                    <p className="text-4xl">x</p>
                </button>
                <div className="links2 bg-red-0 flex flex-col gap-8 text-3xl font-bold tracking-tight my-60 pl-20">
                    <button onMouseEnter={() => handleHoverLink(0)} onMouseLeave={() => handleHoverLink(0)} className="bg-green-0">
                        <p className="flex flex-col items-center relative">
                            Home
                            {hoverLink[0] && <div className="bar w-24 h-4 bg-black opacity-20 -bottom-1 -z-10 absolute"></div>}
                        </p>
                    </button>
                    <button onMouseEnter={() => handleHoverLink(1)} onMouseLeave={() => handleHoverLink(1)}>
                        <p className="flex flex-col items-center relative">
                            Projects
                            {hoverLink[1] && <div className="bar w-24 h-4 bg-black opacity-20 -bottom-1 -z-10 absolute"></div>}
                        </p>
                    </button>
                    <button onMouseEnter={() => handleHoverLink(2)} onMouseLeave={() => handleHoverLink(2)}>
                        <p className="flex flex-col items-center relative">
                            Experience
                            {hoverLink[2] && <div className="bar w-24 h-4 bg-black opacity-20 -bottom-1 -z-10 absolute"></div>}
                        </p>
                    </button>
                    <button onMouseEnter={() => handleHoverLink(3)} onMouseLeave={() => handleHoverLink(3)}>
                        <p className="flex flex-col items-center relative">
                            Contact
                            {hoverLink[3] && <div className="bar w-24 h-4 bg-black opacity-20 -bottom-1 -z-10 absolute"></div>}
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}