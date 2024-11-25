import Image from "next/image";

interface JourneyCardProps {
  title: string;
  description: string;
  image: string;
}

export default function JourneyCard({ title, description, image }: JourneyCardProps) {
  return (
    <div className="rounded-md">
      <h5 className="text-lg text-white">{title}</h5>
      <Image className="rounded-md aspect-square" src={image} alt={title} />

      <p className="text-gray-300">{description}</p>
    </div>
  );
}
