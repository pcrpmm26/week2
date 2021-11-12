let id: number = 5;
let myName: string = "Patchareeporn T";
let isPublished: boolean = true;
let x: any = "Hello";

console.log("id: " + typeof(id)+ " " + id)
console.log("myName: " + typeof(myName) + " " + myName)
console.log("isPublished: " + typeof(isPublished) + " " + isPublished)
console.log("x: " + typeof(x) + " " + x)

//String Template ${} ==> EL
// ใช้ quote แ Backtick ````````
let age: number = 19
console.log(`My name is ${myName}. I am ${age} years old`)


//Collection Types
let ids: number[];
ids = [1,2,3,4,5];

let arr: any[];
arr = [1,"2",3,true,3.5];

console.log(ids);
console.log(arr);

//Create an array to store your friend's name

/*let friend: string[];
friend = [" Poly"," Tan"," Fah"," Som"," Bas"]
 
console.log("ฉันชื่อ Pactreeporn นี่คือเพื่อนของฉัน ")

//ตัวแปรแบบ array ใน TS/JS จะมีเมธอดสำหรับสนลูป (iterate)
ids.forEach(friend => {
    console.log("เพื่อนของฉันชื่อ : " + friend)
});

let salary : number[] = [1000,2000,5000,10000];
let commission : number[];

salary.forEach((s) => {
    commission.push(s*0.1);
});

salary.forEach(function (s){

}); */

//Tuple ----> 1 record
let prod1: [number, string, string, number];
prod1 = [1, "Apple","Pack",100];

/*console.log(prod1[0]);
console.log(prod1[1]);
console.log(prod1[2]);
console.log(prod1[3]);*/

prod1.forEach(p=>{
    console.log(p);
});

/*let products = [];
products.push(prod1);
console.log(products);*/

let products : [number, string, string, number][]
products = [
    [1,"Grape","pcs",35],
    [2,"Banana","psc",15],
    [3,"Apple","psc",19],
    [4,"Orange","psc",12],
    [5,"Kiwi","psc",85]
];
products.forEach(p=>{
    console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]}`)
});

let students : [string, string, number, number, number][];

students = [
    ["1001", "kongpop", 20, 50, 0],
    ["1002", "Jakrit", 18, 42, 0],
    ["1003", "Chalermchai", 21, 49, 0],
    ["1004", "Chawanwit", 15, 35, 0],
    ["1005", "Thanakorn", 17, 31, 0]
];
students.forEach(s=>{
    s[4] += s[3]+s[2];
    console.log(`${s[0]} : ${s[1]}, Total : ${s[4]}`)
});

enum Direction1{
    Up=1,
    Down=3,
    Left=5,
    Right=7
}

enum Direction2{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
}

console.clear();
console.log(Direction1.Left);
console.log(Direction2.Down);

enum PaperSize{
    A4 = 1,
    A5 = 2,
    A6 = 3
}
enum Orientation{
    Portrait = 1,
    Landscape = 2
}

console.log(PaperSize);

// Difined Type (Object)
type Students = {
    id: number,
    name: String,
    tel: String,
    line_id?: String //optional -- nullable
}

let wasok: Students = {
    id: 101, name: "Wasok", tel: "999999", line_id: "www"
}
console.log(wasok.id);
//let wasok: Students;
//wasok.id = 101,
//wasok.name = "Wasok"
//wasok.tel = "0899999999"

//Type Assertion
let xx : any = false;

//xid ตั้งใจให้เป็น number อย่างเดียว
let xid = xx as number;
console.log(typeof(xid)); //1any , 2number

// Union Type
let sid : number | string
sid = 101;
console.clear();
console.log(typeof(sid));

sid = "555";
console.log(typeof(sid));

// function

//addNumber จะ return เป็น type อะไรได้บ้าง?
function addNumber(x: number,y: number): number{
    return x + y;
}
console.log(addNumber(1,3)); //output

function showlog(m: number | string): void{
    console.log(m);
}

showlog(123);
showlog("456");

//Interface function

interface MathFunc{
    (x: number, y: number) : number
}

const addNum : MathFunc = (x:number, y:number): number => { return x+y };
const subNum : MathFunc = (x:number, y:number): number => x - y ;

console.log(addNum(5,7));
console.log(subNum(5,7));

// Interface classes
interface Human{
    id: number,
    name: string,
    age: number,
    tel?: string,
    //func as a property
    move() : string,
    eat() : string
}

const student : Human = {
    id: 123,
    name: "Somchai",
    age: 30,
    tel: "0986458655",
    move: function() : string{
        return "Running";
    },
    eat: function() : string{
        return "rice";
    }
}

const grandMom : Human = {
    id: 9,
    name: "Pao",
    age: 60,
    move: function() : string{
        return "Crawling";
    },
    eat: function() : string{
        return "rice";
    }
}

const boxer : Human = {
    id: 5,
    name: "Bua Khao",
    age: 39,
    move: function() : string{
        return "walking";
    },
    eat: function() : string{
        return "5 food groups";
    }
}
//พัชรีภรณ์

console.log(student.move());
console.log(grandMom.move());
console.log(boxer.move());
console.log(boxer.eat());

//Class
class Driver implements Human{
    id:number;
    name:string;
    age:number;

    //arg-constructor
    constructor(id:number, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move(){
        return `${this.name} moves by driving.`;
    }
    eat(){
        return `${this.name} eats rice.`;
    }
}

console.clear();
const d1 = new Driver(101,"Jakrit",20);
console.log(d1.move());
console.log(d1.eat());