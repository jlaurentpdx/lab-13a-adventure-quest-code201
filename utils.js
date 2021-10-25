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
    return localStorage.setItem('USER', JSON.stringify(userObject));
}