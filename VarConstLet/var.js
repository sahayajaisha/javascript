
//1. value Initialize
var obj;
obj = { name:'sahaya'};
console.log(obj);

// output:
// λ node var.js
// { name: 'sahaya' }


//2.. value Redeclaration:constletnotReeclarewithoneScope
var obj = { name:'sahaya'};
 var obj = {name:'jaisha'};
console.log(obj);

//o/p:{ name: 'jaisha' }

//3.ifConditionInside obj redeclare:var
var obj = { name:'sahaya'};
 var obj = {name:'jaisha'};
 if(true){
    var obj = {name:'sahayajaisha'};  
console.log(obj) 
}
console.log(obj);

//op:λ node var.js
// { name: 'sahayajaisha' }
// { name: 'sahayajaisha' }




//4.function inseide:3samereact
var obj = { name:'jaisha'};
 var obj = {name:'sahaya'};
function test(){
    var obj = {name:'sahayajaisha'};  
console.log(obj) 
}
test();
console.log(obj);

// op:
// { name: 'sahayajaisha' }
// { name: 'sahaya' }