module.exports = function check(str, bracketsConfig) {
  // your solution
  let result = false;
  let n = 0;
  let bracketsCount = bracketsConfig.length;
  while (n < str.length){
    let i = 0;
    while (i < bracketsCount) {
      let findBrakets = bracketsConfig[i][0]+bracketsConfig[i][1];
      i++;
      if (str.indexOf(findBrakets) !== -1) {
        let numberChar = str.indexOf(findBrakets);
        if (numberChar > 1) {
          str = str.slice(0, numberChar) + str.slice(numberChar + 2);
          n += 2;
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
  }
  return result;
}
