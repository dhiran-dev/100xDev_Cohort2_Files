/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  // - add(todo): adds todo to list of todos
  add(todo) {
    this.todos.push(todo);
  }

  // - remove(indexOfTodo): remove todo from list of todos
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      //starting index, no of elements to remove ==> splice
      this.todos.splice(indexOfTodo, 1);
    } else {
      // throw new Error("Invalid index");
    }
  }

  //- update(index, updatedTodo): update todo at given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      // throw new Error("Invalid index");
    }
  }

  getAll() {
    return this.todos.slice(); // Return a copy to prevent direct modification
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      // Instead of throwing an error, return a specific value to indicate
      // that the index is out of bounds
      return null;
    }
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;

// Example usage and testing
const todoList = new Todo();
todoList.add("Buy groceries");
todoList.add("Read a book");
todoList.add("Exercise");

console.log("All Todos:", todoList.getAll()); // Expected output: ["Buy groceries", "Read a book", "Exercise"]

todoList.remove(1); // Remove the second todo
console.log("All Todos after removal:", todoList.getAll()); // Expected output: ["Buy groceries", "Exercise"]

todoList.update(0, "Buy organic groceries"); // Update the first todo
console.log("All Todos after update:", todoList.getAll()); // Expected output: ["Buy organic groceries", "Exercise"]

console.log("Todo at index 0:", todoList.get(0)); // Expected output: "Buy organic groceries"

todoList.clear(); // Clear all todos
console.log("All Todos after clear:", todoList.getAll()); // Expected output: []
