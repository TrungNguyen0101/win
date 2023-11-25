function validParentheses(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      console.log("file: test2.js:13 ~ last:", last);
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}
console.log(validParentheses("([)]"));
