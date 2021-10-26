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
    return localStorage.setItem('USER', JSON.stringify(userObject));
}