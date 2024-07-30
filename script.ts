// difference between type and interface

// 1.
type snakhya= number;

interface Humen{
    name: string,
}

// 2
// type name = string;
// type name = number;

// thsi give me an error

interface Student{
    name: string,
}

interface Student{
    number: 38758347,
}

// this didnot give us any error the two Student merge

interface Food{
    name: string,
    price: number,
}

interface MithaFood extends Food{
    test: string,
}

function getMithaFood(food: MithaFood)
{
    // food.  then we get here name, price and test.
}