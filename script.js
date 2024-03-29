const btn = document.querySelector('#btn')
const lists = document.querySelector('#lists')
const input = document.querySelector('#input-todo')
const updateBtn = document.querySelector('#update-btn')
var h1 = document.createElement('h1')
h1.style.display = 'none'

let todos = JSON.parse(localStorage.getItem('todos')) ?? []

btn.addEventListener('click',()=>{
    let inputVal = input.value.trim()
    if(inputVal==="")
    {
     alert("Please Enter a Valid Name")
    }
    else
    {
     todos.push(inputVal)
     displayList()
    }
})

updateBtn.addEventListener('click',()=>{
    let index = h1.innerHTML
    todos.splice(index,1,input.value)
    // todos[index] = input.value.trim()
    displayList()
    btn.classList.remove('update')
    updateBtn.classList.add('update')
})

function displayList(){
    input.value = ''
    lists.innerHTML = ''
    todos.forEach((ele,index)=>{
        let text = ''
        text += `<li class='li'>${ele}<div>
        <button onclick = deleteTodo(${index})>delete</button>
        <button onclick = editTodo(${index})>edit</button></div></li>`
        lists.innerHTML += text
    })
    localStorage.setItem('todos',JSON.stringify(todos))
}

function deleteTodo(index){
    todos.splice(index,1)
    displayList()
}

function editTodo(index){
    input.value = todos[index]
    updateBtn.classList.remove('update')
    btn.classList.add('update')
    h1.innerHTML = index
}
displayList()