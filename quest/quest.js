import quests from '../data/quest-data.js';
import { findById, setUser, getUser, scoreQuest } from '../common/utils.js';

const params = new URLSearchParams(document.location.search);
const questID = params.get('id'); // locate quest from search query
const quest = findById(quests, questID); // match questID to quests[id]

const title = document.getElementById('title');
title.textContent = quest.title;
const img = document.getElementById('image');
img.src = `../assets/${quest.image}`;
const description = document.getElementById('description');
description.textContent = quest.description;

const questChoices = document.getElementById('quest-choices');
for (let choice of quest.choices) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'Act!';
questChoices.append(button);

questChoices.addEventListener('submit', (e) => {
    e.preventDefault();

    const userChoice = document.querySelector('input[type=radio]:checked');
    const choiceObject = findById(quest.choices, userChoice.value);
    
    const user = getUser();

    scoreQuest(choiceObject, quest.id, user);
    setUser(user);

    const questDetails = document.getElementById('details');
    questDetails.classList.add('hidden');

    const questResults = document.getElementById('results');

    const resultDisplay = document.createElement('p');
    resultDisplay.textContent = choiceObject.result;

    const returnToMap = document.createElement('a');
    returnToMap.href = '../map';
    returnToMap.textContent = 'Return to Map';

    questResults.append(resultDisplay, returnToMap);

    questResults.classList.remove('hidden');

});

