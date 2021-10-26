# In-class Adventure Quest Plan

## Home Page
* HTML Elements
- [x] Text input for user name
- [x] Radio buttons for user race
* Events
- [x] On form submit:
    - [x] Generate a user object using form data (generateUser)
    - [x] Store user data in localStorage (setUser)
    - [x] Redirect to the map page

## Map Page 
* HTML Elements
- [x] List of links for each quest (generated from quest-data)
    - [ ] Link should NOT be clickable if the user has already completed the quest
    - [x] Link should contain a URL search parameter containing the quest ID

* Events
- [ ] On page load -- TBD: Game logic

## Quest Detail Page
* HTML Elements
- [x] Title
- [x] Description
- [x] Quest Image
- [ ] Quest choices (radio buttons)

* Events 
- [x] On page load, get the quest ID from the URLSearchParam and load the quest data onto the page
- [ ] On form submit
     - [ ] Update the user data
     - [ ] Redirect to the map page