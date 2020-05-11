//防抖函数
//1.判断每个图片传输的间隔和delay的时间对比 传输的间隔小于delay的时间不会进行refresh 传输的间隔大于delay就会进行refresh
"use strict";
export function debounce(func, delay) {

  let timer = null;

  return function (...args) {
    //..args:可以传入多个参数
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      console.log("sss");
    }, delay)
  }
}
