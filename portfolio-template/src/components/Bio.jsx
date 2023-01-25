import front_test from "../resources/images/front_test.jpeg";
import { useRef, useEffect } from "react";

export function Bio(props) {
  const { componentHeights, handleResize } = props;

  const socialClasses = "hover:text-stone-400 hover:scale-105 duration-300 ease-in-out flex justify-center items-center px-3 py-1 rounded-md border-0 border-red-50 hover:border-red-300";

  const ref = useRef(null);

    useEffect(() => {
        handleResize("bio", ref.current.offsetHeight)
        const handleResize2 = () => {
            handleResize("bio", ref.current.offsetHeight)
        }
        window.addEventListener("resize", handleResize2);
        return () => window.removeEventListener("resize", handleResize2);
    }, [ref.current]);

  return (
    <div className="Bio bg-red-100 bg-opacity-[30%] w-full flex h-screen relative" ref={ref}>
      <div className="info bg-red-0 w-full sm:w-[700px] flex flex-col gap-16 justify-center px-10 text-xl z-10 pr-[70px]">
        <div className="hello bg-sky-0 z-10">
          <p className="text-stone-600 text-3xl">Hello. My name is</p>
        </div>
        <div className="name bg-sky-0 text-6xl sm:text-8xl font-extrabold text-red-400">
          <p className="">Pertti <br /> Kinnunen</p>
        </div>
        <div className="bullshit bg-sky-0 z-10">
          <p className="text-stone-500 z-10">A full stack all around designer that may or may not include a guide for specific creative potential methods who framing and evaluating moves.</p>
        </div>
        <div className="socials bg-sky-0 flex flex-col  sm:flex-row justify-center pt-10 text-stone-600 text-md tracking-widest gap-10">
          <a href="" className={`${socialClasses}`}>
            Instagram
          </a>
          <a href="" className={`${socialClasses}`}>
            Facebook
          </a>
          <a href="" className={`${socialClasses}`}>
            Github
          </a>
        </div>
      </div>
      {true && <div className="photo bg-slate-400 right-0 w-0 md:w-full h-full z-0 flex justify-center items-center bg-profile-image bg-cover">
      </div>}
    </div>
  );
}