import { achievementList } from "../utils/constants";
import AchievementCard from "./cards/AchievementCard";

export default function Achievement() {
  return (
    <section className="w-full p-12">
      <div className="w-full flex flex-col">
        <p className="mt-4 text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          Client Achievement
        </p>

        <div className="w-full mt-32 flex space-x-6 overflow-x-auto snap-x snap-mandatory">
          {achievementList.map((item) => (
            <AchievementCard
              key={item.id}
              name={item.name}
              studentOf={item.studentOf}
              image={item.image}
              rate={item.rate}
              description={item.description}
              className="snap-center w-[calc(50%-12px)] flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
