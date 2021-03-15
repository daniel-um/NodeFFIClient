import ffi from "ffi"
import ref from "ref"

const int = ref.types.int
// const mathlibLoc = "../../MathLib/build/Release/mathlib.dll"
// const mathlibLoc = "../resources/mathlib-x86.dll"
const mathlibLoc = "../resources/mathlib-x64.dll"

const mathlib = ffi.Library(mathlibLoc, {
    add: [int, [int, int]],
    minus: [int, [int, int]],
    // multiply: [int, [int, int]],
})

export default mathlib