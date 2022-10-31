`use strict`;
//what to do:
//need to render text inside an array.
//need to create and element eg: div, li
//need to render inside the HTMl page.


//global variables
const iteamsEl = document.getElementById(`iteams`)
const containerEl = document.getElementById('container')

//array
const NewList = []

//Functions:-

//updating array
function Updating(){
    NewList.push(iteamsEl.value)
    iteamsEl.value = ''
}


// rendering in to page
function pageRender(){
    Newli = document.createElement('li')
    containerEl.appendChild(Newli)
    NewList.forEach(elem =>{
        if (elem != ''){
            Newli.innerText = elem  
        }
    })
     
}




// Task functioning area
function render(){
    Updating()
    pageRender()
}


// 