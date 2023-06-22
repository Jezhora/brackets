
const string = '([{}])';
const brackets = [['(', ')'], ['[', ']'], ['{', '}']]

// module.exports = function check(str, bracketsConfig) {
  function check(str, bracketsConfig) {
  // your solution
  let bracketsPair = {};
  let bracketsOpen = []
    
  bracketsConfig.forEach(element => {
    bracketsPair[element[1]] = element[0]
    bracketsOpen.push(element[0])
  })

  return bracketsOpen
 
}

console.log(check(string, brackets))
