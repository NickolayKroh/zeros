module.exports = function zeros(expression) {
  //we get 0 at the of the product when we had pair of 2 and 5 as factors
  let twos = 0;
  let fives = 0;
  let factorial = expression.split('*');
  
  for(let i = 0; i < factorial.length; ++i) {
    let factorialSign = 1; // n!
    if(factorial[i].substr(-2, 2) === '!!')
      factorialSign = 2; // n!!
      
      for(let n = factorial[i].slice(0, -factorialSign); n > 1; n -= factorialSign) {
        for(let m = n; m % 5 === 0 && m >= 5; m /= 5)
          fives++;
        for(let m = n; m % 2 === 0 && m >= 2; m /= 2)
          twos++;
      }
  }
  
  return Math.min(fives, twos);
}
