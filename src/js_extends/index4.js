/**
 * 寄生继承 
 * 对组合继承的优化，避免的组合继承中父类构造函数被调用两次的问题 
 */
function Coder() {
    this.type = 'coder'
}

Coder.prototype.rap = function() {
    console.log('yo yo yo')
}

Coder.prototype.list = [1,2,3]

function Yupi(name, age) {
    this.name = name;
    this.age = age;
    Coder.call(this);
}

Yupi.prototype = Object.create(Coder.prototype) 
Yupi.prototype.constructor = Yupi

const a = new Yupi('hahjb', 18)
console.log(a.type)

const b = new Yupi('hahjb', 17)
console.log(b.type)

a.rap() 

b.rap()

a.list.push(1)

console.log(a.list)
console.log(b.list)
