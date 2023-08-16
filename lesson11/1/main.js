//TODO  1.Реализовать методы в классном массиве: pop, map, every, some
//TODO  **reduce.
//TODO  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array

function MyArray(...args) {
    this.length = 0;
    this.push(...args);
}

MyArray.prototype.push = function (...value) {
    for (const v of value) {
        this[this.length] = v;
        this.length++;
    }
};

MyArray.prototype.pop = function () {
    if (this.length === 0) {
        return undefined;
    }
    const lastElement = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastElement;
};

MyArray.prototype.map = function (callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
};

MyArray.prototype.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

MyArray.prototype.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

MyArray.prototype.reduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

//* Приклади

const myArray = new MyArray(1, 2, 3, 4, 5);
console.log(myArray);
console.log("");

console.log(myArray.pop());
console.log("");

const mapResult = myArray.map((item) => item * 2);
console.log(mapResult);
console.log("");

const everyResult = myArray.every((item) => item > 0);
console.log(everyResult);
console.log("");

const someResult = myArray.some((item) => item > 5);
console.log(someResult);
console.log("");

const reduceResult = myArray.reduce((accumulator, item) => accumulator + item, 0);
console.log(reduceResult);
