// Define the NHIF contribution rates based on salary

const nhifRates = [

    { minSalary: 0, maxSalary: 5999, contribution: 150 },
  
    { minSalary: 6000, maxSalary: 7999, contribution: 300 },
  
    { minSalary: 8000, maxSalary: 11999, contribution: 400 },
  
    { minSalary: 12000, maxSalary: 14999, contribution: 500 },
  
    { minSalary: 15000, maxSalary: 19999, contribution: 600 },
  
    { minSalary: 20000, maxSalary: 24999, contribution: 750 },
  
    { minSalary: 25000, maxSalary: 29999, contribution: 850 },
  
    { minSalary: 30000, maxSalary: 34999, contribution: 900 },
  
    { minSalary: 35000, maxSalary: 39999, contribution: 950 },
  
    { minSalary: 40000, maxSalary: 44999, contribution: 1000 },
  
    { minSalary: 45000, maxSalary: 49999, contribution: 1100 },
  
    { minSalary: 50000, maxSalary: 59999, contribution: 1200 },
  
    { minSalary: 60000, maxSalary: 69999, contribution: 1300 },
  
    { minSalary: 70000, maxSalary: 79999, contribution: 1400 },
  
    { minSalary: 80000, maxSalary: 89999, contribution: 1500 },
  
    { minSalary: 90000, maxSalary: 99999, contribution: 1600 },
  
    { minSalary: 100000, maxSalary: Infinity, contribution: 1700 }
  
  ];

  let nhifDeduction = 0;

  for (let i = 0; i < nhifRates.length; i++) {

    if (grossSalary > nhifRates[i].minSalary && grossSalary <= nhifRates[i].maxSalary) {

      nhifDeduction = nhifRates[i].contribution;

      break;

    }

  }


  // Define the NSSF pension contribution rates based on pensionable wages

const nssfRates = {

    employeeRate: 0.06,
  
    employerRate: 0.06,
 //Using Tier 2 pensionable pay from February 2024 onwards. 
    upperLimit: 36000,
  
    lowerLimit: 7001,
  
  };

  // Calculate the NSSF contribution for an employee and employer based on pensionable wages

function calculateNssfContribution(pensionableWages) {

    const employeeContribution = Math.min(pensionableWages * nssfRates.employeeRate, nssfRates.upperLimit);
  
    const employerContribution = Math.min(pensionableWages * nssfRates.employerRate, nssfRates.upperLimit);
  
    return { employee: employeeContribution, employer: employerContribution };
  
  }

  //KRA tax rates



