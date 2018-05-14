const button = document.querySelector('button.greeting')//combining element n class selector
//only one element on a page with a given ID
function changeText(ev){
    ev.target.textContent = 'Clickity clicky'
   //const para =document.querySelector('p.greeting')
   // para.textContent='Hi friend!'
}
button.addEventListener('click',changeText)