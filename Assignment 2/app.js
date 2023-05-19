function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    } else {
        let half = Math.trunc(arr.length / 2);
        let left = arr.slice(0, half);
        let right = arr.slice(half, arr.length);
        left = mergeSort(left);
        right = mergeSort(right);
        return merge(left, right);
    }
}

function merge(left, right) {
        const merged = [];

        while(left.length > 0 && right.length > 0){
            if(left[0] > right[0]){
                merged.push(right[0]);
                right.shift();
            } else {
                merged.push(left[0]);
                left.shift();
            }
        }
        
        while(left.length > 0) {
            merged.push(left[0]);
            left.shift();
        }

        while(right.length > 0) {
            merged.push(right[0]);
            right.shift();
        }
        
        return merged;
}



console.log(mergeSort([8,2,10,5,1,4,6,7]));
