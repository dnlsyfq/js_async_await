## Async Await 

* with function declaration 

```
async function myFunc(){

};

myFunc();
```

* with function expression 

```
const myFunc = async () => {

};

myFunc();

```

### Async 

* always return a promise. 
* we can use promise syntax, like .then() and .catch with our async functions.
* async function will return in one of three ways:
    1. If there’s nothing returned from the function, it will return a promise with a resolved value of undefined
    2. If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
    3. If a promise is returned from the function, it will simply return that promise
    
```
async function fivePromise(){
    return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
})
```    

* new Promise vs async 
```
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

```

