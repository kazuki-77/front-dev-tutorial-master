const todos = [
  {
    id: 1,
    title: 'Go to shool',
    completed: true
  },
  {
    id: 2,
    title: 'Go to museum',
    completed: true
  },
  {
    id: 3,
    title: 'Go to shopping',
    completed: false
  }
]

for(let todo of todos) {

  if(todo.completed === true) {
    console.log(todo.title);
  }
}