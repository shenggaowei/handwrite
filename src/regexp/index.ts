// exp1(?=exp2)：查找 exp2 前面的 exp1
// 匹配字符 runoob，其在数字前面
const reg1 = /runoob(?=[\d+])/g
const str1 = "1234runoob123runoob456"
const ret1 = str1.match(reg1)
console.log(ret1)

// (?<=exp2)exp1：查找 exp2 后面的 exp1
// 匹配数字后面的 runoob
const str2 = '1234google123runoob465';
const reg2 = /(?<=[0-9]+)runoob/g;
const ret2 = str2.match(reg2)
console.log(ret2)

// exp1(?!exp2): 查找后面不是 exp2 的 exp1
// 匹配 runoob，但后面不是数字
const str3 = '1234runoob-google123runoob465';
const reg3 = /runoob(?![0-9]+)/g;
const ret3 = str3.match(reg3)
console.log(ret3)

// (?<!exp2)exp1：查找前面不是 exp2 的 exp1
// 匹配前面不是数字的 runoob
const str4 = '1234runoob-googlerunoob465';
const reg4 = /(?<![0-9]+)runoob/g;
const ret4 = str4.match(reg4)
console.log(ret4)