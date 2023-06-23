
// const string = '|()|(||)||';
// const brackets = [['(', ')'], ['|', '|']];

module.exports = function check(str, bracketsConfig) {
  // function check(str, bracketsConfig) {
  // your solution
  let bracketsPair = {};
  let bracketsOpen = [];

    
  bracketsConfig.forEach(element => {
    bracketsPair[element[1]] = element[0];
    bracketsOpen.push(element[0]);
  })
  
  
  let stackSymbol = [];

  for (let i = 0; i < str.length; i++){
    let currentSymbol = str[i];

    if(bracketsOpen.includes(currentSymbol)) {
      stackSymbol.push(currentSymbol);
    } else {
      if(stackSymbol.length === 0) {
        return false;
      }

      let topElement = stackSymbol[stackSymbol.length -1]

      if (bracketsPair[currentSymbol] === topElement) {
        stackSymbol.pop(); 
      }  else {
        return false;
      }
    }
  }
 
  return stackSymbol.length === 0;
 
}

// console.log(check(string, brackets))
