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

