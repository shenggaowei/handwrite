/**
 * 组合继承 
 * 结合了原型链继承和构造函数继承的优点。通过调用父类构造函数继承属性，通过将子类的原型指向父类的实例继承方法。
 * 缺点是调用两次父类构造函数，开销较大 
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

Yupi.prototype = new Coder() 
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
