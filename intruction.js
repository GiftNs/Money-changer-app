// In this js file i will write all knowledge i know about javascript and i will use it as a reference when i forget or get stuck

// variable 
let word = "dream"
var number = 100
const dontChange = 'why change'

//operators

// addition : +
// subtraction: -
// multiplication: *
// division: /
// assignement: =
// strict equality: ===
// not: !
// Does-not-equal : !== 

// Conditionals 

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }

//functions 
function functionName(argument) {
    // Code
    return 
}
//example
function multiplication(num1, num2) {
    let result = num1 * num2
    return result
}

//Object 
let monPersonnage = {
    nom: "Wayne",
    prenom: "Bruce",
    age: 35,
    couleurPreferee: "noir",
    hobbies: "sortir la nuit"
    }
//to add in this object
monPersonnage.vehiculePrefere = "Batmobile"
//you can access on a object value by
const nomDeMonPersonnage = monPersonnage.nom
console.log(nomDeMonPersonnage)// it will rutern 'wayne'

//array
const maCollectionDeFilms = ["Titanic", "Jurassic Park", "infinity wars"]
//you can stock variables too
const monFilmPrefere = "Titanic"
const monPremierFilm = "Le Seigneur des Anneaux"

const maCollectionDeFilms2 = [monFilmPrefere, monPremierFilm]

// maCollectionDeFilms vaut ["Titanic", "Le Seigneur des Anneaux"]
//you can access to your array elements by
console.log(maCollectionDeFilms[0])
//for knowing the length
console.log(maCollectionDeFilms.length)
//adding
maCollectionDeFilms.push("Spiderman no way home")
console.log(maCollectionDeFilms)
maCollectionDeFilms.pop()
console.log(maCollectionDeFilms)
