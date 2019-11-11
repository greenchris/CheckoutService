import { ClassicAd } from "./classicAd";
import { IAdProduct } from "./contracts/IAdProduct";
import { IPricingRule } from "./contracts/IPricingRule";

export class ThreeForTwoClassicAdsPricingRule implements IPricingRule {
    public eligibleCustomer: string = "SecondBite";

    public applyRule = (checkoutItems: IAdProduct[], currentTotal: number): number => {
        const totalClassicAds = checkoutItems.filter((item) => item instanceof ClassicAd).length;
        if (totalClassicAds > 2) {
            // for each set of 3 classic Ads, discount the price of 1
            const numOfClassicAdsToDiscount = Math.trunc(totalClassicAds / 3);

            return currentTotal - (numOfClassicAdsToDiscount * new ClassicAd().retailPrice);
        }
    }
}
