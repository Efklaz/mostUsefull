Function.prototype.mybind = function(context, ...args) {
    let self = this;
    let uuid = Date.now().toString();
    return function(...rest){
        context[uuid] = self;
        context[uuid](...args, ...rest);
        delete context[uuid];
    }

}