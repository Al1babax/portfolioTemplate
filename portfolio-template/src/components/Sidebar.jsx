import { useState, useEffect } from "react";
import { Menu } from "../modals/Menu";

export function Sidebar() {
  // Setup all the states
  const [menuAnimation, setMenuAnimation] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [yscroll, setYscroll] = useState(window.scrollY);
  const [pageNumberPosition, setPageNumberPosition] = useState(0);

  // Handle the menu button
  function toggleMenu() {
    setMenuAnimation(!menuAnimation);
  }

  // Handle the window resize
  function handleResize() {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth, window.innerHeight]);


  // Handle the scrolling of the page to change the page number
  function handleScroll() {
    setYscroll(window.scrollY);
    if (yscroll > 0 && yscroll < 960/2) {
      setPageNumber(1);
    } else if (yscroll > 960/2 && yscroll < 960*1.5) {
      setPageNumber(2);
    } else if (yscroll > 960*1.5 && yscroll < 960*2.5) {
      setPageNumber(3);
    } else if (yscroll > 960*2.5 && yscroll < 960*3.5) {
      setPageNumber(4);
    } else if (yscroll > 960*3.5 && yscroll < 960*4.5) {
      setPageNumber(5);
    } else if (yscroll > 960*2.5 && yscroll < 960*3) {
      setPageNumber(6);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [yscroll]);


  // Handle page number changing animation
  function animtePageNumber() {
    setPageNumberPosition(1);
    setTimeout(() => {
      setPageNumberPosition(0);
    }, 200);
  }

  useEffect(() => {
    animtePageNumber();
  }, [pageNumber]);

  // Handle the menu button
  function openMenu() {
    if (menuOpen === true) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  // Logging states for debugging
  //console.log("screenWidth: ", screenWidth);
  //console.log("screenHeight: ", screenHeight);
  // console.log("yscroll: ", yscroll);
  // console.log("pageNumber: ", pageNumber);
  // console.log("pageNumberPosition: ", pageNumberPosition);
  // console.log("menuOpen: ", menuOpen);


  // CSS classes to reduce code duplication
  const infoTitleCSS = "text-red-400 mt-6 tracking-[0.28rem] text-[12px] pb-1";
  const infoValueCSS = "text-white -mt-1";

  return (
    <div className="sidebar min-w-[470px] bg-neutral-700 h-screen sticky top-0">
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="menu m-8">
        <button className="flex flex-col gap-1 bg-red-0 w-8 h-5 z-0 bg-green-0" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu} onClick={openMenu}>
          <div
            className={`line1 h-1 w-6 bg-white ${menuAnimation ? "translate-x-2" : ""} duration-300 ease-in-out transform`}
          ></div>
          <div
            className={`line2 h-1 w-4 bg-white ${menuAnimation ? "translate-x-4" : ""} duration-300 ease-in-out transform`}
          ></div>
          <div
            className="line3 h-1 w-8 bg-white"
          ></div>
        </button>
      </div>
      <div className="otherStuff bg-red-0 h-4/5 w-[65%] mx-auto mt-20">
        <div className="pageNumber flex gap-2 items-center font-bold">
          <p className={`${menuOpen ? "text-black opacity-20" : "text-red-400"} ${pageNumberPosition ? "-translate-x-1" : ""} duration-200 ease-in-out z-50`}>0{pageNumber}</p>
          <div className="line h-1 w-28 bg-white rounded z-50"></div>
          <p className="text-white z-50">06</p>
        </div>
        <div className="info mt-24">
          <p className={infoTitleCSS}>NAME</p>
          <p className={infoValueCSS}>Amy Stone</p>
          <p className={infoTitleCSS}>ROLE</p>
          <p className={infoValueCSS}>Designer</p>
          <p className={infoTitleCSS}>EMAIL</p>
          <p className={infoValueCSS}>stone@example.com</p>
          <p className={infoTitleCSS}>PHONE</p>
          <p className={infoValueCSS}>(+987) 987 654 321</p>
          <p className="mt-16 text-xl text-red-400">Nice signature</p>
        </div>
        <div className="bigPageNumber w-full flex justify-center bg-green-0 mt-16">
          <p className={`text-[160px] font-bold  tracking-[-1rem] ${menuOpen ? "font-outline-6 text-red-400" : "font-outline-4 text-neutral-700"} z-40 duration-1000 ease-in-out`}>0{pageNumber}</p>
        </div>
      </div>
    </div>
  );
}