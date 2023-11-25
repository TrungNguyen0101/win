var lengthOfLastWord = function (s) {
  const str = s.split(/\s+/);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "") {
      str.splice(i, 1);
    }
  }
  return str[str.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
