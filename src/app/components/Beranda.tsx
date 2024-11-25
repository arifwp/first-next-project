import Image from "next/image";

export default function Beranda() {
  return (
    <section id="beranda" className="w-full py-12 px-4">
      <div className="w-full flex md:space-x-6">
        <Image
          className="flex-1 aspect-square object-cover rounded-md hidden md:block"
          src={"/images/woman-gym.jpg"}
          alt="woman-gym"
          width={200}
          height={200}
        />

        <div className="flex-col flex-1">
          <h1 className="text-5xl font-semibold text-white">
            Transform Your Body, Elevate Your Strength
          </h1>

          <p className="text-sm text-gray-300 text-justify mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>

          <button className="px-4 py-2 mt-8 text-darkPrimary text-sm bg-greenPrimary rounded-md">
            Explore Our Program
          </button>

          <div className="w-full flex mt-8 space-x-12">
          <div className="w-fit flex flex-col text-center">
            <p className="text-2xl font-semibold">15+</p>
            <p className="text-sm font-thin">Certificated</p>
          </div>

          <div className="w-fit flex flex-col text-center">
            <p className="text-2xl font-semibold">612+</p>
            <p className="text-sm font-thin">Membership</p>
          </div>

          <div className="w-fit flex flex-col text-center">
            <p className="text-2xl font-semibold">1.000+</p>
            <p className="text-sm font-thin">Testimonials</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
