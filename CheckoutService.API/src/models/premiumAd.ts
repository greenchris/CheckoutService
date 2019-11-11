import { IAdProduct } from "./contracts/IAdProduct";

export class PremiumAd implements IAdProduct { // TODO - could potentially extend Standout Ad
    public name: string = "Premium Ad";
    public description: string =  `Same benefits as Standout Ad, but also puts the advertisement at
                                    the top of the results, allowing higher visibility`;
    public retailPrice: number = 394.99;
}
