const socket = io();
const msgText = document.querySelector('msg')
const btnSend = document.querySelector('#btn-send')
const chatBox = document.querySelector('.chat-content')
const msgText = document.querySelector('.message')

let name;
do{
    name = prompt('Jaké je vaše jméno?')
}while(!name)

document.querySelector('#your-name').textContent = name
msgText.focus()

btnSend.addEventListener('click', ()=>{
    alert(123)
})