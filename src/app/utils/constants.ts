interface NavInterface {
  id: number;
  label: string;
  link: string;
}

export const navsList: NavInterface[] = [
  {
    id: 1,
    label: "Beranda",
    link: "#beranda",
  },
  {
    id: 2,
    label: "Journey",
    link: "#journey",
  },
  {
    id: 3,
    label: "Skills",
    link: "#skills",
  },
  {
    id: 4,
    label: "Achievements",
    link: "#achievements",
  },
];

interface JourneyInterface {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const journeyList: JourneyInterface[] = [
  {
    id: 1,
    title: "Gym",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    image:
      "https://plus.unsplash.com/premium_photo-1669446008800-9a124b0fd3a2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Yoga",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    image:
      "https://plus.unsplash.com/premium_photo-1669446008800-9a124b0fd3a2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Martial Art",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    image:
      "https://plus.unsplash.com/premium_photo-1669446008800-9a124b0fd3a2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
