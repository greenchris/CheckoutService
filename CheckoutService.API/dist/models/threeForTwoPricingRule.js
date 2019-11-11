"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classicAd_1 = require("./classicAd");
class ThreeForTwoClassicAdsPricingRule {
    constructor() {
        this.eligibleCustomer = "SecondBite";
        this.applyRule = (checkoutItems, currentTotal) => {
            const totalClassicAds = checkoutItems.filter((item) => item instanceof classicAd_1.ClassicAd).length;
            if (totalClassicAds > 2) {
                // for each set of 3 classic Ads, discount the price of 1
                const numOfClassicAdsToDiscount = Math.trunc(totalClassicAds / 3);
                return currentTotal - (numOfClassicAdsToDiscount * new classicAd_1.ClassicAd().retailPrice);
            }
        };
    }
}
exports.ThreeForTwoClassicAdsPricingRule = ThreeForTwoClassicAdsPricingRule;
//# sourceMappingURL=threeForTwoPricingRule.js.map