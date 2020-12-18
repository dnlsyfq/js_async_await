/*
Example 1

const fs = require('fs');
const promisifiedReadfile = require('./promosifiedReadfile');

let firstSentence ;

    promisifiedReadfile('./file.txt','utf-8').then(
    (data) => {
        firstSentence = data ;
        return promisifiedReadfile('./file2.txt','utf-8')
    }
).then(
    (data) => {
        let secondSentence = data;
        console.log(firstSentence,secondSentence)
    }
).catch((err) => {console.log(err)});


async function readFiles(){
    let firstSentence = await promisifiedReadfile('./file.txt','utf-8')
    let secondSentence = await promisifiedReadfile('./file2.txt','utf-8')
    console.log(firstSentence,secondSentence)
}

readFiles()



 */


// async function fivePromise(){
//     return 5;
// }
//
// fivePromise()
// .then(resolvedValue => {
//     console.log(resolvedValue);
// })

/*

function withConstructor(num){
    return new Promise((resolve,reject) => {
        if(num === 0){
            resolve('zero');
        } else {
            resolve('not zero');
        }
    })
}


withConstructor(0)
    .then((resolveValue) => {
        console.log(`withConstructor(0) returned a promise which resolve to: ${resolveValue}`);
    })


const withAsync = async (num) => {
    if(num === 0){
        return "zero";
    } else {
        return "not zero";
    }
}

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})


*/










