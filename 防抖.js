const debounce = function (func, delay) {
    let timer,
        callNow = true; // 是否立即执行函数的标识
    return function () {
        const context = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        if(callNow) {
            func.apply(context, args); // 触发事件立即执行
            callNow = false; // 将标识设置为false，保证后续在delay秒内触发事件都无法执行函数。    
        } else {
            timer = setTimeout(() => {
                callNow = true; // 过delay秒后才能再次触发函数执行。
            }, delay) 
        }
    }
}