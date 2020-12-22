/*
let myPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve('Yay, I resolved!')
        },1000)
    })
}

async function noAwait(){
    let value = myPromise();
    console.log(value);
}

async function yesAwait(){
    let value = await myPromise();
    console.log(value);
}

noAwait();
yesAwait();


 */

/*
function nativePromiseVersion(){
    returnsFirstPromise()
        .then(
            (firstValue) => {
                console.log(firstValue);
                return returnsSecondPromise(firstValue);
            }
        )
        .then(
            (secondValue) => {
                console.log(secondValue);
            }
        );
}


 */

/*
async function asyncAwaitVersion(){
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
}



 */


