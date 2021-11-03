"use strict";

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var findSubStr = function findSubStr(str1, str2) {
  if (str1.length > str2.length) {
    var _ref = [str2, str1];
    str1 = _ref[0];
    str2 = _ref[1];
  }

  var result = "";
  var len = str1.length;

  for (var j = len; j > 0; j--) {
    for (var i = 0; i <= len - j; i++) {
      result = str1.substr(i, j);
      if (str2.includes(result)) return result;
    }
  }
};

rl.question('请输入第一个串:', function (p) {
  var string1 = p;
  rl.question('请输入第二个串:', function (t) {
    var string2 = t;
    var a = findSubStr(string1, string2);
    console.log(a);
    rl.close();
  });
});