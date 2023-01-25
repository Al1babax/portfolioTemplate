import { Sidebar } from "../components/Sidebar";
import { Bio } from "../components/Bio";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { History } from "../components/History";
import { Projects2 } from "../components/Projects2"

import { useState, useRef } from "react";

export function LandingPage() {

  const [componentHeights, setComponentHeights] = useState({
    bio: 840,
    projects: 840,
    history: 840,
    contact: 840,
  });

  function handleResize(componentName, componentHeight) {
    setComponentHeights({
      ...componentHeights,
      [componentName]: componentHeight,
    });
    console.log("ran handleResize")
  }

  console.log("bio height: " + componentHeights.bio)
  console.log("projects height: " + componentHeights.projects)
  console.log("history height: " + componentHeights.history)
  console.log("contact height: " + componentHeights.contact)

  return (
    <div className="landing-page sm:flex bg-red-0">
      <Sidebar componentHeights={componentHeights} />
      <div className="content w-full">
        <Bio componentHeights={componentHeights} handleResize={handleResize} />
        <Projects2 componentHeights={componentHeights} handleResize={handleResize} />
        <History componentHeights={componentHeights} handleResize={handleResize} />
        <Contact componentHeights={componentHeights} handleResize={handleResize} />
      </div>
    </div>
  );
}