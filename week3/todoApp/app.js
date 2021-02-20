function toHTML(txt) {
    return `
        <input type="checkbox" data-btn="done">
        <span>${txt}</span>
        <button class="del-btn" data-btn="delete">X</button>
    `
}
shownDone = false
function toHTMLDone(text){
    return `<p>${text}</p>
            <button class="del-btn" data-btn="delete">X</button>
`
}
completed = []
document.addEventListener('click', (event) => {
    const btnType = event.target.dataset.btn
    if (btnType == 'delete') {
        event.target.parentNode.remove()
    } else if (btnType == 'done') {
        if (event.target.parentNode.getElementsByTagName('span')[0].style.textDecoration != 'line-through'){
            event.target.parentNode.getElementsByTagName('span')[0].style.textDecoration = 'line-through'
            // completed.push(event.target.innerText)
            completed.push(event.target.parentNode.getElementsByTagName('span')[0].textContent)
            event.target.parentNode.remove()
        }

        else
            event.target.parentNode.getElementsByTagName('span')[0].style.textDecoration = 'none'
    }
})


document.getElementById('add-btn').addEventListener('click', addNode)

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        addNode()
    }
})

function addNode() {
    const txt = document.getElementById('input-text').value
    if (!txt.length) {
        alert('Nothing to add')
        return
    }
    let node = document.createElement('li')
    node.className = 'listElem'
    node.innerHTML = toHTML(txt)
    document.getElementById('list-content').appendChild(node)
    document.getElementById('input-text').value = ''
}

document.getElementById('remove').addEventListener('click',()=>{
    document.getElementById('list-content').innerHTML = ''
    document.getElementById('doneList').innerHTML = ''
})

document.getElementById('done').addEventListener('click',()=>{
    let html = ``
    completed.forEach(elem => {
        html += toHTMLDone(elem)
    })
    if(!shownDone){
        document.getElementById('doneList').innerHTML = html
        document.getElementById('done').textContent = 'Hide done'
        shownDone = true
    }

    else {document.getElementById('doneList').innerHTML=''
    shownDone = false
        document.getElementById('done').textContent = 'Show done'}
})
