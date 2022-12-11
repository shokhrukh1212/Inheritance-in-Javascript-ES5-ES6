class IntBuilder{
    constructor(n = 0) {
        this.n = n
    }
    plus(...n) {
        this.n += n.reduce((total, current) => total + current);
        return this;
    }
    minus(...n) {
        this.n -= n.reduce((total, current) => total + current);
        return this;
    }
    multiply(n) {
        this.n *= n;
        return this;
    }
    divide(n) {
        this.n /= n;
        return this;
    }
    mod(n) {
        this.n %= n;
        return this;
    }
    get() {
        return this.n;
    }
};

let intBuilder = new IntBuilder(10);
const result = intBuilder
  .plus(2, 3, 2)                     // 17;
  .minus(1, 2)                       // 14;
  .multiply(2)                       // 28;
  .divide(4)                         // 7;
  .mod(3)                            // 1;
  .get();
  console.log(result)