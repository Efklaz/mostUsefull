function myFindDisappearedNumbers(nums){
    let neg = [];
    let plus = [];
    let min = nums[0];
    let index;
    nums.forEach((el, ind)=>{
        let sqrt =  Math.pow(el, 2);
        if(el > 0) plus.push(sqrt);
        else{
            min = Math.min(Math.abs(min), Math.abs(el));
            neg.unshift(sqrt);
        }
    })
    index = plus.findIndex((el) => el > Math.pow(min, 2) )
    return [...plus.slice(0, index), ...neg, ...plus.slice(index, plus.length)];
}
let findDisappearedNumbers = function(nums) {
    let beg = 0, end = nums.length -1;
    let result = [];
    while(beg <= end){
        if( Math.abs(nums[beg]) > Math.abs(nums[end]) ){
            result.unshift(Math.pow(nums[beg], 2));
            beg++;
        }else{
            result.unshift(Math.pow(nums[end], 2));
            end--;
        }
    }

    return result;
}
//Test Performance
const arr = [];
const positiveCount = 1000;
const negativeCount = 1000;
for (let i = 0; i < positiveCount; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}
for (let i = 0; i < negativeCount; i++) {
    arr.push(Math.floor(Math.random() * -100) - 1);
}
arr.sort((a, b) => a - b);
let start = performance.now()
findDisappearedNumbers(arr)
console.log("yandex", performance.now() - start)
//Мой Алгоритм быстрее хаха
let start1 = performance.now()
myFindDisappearedNumbers(arr)
console.log('myFindDisappearedNumbers ', performance.now() - start1)