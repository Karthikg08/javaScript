
//arrow fumtion 
/*
const arrowfuntion = (param, param2) => {
  console.log(3)
  console.log(param + param2)

}
arrowfuntion(4,8)

// one line arrow funtion 

const oneline1 = () => 1+3 // curly braces is oprtional 

console.log(oneline1())   


//forEach loop 

[
  'make dinner',
  'clean room',
  'watch youtube'
].forEach((task, index, array) => {
  if (task === 'clean room') {
    return; 
    // to skip an item 
  }
  console.log(`${index} - ${task}- ${array.length} `);
});


  document.addEventListener('keydown', function (event) {
  console.log('Key pressed:', event.key);
});
*/

// FILTER METHOD
 
console.log([2,-5,6,-5,8,0].filter((value,index)=>{
  /*
  if (value >= 0){
    return true;
  }else {
    return false;
  }
    */
  return value >=0; // this is short instead of if else
}))

// MAP METHOD

console.log([2,-5,6,-5,8,0].map((value) => {
  return value +10;
}))

// compact code of above method 

console.log([2,-5,6,-5,8,0].map((value) =>  value +10)); //if the code is one line just remove the curly 



let users = [
  { name: "Karthik", active: true },
  { name: "Ram", active: false }
];

let activeUsers = users.filter(u => u.active);

console.log(activeUsers);


console.log('reduce method');

let nums = [1, 2, 3, 4, 5]

let result = nums.reduce((a, b) => a + b,0) // 0 is the initial value 
//  without zero it cause error
//  because it will take the first element of the array 
// as the initial value of a and start adding from the second element 
// but if the array is empty it will cause error 
// because there is no initial value for a so we need to provide an initial value for a to avoid this error
console.log(result) 


let cart = [
  { price: 100 },
  { price: 200 },
  { price: 300 },
  { price: 300 }
];

let total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total)


let index = 7;

 // ========== =  ==  === TYPING ANIMATION =========
 // 
 
 const str = "Hello World!";
 const reversed = str.split('').reverse().join('')
 console.log(reversed)