// import mathlib from "./mathlib"
import callbacklib from "./callbacklib"
import ffi from "ffi"

let result = null

// result = mathlib.add(5, 2)
// console.log("5+2=" + result)

// result = mathlib.minus(5, 2)
// console.log("5-2=" + result)

result = callbacklib.add(5, 2)
console.log("5+2=" + result)

result = callbacklib.minus(5, 2)
console.log("5-2=" + result)

result = callbacklib.cbimpl(7, 700)
console.log("cbimpl(7, 700): " + result)

const callback = ffi.Callback('int', ['int', 'int'],
    function(x, y) {
        console.log('x:', x);
        console.log('y:', y);
        return 70 + x + y;
    });

callbacklib.caller(callback)
callbacklib.caller(callback)
callbacklib.caller(callback)
callbacklib.caller(callback)