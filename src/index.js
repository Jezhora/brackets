module.exports = function check(str, bracketsConfig) {

  let bracketsPair = {};
  let bracketsOpen = [];
  let bracketsClose = [];
  
    
  bracketsConfig.forEach(element => {
    bracketsPair[element[1]] = element[0];
    bracketsOpen.push(element[0]);
    bracketsClose.push(element[1]);
    
  })
  
  let stackSymbol = []; debugger

  for (let i = 0; i < str.length; i++){
    let currentSymbol = str[i];
    let topElement = stackSymbol[stackSymbol.length -1]

    if(stackSymbol.length > 0 && bracketsClose.includes(currentSymbol) 
        && bracketsClose.indexOf(currentSymbol) === bracketsOpen.indexOf(topElement)) {
        stackSymbol.pop();debugger
    } else if(bracketsOpen.includes(currentSymbol)) {
      stackSymbol.push(currentSymbol);debugger
    } else {
      return false; 
    }
  }
 
  return stackSymbol.length === 0;
}
