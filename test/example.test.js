// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser } from '../utils.js';

const test = QUnit.test;

test('generateUser should return an object including user input from a form', (expect) => {
    const expected = {
        completed: {},
        gold: 0,
        hp: 35,
        name: 'Merlin',
        race: 'Wizard'
    };

    const formData = new FormData();
    formData.set('name', 'Merlin');
    formData.set('race', 'Wizard');
    
    const actual = generateUser(formData);

    expect.deepEqual(actual, expected);
});

// test('', (expect) => {
//     const expected = true;
    
//     const actual = true;

//     expect.equal(actual, expected);
// });