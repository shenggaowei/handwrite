const data = [1, 2, 3];

const proxyData = new Proxy(data, {
  get(target, key, receiver) {
    const value = Reflect.get(target, key, receiver);
    // 只拦截实例属性，原型上的属性不去拦截
    if (Reflect.ownKeys(target).includes(key)) {
      console.log("get", key);
    }
    return value;
  },
  set(target, key, value, receiver) {
    if (value === target[key]) {
      // 如果重复设置了值，则忽略
      console.log(value, key, target[key]);
      return true;
    }
    const result = Reflect.set(target, key, value, receiver);
    console.log("set", key, value, target[key]);
    return result;
  },
  deleteProperty(target, key) {
    const result = Reflect.deleteProperty(target, key);
    console.log("delete", key, result);
    return result;
  },
});

//proxyData.name;
//proxyData.name = "阿高";
//proxyData.list.push(4);
