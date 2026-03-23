class SingleTon { 
    constructor() {
        if(SingleTon.instance) {
            return SingleTon.instance
        }
        this.data = "hello";
        SingleTon.instance = this;
    }
}

const a = new SingleTon();
const b = new SingleTon();

const isEqual = a == b;
console.log(isEqual)