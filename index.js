const button = document.querySelector('button.greeting')
const button2 = document.querySelector('button.otherOne')
//combining element n class selector
//only one element on a page with a given ID
const form = document.querySelector('form#userForm')
const heading = document.querySelector('h1.greeting')
heading.textContent=name
const handleSubmit = function(ev){
        ev.preventDefault()
        const form = ev.target
        const users = document.querySelector('#users')
        const userName = ev.target.userName.value
        const age = ev.target.age.value
        const favoriteColor = ev.target.favoriteColor.value
        const renderList = function(){
            const list = document.createElement('ul') 
            renderListItem(list)
            users.appendChild(list)
        }
        const renderListItem = function(list){
            const nameItem = document.createElement('li')
            nameItem.textContent = `Name: ${userName}`
            list.appendChild(nameItem)
            const ageItem = document.createElement('li')
            ageItem.textContent = `Age: ${age}`
            list.appendChild(ageItem)
            const colorItem = document.createElement('li')
            colorItem.textContent = 'Favorite Color:'
            list.appendChild(colorItem)
            renderColor(colorItem)
        }
        const renderColor = function(colorItem){
            const colorDiv = document.createElement('div')
            colorDiv.style.backgroundColor = favoriteColor //do colordiv shit in renderColor
            colorDiv.style.width = '6rem'
            colorDiv.style.height = '3rem'
            colorItem.appendChild(colorDiv)
        }
        renderList()
        // users.innerHTML += '<p> ' + userName + ' , ' + age+ '</p>'
        // OR suers.innerHTML += `<p>${userName}, ${age}</p>`
        // const p = document.createElement('p') 
        // p.textContent=`${userName}, ${age}`
        // p.style.backgroundColor = favoriteColor
        // users.appendChild(p)
        // ev.target.userName.value = '' or ev.target.reset() to reset both name and age
        // ev.target.userName.focus()          
        
        form.reset()
        form.userName.focus()
        //ev.target.reset()
        //ev.target.userName.focus()
        //renderListItem inside renderList
}
form.addEventListener('submit',handleSubmit)
function changeHeadingText(ev){
    //ev.target.textContent = 'Clickity clicky'//<-to change button text
   const headingText =document.querySelector('h1.greeting')
   headingText.textContent='Welcome to the directory!'
}
function changeOtherHeadingText(ev){
   const otherheadingText =document.querySelector('h2.otherOne')
   otherheadingText.textContent='I love Javascript!'
}
function myFunction() {
    var word = document.getElementById("numb").value
    const headingText = document.querySelector('h1.greeting')
    headingText.textContent = word
}
button.addEventListener('click',changeHeadingText)
button2.addEventListener('click',changeOtherHeadingText)