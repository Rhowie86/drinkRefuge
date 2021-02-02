# drinkRefuge
### User Authentication
- **GIVEN** a user wants to log in or create a new account
- **WHEN** a user is not already logged in
- **THEN** a field for a user to log in, as well as a field for a user to register will render

### Viewing a master list of drinks
- **GIVEN** a user is logged in they see a list of drinks
- **WHEN** a user is viewing a master list they see all of the drinks user have created
- **THEN** that list will be displayed
- **AND** a user can change the view from all drinks to their own saved drinks

### Adding a drink
- **GIVEN** a user wants to add a drink recipe
- **WHEN** a user clicks on add a drink
- **THEN** a modal will appear with the following fields
1. drink name
2. ingreient
3. measurement
4. glassware
5. garnish
6. category

### Adding an ingredient
- **Given** a user wants to add an ingredient to the selction
- **WHEN** a user clicks the add an ingredient button
- **THEN** a modal will display with text input to add an ingredient to the list


### Viewing drink details
- **GIVEN** a user wants to view an individual drink recipe
- **WHEN** a user clicks on the name of the drink
- **THEN** the details of the selected drink will be displayed

### Sorting the drink recipe list
- **GIVEN** a user wants to sort the drink list by drink category
- **WHEN** a user selects a category
- **THEN** the list should only show drinks from selected category


### User's saved list
#### Adding an existing drink
- **GIVEN** a user wants to save a recipe to their list
- **WHEN** a user clicks the add drink button on a given drink recipe card
- **THEN** the drink recipe is added to that user's list of drinks

###

#### Deleting a drink
- **GIVEN** a user wants to delete a drink recipe from their own list
- **WHEN** a user clicks the delete drink button on the drink in their list
- **THEN** the drink recipe is removed from their drinks list

## Stretch Goals

### Edit functionality
- **GIVEN** a user would like to update a drink they have saved or created
- **WHEN** a user clicks the edit drink button on a drink in their list
- **THEN** a modal form will pop up to allow them to make edits to the drink recipe

### Search functionality
- **GIVEN** a user wants to search by a drink name
- **WHEN** a user types a drink in the search bar
- **THEN** that drink will be displayed if it exists in a list

### Viewing other user's lists
- **GIVEN** a user wants to see another user's list of drinks
- **WHEN** a user name is selected from a drop down or list
- **THEN** the drink recipes for the selected user will populate

### Comments on drinks
- **GIVEN** a user has selected a drink recipe from a list
- **WHEN** a user clicks on the comment button
- **THEN** a modal with text inpus will display allowing a comment to be left
-**AND** a user will be able to delete their comment if they click delete button

### Teams
- **GIVEN** a group of users would like to form a bar team
- **WHEN** once a user is selected and their list is displayed
- **THEN** the user can select to add another user to their team list
- **AND** teammates will be selectable to view that team mates drinks
- **AND** a user can remove another user from their team list


