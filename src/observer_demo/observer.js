/**
 * defineproperty 代理缺点
 * 1. 深度需要一次性递归监听。（层级特别深的时候会明显感觉到卡顿）
 * 2. 无法监听到新增加或者删除的属性，需要通过 $set 或 $delete 实现。
 * 3. 无法原生监听数组，需要特殊处理。
 */
const updateView = () => {
  console.log("视图更新了");
};

const arrayOldProto = Array.prototype;
const arrayProxy = Object.create(arrayOldProto);
const proxyArrayMethods = ["push", "pop", "shift", "unshift", "splice"];

// 劫持数组的方法
proxyArrayMethods.forEach(function (methodName) {
  arrayProxy[methodName] = function () {
    updateView();
    arrayOldProto[methodName].call(this, ...arguments);
  };
});

const addProxyToProperty = (target, key, value) => {
  observer(value);

  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (value !== newValue) {
        observer(newValue);
        value = newValue;
        updateView();
      }
    },
  });
};

// 添加响应性
const observer = (data) => {
  if (typeof data !== "object" || data === null) {
    return data;
  }

  // 修改劫持数组的原型方法
  if (Array.isArray(data)) {
    //data.prototype = arrayProxy;
    data.__proto__ = arrayProxy;
  }

  // 递归便利数组或者对象的 key， 给值添加响应性
  for (let key in data) {
    addProxyToProperty(data, key, data[key]);
  }
};

const data = {
  name: "升高",
  age: 18,
  info: {
    sex: "男",
    extra: {
      city: "山东",
    },
  },
  list: [1, 2, 3],
};

observer(data);

data.name = "阿高"; // 视图更新
data.list.push(0); // 视图更新
data.aa = "33"; // 视图无变化
data.info.extra.city = "临沂"; // 视图更新
