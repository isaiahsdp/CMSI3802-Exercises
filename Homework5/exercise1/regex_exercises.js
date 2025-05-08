const regexes = {
  canadianPostalCode:
    /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTV-Z] \d[ABCEGHJKLMNPRSTV-Z]\d$/,

  visa: /^4\d{12}(\d{3})?$/,

  masterCard:
    /^(5[1-5]\d{14}|222[1-9]\d{12}|22[3-9]\d{13}|2[3-6]\d{14}|27[01]\d{13}|2720\d{12})$/,

  notThreeEndingInOO: /^(?!^[a-z]o{2}$)[a-z]*$/iu,

  divisibleBy16: /^(0+|[01]+0000)$/,

  eightThroughThirtyTwo: /^(8|9|1[0-9]|2[0-9]|3[0-2])$/,

  notPythonPycharmPyc: /^(?!python$)(?!pycharm$)(?!pyc$)\p{L}*$/u,

  restrictedFloats: /^\d+(\.\d*)?[eE][+-]?\d{1,3}$/i,

  palindromes2358: /^.*$/, // handled in function below

  pythonStringLiterals:
    /^[frbuFRBU]?(?:"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|"""(?:[^"\\]|\\.|"(?!""))*"""|'''(?:[^'\\]|\\.|'(?!''))*''')$/,
};

function isPalindrome2358(str) {
  const len = str.length;
  if (![2, 3, 5, 8].includes(len)) return false;
  if (!/^[abc]+$/.test(str)) return false;
  return str === [...str].reverse().join("");
}

export function matches(name, string) {
  if (name === "palindromes2358") {
    return isPalindrome2358(string);
  }
  return regexes[name].test(string);
}
