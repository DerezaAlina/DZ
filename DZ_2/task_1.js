const authorization1 = {
    login: 'AlinaD',
    password: 112233
};

const authorization2 = {};
authorization2.login = 'AlinaD';
authorization2.password = 112233;

const authorization3 = {
    login: 'Alina'
};

Object.defineProperty(authorization3, 'login', { value: 'AlinaD' });
authorization3['password'] = 112233;

const authorization4 = new Object();
authorization4.login = 'AlinaD';
authorization4.password = 112233;

console.log('Authorization1:', authorization1);
console.log('Authorization2:', authorization2);
console.log('Authorization3:', authorization3);
console.log('Authorization4:', authorization4);

const loginArray1 = [
    'Alina',
    'Karina',
    'Marina',
    'Polina',
    'Darina'
];

const loginArray2 = [];
loginArray2[0] = 'Alina';
loginArray2.push('Karina');
loginArray2[2] = 'Marina';
loginArray2.push('Polina');
loginArray2[4] = 'Darina';

const loginArray3 = [...loginArray1];

const loginArray4 = new Array('Alina', 'Karina', 'Marina', 'Polina', 'Darina');

console.log('loginArray1:', loginArray1);
console.log('loginArray2:', loginArray2);
console.log('loginArray3:', loginArray3);
console.log('loginArray4:', loginArray4);