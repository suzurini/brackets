module.exports = function check(str, bracketsConfig) {
  // your solution
  let result = false;
  let n = 0;
  let strStartLength = str.length;
  let bracketsCount = bracketsConfig.length;
  while (n < strStartLength){
    let i = 0;
    while (i < bracketsCount) {
      let findBrackets = bracketsConfig[i][0]+bracketsConfig[i][1];
      i++;
      if (str.indexOf(findBrackets) !== -1) {
        let numberChar = str.indexOf(findBrackets);
        if (numberChar >= 1) {
          str = str.slice(0, numberChar) + str.slice(numberChar + 2);
          // n += 2;
        }
        else {
          if ((str.length - 2) > numberChar) {
            str=str.slice(numberChar + 2);
          }
          else {
            str = '';
          }
          if (str.length == 0) {
            result = true;
          }
        }
      }
    }
    n += 2;
  }
  return result;
}
