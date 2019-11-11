"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Checkout {
    constructor() {
        this.customerName = "";
        this.checkoutItems = [];
        this.applyCustomerSpecificRulesForProduct = (currentTotal) => {
            const relevantRules = this.pricingRules.filter((pr) => pr.eligibleCustomer === this.customerName);
            relevantRules.forEach((r) => currentTotal = r.applyRule(this.checkoutItems, currentTotal));
            return currentTotal;
        };
        this.new = (customerName, pricingRules) => {
            this.customerName = customerName;
            this.pricingRules = pricingRules;
            return this;
        };
        this.add = (item) => {
            this.checkoutItems.push(item);
        };
        this.total = () => {
            // this.applyCustomerSpecificRulesForProduct();
            const initialTotal = this.checkoutItems.reduce((a, b) => {
                return a + b.retailPrice;
            }, 0);
            return this.applyCustomerSpecificRulesForProduct(initialTotal);
        };
        this.currentItemsListing = () => {
            return this.checkoutItems.map((i) => i.name).join(", ");
        };
    }
}
exports.Checkout = Checkout;
//# sourceMappingURL=checkout.js.map