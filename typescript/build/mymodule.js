"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = void 0;
class Colors {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
    createBtn() {
        return '<button style="background-color:{color}"></button>';
    }
    changeBtnColor() {
        return this.createBtn().replace("{color}", this.code);
    }
    showButton() {
        return this.changeBtnColor();
    }
}
exports.Colors = Colors;
