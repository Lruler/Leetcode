"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var a = '';

var printfNode = function printfNode(key) {
  var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
  a += key;
};

var Node = function Node(key) {
  _classCallCheck(this, Node);

  this.key = key;
  this.left = null;
  this.right = null;
};

var Tree =
/*#__PURE__*/
function () {
  function Tree() {
    _classCallCheck(this, Tree);

    this.root = null;
  }

  _createClass(Tree, [{
    key: "insert",
    value: function insert(key) {
      if (key === '#') return;

      if (this.root === null) {
        this.root = new Node(key);
      } else this.insertNode(this.root, key);
    }
  }, {
    key: "insertNode",
    value: function insertNode(node, key) {
      if (node.left === null) {
        node.left = new Node(key);
      } else if (node.right === null) {
        node.right = new Node(key);
      } else this.insertNode(node.left, key);
    } // 先序遍历

  }, {
    key: "preOrderTraverse",
    value: function preOrderTraverse(callback) {
      a = '';
      this.preOrderTraverseNode(this.root, callback);
      console.log(a);
    }
  }, {
    key: "preOrderTraverseNode",
    value: function preOrderTraverseNode(node, callback) {
      if (node !== null) {
        callback(node.key);
        this.preOrderTraverseNode(node.left, callback);
        this.preOrderTraverseNode(node.right, callback);
      }
    } // 中序遍历

  }, {
    key: "inOrderTraverse",
    value: function inOrderTraverse(callback) {
      a = '';
      this.inOrderTraverseNode(this.root, callback);
      console.log(a);
    }
  }, {
    key: "inOrderTraverseNode",
    value: function inOrderTraverseNode(node, callback) {
      if (node != null) {
        this.inOrderTraverseNode(node.left, callback);
        callback(node.key);
        this.inOrderTraverseNode(node.right, callback);
      }
    } // 层次遍历

  }, {
    key: "levelOrderTraverse",
    value: function levelOrderTraverse() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      var queue = [];
      var result = '';
      queue.push(node); // 根节点入队

      while (queue.length) {
        node = queue.shift(); // 出队

        result += "".concat(node.key); // 访问该节点

        if (node.left) {
          // 如果它的右子树不为空
          queue.push(node.left); // 将左子树的根节点入队
        }

        if (node.right) {
          // 如果它的右子树不为空
          queue.push(node.right); // 将右子树的根节点入队
        }
      }

      console.log(result);
      return result;
    }
  }]);

  return Tree;
}();

var b = new Tree();
rl.question('请输入你想插入的数据:', function (p) {
  var string = p;

  for (var i = 0; i < string.length; i++) {
    b.insert(string[i]);
  }

  b.preOrderTraverse(printfNode);
  b.inOrderTraverse(printfNode);
  b.levelOrderTraverse();
  rl.close();
});