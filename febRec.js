function fibs(num ){
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    let fibArr = [0,1,1];
    if(num === 0)
        return [0];

    if(num === 1)
        return [0,1];

    if(num === 2)
        return [0,1,1];

    for(let i = 3; i <= num; i++){
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }

    return fibArr;
}

 fibs(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 console.log(fibs(10) );

 function fibRec(num){


    if(num === 0)
        return [0];
    if(num === 1)
        return [0,1];
    if(num === 2)
        return [0,1,1];

    let fibArr = fibRec(num-1);
    console.log(fibArr);
    fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    return fibArr;
 }


 console.log(fibRec(5) );