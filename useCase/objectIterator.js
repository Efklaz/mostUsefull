const myObject = { a: 1, b: 2, c: 3 };
myObject[Symbol.iterator] = function(){
    return {
        index : 0,
        keys : Object.keys(myObject),
        next(){
            return {
                value : [this.keys[this.index],myObject[this.keys[this.index++]]],
                done: this.index > this.keys.length ? true: false
            }
        }
    }
}
for (let [key, value] of myObject) {
    console.log(`Ключ: ${key}, Значение: ${value}`);
}