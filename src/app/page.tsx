import Achievement from "./components/Achievement";
import Beranda from "./components/Beranda";
import Closing from "./components/Closing";
import Journey from "./components/Journey";
import SkillsView from "./components/SkillsView";
import SubscriptionPlans from "./components/SubscriptionPlans";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Beranda />

      <Journey />

      <Works />

      <SkillsView />

      <Achievement />

      <SubscriptionPlans />

      <Closing />
    </>
  );
}
