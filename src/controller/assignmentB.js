const arrOfIntegers = [1,2,3,4,1,2,3,4,1,1,1];
const maxRange = 10;

 function checkUnique(arr){
    
    return new Promise((resolve, reject) =>{
        const randomInt = Math.round(Math.random() * 10);
        const randomTimeOut = Math.round(Math.random() *2000) + 1000;
        
        setTimeout(() => {
        if(!arr.includes(randomInt)){
            resolve(randomInt);
        }else{
            reject(`${randomInt} not unique`);
        }},
        randomTimeOut)
    })
}

checkUnique(arrOfIntegers)
.then(uniqueInt => console.log('is unique',uniqueInt))
.catch(error => console.log(error));









