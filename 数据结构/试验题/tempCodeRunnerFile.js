rl.question('请输入你想插入的数据:', (p) => {
    let keys = p
    tree.createbiTree(keys)
    tree.inOrderTraverse(printfNode)
    tree.preOrderTraverse(printfNode)
    tree.levelOrderTraverse()
    rl.close();
});