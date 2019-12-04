function deepClone (obj) {
  if(typeof obj !== 'object' ) return;
  var newObj = obj instanceof Array ? [] :{};
  for(let key in obj) {
    if(obj.hasOwnProperty(key)){
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj)[key] : obj[key];
    }
  }
  return newObj;
}