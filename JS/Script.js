`use strict`;
//what to do:
//need to render text inside an array.
//need to create and element eg: div, li
//need to render inside the HTMl page.


//global variables
const iteamsEl = document.getElementById(`iteams`)
const containerEl = document.getElementById('container')
const renderEl = document.getElementById('renderall') 





//array
let iteams = []

//Functions:-


// rendering in to page
function pageRender(){
    containerEl.innerHTML = null
    if(iteams.length > 0){
        iteams.forEach(iteam =>{ 
            const Newli = document.createElement('li')
            Newli.innerHTML = `${iteam.value}<button class='delete' 
            onclick= "deletelist(${iteam.id})" >delete</button>`   
            containerEl.appendChild(Newli)
        })
    }      
}

function deletelist(id){
    iteams = iteams.filter((iteam)=> console.log(iteam.id !== id))
    pageRender();
}

// Task functioning area
renderEl.addEventListener('click',(e)=>{
    e.preventDefault();
    if(iteamsEl.value){
        let iteam ={
            id :  new Date().valueOf(),
            value : iteamsEl.value
        }
        iteams.push(iteam)
        // iteamsEl.value = null
        pageRender()
    }else{
        alert('need to Enter some data')
    }
    
    
        
    
}
)
