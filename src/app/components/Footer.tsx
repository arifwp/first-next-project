export default function Footer() {
  return (
    <footer className="w-full p-12 mt-16 bg-greenPrimary">
      <div className="w-full flex flex-col md:flex-row text-black space-y-12 md:space-x-12 md:justify-between">
        <div className="flex flex-col">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold italic">
            Fitness.
          </p>

          <p className="w-full md:w-[200px] lg:w-[300px] mt-6 text-xs md:text-sm font-md font-extralight">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys
          </p>
        </div>

        <div className="flex flex-col">
          <p className="cursor-pointer text-xs md:text-sm font-medium">
            OUR SERVICES
          </p>

          <div className="mt-4 space-y-2 text-xs md:text-sm font-extralight">
            <p className="cursor-pointer">STRENGTH TRAINING</p>

            <p className="cursor-pointer">BODY BUILDING</p>

            <p className="cursor-pointer">BASIC YOGA</p>

            <p className="cursor-pointer">WEIGHT LOSS</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="cursor-pointer text-xs md:text-sm font-medium">
            COMPANY
          </p>

          <div className="mt-4 space-y-2 text-xs md:text-sm font-extralight">
            <p className="cursor-pointer">About Us</p>

            <p className="cursor-pointer">Services</p>

            <p className="cursor-pointer">Pages</p>

            <p className="cursor-pointer">Pricing</p>

            <p className="cursor-pointer">Blog</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="cursor-pointer text-xs md:text-sm font-medium">LEGAL</p>

          <div className="mt-4 space-y-2 text-xs md:text-sm font-extralight">
            <p className="cursor-pointer">Return Policy</p>

            <p className="cursor-pointer">Shipping Policy</p>

            <p className="cursor-pointer">Privacy Policy</p>

            <p className="cursor-pointer">Terms of Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
