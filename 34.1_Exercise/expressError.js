class ExpressError extends Error {
  constructor(msg, status) {
    super(); //have to call this because we are extending Error which is the parent class
    this.msg = msg;
    this.status = status;
    console.error(this.stack);
  }
}

module.exports = ExpressError;
