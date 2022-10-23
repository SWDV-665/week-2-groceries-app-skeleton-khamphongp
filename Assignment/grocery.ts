
class Grocery {
    listOfGrocery: string;
    constructor(
      public headerStyleOne: string,  
      public firstItem: string,
      public secondItem: string,
      public thirdItem: string,
      public forthItem: string
    ) {
        this.listOfGrocery = `${headerStyleOne} ${firstItem} ${secondItem} ${thirdItem} ${forthItem} `;
      }
  }
   
  interface typeOfGrocery {
    headerStyleOne: string;
    firstItem: string;
    secondItem: string;
    thirdItem: string;
    forthItem: string;
  }

  function grocery(typeofgrocery : typeOfGrocery) {
   return " " + typeofgrocery.headerStyleOne + " " + typeofgrocery.firstItem + " " + typeofgrocery.secondItem + " " + typeofgrocery.thirdItem + " " + typeofgrocery.forthItem;
  }
  
let buyList = new Grocery("List to buy: ", "Tomatoes,", "Apples,", "Steak,", "pasta.");
document.body.textContent = grocery(buyList);

