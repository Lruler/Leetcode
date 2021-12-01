"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Node = function Node(value, _char, left, right) {
  _classCallCheck(this, Node);

  this.val = value; // 字符出现次数  & 权重

  this["char"] = _char; // 待编码字符  

  this.left = left;
  this.right = right;
};

var huffmanTree =
/*#__PURE__*/
function () {
  function huffmanTree(hash) {
    _classCallCheck(this, huffmanTree);

    /*           
    let hash = {};
    for (let i = 0; i < str.length; i++) {
        hash[str[i]] = ~~hash[str[i]] + 1;
    }
    this.hash = hash;
    this.huffmanTree = this.getHuffmanTree();
    let map = this.getHuffmanCode(this.huffmanTree);
    console.log(map);
    this.binaryStr = this.getBinaryStr(map, str);
    */
    this.hash = hash;
    this.binaryStr = {}; // 构造哈夫曼树  

    this.huffmanTree = this.getHuffmanTree();
    var map = this.getHuffmanCode(this.huffmanTree); // 最终的二进制编码  

    for (var key in hash) {
      this.binaryStr[key] = this.getBinaryStr(map, key);
    }
  } // 构造哈夫曼树  


  _createClass(huffmanTree, [{
    key: "getHuffmanTree",
    value: function getHuffmanTree() {
      // 以各个字符出现次数为node.val, 构造森林  
      var forest = [];

      for (var _char2 in this.hash) {
        var node = new Node(this.hash[_char2], _char2);
        forest.push(node);
      } // 等到森林只剩一个节点时，表示合并过程结束，树就生成了  


      var allNodes = []; // 存放被合并的节点，因为不能真的删除森林中任何一个节点，否则.left .right就找不到节点了  

      while (forest.length !== 1) {
        // 从森林中找到两个最小的树，合并之  
        forest.sort(function (a, b) {
          return a.val - b.val;
        });

        var _node = new Node(forest[0].val + forest[1].val, '');

        allNodes.push(forest[0]);
        allNodes.push(forest[1]);
        _node.left = allNodes[allNodes.length - 2]; // 左子树放置权重低的  

        _node.right = allNodes[allNodes.length - 1]; // 右子树放置权重高的  
        // 删除最小的两棵树  

        forest = forest.slice(2); // 新增的树加入  

        forest.push(_node);
      } // 生成的哈夫曼树  其实就是树的根节点


      return forest[0];
    } // 遍历哈夫曼树，返回一个 原始字符 和 二进制编码 的对照表  

  }, {
    key: "getHuffmanCode",
    value: function getHuffmanCode(tree) {
      var hash = {}; // 对照表

      var traversal = function traversal(node, curPath) {
        if (!node.right && !node.left) return;

        if (node.left && !node.left.left && !node.left.right) {
          hash[node.left["char"]] = curPath + '0';
        }

        if (node.right && !node.right.left && !node.right.right) {
          console.log(node, 2);
          hash[node.right["char"]] = curPath + '1';
        } // 往左遍历，路径加0  


        if (node.left) {
          traversal(node.left, curPath + '0');
        } // 往右遍历，路径加1  


        if (node.right) {
          traversal(node.right, curPath + '1');
        }
      };

      traversal(tree, '');
      return hash;
    } // 返回最终的压缩后的二进制串  

  }, {
    key: "getBinaryStr",
    value: function getBinaryStr(map, originStr) {
      var result = '';

      for (var i = 0; i < originStr.length; i++) {
        result += map[originStr[i]];
      }

      return result;
    }
  }]);

  return huffmanTree;
}();

var hash = {};

var question = function question(n, all) {
  if (n < all) {
    rl.question("\u7B2C".concat(n + 1, "\u4E2A\u7F16\u7801:"), function (str) {
      rl.question('其权值为:', function (num) {
        hash[str] = +num;
        question(n + 1, all);
      });
    });
  } else {
    console.log('----------------------------------------');
    var tree = new huffmanTree(hash);
    console.log(tree.binaryStr);
    rl.close();
    return;
  }
};

rl.question('请输入编码个数:', function (a) {
  var n = +a;
  question(0, n);
});