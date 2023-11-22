// login elements
const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = login.querySelector(".login__input")

const colors =[
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold",
]

const getRandomColor = (colors)=>{
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}
const user={id:"", name:"", color:""}

const handleSubmit = (event) =>{
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()
}

loginForm.addEventListener("subimit", handleSubmit)