class Base {
    constructor(value) {
        this.value = value;
    }
    plus(...value) {
        this.value += value.reduce((total, current) => total + current);
        return this;
    }
    log() {
        console.log(`Current value -> ${this.value}`)
    }
    get() {
        return this.value;
    }
}

//extending to ES6 class to our Base ES6 class
class IntBuilder extends Base{
    constructor(value = 0) {
        super(value);
    }
    minus(...value) {
        this.value = value.reduce((total, current) => total - current, this.value);
        this.log();
        return this;
    }
    multiply(value) {
        this.value *= value;
        this.log(); 
        return this;
    }
    divide(value) {
        this.value /= value;
        this.log();
        return this;
    }
    mod(value) {
        this.value %= value;
        this.log();
        return this;
    }
    static random(from, to) {
        this.log();
        return Math.floor(Math.random() * (to - from) + from);
    }
};





//extending to ES5 class to our Base ES6 class
function StringBuilder(value) {
    Object.assign(this, new Base(value || ''));
}

StringBuilder.prototype.plus = function(...value) {
    this.value = this.value.concat(...value);
    return this;
}

StringBuilder.prototype.minus = function(n) {
    this.value = this.value.slice(0, -n);
    return this;
}

StringBuilder.prototype.multiply = function(int) {
    const a = this.value;
    for(let i=0; i<int-1; i++) {
        this.value += a;
    }
    return this;
}

StringBuilder.prototype.divide = function(n) {
    const k = Math.floor(this.value.length / n);
    this.value = this.value.slice(0, k);
    return this;
}

StringBuilder.prototype.remove = function(str) {
    let freeStr = '';
    for(let i=0; i<this.value.length; i++) {
        if(this.value[i] !== str)
        freeStr += this.value[i]
    }
    this.value = freeStr;
    return this;
}

StringBuilder.prototype.sub = function(from, n) {
    this.value = this.value.substring(from, n+1);
    return this;
}
StringBuilder.prototype.get = function() {
    StringBuilder.prototype.__proto__.get.call(this);
    return this.value;
}



let intBuilder = new IntBuilder(10); // 10;
const builder1 = intBuilder
  .plus(2, 3, 2)                     // 17;
  .minus(1, 2)                      // 14;
  .multiply(2)                       // 28;
  .divide(4)                         // 7;
  .mod(3)                            // 1;
  .get();
  console.log(builder1); // 1



  let strBuilder = new StringBuilder('Hello'); // 'Hello';
  StringBuilder.prototype = Object.create(Base.prototype);
  StringBuilder.prototype.constructor = StringBuilder;
  StringBuilder.superclass = Base;
  let builder2 = strBuilder
    .plus(' all', '!')                         // 'Hello all!'
    .minus(4)                                  // 'Hello '
    .multiply(3)                               // 'Hello Hello Hello '
    .divide(4)                                 // 'Hell';
    .remove('l')                               // 'He';
    .sub(1,1)                                  // 'e';
    .get();
console.log(builder2) // 'e'