import ffi from "ffi"
import ref from "ref"

const int = ref.types.int
const callbacklibLoc = "../resources/callbacklib-x86.dll"
// const callbacklibLoc = "../resources/callbacklib-x64.dll"

const callbacklib = ffi.Library(callbacklibLoc, {
    add: [int, [int, int]],
    minus: [int, [int, int]],
    multiply: [int, [int, int]],
    cbimpl: [int, [int, int]],
    caller: ['void', ['pointer']],
})

export default callbacklib