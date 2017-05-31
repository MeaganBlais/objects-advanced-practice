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

// console.log('test = ' + companySalesData['sales'])

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  let output = {totSales()}
  



}



function totSales() {
  let output = {}
  for (var i = 0; i < companySalesData.length; i++) {  
      // iterates through each company (3 loops)
      var totalSales = 0;
      var currentSalesData = companySalesData[i];
      
      for (var j = 0; j < currentSalesData.sales.length; j++) { // iterates through each company based on #sales - 3/6/2 - verified using console.log(sales.length)
        
        totalSales += currentSalesData.sales[j];
      }
                //   console.log('totalSales = ' + totalSales)
                // pack object ....
                // totalSales = {name: currentSalesData.name};
                output[companySalesData[i].name] = {  //only returns the last Telus regardless if it's [current] or [company]
                    sales: totalSales
                }
  }
      return output; //this causes the function to only return one totalSales item
}
   const foo = totSales()
   console.log(JSON.stringify(foo))


var results = calculateSalesTax(companySalesData, salesTaxRates);



/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}

console.log('companySalesData.length ' + companySalesData.length)  = 3

*/