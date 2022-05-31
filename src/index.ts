let x: number = 12;

// to create the tsconfig.json we use tsc --init
// use tsc --watch to make changes automatique 
// basic types

let nbr : number = 11;
let nom: string = "walid";
let bool :boolean = true;
let y:any = true ; // it can be anything 

// arrays and tuples 
        // arrays 
            let nbrs : number[] = [1,2,3,4,5]
            let anys :any[] = [1,'test',true] // array of any   

        // tuple
            let tpl:[number ,string, boolean] = [1,"walid",true];
        // tuple array 
            let employees : [number, string] [] ;
            
            employees = [
                [1,"person1"],
                [2,"gri3a"]
                        ];

// unions and enums 
    // unions 
    let z: string | number = 1 ; // it can be a string or a number 

    // enums 
    enum animals{
        lion = "lion",
        tiger = "tiger",
        leopard = "leopard",
    }

    enum animalsV2{
        lion,
        tiger,
        leopard
    }
    console.log(animals.leopard)
    console.log(animalsV2.leopard) // use node index 

// objects 

type user = {
    id: number,
    name: string 
}

const employe1: user = {
    id: 1,
    name :"walid",
}

// type assertion 

let sId:any = 1 ;
let studentId = <number>sId 
let studentIdV2 = sId as number

// functions 

function sum(x:number , y:number ):number //return type (ex void )
{
    return x+y ;
}


// interfaces 

    // the difference between type and interface is tha interface dont use unions 

interface userInterface {
    readonly id: number ,  // readonly makes it impossible to change the value of id
    name :string,
    age ?:number ,  // ? makes it mandatory 
}

let user :userInterface = {
      id : 2 ,
      name :"bomoh"     
}

// function interface 
interface mathfct {
    (x:number ,y :number):number
}

let sumV2 :mathfct =(x:number,y:number):number => x+y;
        
// classes  / data modifiers (public / private / protected ) / implement interface in classes 

interface studentInterface {
    id :number ,
    name : string,
    register():string,
}


class Student implements studentInterface{  
     id: number 
     name :string 

    constructor(id : number , name :string)
    {
        this.id = id ,
        this.name = name
    }

    // methods 
    register()
    {
        return `${this.name} is registered`;
    }
}

let student1 = new Student(1 ,"walid");

console.log(student1.register());

// inheritance 

class GiStudent extends Student {
    programmingLanguage :string ;

    constructor(id: number ,name :string ,programmingLanguage :string)
    {
        super(id,name);
        this.programmingLanguage = programmingLanguage;
    }
}

const giStudent1 = new GiStudent(3,"bora","python");
console.log( giStudent1.register() );

// generics 

function getArray<T>(arr :T[]) :T[]
{
    return new Array().concat(arr);
}

let nbrArray = getArray<number>([1,2,3,4,5]);
let strArray = getArray<string>(["a","b","c"]);

nbrArray.push(1)

