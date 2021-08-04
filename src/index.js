
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    let flatMatrix = [];
    matrix.forEach((element,index) => {
        flatMatrix = [...flatMatrix, ...((index % 2 === 0) ? element : element.reverse())];
    });
    
  return flatMatrix;
}
