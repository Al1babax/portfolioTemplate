import { Sidebar } from "../components/Sidebar";
import { Bio } from "../components/Bio";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { History } from "../components/History";
import { Projects2 } from "../components/Projects2"

export function LandingPage() {
  return (
    <div className="landing-page flex bg-red-0 w-full">
      <Sidebar />
      <div className="content w-full">
        <Bio />
        <Projects2 />
        <History />
        <Contact />
      </div>
    </div>
  );
}