import { Timeline } from "../modals/Timeline.jsx";
import { useState } from "react";
export function History() {



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

    <div className="sidebar  w-full bg-red-600 h-[960px] flex items-start bg-opacity-75">
      <div className="sidebar__content w-full flex justify-center gap-10 pt-20">
        <div class="leftcontent bg-red-800 w-[700px]">
          <h2 class="text-4xl font-medium px-">Experience</h2>
          <div className="div flex flex-col">
            {timelineHTML}
          </div>
        </div>
        
        <div className="rightcontent bg-red-400 w-[700px] flex flex-col gap-10">
          <h2 class="text-4xl font-medium px-">Education</h2>
          <h1 class="text-l font-helvetica">2019 - Write stuff here</h1>
          <h3 class="text-4xl font-medium px-">Programming skills</h3>
          <h1 class="text-l font-helvetica">2019 - Write stuff here</h1>
          <h3 class="text-4xl font-medium px-">Something</h3>
          <h1 class="text-l font-helvetica">2019 - Write stuff here</h1>
          <h3 class="text-4xl font-medium px-">Something more</h3>
          <h1 class="text-l font-helvetica">2019 - Write stuff here</h1>
        </div>
      </div>
    </div>
  );
}