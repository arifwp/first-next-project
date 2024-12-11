import { subscriptionsPlanData } from "../utils/constants";
import SubscriptionCard from "./cards/SubscriptionCard";

export default function SubscriptionPlans() {
  return (
    <section id="subscriptions" className="w-full p-12">
      <div className="w-full flex flex-col">
        <p className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          Subscription Plans
        </p>

        <div className="mt-16 flex flex-col md:flex-row md:mx-auto">
          {subscriptionsPlanData.map((item) => (
            <SubscriptionCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
