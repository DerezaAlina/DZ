let titleProfileYear;
let fighterName;
let wld;
let age;
let division;

const fighterMcGregorInformation2022 = {
    titleProfileYear: '========UFC Fighter Profile 2022========',
    fighterName: 'Konrad (Notorious) McGregor',
    wld: '27-1-0 (W-L-D)',
    age: 'Age: 30',
    division: 'Division: lightweight'
}

console.log(Object.values(fighterMcGregorInformation2022));

// Level 2

const fighterMcGregorInformation2023 = {...fighterMcGregorInformation2022};
fighterMcGregorInformation2023.titleProfileYear = '========MMA Fighter Profile 2023========';
fighterMcGregorInformation2023.age = 'Age: 31';
fighterMcGregorInformation2023.division = 'Division: middleweight'

console.log(Object.values(fighterMcGregorInformation2023));