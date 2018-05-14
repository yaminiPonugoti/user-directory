const button = document.querySelector('button.greeting')
const button2 = document.querySelector('button.otherOne')
//combining element n class selector
//only one element on a page with a given ID
function changeHeadingText(ev){
    //ev.target.textContent = 'Clickity clicky'//<-to change button text
   const headingText =document.querySelector('h1.greeting')
   headingText.textContent='Welcome to the directory!'
}
function changeOtherHeadingText(ev){
    //ev.target.textContent = 'Clickity clicky'//<-to change button text
   const otherheadingText =document.querySelector('h2.otherOne')
   otherheadingText.textContent='I love Javascript!'
}
button.addEventListener('click',changeHeadingText)
button2.addEventListener('click',changeOtherHeadingText)