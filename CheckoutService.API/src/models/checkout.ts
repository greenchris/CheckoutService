import { IAdProduct } from "./contracts/IAdProduct";
import { IPricingRule } from "./contracts/IPricingRule";

export class Checkout {
    private customerName: string = "";
    private checkoutItems: IAdProduct[] = [];
    private pricingRules: IPricingRule[];

    public applyCustomerSpecificRulesForProduct = (currentTotal: number): number => {
        const relevantRules = this.pricingRules.filter((pr) => pr.eligibleCustomer === this.customerName);

        relevantRules.forEach((r) => currentTotal = r.applyRule(this.checkoutItems, currentTotal));

        return currentTotal;
    }

    public new = (customerName: string, pricingRules: IPricingRule[]): Checkout => {
        this.customerName = customerName;
        this.pricingRules = pricingRules;

        return this;
    }

    public add = (item: IAdProduct): void => {
        this.checkoutItems.push(item);
    }

    public total = (): number => {
        // this.applyCustomerSpecificRulesForProduct();

        const initialTotal = this.checkoutItems.reduce((a, b) => {
            return a + b.retailPrice;
        }, 0);

        return this.applyCustomerSpecificRulesForProduct(initialTotal);
    }

    public currentItemsListing = (): string => {
        return this.checkoutItems.map((i) => i.name).join(", ");
    }
}
