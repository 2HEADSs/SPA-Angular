import { IUser } from "./user";

export interface IBike {
    _id: string,
    brand: string,
    description: string,
    img: string,
    model: string,
    power: number,
    year: number,
    price: number,
    _ownerId: IUser,

}


