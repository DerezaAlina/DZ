const fighterProfile = [    
    {
        fullName: 'Konrad (Notorious) McGregor',
        age: 30
    },    
    {
        fullName: 'Dustin Poirier',
        age: 25
    },
    {
        fullName: 'Nate Diaz',
        age: 31
    },
    {
        fullName: 'Justin Gaethje',
        age: 28
    },
    {
        fullName: 'Michael Chandler',
        age: 27
    }
];

fighterProfile.sort((a, b) => a.age > b.age ? 1 : -1);

console.log('Самый младший спортсмен', fighterProfile[0]);
console.log('Самый старший спортсмен', fighterProfile[fighterProfile.length - 1]);