function binarySearch(arr, item) {
    let start = 0,
        end = arr.length,
        pos = -1;
    while(start <= end){
        let middle = Math.floor((start + end) / 2);
        if(arr[middle] === item){
            pos = middle;
            return pos;
        }
        if(arr[middle] > item) end = middle - 1;
        else start = middle + 1;
    }
    return pos;
}