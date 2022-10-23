var Grocery = /** @class */ (function () {
    function Grocery(headerStyleOne, firstItem, secondItem, thirdItem, forthItem) {
        this.headerStyleOne = headerStyleOne;
        this.firstItem = firstItem;
        this.secondItem = secondItem;
        this.thirdItem = thirdItem;
        this.forthItem = forthItem;
        this.listOfGrocery = "".concat(headerStyleOne, " ").concat(firstItem, " ").concat(secondItem, " ").concat(thirdItem, " ").concat(forthItem, " ");
    }
    return Grocery;
}());
function grocery(typeofgrocery) {
    return " " + typeofgrocery.headerStyleOne + " " + typeofgrocery.firstItem + " " + typeofgrocery.secondItem + " " + typeofgrocery.thirdItem + " " + typeofgrocery.forthItem;
}
var buyList = new Grocery("List to buy: ", "Tomatoes,", "Apples,", "Steak,", "pasta.");
document.body.textContent = grocery(buyList);
