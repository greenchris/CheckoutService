import { IAdProduct } from "./IAdProduct";

export interface IPricingRule {
    eligibleCustomer: string; // TODO - extend to to support more than 1 customer

    applyRule(checkoutItems: IAdProduct[], currentTotal: number): number;
}
