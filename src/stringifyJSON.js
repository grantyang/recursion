// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === undefined || typeof obj === 'function') {
    return undefined;
  } else if (obj === null || obj === NaN){
    return 'null';
  } else if (typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
  } else if (typeof obj === 'string'){
    return '"' + obj + '"';
  } else if (Array.isArray(obj)){
    if (obj.length){
      let arrayHelper = [];  
      for (let item of obj){
         arrayHelper.push(stringifyJSON(item));
      }
      return '[' + arrayHelper.join(',') + ']'
    } else {
      return '[]';
    }
  } else if (typeof obj === 'object'){
    if (Object.keys(obj).length) {
      let objHelper = [];
      for (let i = 0; i < Object.keys(obj).length; i++){
        if (typeof Object.entries(obj)[i][1] === 'function' || Object.entries(obj)[i][1] === undefined) return '{}'
        else {
          objHelper.push(stringifyJSON(Object.entries(obj)[i][0]) + ':' + stringifyJSON(Object.entries(obj)[i][1]));
        }
      }
      return '{' + objHelper.join(',') + '}';
    } else {
      return '{}';
    }
  }
};
