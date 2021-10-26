// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser, setUser, getUser } from '../utils.js';

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

test('setUser should save USER to localStorage', (expect) => {
    localStorage.removeItem('USER');
    const userObject = 
    {
        completed: {},
        gold: 0,
        hp: 35,
        name: 'Arthur',
        race: 'Knight'
    };

    setUser(userObject);

    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, userObject);
});

test('getUser should retrieve USER from localStorage', (expect) => {
    const userObject = 
        {
            completed: {},
            gold: 0,
            hp: 35,
            name: 'Arthur',
            race: 'Knight'
        };
    
    setUser(userObject);

    const actual = getUser();

    expect.deepEqual(actual, userObject);
});