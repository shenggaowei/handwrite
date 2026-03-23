class _Promise {
  constructor(fn) {
    fn(this.resolve, this.reject);
  }
  state = "pending";
  resolveData = null;
  rejectData = null;
  resolveFn = null;
  rejectFn = null;

  resolve = (data) => {
    this.state = "fulfilled";
    this.resolveData = data;
  };

  reject = (error) => {
    this.state = "rejected";
    this.rejectData = error;
  };

  then = (resolveFn) => {
    this.resolveFn = resolveFn;
    if (this.state === "fulfilled") {
      queueMicrotask(() => {
        resolveFn(this.resolveData);
      })
    }
    return this;
  };

  catch = (rejectFn) => {
    this.rejectFn = rejectFn;
    if (this.state === "rejected") {
      queueMicrotask(() => {
        rejectFn(this.rejectData);
      });
    }
    return this;
  };
}

console.log("start");
let p = new _Promise((resolve) => {
  resolve("success");
})
p.then((data) => {
  console.log(data);
});
console.log("end");

module.exports = _Promise;
