import { IAdProduct } from "./contracts/IAdProduct";

export class ClassicAd implements IAdProduct {
    public name: string = "Classic Ad";
    public description: string =  "Offers the most basic level of advertisement";
    public retailPrice: number = 269.99;
}
