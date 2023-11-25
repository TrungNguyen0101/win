var isPalindrome = function (x) {
  if (x < 0) return false;
  else {
    const result = x.toString().split("").reverse().join("");
    if (result == x.toString()) return true;
    else return false;
  }
};
isPalindrome(10);
