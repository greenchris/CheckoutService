"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkout_1 = require("./models/checkout");
const classicAd_1 = require("./models/classicAd");
const premiumAd_1 = require("./models/premiumAd");
const standoutAd_1 = require("./models/standoutAd");
const threeForTwoPricingRule_1 = require("./models/threeForTwoPricingRule");
const app = express_1.default();
const port = 8000;
/* route-handler endpoints */
// default
app.get("/", (req, res) => {
    res.send("Welcome to Job Ad Checkout Service!");
});
// test default scenario execution
app.get("/defaulttestexecution", (req, res) => {
    const customerName = "default";
    const item1 = new classicAd_1.ClassicAd();
    const item2 = new standoutAd_1.StandoutAd();
    const item3 = new premiumAd_1.PremiumAd();
    // configure pricing rules
    const pricingRules = new Array();
    pricingRules.push(new threeForTwoPricingRule_1.ThreeForTwoClassicAdsPricingRule()); // TODO - more rules can be pushed on
    const co = new checkout_1.Checkout();
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
app.get("/testexecution", (req, res) => {
    const customerName = "SecondBite";
    const item1 = new classicAd_1.ClassicAd();
    const item2 = new classicAd_1.ClassicAd();
    const item3 = new classicAd_1.ClassicAd();
    // configure pricing rules
    const pricingRules = new Array();
    pricingRules.push(new threeForTwoPricingRule_1.ThreeForTwoClassicAdsPricingRule()); // TODO - more rules can be pushed on
    const co = new checkout_1.Checkout();
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
//# sourceMappingURL=index.js.map