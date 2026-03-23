/**
 * 原型链继承 
 * 将子类的原型指向父类的实例来实现。优点是简单，缺点是所有实例共享父类属性，修改子类实例会影响到所有实例
 * 
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
}

Yupi.prototype = new Coder() 

const a = new Yupi('hahjb', 18)
console.log(a.type)

const b = new Yupi('hahjb', 17)
console.log(b.type)

a.rap() 

b.rap()

a.list.push(1)

console.log(a.list)
console.log(b.list)
