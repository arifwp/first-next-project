import { SubscriptionPlanInterface } from "@/app/utils/constants";

interface Props {
  data: SubscriptionPlanInterface;
  className?: string;
}

export default function SubscriptionCard({ data, className }: Props) {
  return (
    <div
      className={`p-8 rounded-xl relative overflow-hidden ${
        data.isPrimary && `bg-darkSecondary`
      } ${className}`}
    >
      <h3 className="text-md md:text-lg font-medium text-white">{data.name}</h3>

      <p className="mt-4 text-lg md:text-xl">{data.credit}</p>

      <p className="mt-4 text-sm md:text-md">Features</p>

      <div className="w-full mt-4 space-y-4">
        {data.featureList.map((item) => (
          <div key={item.id} className="w-full flex flex-row space-x-3">
            <svg
              className="w-4 h-4 my-auto text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="my-auto text-sm md:text-md">{item.name}</p>
          </div>
        ))}
      </div>

      {data.isPrimary && (
        <div className="absolute right-0 top-0 w-16 h-16">
          <div className="py-1 absolute bg-greenPrimary text-black text-center font-medium rotate-45 right-[-35px] top-[32px] w-[170px]">
            Best Offer
          </div>
        </div>
      )}

      <button
        className={`w-full p-2 mt-8 rounded-lg text-black ${
          data.isPrimary ? `bg-greenPrimary` : `bg-white`
        }`}
      >
        Select Plan
      </button>
    </div>
  );
}
