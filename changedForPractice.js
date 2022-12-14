function StringBuilder(str = '') {
    this.str = str;
}

StringBuilder.prototype.plus = function(...str) {
    this.str += this.str.concat(...str);
    return this;
}

StringBuilder.prototype.minus = function(n) {
    this.str = this.str.slice(0, this.str.length - n);
    return this;
}

StringBuilder.prototype.multiply = function(int) {
    const a = this.str;
    for(let i=0; i<int; i++) {
        this.str += a;
    }
    return this;
}

StringBuilder.prototype.divide = function(n) {
    const k = Math.floor(this.str.length / n);
    this.str = this.str.slice(0, k);
    return this;
}

StringBuilder.prototype.remove = function(str) {
    for(let i=0; i<this.str.length; i++) {
        if(this.str[i] == str) {
            this.str[i] = '';
        }
    }
    return this;
}

StringBuilder.prototype.sub = function(from, n) {
    this.str = this.str.substr(from, n);
    return this;
}

StringBuilder.prototype.get = function() {
    return this.str;
}


let strBuilder = new StringBuilder('Hello'); // 'Hello';
const check = strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1,1)                                  // 'e';
  .get(); 

  console.log(check)

