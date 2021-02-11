function logger(constructorFn: Function){
    console.log(constructorFn)
}

function checkVariable(flag: boolean): any{
    return flag == true ? logger : null;
}

function additionalFunctionality(constructorFn: Function){
    constructorFn.prototype.MyNewDiv = function(){
        const myDiv = document.createElement('div')
        myDiv.classList.add('MyNewClass')
        myDiv.innerHTML = JSON.stringify(this)
        document.body.appendChild(myDiv)
    }
}


//@checkVariable(false)
@additionalFunctionality
class User{
    constructor(public firstname: string, public age: number){
        console.log('new user created')
    }
}


let usr = new User('Vladimr', 1);
//console.log(usr)
(<any>usr).MyNewDiv();
