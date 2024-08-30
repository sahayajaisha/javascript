try {
    const ans = getQuotient(5, 0);
    if (ans === empty) {
        // throw new Error('Divided by 0 error');
        console.log(ans.error);
    }
 
    // console.log(ans.toUpperCase());//typeerror
    // console.log(ans1);//reference error
}



catch (error) {
    console.log(error.name);
    if (error.name === 'Error') {
        console.log('from Diveded by 0 Error')
    } else {
        console.log('not  valid number')
    }
    // console.log(error.message)
    // console.log(error.name)
}
finally {
    console.log('from Finally');
}
function getQuotient(input1, input2) {
    if (isNaN(input1) || isNaN(input2)) {
        let error = new Error('not a valid number');
        error.name = 'notValidNumber';
        throw error;
    }
    return input1 / input2;

}

//syntax:
try{
console.log(test )
}catch(Error){
    console.log('error.message ');
    console.log('error.name ');
    console.log('error.stack ');
}