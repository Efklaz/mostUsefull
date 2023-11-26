function Cat(col){
    this.color = col;
}
function customNew(constructor, ...args) {
    let obj = {}
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args) || obj;
}
let cat = customNew(Cat, 'green')