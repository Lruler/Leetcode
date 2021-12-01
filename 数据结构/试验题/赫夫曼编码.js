const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Node {
    constructor(value, char, left, right) {
        this.val = value; // 字符出现次数  
        this.char = char; // 待编码字符  
        this.left = left;
        this.right = right;
    }
}
// 哈弗曼编码是将一个 字符串序列 用 二进制表示 的压缩算法  
class huffmanTree {
    constructor(hash) {
        this.hash = hash;
        this.binaryStr = {}
        // 构造哈夫曼树  
        this.huffmanTree = this.getHuffmanTree();

        let map = this.getHuffmanCode(this.huffmanTree);
        // 查看对照表，即每个字符的二进制编码是什么  
        // console.log(map);

        // 最终的二进制编码  
        for (let key in hash) {
            this.binaryStr[key] = this.getBinaryStr(map, key);
        }
    }

    // 构造哈夫曼树  
    getHuffmanTree() {
        // 以各个字符出现次数为node.val, 构造森林  
        let forest = []
        for (let char in this.hash) {
            let node = new Node(this.hash[char], char);
            forest.push(node);
        }

        // 等到森林只剩一个节点时，表示合并过程结束，树就生成了  
        let allNodes = []; // 存放被合并的节点，因为不能真的删除森林中任何一个节点，否则.left .right就找不到节点了  
        while (forest.length !== 1) {
            // 从森林中找到两个最小的树，合并之  
            forest.sort((a, b) => {
                return a.val - b.val;
            });

            let node = new Node(forest[0].val + forest[1].val, '');
            allNodes.push(forest[0]);
            allNodes.push(forest[1]);
            node.left = allNodes[allNodes.length - 2]; // 左子树放置词频低的  
            node.right = allNodes[allNodes.length - 1]; // 右子树放置词频高的  

            // 删除最小的两棵树  
            forest = forest.slice(2);
            // 新增的树加入  
            forest.push(node);
        }

        // 生成的哈夫曼树  
        return forest[0];
    }

    // 遍历哈夫曼树，返回一个 原始字符 和 二进制编码 的对照表  
    getHuffmanCode(tree) {
        let hash = {}; // 对照表
        let traversal = (node, curPath) => {
            if (!node.length && !node.right) return;
            if (node.left && !node.left.left && !node.left.right) {
                hash[node.left.char] = curPath + '0';
            }
            if (node.right && !node.right.left && !node.right.right) {
                hash[node.right.char] = curPath + '1';
            }
            // 往左遍历，路径加0  
            if (node.left) {
                traversal(node.left, curPath + '0');
            }
            // 往右遍历，路径加1  
            if (node.right) {
                traversal(node.right, curPath + '1');
            }
        };
        traversal(tree, '');
        return hash;
    }

    // 返回最终的压缩后的二进制串  
    getBinaryStr(map, originStr) {
        let result = '';
        for (let i = 0; i < originStr.length; i++) {
            result += map[originStr[i]];
        }
        return result;
    }
}
let hash ={}
const question = (n, all) => {
    if (n < all) {
        rl.question(`第${n + 1}个编码:`, (str) => {
            rl.question('其权值为:', (num) => {
                hash[str] = +num
                question(n + 1, all)
            })
        })
    } else {
        console.log('----------------------------------------')
        let tree = new huffmanTree(hash)
        console.log(tree.binaryStr)
        rl.close()
        return
    }
}
rl.question('请输入编码个数:', (a) => {
    let n = +a
    question(0, n)
});

