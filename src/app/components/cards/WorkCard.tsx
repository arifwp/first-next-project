import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  description: string;
  isPrimary: number;
  className?: string;
}

export default function WorkCard({
  icon,
  title,
  description,
  isPrimary,
  className = "",
}: Props) {
  return (
    <div
      className={`p-8 rounded-md flex flex-col text-start ${
        isPrimary === 0
          ? `bg-darkSecondary text-white md:z-0`
          : `bg-greenPrimary text-black md:scale-110 md:z-10`
      } ${className}`}
    >
      <div className="relative w-24 h-24">
        <Image
          className="aspect-square object-cover rounded-lg"
          src={icon}
          alt={title}
          layout="fill"
        />
      </div>

      <p className="mt-4 text-sm font-semibold">{title}</p>

      <p className="mt-4 text-sm">{description}</p>

      <button className="mt-4 bg-transparent inline-flex items-center space-x-2">
        <span className="text-sm font-semibold">SEE DETAILS</span>

        <svg
          className="size-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 28 28"
          strokeWidth="3"
          stroke={`${isPrimary === 0 ? "white" : "black"}`}
        >
          <path
            className="my-auto"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
    </div>
  );
}
