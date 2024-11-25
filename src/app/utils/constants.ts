interface NavInterface {
    id:number;
    label:string;
    link:string;
}

export const navsList: NavInterface[] = [
    {
        id: 1,
        label: 'Beranda',
        link: '#beranda'
    },
    {
        id: 2,
        label: 'Journey',
        link: '#journey'
    },
    {
        id: 3,
        label: 'Skills',
        link: '#skills'
    },
    {
        id: 4,
        label: 'Achievements',
        link: '#achievements'
    },
]

interface JourneyInterface {
    id:number;
    title:string;
    description:string;
    image:string;
}

export const journeyList:JourneyInterface[] = [
    {
        id:1,
        title:"Gym",
        description:"",
        image: '',
    },
    {
        id:2,
        title:"Yoga",
        description:"",
        image: '',
    },
    {
        id:3,
        title:"Martial Art",
        description:"",
        image: '',
    },
]