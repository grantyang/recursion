// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let result = [];
  let nodeChecker = function(node){
    if (node.classList && node.classList.contains(className)){
      result.push(node);
    }
    if (node.childNodes.length > 0){
      for (var child of node.childNodes){
        nodeChecker(child);
      }
    }
  }
  nodeChecker(document.body);
  return result;
};
