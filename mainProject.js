//  projects all------------------------------

 const { calculateVAT,validContact,willSuccess,validProposal } = require('./allProjects');

//   project 01
let price=200;
let checkResult = calculateVAT(price);
// console.log(checkResult);

//  project 02 ------------------------------

let contact= "01740458891"  ; 
let checkResult2= validContact(contact);

// console.log(checkResult2);

//  project 03 ------------------------------

let marks= 56; 
let checkResult3= willSuccess(marks);

console.log(checkResult3);

//  project 04 ------------------------------

let person1 = { name: "Rahul", gender: "male", age: 28 } ;
let person2 = { name: "Joya", gender: "female", age: 21 } ; 
let checkResult4= validProposal(person1,person2);

console.log(checkResult4);