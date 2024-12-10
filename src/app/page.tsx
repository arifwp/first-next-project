import Achievement from "./components/Achievement";
import Beranda from "./components/Beranda";
import Journey from "./components/Journey";
import SkillsView from "./components/SkillsView";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Beranda />
      <Journey />
      <Works />
      <SkillsView />
      <Achievement />
    </>
  );
}
