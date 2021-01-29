

class Calc {
    calc;
    btns = [];
    #input;
    #disallowDoubles = ['/', '*', '-', '+']

    constructor(id){
        // 1 get container
        this.calc = document.getElementById(id)
        // 2 get all buttons
        this.btns = this.calc.querySelectorAll('.btn-primary')

        // 3 link events
        this.linkToEventListener() 

        // 4 get input formula
        this.#input = this.calc.querySelector('input[name="formula"]')

        this.linkEventListenerToInput()

    }

    linkToEventListener()
    {
        this.btns.forEach(btn => {
            btn.addEventListener('click', event => {
                //console.log('clicked')
                console.log(btn.innerText)
                
                if (btn.innerText == "="){
                    this.getResult()
                } else if (btn.innerText == "CE"){
                    this.empty()
                } else {
                    if (this.isDisallowedButton(this.#input.value, btn.innerText) == false)
                    {
                        this.#input.value += btn.innerText
                    } else {
                        console.log(btn.innerText, ' doubles not allowed!')
                    }
                }

            })
        })
    }

    getResult(){
        this.#input.value = eval(this.#input.value)
    }

    empty(){
        this.#input.value = ''
    }

    isDisallowedButton(formula, currentSymbol){
        if (this.#disallowDoubles.includes(currentSymbol))
        {
            let f = formula.toString().trim()
            let previousSymbol = f.substring(f.length - 1, f.length)
            if (previousSymbol == currentSymbol) return true
        }
        return false
    }

    linkEventListenerToInput(){
        this.#input.addEventListener('keydown', event => {
            console.log('keydown', 'code = ', event.keyCode, ', key = ', event.key)
            this.isKeyboardNumberTyped(event)
        })
        /*
        this.#input.addEventListener('keypress', event => {
            console.log('keypress', 'code = ', event.keyCode, ', key = ', event.key)
        })
        this.#input.addEventListener('keyup', event => {
            console.log('keyup', 'code = ', event.keyCode, ', key = ', event.key)
        }) */
    }

    isKeyboardNumberTyped(event){
        //48-57
        if (event.keyCode == 13)
        {
            this.getResult()
            event.preventDefault()
        } else if ((event.keyCode >= 48 && event.keyCode <= 57) ||
            (event.keyCode >= 96 && event.keyCode <= 105) || 
            this.#disallowDoubles.includes(event.key)){
            return true;
        } else {
            event.preventDefault()
        }
    }
}


let calc = new Calc('container')

console.log('Here')