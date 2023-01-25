import { Timeline } from "../modals/Timeline.jsx";
import { useState, useRef, useEffect } from "react";
export function History(props) {
  const { componentHeights, handleResize } = props;
  const ref = useRef(null);

  useEffect(() => {
      handleResize("history", ref.current.offsetHeight)
      const handleResize2 = () => {
          handleResize("history", ref.current.offsetHeight)
      }
      window.addEventListener("resize", handleResize2);
      return () => window.removeEventListener("resize", handleResize2);
  }, [ref.current]);


  const timelinedata = {
    1: {
      id: 0,
      year: "2019",
      yearGap: "2019 - Present",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, laudantium provident. Quasi sunt odit voluptates. Totam labore animi dolore, assumenda velit repellat veritatis suscipit blanditiis ipsam minima nisi rem numquam?",
      isLast: false,
    },
    2: {
      id: 1,
      year: "2019",
      yearGap: "2019 - Present",
      text: "SAAATAAAANAAAAAAA ipsum dolor, sit amet consectetur adipisicing elit. Unde, laudantium provident. Quasi sunt odit voluptates. Totam labore animi dolore, assumenda velit repellat veritatis suscipit blanditiis ipsam minima nisi rem numquam?",
      isLast: true,
    },
  }

  let timelineHTML = [];

  for (let i = 1; i <= Object.keys(timelinedata).length; i++) {
    timelineHTML.push(
      <Timeline
        key={i}
        id={timelinedata[i].id}
        year={timelinedata[i].year}
        yearGap={timelinedata[i].yearGap}
        text={timelinedata[i].text}
        isLast={timelinedata[i].isLast}
      />
    );
  }

  return (
    <div className="sidebar  w-full bg-neutral-800 flex items-center opacity-100 text-slate-300" ref={ref}>
      <div className="sidebar__content w-full flex 3xl:flex-row flex-col justify-center gap-16 pt-20 items-center px-10">
        <div className="leftcontent bg-red-0 w-full md:w-[750px] bg-red-0">
          <h2 className="text-4xl font-medium text-red-400 text-center">Experience</h2>
          <div className="div flex flex-col gap-[300px] md:gap-0 mt-36 md:mt-0 pb-20 md:pb-0">
            {timelineHTML}
          </div>
        </div>
        <div className="rightcontent bg-red-0 w-[350px] md:w-[550px] flex flex-col gap-3 bg-neutral-0">
          <div className="upper w-full h-full flex justify-evenly gap-3">
            <div className="frontend w-full h-full bg-neutral-700 bg-opacity-40 rounded-2xl p-3 pl-5">
              <p className="title text-3xl text-red-400">Frontend</p>
              <ul className="text list-disc pl-4 pt-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="frontend w-full h-full bg-neutral-700 bg-opacity-40 rounded-2xl p-3 pl-5">
              <p className="title text-3xl text-red-400">Backend</p>
              <ul className="text list-disc pl-4 pt-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          <div className="lower w-full h-full flex justify-evenly gap-3">
          <div className="frontend w-full h-full bg-neutral-700 bg-opacity-40 rounded-2xl p-3 pl-5">
              <p className="title text-3xl text-red-400">Others</p>
              <ul className="text list-disc pl-4 pt-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="frontend w-full h-full bg-neutral-700 bg-opacity-40 rounded-2xl p-3 pl-5">
              <p className="title text-3xl text-red-400">Languages</p>
              <ul className="text list-disc pl-4 pt-2">
                <li>English</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}