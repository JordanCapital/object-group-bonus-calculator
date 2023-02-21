// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let salary = employee.annualSalary
  if (employee.reviewRating === 3) {
    salary *= 4/100 
   // return 4/100 * employee.annualSalary;

  } else if(employee.reviewRating  <= 2) {
    return employee.annualSalary;
  
  } else if (employee.reviewRating === 4) {
    return 6/100 * employee.annualSalary;

  } else if (employee.reviewRating === 5) {
    return 10/100 * employee.annualSalary;

  }
// Adding an additional bonus to senior employees of 5%
  if (employeeNumber.length === 4 ){
    

  }
  console.log('The result of the first index',employee)
  // return new object with bonus results

}
let result = calculateIndividualEmployeeBonus(employees);
console.log(result);

//Loop over employees array to calculate each employees bonus

for( let i = 0; i < employees.length;  i++) {
 
  console.log(i,'.',calculateIndividualEmployeeBonus(employees[i]));
 
}
console.log(employees.length);