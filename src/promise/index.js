class _Promise {
  constructor(fn) {
    fn(this.resolve, this.reject);
  }
  state = "unfulfilled";
  resolveData = null;
  rejectData = null;
  resolveFn = null;
  rejectFn = null;
  resolve = (data) => {
    this.state = "fulfilled";
    this.resolveData = data;
    this.then(this.resolveFn);
  };
  reject = (error) => {
    this.state = "failed";
    this.rejectData = error;
    this.catch(this.rejectFn);
  };
  then = (resolveFn) => {
    this.resolveFn = resolveFn;
    if (this.state === "fulfilled") {
      resolveFn(this.resolveData);
    }
    return this;
  };
  catch = (rejectFn) => {
    this.rejectFn = rejectFn;
    if (this.state === "failed") {
      rejectFn(this.rejectData);
    }
    return this;
  };
}

module.exports = _Promise;
