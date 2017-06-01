var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function totalTax(amount, prov) {
  return amount * salesTaxRates[prov];
}

function calculateSalesTax() {
  let output = {}
  for (var i = 0; i < companySalesData.length; i++) {

      // iterates through each company (3 loops)
      var finalSales = 0;
      var currentSalesData = companySalesData[i];

    // iterates through each company based on #sales - 3/6/2 - verified using console.log(sales.length)
      for (var j = 0; j < currentSalesData.sales.length; j++) {
        finalSales += currentSalesData.sales[j];
      }

	  if (output[currentSalesData.name]) {  // tests & matches
  
		// instead of creating a new object, add to value of existing object
		output[currentSalesData.name].sales += finalSales
	  } else {
           output[currentSalesData.name] = {
                sales: finalSales,

                //TODO include both tax outputs for Telus
                tax: totalTax(finalSales, currentSalesData.province)
        }
      }
  }
   return output; //this causes the function to only return one totalSales item
  }
      
//    console.log(JSON.stringify(foo)) //this will output the values of object

console.log(calculateSalesTax(companySalesData, salesTaxRates));