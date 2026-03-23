/**
 * 优点：将对象的创建细节封装在工厂类中，避免了频繁的 new。
 */
class Product {
    use() {
        throw new Error("This method should be overridden by subclasses");
    }
}

class ProductA extends Product {
    use() {
        console.log('productA')
    }
}

class productB extends Product {
    use() {
        console.log("productB")
    }
}

class SimpleFactory {
    static createFactory(type) {
        switch(type){
            case 'a':
                return new ProductA()
            case 'b':
                return new productB()
        }
    }
}

const factoryA = SimpleFactory.createFactory('a')
const factoryB = SimpleFactory.createFactory('b')

factoryA.use()
factoryB.use()
