// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser, setUser, getUser, scoreQuest } from '../common/utils.js';

const test = QUnit.test;

test('generateUser should return an object including user input from a form', (expect) => {
    const expected = 
    {
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

test('scoreQuest should update userObject keys hp, gold, completed', (expect) => {
    const userObject = 
        {
            completed: {},
            gold: 0,
            hp: 35,
            name: 'Arthur',
            race: 'Knight'
        };

    const choiceObject = {
        id: 'fight',
        description: 'To Fisticuffs With It All!',
        result: `
            You do what you've always done. It's the only thing you know.
            You fight - poorly. You take 35 damage, but managed to rip 
            open the brawler's pockets on the way down, scoring 15 gold. 
        `,
        hp: -35,
        gold: 15
    };

    const questID = 'tavern';
    
    scoreQuest(choiceObject, questID, userObject);

    expect.equal(userObject.hp, 0);
    expect.equal(userObject.gold, 15);
    expect.equal(userObject.completed[questID], true);
});