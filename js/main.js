
function removeTodo (node) {
  node.remove()
}

function addTodo () {

  const todoInput = document.getElementById('todo-input')

  const todoText = todoInput.value

  const list = document.getElementById('list')

  const div = document.createElement('div')
  div.className = 'item'
  div.innerHTML = todoText

  const btn = document.createElement('button')
  btn.innerHTML = 'x'
  btn.addEventListener('click', () => removeTodo(div))

  div.appendChild(btn)

  todoInput.value = ''

  list.appendChild(div)
}
