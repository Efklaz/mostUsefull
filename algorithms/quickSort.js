function quickSort(arr){
    if(arr.length <= 0) return arr;
    let pivotIndex = Math.floor(arr.length /2);
    let pivot = arr[pivotIndex];
    let less = [];
    let great = [];
    for(let i = 0; i < arr.length; i++){
        if( i === pivotIndex) continue
        if(arr[i] > pivot) great.push(arr[i])
        if(arr[i] < pivot) less.push(arr[i])
    }
    return [...quickSort(less), pivot, ...quickSort(great)];
}