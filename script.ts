// type aliases

// premetive type aliases
type sankhya = number;
let b: sankhya;
    // here we created a type named sankhya.


// object type aliases
type Humen = {
    name: string,
    phone: number,
    email: string,
}

let a: Humen = {
    name: "any name",
    phone: 1234,
    email: "any@gmail.com",
}

// --------------

type Age = string | number;

let d = 2;