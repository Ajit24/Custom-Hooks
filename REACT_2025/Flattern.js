let arr = [1,[2,3],4,[5,[6,7]]]
let output = ''
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      flatten(arr[i])
    }else{
      output += arr[i]
    }
  }
  return output
}
console.log(flatten(arr)) ////1234567