# In-class Adventure Quest Plan

## Home Page
* HTML Elements
- [ ] Text input for user name
- [ ] Radio buttons for user race
* Events
- [ ] On form submit:
    - [ ] Generate a user object using form data (generateUser)
    - [ ] Store user data in localStorage (setUser)
    - [ ] Redirect to the map page

## Map Page 
* HTML Elements
- [ ] List of links for each quest (generated from quest-data)
    - [ ] Link should NOT be clickable if the user has already completed the quest
    - [ ] Link should contain a URL search parameter containing the quest ID

* Events
- [ ] On page load -- TBD: Game logic

## Quest Detail Page
* HTML Elements
- [ ] Title
- [ ] Description
- [ ] Quest Image
- [ ] Quest choices (radio buttons)

* Events 
- [ ] On page load, get the quest ID from the URLSearchParam and load the quest data onto the page
- [ ] On form submit
     - [ ] Update the user data
     - [ ] Redirect to the map page