const fighterProfile = [
    {
        fighterName: 'McGregor',
        wld: '27-1-0 (W-L-D)',
        division: 'Division: lightweight'
    }
]

console.log(fighterProfile)

fighterProfile.push(
    {
        fullName: 'Konrad (Notorious) McGregor',
        age: '30 years old'
    }
)

console.log(`${fighterProfile[1]['fullName']}. ${fighterProfile[1]['age']}.`);