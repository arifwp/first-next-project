import Image from "next/image";

export default function SkillsView() {
  return (
    <section id="skillsview" className="w-full p-12">
      <div className="w-full flex flex-col md:flex-row md:space-x-12 max-md:space-y-12 md:items-center">
        <div className="w-full md:flex-1">
          <Image
            className="w-full h-auto aspect-square object-cover object-top rounded-xl md:rounded-2xl lg:rounded-3xl"
            src={
              "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
            alt="woman-gym"
          />
        </div>

        <div className="w-full h-aut md:flex-1">
          <div className="w-full flex flex-row space-x-4">
            <p className="text-sm lg:text-lg text-gray-300">OUR SKILLS VIEW</p>

            <div className="w-24 md:w-28 border-t border-gray-300 my-auto"></div>
          </div>

          <p className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            We Are Giving You The Best Training Ever
          </p>

          <p className="text-xs md:text-sm lg:text-lg text-gray-300 text-justify mt-4">
            We provide the best program for you, for your health and beauty from
            outside and inside. We provide the best gym
          </p>

          <div className="w-full mt-4 flex flex-col space-y-6">
            <div className="w-full space-y-2 flex flex-col">
              <div className="w-full flex flex-row justify-between">
                <p className="text-white text-sm">Body Building</p>

                <p className="text-white text-sm">85%</p>
              </div>

              <div className="w-full bg-greenDark rounded-full h-2">
                <div
                  className="bg-greenPrimary h-2 rounded-full"
                  style={{ width: "93%" }}
                ></div>
              </div>
            </div>

            <div className="w-full space-y-2 flex flex-col">
              <div className="w-full flex flex-row justify-between">
                <p className="text-white text-sm">Yoga</p>

                <p className="text-white text-sm">87%</p>
              </div>

              <div className="w-full bg-greenDark rounded-full h-2">
                <div
                  className="bg-greenPrimary h-2 rounded-full"
                  style={{ width: "87%" }}
                ></div>
              </div>
            </div>

            <div className="w-full space-y-2 flex flex-col">
              <div className="w-full flex flex-row justify-between">
                <p className="text-white text-sm">Cardio Exercise</p>

                <p className="text-white text-sm">90%</p>
              </div>

              <div className="w-full bg-greenDark rounded-full h-2">
                <div
                  className="bg-greenPrimary h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
