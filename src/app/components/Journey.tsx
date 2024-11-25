import { journeyList } from "../utils/constants";
import JourneyCard from "./JourneyCard";

export default function Journey() {
  return (
    <section id="journey" className="w-full py-12 px-4">
      <div className="w-full space-x-48 flex justify-between">
        <h1 className="text-5xl font-semibold mb-4 flex-1 text-wrap">
          Transform Your Fitness Journey
        </h1>
        <p className="text-sm my-auto text-gray-300 flex-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </p>

        <div className="w-full">
          {journeyList.map((item) => (
            <JourneyCard key={item.id} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
