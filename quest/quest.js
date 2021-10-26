import quests from '../data/quest-data.js';
import { findById } from '../utils.js';

// const questDetail = document.getElementById('quest-detail');

const params = new URLSearchParams(document.location.search);
const questID = params.get('id');
const quest = findById(quests, questID);

const title = document.getElementById('title');
title.textContent = quest.title;
const description = document.getElementById('description');
description.textContent = quest.description;
const img = document.getElementById('image');
img.src = quest.image;

const questChoices = document.getElementById('quest-choices');
for (let choice of quests.choices) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.vaue = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent('Choose my choice');
questChoices.append(button);

questChoices.addEventListener('submit', (e) => {
    e.preventDefault();
    
});

