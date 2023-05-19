function fibs(n){
    let arr = [0, 1];
    if(n === 0) return [];
    if(n === 1) return [0];
    if(n > 1){
        for(let i = 2; i < n; i++){
            arr.push(arr[i-1] + arr[i-2])
        }
        return arr;
    }
}

console.log(fibs(10));

function fibsRec(n){
    if(n === 1) return [0];
    if(n === 2) return [0,1];
    if(n > 2) {
        return [...fibsRec(n-1), fibsRec(n-1)[n-2]+fibsRec(n-1)[n-3]];
    }

}

console.log(fibsRec(6))