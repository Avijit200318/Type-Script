let arr2: [boolean, number, string] = [true, 1, "avijit"];

arr2.push(12);
// this create a loop and this is not show any error.

let a : any;
a = 12;
a = "23";

let b: unknown;
// when we did not sure what is the type of this variable. it is similar to any but have some difference.


// another type is never which is used for fucntion which did not return anything

const abcd = (): never => {
    while(true){
        console.log("running");
    }
}

// function abcd(): never{
//     while(true){
//         console.log("running");
//     }
// }

abcd();
// after the never type code didnot run
console.log("this is the end");
// this console.log did not run because of never type.

const sum = () : number => {
    return 1;
}
sum();

const ab = () : void => {
    console.log("hey");
}
ab();