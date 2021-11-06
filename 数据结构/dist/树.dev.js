"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(key) {
  _classCallCheck(this, Node);

  this.key = key;
  this.left = null;
  this.right = null;
};

var BinarySearchTree =
/*#__PURE__*/
function () {
  function BinarySearchTree() {
    _classCallCheck(this, BinarySearchTree);

    this.root = null;
  } // 插入一个节点


  _createClass(BinarySearchTree, [{
    key: "insert",
    value: function insert(key) {
      if (this.root == null) {
        this.root = new Node(key);
      } else {
        this.insertNode(this.root, key);
      }
    }
  }, {
    key: "insertNode",
    value: function insertNode(node, key) {
      if (key < node.key) {
        if (node.left == null) {
          node.left = new Node(key);
        } else this.insertNode(node.left, key);
      } else {
        if (node.right == null) node.right = new Node(key);else {
          this.insertNode(node.right, key);
        }
      }
    } // 中序遍历 （从小到大的顺序   访问所有节点，对树的排序要用到

  }, {
    key: "inOrderTraverse",
    value: function inOrderTraverse(callback) {
      this.inOrderTraverseNode(this.root, callback);
    }
  }, {
    key: "inOrderTraverseNode",
    value: function inOrderTraverseNode(node, callback) {
      if (node != null) {
        this.inOrderTraverseNode(node.left, callback);
        callback(node.key);
        this.inOrderTraverseNode(node.right, callback);
      }
    } // 先序遍历 （优先于后代节点的顺序访问每个节点 应用打印一个结构化的文档

  }, {
    key: "preOrderTraverse",
    value: function preOrderTraverse(callback) {
      this.preOrderTraverseNode(this.root, callback);
    }
  }, {
    key: "preOrderTraverseNode",
    value: function preOrderTraverseNode(node, callback) {
      if (node != null) {
        callback(node.key);
        this.preOrderTraverseNode(node.left, callback);
        this.preOrderTraverseNode(node.right, callback);
      }
    } // 后序遍历 （先访问节点的后代节点，再访问节点本身， 应用计算目录及其子目录所有文件所占空间大小

  }, {
    key: "postOrderTraverse",
    value: function postOrderTraverse(callback) {
      this.postOrderTraverseNode(this.root, callback);
    }
  }, {
    key: "preOrderTraverseNode",
    value: function preOrderTraverseNode(node, callback) {
      if (node != null) {
        this.postOrderTraverseNode(node.left, callback);
        this.postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    } // 搜索最小值

  }, {
    key: "min",
    value: function min() {
      return this.minNode(this.root);
    }
  }, {
    key: "minNode",
    value: function minNode(node) {
      var current = node;

      while (current != null && current.left != null) {
        current = current.left;
      }

      return current;
    } // 搜索最大值

  }, {
    key: "max",
    value: function max() {
      return maxNode(this.root);
    }
  }, {
    key: "maxNode",
    value: function maxNode(node) {
      var current = node;

      while (current != null && current.right != null) {
        current = current.right;
      }

      return right;
    } // 搜索特定的值

  }, {
    key: "search",
    value: function search(key) {
      return this.searchNode(this.root, key);
    }
  }, {
    key: "searchNode",
    value: function searchNode(node, key) {
      if (node == null) {
        return false;
      }

      if (key < node.key) {
        return this.searchNode(node.left, key);
      } else if (key > node.key) {
        return this.searchNode(node.right, key);
      } else {
        return true;
      }
    } // 移除一个节点

  }, {
    key: "remove",
    value: function remove(key) {
      return this.root = this.removeNode(this.root, key);
    }
  }, {
    key: "removeNode",
    value: function removeNode(node, key) {
      if (node === null) {
        return null;
      }

      if (key < node.key) {
        node.left = this.removeNode(node.left, key);
        return node;
      } else if (key > node.key) {
        node.right = this.removeNode(node.right, key);
        return node;
      } else {
        if (node.left == null && node.right == null) {
          node = null;
          return node;
        }

        if (node.left == null) {
          node = node.right;
          return node;
        } else if (node.right == null) {
          node = node.left;
          return node;
        }

        var aux = this.minNode(node.right);
        node.key = aux.key;
        node.right = this.removeNode(node.right, aux.key);
        return node;
      }
    }
  }]);

  return BinarySearchTree;
}();

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25); // const printNode = (value) => console.log(value)
// tree.preOrderTraverse(printNode)
// tree.inOrderTraverse(printNode)