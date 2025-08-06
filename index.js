
const pets = [
    {
        name: 'Noodles',
        species: 'cat',
        age: 7,
        gender: 'male',
        vetVisits: [
            {
                date: 'February 7, 2023',
                type: 'Non-emergency',
                notes: 'Saw Noodles for annual check-up.'
            },
            {
                date: 'October 15, 2024',
                type: 'Emergency',
                notes: 'Noodles ate a plant poisonous to cats.'
            }
        ]
    },
    {
        name: 'Fleur',
        species: 'cat',
        age: 13,
        gender: 'female',
        vetVisits: [
            {
                date: "July 20, 2023",
                type: 'Non-emergency',
                notes: 'Saw Fleur for annual check-up.'
            },
            {
                date: 'July 20, 2024',
                type: 'Non-emergency',
                notes: 'Saw Fleur for annual check-up and administered vaccinations.'
            }
        ]
    },
    {
        name: 'Bernie',
        species: 'dog',
        age: 6,
        gender: 'male',
        vetVisits: [
            {
                date: "September 5, 2024",
                type: 'Emergency',
                notes: 'Bernie was brought in for excessive vomitting.'
            }
        ]
    },
    {
        name: 'Bart',
        species: 'dog',
        age: 3,
        gender: 'male',
        vetVisits: [
            {
                date: 'April 18, 2021',
                type: 'Non-emergency',
                notes: "Performed Bart's neutering."
            },
            {
                date: 'November, 22, 2022',
                type: 'Non-emergency',
                notes: 'Administered vaccinations.'
            }
        ]
    }
];

/*
Use the native filter method to return a new array of only the pets that are dogs
that have had only one vet vist.
*/

const dogsWithOneVisit = pets.filter((pet) => pet.species === "dog" && pet.vetVisits.length === 1);



/*
Use the native filter method to return a new array of only the pets that have had
vet vists marked as 'Emergency'.
*/

const pets911 = pets.filter((pet) => {
    for (let i = 0; i < pet.vetVisits.length; i++){
        if (pet.vetVisits[i].type === "Emergency"){
            return true;
        }
    }
});

/*
Use the map method to return a new array of strings containing each pet's name, age, 
and gender.

example output =>
[ 
    "Noodles - male - 7 years old",
    "Fleur - female - 13 years old",
    "Bernie - male - 6 years old",
    "Bart - male - 3 years old"
]
*/

const petBio = pets.map((pet) => {
    return `${pet.name} - ${pet.gender} - ${pet.age} years old`;
})


/*
Use the native reduce method to return a string of each pet's name followed by the
date of their most recent vet vist (assume the most recent is the visit that is LAST
in the array).

example output =>
"Noodles - last visit: October 15, 2024\nFleur - last visit: July 20, 2024\nBernie - last visit: September 5, 2024\nBart - last visit: November 22, 2022"
*/

const recentVisit = pets.reduce((acc, c) => {
   return acc += `${c.name} - last visit ${c.vetVisits[c.vetVisits.length-1].date}\n`
}, "");
console.log(recentVisit);