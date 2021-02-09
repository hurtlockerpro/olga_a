"use strict";
var _Months;
let a = "Hello typescript";
console.log(a);
var Months;
(function (Months) {
    Months[Months["January"] = 8] = "January";
    Months[Months["February"] = 6] = "February";
    Months[Months["March"] = 4] = "March";
})(Months || (Months = {}));
class Test {
    constructor(x) {
        this.result = '';
        this.result2 = 0;
        this.arr = [];
        this.person = {
            name: '',
            age: 0,
            getFullName: function (lastname) {
                return ' Vladimir ' + lastname;
            }
        };
        _Months.set(this, { January: 8, February: 6, March: 4 });
        this.m = Months.February;
        this.result2 = x;
    }
    multiply(x, y) {
        return 'result: ' + (x * y);
    }
    loggingIdentity(arg, x) {
        console.log(arg.length);
        if (x > 6) {
            return arg;
        }
        this.person.name = 'vladimir';
        console.log('my name is: ' + this.person.getFullName("Kjahrenov"));
        return arg;
    }
}
_Months = new WeakMap();
let cls = new Test(1);
console.log(typeof cls.loggingIdentity([1, 1, 2, 2,], 1));
