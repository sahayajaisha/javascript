
 //1.value Initialize
 const obj = { name:'sahaya'};
console.log(obj);

// output:
// node let.js
//{ name: 'sahaya' }


//2.. value Redeclaration:
const obj = { name:'sahaya'};
const obj = {name:'jaisha'};
console.log(obj);

//error'obj' has already been declared

//3.ifConditionInside:
 const obj = { name:'sahaya'};
if(true){
    const obj = {name:'sahayajaisha'};  
console.log(obj) 
}
 console.log(obj);

//op:
//  λ  node let.js
// { name: 'sahayajaisha' }
// { name: 'sahaya' }


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