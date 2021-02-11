function toHTML(txt) {
    return `
        <input type="checkbox" data-btn="done">
        <span>${txt}</span>
        <button class="del-btn" data-btn="delete">X</button>
    `
}

document.addEventListener('click',(event)=>{
    const btnType = event.target.dataset.btn
    if(btnType =='delete'){
        event.target.parentNode.remove()
    }
    else if(btnType=='done'){
        event.target.parentNode.getElementsByTagName('span')[0].style.textDecoration = 'line-through'
    }
})


document.getElementById('add-btn').addEventListener('click',addNode)

document.addEventListener('keyup',(event) =>{
    if(event.keyCode===13){
        addNode()
    }
})

function addNode(){
    const txt = document.getElementById('input-text').value
    if(!txt.length){
        alert('Nothing to add')
        return
    }
    let node = document.createElement('li')
    node.className = 'listElem'
    node.innerHTML = toHTML(txt)
    document.getElementById('list-content').appendChild(node)
    document.getElementById('input-text').value = ''
}
