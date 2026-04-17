
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
                                                          //braces type into oneline just like that