class Coder {
    constructor() {
        this.type = 'Coder';
    }

    rap () {
        console.log('yo yo yo')
    }
}

class Yupi extends Coder {
    constructor(name){
        super(); // 调用父类的构造函数
        this.name = name;
        this.age = 18;
    }
}

const yupi = new Yupi('Yupi')
console.log(yupi.type);
yupi.rap()