// let fight1;
// let fight2;
// let fight3;
// let rematch;

const fighterProfiles = [
    {
        fighterName: 'Dustin Poirier',
        win: true,
        loose: false,
        draw: false
    },
    {  
        fighterName: 'Nate Diaz',
        win: false,
        loose: true,
        draw: false
    },
    {  
        fighterName: 'Justin Gaethje',
        win: true,
        loose: false,
        draw: false
    },
    {  
        fighterName: 'Michael Chandler',
        win: false,
        loose: false,
        draw: true
    }  
]

const fighterNames = []

// fighterProfiles.push();

// const authorization = {
//     login: 'AlinaD',
//     password: 112233
// };

// const authorizationChanges = false;
// if (authorizationChanges === true) {
//     console.log('Sorry, you can not make changes.')
// }


for (let profile of fighterProfiles) {
    fighterNames.push(profile.fighterName);
}

