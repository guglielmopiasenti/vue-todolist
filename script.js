console.log("Vue ok,", Vue);

// creating Vue app
const { createApp } = Vue;

createApp({
  data() {
    return {
      newTodo: "",
      todoList: [
        { text: "Complete homework", done: false },
        { text: "Buy groceries", done: false },
        { text: "Go for a run", done: false },
        { text: "Call mom", done: false },
        { text: "Finish project", done: false },
        { text: "Read a book", done: false },
        { text: "Pay bills", done: false },
        { text: "Organize closet", done: false },
        { text: "Schedule dentist appointment", done: false },
        { text: "Write blog post", done: false },
      ],
    };
  },
  methods: {
    // function to delete todo item
    deleteTodo(todo) {
      this.todoList = this.todoList.filter((item) => item !== todo);
    },
    // function to add todo item
    addTodo() {
      this.todoList.push(this.newTask);
      this.newTask = "";
    },
  },
  //   mounting app
}).mount("#root");
