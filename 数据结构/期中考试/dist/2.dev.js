"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var StackArray =
/*#__PURE__*/
function () {
  function StackArray() {
    _classCallCheck(this, StackArray);

    this.items = [];
  } // 推元素到栈顶 


  _createClass(StackArray, [{
    key: "push",
    value: function push(e) {
      this.items.push(e);
    } // 移除栈顶元素

  }, {
    key: "pop",
    value: function pop() {
      return this.items.pop();
    } // 返回/查看栈顶元素

  }, {
    key: "peek",
    value: function peek() {
      return this.items[this.items.length - 1];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.items.length === 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this.items.length;
    }
  }, {
    key: "clear",
    value: function clear() {
      return this.items = [];
    }
  }]);

  return StackArray;
}();

rl.question('入栈的串:', function (str) {
  rl.question('出栈的串:', function (str1) {
    var newStr = '';
    var len = str.length;
    var stackIn = new StackArray();
    var stackOut = new StackArray();
    var i = 0;
    var j = 0;

    for (; i < len; i++) {
      if (stackIn.peek() == str1[i]) {
        var a = stackIn.pop();
        stackOut.push(a);
      } else {
        for (; j < len; j++) {
          stackIn.push(str[j]);

          if (stackIn.peek() == str1[i]) {
            var b = stackIn.pop();
            stackOut.push(b);
            j++;
            break;
          }
        }
      }
    }

    for (var k = 0; k < stackOut.size(); k++) {
      newStr += stackOut.items[k];
    }

    console.log(newStr === str1);
    rl.close();
  });
});