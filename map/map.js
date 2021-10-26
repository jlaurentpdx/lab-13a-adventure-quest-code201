import quests from '../data/quest-data.js';
import { getUser } from '../common/utils.js';

const mapLinks = document.getElementById('map-links');
const user = getUser();

for (let quest of quests) {

    if (user.completed[quest.id]) {
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

function displaySpan(quest) {
    const span = document.createElement('span');
    span.textContent = quest.title;

    mapLinks.appendChild(span);
}

function displayLink(quest) {
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}
