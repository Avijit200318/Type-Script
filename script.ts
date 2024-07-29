// intersection types

let a: number & string;
// so here it shows the the type of a is never


type City = {
    name: string,
    population: number,
}

type Planet = {
    name: string,
    cities: number,
}

type citiesInPlanet = City & Planet;
let value: citiesInPlanet = {
    name: "Kolkata",
    population: 10000,
    cities: 12
}

// if one of the value was missing then it shows an error.