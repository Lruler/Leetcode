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

var i = -1;
var nodeList = [];

var Node = function Node(key) {
  _classCallCheck(this, Node);

  this.key = key;
  this.left = null;
  this.right = null;
  this.father = null;
};

var Tree =
/*#__PURE__*/
function () {
  function Tree() {
    _classCallCheck(this, Tree);

    this.root = null;
  } // 后序遍历


  _createClass(Tree, [{
    key: "preOrderTraverse",
    value: function preOrderTraverse(callback) {
      a = '';
      this.preOrderTraverseNode(this.root, callback);
      var n = a.replace(/#/g, "");
      console.log('后序遍历', n);
    }
  }, {
    key: "preOrderTraverseNode",
    value: function preOrderTraverseNode(node, callback) {
      if (node !== null) {
        this.preOrderTraverseNode(node.left, callback);
        this.preOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    } // 中序遍历

  }, {
    key: "inOrderTraverse",
    value: function inOrderTraverse(callback) {
      a = '';
      this.inOrderTraverseNode(this.root, callback);
      var n = a.replace(/#/g, "");
      console.log('中序遍历', n);
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

      result = result.replace(/#/g, '');
      console.log('层次遍历:', result);
      return result;
    } // 建立二叉链表

  }, {
    key: "createbiTree",
    value: function createbiTree(keys) {
      this.createbiTreeNode(keys, this.root);
    }
  }, {
    key: "createbiTreeNode",
    value: function createbiTreeNode(keys, node) {
      nodeList = nodeList.filter(function (n) {
        return n.left === null || n.right === null;
      });
      var len = nodeList.length;
      var root = nodeList[len - 1];
      i++;

      if (keys[i] == '#') {
        node = new Node('#');
        root.left === null ? root.left = node : root.right = node;
      } else {
        node = new Node(keys[i]);

        if (i === 0) {
          this.root = node;
        } else {
          root.left === null ? root.left = node : root.right = node;
        }

        nodeList.push(node);
        this.createbiTreeNode(keys, node.left);
        this.createbiTreeNode(keys, node.right);
      }
    }
  }]);

  return Tree;
}();

var tree = new Tree();
rl.question('请输入你想插入的数据:', function (p) {
  var keys = p;
  tree.createbiTree(keys);
  tree.inOrderTraverse(printfNode);
  tree.preOrderTraverse(printfNode);
  tree.levelOrderTraverse();
  rl.close();
});