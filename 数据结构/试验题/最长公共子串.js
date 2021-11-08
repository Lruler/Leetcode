const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const includes = (father, son) => {
    let a = 0
    let res = []
    for (let i = 0; i < father.length; i++) {
        if (res.join("") === son) return true
        if (father[i] === son[a]) {
            a++
            res.push(father[i])
        } else {
            if (res.length === 0) {
                continue
            } else {
                res.pop()
                a--
            }
        }
    }
    res = res.join("")
    return res === son
}

const substr = (str, i, j) => {
    let newStr = ''
    let a = i
    for(; i < a + j; i++) {
        newStr += str[i]
    }
    return newStr
}


const findSubStr = (str1, str2) => {
    if (str1.length > str2.length) {
        [str1, str2] = [str2, str1]
    }
    let result = "";
    const len = str1.length;
    for (let j = len; j > 0; j--) {
        for (let i = 0; i <= len - j; i++) {
            result = substr(str1, i, j)
            console.log(result)
            if (includes(str2, result)) return result
        }
    }
}

rl.question('请输入第一个串:', (p) => {
    let string1 = p
    rl.question('请输入第二个串:', (t) => {
        let string2 = t
        const a = findSubStr(string1, string2)
        console.log(a)
        rl.close();
    });
});