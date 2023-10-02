export type Post = {
    id:string;
    content:string;
    image?:string;
    likes:Number;
    author:User;
}

export type User = {
    id:string;
    name:string;
    position:string;
    image?:string;
    backImage?:string;
    about?:string;
}