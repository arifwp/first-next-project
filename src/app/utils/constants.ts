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

interface AchievementInterface {
  id: number;
  name: string;
  image: string;
  studentOf: string;
  rate: string;
  description: string;
}

export const achievementList: AchievementInterface[] = [
  {
    id: 1,
    name: "Skiva Millers",
    image:
      "https://plus.unsplash.com/premium_photo-1677283510950-54741b2c305f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentOf: "Yoga Student",
    rate: "4.5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  },
  {
    id: 2,
    name: "Mia Khalifa",
    image:
      "https://plus.unsplash.com/premium_photo-1664379519132-aa97377491ca?q=80&w=3110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentOf: "Cardio Exercise Student",
    rate: "4.2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  },
  {
    id: 3,
    name: "Lena Paul",
    image:
      "https://plus.unsplash.com/premium_photo-1664359679216-60ffd478201a?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentOf: "Swimming Student",
    rate: "4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  },
  {
    id: 4,
    name: "Rae Lil Black",
    image:
      "https://images.unsplash.com/photo-1631355632079-349f2b97447a?q=80&w=2850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentOf: "Model Student",
    rate: "4.8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  },
  {
    id: 5,
    name: "Magdalena",
    image:
      "https://plus.unsplash.com/premium_photo-1667900670427-5819c447e00e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentOf: "Black Belt Student",
    rate: "4.8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  },
];
