function merge(arr){
    if(arr.length == 1)
        return arr;

  let half =  Math.floor(arr.length/2)
    
    let firstArr = merge(arr.slice(0, half))
    let SecArr = merge(arr.slice(half, arr.length))
    let isMerged = true;
    let mergedArr = [];
    while(isMerged){
        if(firstArr.length <= 0 && SecArr.length <= 0 ){
            isMerged = false;
            continue;            
        }

        if(firstArr.length <=0){
            mergedArr.push(SecArr.shift());

            continue;
        }else if(SecArr.length <= 0){
            mergedArr.push(firstArr.shift());
            continue
        }

        if(firstArr[0] <= SecArr[0]){
            mergedArr.push(firstArr.shift());
        }else{
            mergedArr.push(SecArr.shift());
        }
    }
    return mergedArr;
    

}

console.log( merge([2,1,8,6,3,5,7,20 , 15,100,70,5.4,60]));
console.log(merge([10,5,2,4,18,53,30,16,87,24,55,24]))
console.log(merge([7,1,3]))
console.log(merge([105, 79, 100, 110]))
console.log(merge([3, 2, 1, 13, 8, 5, 0, 1]))