import Image from "next/image";

interface Props {
  name: string;
  image: string;
  studentOf: string;
  rate: string;
  description: string;
  className?: string;
}

export default function AchievementCard({
  name,
  image,
  studentOf,
  rate,
  description,
  className = "",
}: Props) {
  return (
    <div className={`w-full relative ${className}`}>
      <div className="w-full px-8 pt-8 pb-14 rounded-md md:rounded-lg lg:rounded-xl bg-darkSecondary relative">
        <div className="w-full mt-14 text-center md:text-start md:mt-0 flex flex-col">
          <p className="text-white font-semibold text-lg md:text-xl">{name}</p>

          <p className="mt-1 text-greenPrimary font-semibold text-xs">
            {studentOf}
          </p>

          <div className="mt-2 flex flex-row space-x-2 mx-auto md:mx-0">
            <svg
              className="w-4 h-4 my-auto text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>

            <p className="text-white text-xs my-auto lg:text-sm">{rate}</p>

            <p className="text-gray-400 text-xs my-auto lg:text-sm">/</p>

            <p className="text-gray-400 text-xs my-auto lg:text-sm">5.0</p>
          </div>

          <p className="text-gray-300 mt-4 text-md">{description}</p>
        </div>

        <svg
          className="w-24 h-24 absolute bottom-2 right-2 text-greenPrimary opacity-20"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
          />
        </svg>
      </div>

      <div className="absolute -top-12 left-1/2 transfrom -translate-x-1/2 md:right-8 md:left-auto md:transform-none">
        <div className="relative w-32 h-32">
          <Image
            className="rounded-md md:rounded-lg"
            src={image}
            alt={name}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
