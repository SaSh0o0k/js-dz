//TODO  2.Переписать код используя синтаксис class.

class MyArray extends Array {
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const lastElement = this[this.length - 1];
        this.length--;
        return lastElement;
    }

    map(callback) {
        const newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(callback(this[i], i, this));
        }
        return newArray;
    }

    every(callback) {
        for (let i = 0; i < this.length; i++) {
            if (!callback(this[i], i, this)) {
                return false;
            }
        }
        return true;
    }

    some(callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                return true;
            }
        }
        return false;
    }

    reduce(callback, initialValue) {
        let accumulator = initialValue !== undefined ? initialValue : this[0];
        const startIndex = initialValue !== undefined ? 0 : 1;
        for (let i = startIndex; i < this.length; i++) {
            accumulator = callback(accumulator, this[i], i, this);
        }
        return accumulator;
    }
}

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
