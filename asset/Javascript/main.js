const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const taskE1=$('.task')
const taskData=['Do homework BITC','Do ASM BTEC','Participate in iT tour','ôi bạn ơi']
const addBtn = $('.add-task_button')
const valueInput =$('.add-task_blank')

function renderTodos(){
    const taskHTML = taskData.map((task)=>{
        return `
            <div class="task">
                <div class="task_item">
                    <a href="#">
                        <span class="task_item-infor">${task}</span>
                        <div class="task_item-icom">
                            <a href=""><i class="item-icon trash fa-solid fa-trash-can"></i></a>
                            <a href=""><i class="item-icon edit fa-solid fa-pen-to-square"></i></a>
                        </div>
                    </a>


                </div>
            </div>
        `
    })
    console.log(taskHTML);
    taskE1.innerHTML= taskHTML.join('')
}
renderTodos()


function addTodo(e){
    e.preventDefault();

    const value = valueInput.value
    console.log(value);

    taskData.unshift(value)
    console.log(taskData);
    renderTodos()
}

addBtn.onclick = addTodo

