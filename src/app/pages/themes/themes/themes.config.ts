import { PRIMARY_OUTLET } from '@angular/router';

export interface AcceuilCard {
    title: string
    subTitle?: string
    iconName?: string
    src? : string
    color?: string
    url?:string
}
export const ACCEUIL_CARDS:AcceuilCard[] = [

    {
        title: "Sciences",
        src : "../../../../assets/images/t18.jpg",
    },
    {
        title: "Beauty",
        src : "../../../../assets/images/t19.jpg",
    },
    {
        title: "Technologies",
        src : "../../../../assets/images/t21.jpg",
    },
    {
        title: "Medecine",
        src : "../../../../assets/images/t16.jpg",
    },
    {
        title: "Nature",
        src : "../../../../assets/images/t5.jpg",
    },
    {
        title: "Sports",
        src : "../../../../assets/images/t30.jpg",
    },
    {
        title: "Politics",
        src : "../../../../assets/images/t29.png",
    },
    {
        title: "Religions",
        src : "../../../../assets/images/t22.jpg",
    },
    {
        title: "Food",
        src : "../../../../assets/images/t14.jpg",
    },
    {
        title: "Family",
        src : "../../../../assets/images/t20.jpg",
    },
    {
        title: "Photography",
        src : "../../../../assets/images/t24.jpg",
    },
    {
        title: "Language",
        src : "../../../../assets/images/t28.jpg",
    },
    {
        title: "Music",
        src : "../../../../assets/images/t13.jpg",
    },
    {
        title: "Travel",
        src : "../../../../assets/images/t15.jpg",
    },
    {
        title: "Space",
        src : "../../../../assets/images/t17.jpg",
    },
    {
        title: "Learning",
        src : "../../../../assets/images/t25.jpg",
    },
    
    


    
]