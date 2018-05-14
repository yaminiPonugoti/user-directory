const button = document.querySelector('button.greeting')//combining element n class selector
//only one element on a page with a given ID
function changeText(){
    alert('yeah')
}
button.addEventListener('click',changeText)