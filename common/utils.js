import quests from '../data/quest-data.js';

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) 
            return item;
    }
}

export function generateUser(formData) {  
    return {
        completed: {},
        gold: 0,
        hp: 35,
        name: formData.get('name'),
        race: formData.get('race')
    };
}

export function setUser(userObject) {
    localStorage.setItem('USER', JSON.stringify(userObject));
}
export function getUser() {
    return JSON.parse(localStorage.getItem('USER'));
}

export function scoreQuest(choiceObject, questID, userObject) {
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;
    userObject.completed[questID] = true;
}

export function allQuestsComplete(userObject) {
    for (let quest of quests){
        if (!userObject.completed[quest.id]) return false;
    }
    return true;
}