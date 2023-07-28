function findEven(arr){
const evenNum=arr.filter(function(num){
    return num%2==0
})
console.log(evenNum)
return evenNum
}
const result=findEven( [12, 34, 45, 23, 6, 78, 54, 90])
console.log(result)