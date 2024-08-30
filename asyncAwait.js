

const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ans = 'sahaya';//undefined
        if (ans) {
            resolve(ans);
        } else {
            reject( new Error("No data found"));
        }
    }, 5000);

});
async function process(){
try {
    const name = await data;
    console.log(name);
    // const userDetail = await getUserDetails(name);
    // console.log(userDetail);
    console.log('Test');
} catch (error) {
    console.log(error.message);
} finally{
    console.log('From Finally')
}
}
process();
console.log('Last');
