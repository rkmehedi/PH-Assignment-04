//  projects ------------------------------

 const { calculateVAT,validContact } = require('./allProjects');

//   project 01
let price=200;
let checkResult = calculateVAT(price);
// console.log(checkResult);

//  project 02 ------------------------------

let contact= true  ; 
let checkResult2= validContact(contact);

console.log(checkResult2);