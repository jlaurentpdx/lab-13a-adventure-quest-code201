import { generateUser, setUser } from './common/utils.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userForm);
    const userObj = generateUser(formData); 

    setUser(userObj);

    window.location.replace('./map');
});