let map = new Map().set('a' , 'b').set('c' , 'd').set('e' , 'f')
function replacer(key, value){
    if(value instanceof Map){
        return {
            dataType: 'Map',
            value : Array.from(value.entries())
        }
    }
    return value;
}
function reviver(key, value){
    if(typeof value === 'object' && value.dataType === 'Map'){
        return new Map(value.value)
    }
    return value;
}
let stringify = JSON.stringify(map, replacer)
let parsed = JSON.parse(stringify, reviver)