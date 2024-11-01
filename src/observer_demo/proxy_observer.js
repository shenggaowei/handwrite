function reactive(data) {
  if (typeof data !== "object" || data === null) {
    // 不是对象或者数组，返回
    return data;
  }
  const proxyData = new Proxy(data, {
    get(target, key, receiver) {
      const value = Reflect.get(target, key, receiver);
      // 只拦截实例属性，原型上的属性不去拦截
      if (Reflect.ownKeys(target).includes(key)) {
        console.log("get", key);
      }
      // 读取的时候创建响应性
      return reactive(value);
    },
    set(target, key, value, receiver) {
      if (value === target[key]) {
        // 如果重复设置了值，则忽略
        console.log(value, key, target[key]);
        return true;
      }
      // 判断是新增还是修改原来的属性
      if (Reflect.ownKeys(target).includes(key)) {
        console.log("是修改已有的属性");
      } else {
        console.log("是新增的属性");
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
  return proxyData;
}

const data = {
  name: "zhangsan",
  age: 20,
  info: {
    city: "beijing",
    a: {
      b: {
        c: {
          d: {
            e: 100,
          },
        },
      },
    },
  },
};

const proxyData = reactive(data);
