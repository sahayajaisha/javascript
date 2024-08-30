
 //1.value Initialize
 let obj;
obj = { name:'sahaya'};
console.log(obj);

// output:
// node let.js
//{ name: 'sahaya' }


//2.. value Redeclaration:
let obj = { name:'sahaya'};
let obj = {name:'jaisha'};
console.log(obj);

//error'obj' has already been declared

//3.ifConditionInside:
 let obj = { name:'sahaya'};
  obj = {name:'jaisha'};
  obj = {name:'zubair'};
if(true){
    let obj = {name:'sahayajaisha'};  
console.log(obj) 
}
 console.log(obj);

//op:
//  λ  node let.js
// { name: 'sahayajaisha' }
// { name: 'zubair' }


//4.function inside:
const obj = { name:'sahaya'};

function test(){
    const obj = {name:'sahayajaisha'};  
console.log(obj) 
}
test();
console.log(obj);

// op:
// { name: 'sahayajaisha' }
// { name: 'sahaya' }