import WorkCard from "./cards/WorkCard";

export default function Works() {
  return (
    <section id="works" className="w-full p-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>

        <p className="text-sm text-gray-300">
          Welcome to a fitness experience like no other-where your health and
          fitness goals turns into achievable milestones! Our approach is simple
          yet effective
        </p>

        <div className="w-full mt-16 flex flex-col md:flex-row gap-6 md:gap-0">
          <WorkCard
            className="md:-translate-x-4"
            icon={"/images/muscle.png"}
            title="Discover Your Plan"
            description=" Welcome to a fitness experience like no other-where your health and
          fitness goals turns into achievable milestones! Our approach is simple"
            isPrimary={0}
          />

          <WorkCard
            icon={"/images/barble.png"}
            title="Discover Your Plan"
            description=" Welcome to a fitness experience like no other-where your health and
          fitness goals turns into achievable milestones! Our approach is simple"
            isPrimary={1}
          />

          <WorkCard
            className="md:translate-x-4"
            icon={"/images/plant.png"}
            title="Discover Your Plan"
            description=" Welcome to a fitness experience like no other-where your health and
          fitness goals turns into achievable milestones! Our approach is simple"
            isPrimary={0}
          />
        </div>

        <button className="rounded-lg bg-white px-4 py-3 text-black mt-8 md:mt-16">
          Explore Our Program
        </button>
      </div>
    </section>
  );
}
