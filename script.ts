// constructor is a method in a class which strat first compare to others and initialize all the variables

class Pendrive{
    public company: string;
    // we dont have to write public by default it is set.

    constructor(name: string){
        this.company = name;
    }
}

let pen1 = new Pendrive("hp");
let pen2 = new Pendrive("asus");
console.log(pen1, pen2);

// 

class User{
    constructor(public name: string, public ph: number)
    {
        this.name = name;
        this.ph = ph;
        // so we dont need to declear at athe top if we just write pulic first inside the constructor.
    }
}