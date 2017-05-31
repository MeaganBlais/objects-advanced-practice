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

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  let output = {}
  var totalSales = 0;
  for (var i = 0; i < companySalesData.length; i++) {  // iterates through each company (3 loops)
      for (var j = 0; j < companySalesData[j].sales.length; j++) { // iterates through each company x# based on #sales - 3/6/2
        totalSales += companySalesData.sales
      }


   
      console.log('totalSales = ' + totalSales)


    //   console.log('sales.length is ' + companySalesData[i].sales.length) -- used to verify 2nd loop is setup correctly
  }
}




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