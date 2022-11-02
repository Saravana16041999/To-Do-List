`use strict`;
//what to do:
//need to render text inside an array.
//need to create and element eg: div, li
//need to render inside the HTMl page.


//global variables
const iteamsEl = document.getElementById(`iteams`)
const containerEl = document.getElementById('container')
const renderEl = document.getElementById('renderall') 

let list ={
    newID :  new Date().valueOf()
} 



//array
let NewList = []

//Functions:-
function updatearr(){
    NewList.push(iteamsEl.value)
}

// rendering in to page
function pageRender(){
    containerEl.innerHTML = null
    NewList.forEach(elem =>{ 
            Newli = document.createElement('li')
            Newli.innerHTML = `${elem}<button class='delete' onclick= "deletelist(${list.newID})" >delete</button>`   
            containerEl.appendChild(Newli)
        })
        
}

function deletelist(id){
}

// Task functioning area
renderEl.addEventListener('click',(e)=>{
    e.preventDefault();
    
    //updating array
    updatearr()
        
    pageRender()
}
)

// 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result)