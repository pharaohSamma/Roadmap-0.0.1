const uniqueNumbers = new Array();
const maxRange = 10;


 function checkUnique(){
    
    return new Promise((resolve, reject) =>{
        const randomInt = Math.round(Math.random() * 10);
        const randomTimeOut = Math.round(Math.random() *2000) + 1000;
        
        setTimeout(() => {
        if(!uniqueNumbers.includes(randomInt)){
            uniqueNumbers.push(randomInt);
            resolve(randomInt);
        }else{
            reject(`${randomInt} not unique`);
        }},
        randomTimeOut)
    })
}


for(let i = 0; i<10 ; i++){ 
checkUnique()
.then(uniqueInt => console.log('is unique',uniqueInt))
.catch(error => console.log(error));
}

