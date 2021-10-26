import quests from '../data/quest-data.js';
import { findById, setUser, getUser } from '../common/utils.js';

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

    // const userChoice = document.querySelector('input[type=radio]:checked');
    // const choice = findById(quests.choices, userChoice.value);
    const user = getUser();

    setUser(user);

});

