var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  console.log("flow".indexOf("flower"));
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      //   console.log(strs[i].indexOf(prefix));
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};
longestCommonPrefix(["flower", "flow", "flight"]);
