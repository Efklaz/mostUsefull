function bobble(arr){
    for(let i=0; i < arr.length;i++){
        for (let index = 0; index < arr.length; index++) {
            if(arr[index] > arr[index + 1]){
                let tmp = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = tmp;
            }
        }
    }
    return arr;
}