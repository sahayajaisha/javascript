// const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const ans = 'sahaya';//undefined
//         if (ans) {
//             resolve(ans);
//         } else {
//             reject( new Error("No data found"));
//         }
//     }, 5000);

// });
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
data
.then((name) => {
    console.log(name)})
.catch((error) => {
    console.log(error.stack)}) //name,message,stack
.finally(() => {console.log('test')}); 