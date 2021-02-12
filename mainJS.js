function todoList() {
    var item = document.getElementById('todoInput').value
    var text = document.createTextNode(item)
    var newItem = document.createElement('li')
    newItem.appendChild(text)
    document.getElementById('todoList').appendChild(newItem)
    newItem.onclick = removeItem;
    function removeItem(e) {
        e.target.parentElement.removeChild(e.target);
    }
}