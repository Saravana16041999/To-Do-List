`use strict`;
const formEl = document.getElementById('Form-list');
const inputEl = document.getElementById('list');
const displayareaEl = document.getElementById('display');

const submit = document.getElementById('submit')
let iteams = [
    //iteam = {id:1321 value : 'inputEl.value' }
]

let isEditing = false;
let editId = null;
 
//function
function displayUi(){
    displayareaEl.innerHTML = null;
    displayareaEl.innerHTML = '<h1>Iteams</h1>'
    if(iteams.length > 0){
        iteams.forEach((iteam)=>{
            const listEl = document.createElement('li')
            listEl.classList.add('list_ieam')
            listEl.innerHTML = `${iteam.value}<button class="dlt_dtn" 
            onclick="deleteli(${iteam.id})"><i class="fa-solid fa-trash"></i></button>
            <button class='update' onclick="edting(${iteam.id})"><i class="fa-solid fa-scissors"></button>`;
            displayareaEl.appendChild(listEl)
        })
    }
    isEditing = false;
    editId = null;
    inputEl.value = null
}

function deleteli(id){
    iteams = iteams.filter((iteam)=> iteam.id !== id);
    displayUi();
}

function edting(id){
    const inedit = iteams.find((iteam) => iteam.id === id);
    // iteams = iteams.filter((iteam)=> iteam.id !== id);
    inputEl.value = inedit.value
    editId = id;
    isEditing = true;
    
}

formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(inputEl.value){
        if(isEditing){
            iteams = iteams.map((iteam)=>{
                if(iteam.id === editId){
                    return {...iteam, value : inputEl.value};
                }else{
                    return iteam;
                }
            });
            displayUi();
        }else{
            {
                const iteam ={
                    id : new Date().valueOf(),
                    value : inputEl.value
                };
                iteams.push(iteam)
                displayUi()
            }
    }
}else
    {
        alert('enter some thing before adding')
    }
    
});

//<i class="fa-solid fa-scissors"></i>