const throttle = function(func, delay) {
    let timer,
        prev = 0;
    return function(){
        const context = this;
        const args = arguments;
        const now = +new Date();
        const remaining = delay - (now - prev);
        if (remaining <= 0) {
            prev = now;
            func.apply(context, args);    
        } else if(!timer) {
            timer = setTimeout(() => {
                prev = +new Date();
                timer = null;
                func.apply(context, args);    
            }, remaining)    
        }
    }
}