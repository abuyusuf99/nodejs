function sum(array){
    let sbor = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] %2 === 0){
            sbor += array[i]
        }
    }
    
    return sbor
}
console.log(sum([,1,2,3,4,5,6,6,7,8,9]))
module.exports = {sum}