// promise 即状态机
const EventEmitter = require("node:events");
const util = require("node:util");

const _promise = function () {
  EventEmitter.call(this);
};

util.inherits(_promise, EventEmitter);

// then 中将回调函数添加到事件队列中
_promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled === "function") {
    // 利用 once 方法，保证 onFulfilled 只会被调用一次
    this.once("success", onFulfilled);
  }

  if (typeof onRejected === "function") {
    // 利用 once 方法，保证 onRejected 只会被调用一次
    this.once("error", onRejected);
  }
  return this;
};

// catch 方法，用于捕获错误
_promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

// 触发执行这些回调函数的地方，延迟对象
const Deferred = function () {
  this.state = "unfulfilled";
  this.promise = new _promise();
};

Deferred.prototype.resolve = function (obj) {
  this.state = "fulfilled";
  this.promise.emit("success", obj);
};

Deferred.prototype.reject = function (obj) {
  this.state = "failed";
  this.promise.emit("error", obj);
};

module.exports.Deferred = Deferred;
