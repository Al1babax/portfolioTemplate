import { Sidebar } from "../components/Sidebar";
import { Bio } from "../components/Bio";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { History } from "../components/History";

export function LandingPage() {
  return (
    <div className="landing-page flex bg-red-400 w-full">
      <Sidebar />
      <Bio />
    </div>
  );
}