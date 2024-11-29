import { journeyList } from "../utils/constants";
import JourneyCard from "./JourneyCard";

export default function Journey() {
  return (
    <section id="journey" className="w-full py-12 px-4">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col text-center sm:flex-row sm:text-left sm:space-x-12 sm:justify-between">
          <h1 className="text-4xl md:text-5ml font-semibold mb-4 flex-1 text-wrap">
            Transform Your Fitness Journey
          </h1>
          <p className="text-xs md:text-sm my-auto text-gray-300 flex-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
        </div>

        <div className="w-full mt-16 flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6">
          {journeyList.map((item) => (
            <JourneyCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
