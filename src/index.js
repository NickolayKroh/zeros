// module.exports = 
function zeros(expression) {
  let result = 0;
  let product = 1;
  let arr = expression.split('*');

  for(let i = 0; i < arr.length; ++i) {
    if(arr[i].substr(-2, 2) === '!!') {
      // !!
      for(let n = arr[i].slice(0, -2); n > 1; n -= 2) {
        product *= n;
      }
    } else {
      // !
      for(let n = arr[i].slice(0, -1); n > 1; --n) {
        product *= n;
      }
    }
  }

  console.log("product = " + product);
  
  while(product > 10) {
    if(!Math.floor(product % 10))
      result++;
    product /= 10;
  }
  
  console.log("result = " + result);

  return result;
}

zeros('10!');