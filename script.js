console.log("Vue ok,", Vue);

// creating Vue app
const { createApp } = Vue;

createApp({
  data() {
    return {
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
    deleteTodo(targetIndex) {
      this.todo = this.todo.filter((task, i) => targetIndex !== 1);
    },
  },
  //   mounting app
}).mount("#root");
