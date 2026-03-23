/**
 * 构造函数继承
 * 
 * 无法继承原型对象上的属性
 */
function Coder() {
    this.type = 'coder'
}

Coder.prototype.rap = function() {
    console.log('yo yo yo')
}

function Yupi(name, age) {
    this.name = name;
    this.age = age;
    Coder.call(this)
}

const a = new Yupi('hahjb', 18)
console.log(a.type)

const b = new Yupi('hahjb', 17)
console.log(b.type)

// a.rap() 报错

