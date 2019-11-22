let arr  = [2,3,2,56,88,12,2];

// 使用es6新提供的set数据类型
let unique = new Set();
arr.map(item => unique.add(item))

console.log(unique);

// 使用对象唯一key
let obj = {};
arr.forEach(item=>{
  obj[item] = item;
});
let res = Object.keys(obj);
console.log(res);

// 使用暴力破解法循环
let res = [];
for(let i = 0, length = arr.length; i < length; i++) {
  for(let j = i + 1; j < length; j++) {
    if(arr[i] === arr[j]) {
      arr.splice(j,1);
      length--;
      j--;
    }
  }
}
console.log(arr,'arr');

// 使用indexof
let res = [];
for(let i = 0; i < arr.length; i++) {
  let current = arr[i];
  if(res.indexOf(current) === -1){
    res.push(current);
  }
}
console.log(res)