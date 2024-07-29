// Type inference

let a = 12;
// here we did not declear for a that it is a number but it automatically set it to see the value. This is called type inference.

let variable: string | null;
variable = null;
variable = "hello";
// so here we can decleared the type of the variable is string or null;

let c: string | number;
c = "12";
// now if we write c.  then it show us all the functions which is common among string and number. But if we want to see all the functions for string then-

if(typeof c === 'string'){
    // c.
}else if(typeof c=== 'number'){
    // c. so here it didnot shows all the number's methods because here clearly it find 'c' is a stirng but if werite it for a function then it work.
}

const anyFunction = (val : string | number): void => {
    if(typeof val === 'string'){
        // val. here it shows all the methods for stirng
    }else if(typeof val === 'number'){
        // val. here it shows all the methods for number
    }
}

anyFunction(c);