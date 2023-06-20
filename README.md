# Exercise: Vue To Do List

Each todo will be an object, made up of at least two properties:

- text, a string indicating the text of the todo.
- done, a boolean (true/false) that indicates whether the todo was done or not.

## MILESTONE 1

Print an item for each todo within an HTML list.
If the property done is equal to true, display the text of the todo crossed out.

## MILESTONE 2

Displayed next to each item has an "x": clicking on it, the todo is removed from the list.

## MILESTONE 3

Provide a text input field and an "add" button: by clicking on the button, the text entered is read and used to create a new todo, which is then added to the list of existing todos.

### Bonuses:

1- In addition to clicking on the button, also intercept the ENTER key to add the todo to the list.
2- By clicking on the text of the item, invert the value of the done property of the corresponding todo (if done was equal to false, set true and vice versa).

### SUPERBONUS

We insert a filter to search within the tasks.
