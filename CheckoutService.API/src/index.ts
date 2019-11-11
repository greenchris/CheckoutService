import express from "express";
import { Checkout } from "./models/checkout";
import { ClassicAd } from "./models/classicAd";
import { IPricingRule } from "./models/contracts/IPricingRule";
import { PremiumAd } from "./models/premiumAd";
import { StandoutAd } from "./models/standoutAd";
import { ThreeForTwoClassicAdsPricingRule } from "./models/threeForTwoPricingRule";

const app = express();
const port = 8000;

/* route-handler endpoints */

// default
app.get("/", (req: any, res: any) => {
    res.send("Welcome to Job Ad Checkout Service!");
});

// test default scenario execution
app.get("/defaulttestexecution", (req: any, res: any) => {
    const customerName = "default";
    const item1 = new ClassicAd();
    const item2 = new StandoutAd();
    const item3 = new PremiumAd();

    // configure pricing rules
    const pricingRules = new Array<IPricingRule>();
    pricingRules.push(new ThreeForTwoClassicAdsPricingRule()); // TODO - more rules can be pushed on

    const co = new Checkout();
    co.new(customerName, pricingRules);
    co.add(item1);
    co.add(item2);
    co.add(item3);
    const priceTotal = co.total();

    res.send(`  Customer: ${customerName} <br/>
                Items: ${co.currentItemsListing()} <br/>
                Total: ${priceTotal}`);
});

// test scenario execution
app.get("/testexecution", (req: any, res: any) => {
    const customerName = "SecondBite";
    const item1 = new ClassicAd();
    const item2 = new ClassicAd();
    const item3 = new ClassicAd();

    // configure pricing rules
    const pricingRules = new Array<IPricingRule>();
    pricingRules.push(new ThreeForTwoClassicAdsPricingRule()); // TODO - more rules can be pushed on

    const co = new Checkout();
    co.new(customerName, pricingRules);
    co.add(item1);
    co.add(item2);
    co.add(item3);
    const priceTotal = co.total();

    res.send(`  Customer: ${customerName} <br/>
                Items: ${co.currentItemsListing()} <br/>
                Total: ${priceTotal}`);
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
