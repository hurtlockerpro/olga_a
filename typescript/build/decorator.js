var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logger(constructorFn) {
    console.log(constructorFn);
}
function checkVariable(flag) {
    return flag == true ? logger : null;
}
function additionalFunctionality(constructorFn) {
    constructorFn.prototype.MyNewDiv = function () {
        const myDiv = document.createElement('div');
        myDiv.classList.add('MyNewClass');
        myDiv.innerHTML = JSON.stringify(this);
        document.body.appendChild(myDiv);
    };
}
let User = class User {
    constructor(firstname, age) {
        this.firstname = firstname;
        this.age = age;
        console.log('new user created');
    }
};
User = __decorate([
    additionalFunctionality
], User);
let usr = new User('Vladimr', 1);
usr.MyNewDiv();
