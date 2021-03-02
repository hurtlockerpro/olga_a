
export class Colors{
    private name:string
    private code:string

    constructor(name:string, code:string)
    {
        this.name = name
        this.code = code
    }

    createBtn():string{
        return '<button style="background-color:{color}"></button>'
    }

    changeBtnColor():string{
        return this.createBtn().replace("{color}", this.code)
    }

    showButton():string{
        return this.changeBtnColor()
    }
}