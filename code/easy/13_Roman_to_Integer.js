var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  const str = s.split("");
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] < obj[str[i + 1]]) {
      result -= obj[str[i]];
      console.log(1);
    } else result += obj[str[i]];
  }
  return result;
};
console.log(romanToInt("IIV"));
