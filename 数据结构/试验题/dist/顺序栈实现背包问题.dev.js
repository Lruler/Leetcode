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
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, StackArray);

    this.items = arr;
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
      return this.items[this.itmes.length - 1];
    } // 判断栈是否为空

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.items.length === 0;
    } // 返回栈的长度

  }, {
    key: "size",
    value: function size() {
      return this.items.length;
    } // 清空栈

  }, {
    key: "clear",
    value: function clear() {
      return this.items = [];
    } // 输出栈

  }, {
    key: "stackTraverse",
    value: function stackTraverse() {
      return this.items;
    }
  }]);

  return StackArray;
}(); // 背包函数


var knapsack = function knapsack(pack, target) {
  var packStack = new StackArray();
  var n = pack.length; // 背包数量

  for (var k = 0; !packStack.isEmpty() || k < n; k++) {
    for (; target > 0 && k < n;) {
      if (target - pack[k] >= 0) {
        packStack.push(k);
        target -= pack[k];
      }

      k++;
    }

    if (target == 0) {
      var w = packStack.stackTraverse(); // 输出栈

      var newPack = [];

      for (var i = 0; i < w.length; i++) {
        newPack.push(pack[w[i]]);
      }

      console.log(newPack);
    }

    k = packStack.pop();
    target += pack[k];
  }
};

rl.question('请输入物品:', function (p) {
  var arr = p.split(" ");
  arr = arr.map(function (i) {
    return +i;
  });
  rl.question('请输入target:', function (t) {
    t = +t;
    knapsack(arr, t);
    rl.close();
  });
});