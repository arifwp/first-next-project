import Image from "next/image";

interface JourneyCardProps {
  title: string;
  description: string;
  image: string;
}

export default function JourneyCard({
  title,
  description,
  image,
}: JourneyCardProps) {
  return (
    <div className="w-full p-4 rounded-md bg-darkSecondary">
      <h5 className="text-xl font-semibold text-white text-center">{title}</h5>

      <div className="mt-4 relative">
        <div className="w-full relative pt-[100%]">
          <Image
            className="w-full rounded-md aspect-square object-cover"
            src={image}
            alt={title}
            objectFit="cover"
            objectPosition="center"
            fill
          />
        </div>

        <div className="w-fit h-fit p-2 md:p-4 lg:p-6 bg-greenPrimary rounded-full absolute m-auto left-0 right-0 top-0 bottom-0">
          <svg
            className="size-6 md:size-8 lg:size-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs md:text-sm text-gray-300 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
