
let a:string = "Hello typescript"

//a = 10
console.log(a)

interface IPerson {
	name: string;
	age?: number;
    //data:string[];
    readonly x?:number;
    getFullName(lastname:string):string;
}

enum Months { January = 8, February = 6, March = 4}

class Test implements IPerson{
    
    name:string = "Vladimir"
    

    public result:string = ''
    private result2:number = 0
    private arr:number[] = []
    private person:IPerson = {
        name:'',
        age:0,
        getFullName: function(lastname:string):string{
            return ' Vladimir ' + lastname;
        }
        //let v = (event) => {}
    }
    #Months = { January:8, February:6, March:4}

    public m:Months = Months.February
  
    /*
    public arr2:Array<T>[] = []

    arr2:string
    arr2:number
    */


    constructor(x:number){
        this.result2 = x
        //this.arr[1] = 'test'
    }

    getFullName(lastname:string):string{
        return ' Vladimir ' + lastname;
    }

    multiply(x:number, y:number):string{
        return 'result: ' + (x * y) 
    }


    loggingIdentity<T>(arg: T[], x:number): T[] {
        console.log(arg.length);
        if (x > 6)
        {
            return arg;
        }

        this.person.name = 'vladimir'
        console.log('my name is: ' + this.person.getFullName("Kjahrenov"))

        return arg
    }
}

let cls = new Test(1)
console.log(typeof cls.loggingIdentity<number>([1,1,2,2,], 1))
