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