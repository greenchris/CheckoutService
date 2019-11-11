import { IAdProduct } from "./contracts/IAdProduct";

export class StandoutAd implements IAdProduct {
    public name: string = "Stand out Ad";
    public description: string =  "Allows advertisers to use a company logo and use a longer presentation text";
    public retailPrice: number = 322.99;
}
