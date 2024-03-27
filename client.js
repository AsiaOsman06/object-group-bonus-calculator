// array of employee objects
const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

console.log("array of employee data: ", employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  // your logic here

  // make an array to name bonusPercentage
  //if employee rating is < 2
  // return not receive a bonus
  // else if employe rating is 3
  // return a bonusPercentage of 0.04
  //else if employee rating is 4
  // return a bonusPercentage of 0.06
  //else if employee rating is 5

  let bonusPercentage;

  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    bonusPercentage = 0.04;
  } else if (employee.reviewRating === 4) {
    bonusPercentage = 0.06;
  } else if (employee.reviewRating === 5) {
    bonusPercentage = 0.1;
  }

  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 0.5;
  }
  if (Number(employee.annualSalary) > 65000) {
    bonusPercentage -= 0.01;
  }
  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  // Calculate totalBonus:
  let totalBonus = Number(employee.annualSalary) * bonusPercentage;

  // Calculate totalCompensation:
  let totalCompensation = Number(employee.annualSalary) + totalBonus;

  let processedEmployee = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalBonus: totalBonus,
    totalCompensation: totalCompensation,
  };

  return processedEmployee;
}

for (let i = 0; i < employees.length; i++) {
  let result = calculateIndividualEmployeeBonus(employees[i]);
  console.log(result);
}
// return new object with bonus results
