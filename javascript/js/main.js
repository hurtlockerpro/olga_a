
//var x = 10
//var x = 20

let x = 10

/*
const y = 55
y = 100
*/
/*
console.log("x = ", typeof x)

x = "hjfjhsdfg"

console.log("x = ", typeof x)

let x1 = Number(x)

console.log("x1 = ", typeof x1, x1) // NaN, 

let t = "33";
console.log("t = ", typeof t) // undefined

let x2 = parseInt(t)
console.log("x2 = ", typeof x2)

// null
let n = null
console.log("n = ", typeof n) // object => null

// parseFloat()

let a = []
let o = {}


console.log("o = ", typeof o)
console.log("a = ", typeof a)

function addNumbers(x, y){
    // logic 
    return x + y
}


addNumbers_2(5, 5)
// let result = n
console.log("n = ", n)

function addNumbers(x){
    return x + 25
}
let result = (x, y) => {
    // logic
    return x + y
}

console.log(result(5, 10))

function addNumbers_2(x, y){
    // logic 
    n = x + y
}


let arr = ["audi",  10, true, "bmw", "citroen"]

let obj = {
    key1:"value",
    key2:10,
    key3:true,
    key4:[
        "audi",
        "bmw",
        "citroen",
        {
            key211:"one 11 ",
            key221:"two 22"
        }
    ],
    key5:(x, y) => {
        // logic
        return x + y
    },
    key6:{
        key21:"one 44",
        key22:"two 55"
    }
}

// increment ++ 
// decrement -- 

for (let index = 0; index <= arr.length - 1; index++) 
{
    console.log("index = ", index, " value = ", arr[index]);
}
console.log("---------")

arr.forEach( (element123, iIndex, myArr) => {
    // logic
    console.log("index = ", iIndex, " value = ",  element123, myArr, arr);
    //console.log("value = ", element123);
});

// 
Object.entries(obj)
Object.keys(obj)
Object.values(obj)

console.log("entries = ", Object.entries(obj));
console.log("keys = ", Object.keys(obj));
console.log("values = ", Object.values(obj));

console.log("value (second level 1) : ", obj.key6.key21)

console.log("value (second level 2 ) : ", obj.key4)
console.log("value (second level 3) : ", obj.key4[3].key211)

let myObj = Object.entries(obj)
for (let index = 0; index < myObj.length; index++) {
    // first level
    //console.log("(obj) value = ", myObj[index][1])

    // 
    if (index == 3){
        let z = Object.entries(myObj[index][1])
        myObj[index][1].forEach(ele => {
            console.log("(obj 1-1) value = ", ele)    
            if (typeof ele == "object")
            {
                console.log("(obj 1-2) elem value = ", ele.key211)    
            }
        })
        
    }
}

Object.entries(obj).forEach( elem => {
    console.log("(obj 1-3) elem value = ", elem[1]) 
})
*/

let td = ''
let tr = ''
let table = ''
let th = ''

for (let row = 1; row <= 9; row++) {   
    td = '' 
    for (let col = 1; col <= 9; col++) {
        //console.log("row = ", row, "col = ", col, "result = ", row * col ) 
        if (col == 1) td += `<th scope="row">${ row }</th>`
        if (row == 1) th += `<th scope="col">${ col }</th>`
        td += `<td>${ row * col }</td>`
    }
    if (row == 1) tr += `<tr><th></th>${ th }</tr>`
    tr += `<tr class="${ row % 2 ? "odd" : "even" }">${ td }</tr>`
}
table = `<table class="table table-striped">${ tr }</table>`

console.log(table)

//document.getElementById("box").innerHTML = "<b>Hello World !</b>"
//document.getElementById("box").innerHTML = table


///////////////////////////


function generateA(href, title){
    // <a href="#">title</a>
    let element = document.createElement('a');
    element.href = href
    element.title = title
    element.textContent = title
    //element.style.backgroundColor = 'red'

    return element
    //return element.outerHTML
}

let aa = generateA('#', 'Home')
//aa.style.backgroundColor = 'red'
console.log(aa)

let items = []
// 1
function showAlert(){
    alert('ok')    
}

let btn = document.querySelector('button[type="button"]')
//let btn = document.querySelector('a[href="home.hmtl"]')
btn.addEventListener('click', (event) => {
    //console.log('clicked !!! ')
    //console.log(event)
    //event.preventDefault() //

    console.log("altKey = ", event.altKey)
    //event.altKey = false
    // ...
    addItem()
    showItems()
    
})

function addItem(){
    let input = document.querySelector('input[name="item"]')
    let a = generateA('#', input.value)
    items.push(a.outerHTML)
}

function showItems(){
    let box = document.querySelector('#items')
    box.innerHTML = items.join(' | ')
}



