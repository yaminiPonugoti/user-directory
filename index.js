const button = document.querySelector('button.greeting')
const button2 = document.querySelector('button.otherOne')
//combining element n class selector
//only one element on a page with a given ID
const form = document.querySelector('#userForm')
const heading = document.querySelector('h1.greeting')
heading.textContent=name
function renderColor(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color //do colordiv shit in renderColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}
function renderListItem(label, value){
    const item = document.createElement('li')
    item.textContent = `${label}: `
    try{
        item.appendChild(value)
    }
    catch(e){
        item.textContent += value
    }
    return item
}
function renderList(data){
    const list = document.createElement('ul') 
    const labels = Object.keys(data)
    labels.forEach(label => {
        const item = renderListItem(label,data[label])
        list.appendChild(item)
    })
    return list
}
const handleSubmit = function(ev){
        ev.preventDefault()
        const form = ev.target
        const user = {
            userName: form.userName.value,
            age: form.age.value,
            favoriteColor: renderColor(form.favoriteColor.value)
        }
        

        // users.innerHTML += '<p> ' + userName + ' , ' + age+ '</p>'
        // OR suers.innerHTML += `<p>${userName}, ${age}</p>`
        // const p = document.createElement('p') 
        // p.textContent=`${userName}, ${age}`
        // p.style.backgroundColor = favoriteColor
        // users.appendChild(p)
        // ev.target.userName.value = '' or ev.target.reset() to reset both name and age
        // ev.target.userName.focus()   
        const users = document.querySelector('#users')
        users.appendChild(renderList(user))
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