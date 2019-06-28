// Temporal list of registered users
const usersList = new Array();

// *** Front end code ***

window.addEventListener("load", setup)

// Initialize general things of the register module
function setup() {
    // Get element to subscribe the new listener
    const form = document.querySelector("form")
    form.addEventListener("submit", registerNewUser)
}

// Register new user from user's submit
function registerNewUser(event){
    event.preventDefault()
    const userInfo = getUserInfoFromHTML()
    storeNewUser(userInfo)
    clearInfoFromHTML()

    usersList.forEach((userElem) => {
        console.log(userElem)
    })
}

// Get user information from hmtl file
function getUserInfoFromHTML() {
    const name = document.querySelector('input[name="user_name"]').value
    const mail = document.querySelector('input[name="user_email"]').value
    const msg = document.querySelector('textarea[name="user_message"]').value
    const userInfo = {
        "name" : name,
        "mail": mail,
        "msg": msg
    }

    return userInfo
}

// clear user info from html file
function clearInfoFromHTML(){
    document.querySelector('input[name="user_name"]').value = ""
    document.querySelector('input[name="user_email"]').value = ""
    document.querySelector('textarea[name="user_message"]').value = ""
}

// Store new user
function storeNewUser(user){
    let duplicate = false
    usersList.forEach((userElem) => {
        // Check for duplicate user name
        if(userElem["name"] === user["name"] ){
            duplicate = true
        }
    })

    if(!duplicate){
        usersList.push(user)
    }else{
        alert("User name already registered, please select another one")
    }
}