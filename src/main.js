
const validateEmail = () => {
    const email = document.getElementById("email")
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const error = document.getElementById("error")
    if(email.value.match(format)){
        email.classList.remove('border-[#ff5263]')
        error.classList.add('hidden')
        return true
    }else if (email.value === ''){
        email.classList.add('border-[#ff5263]')
        error.classList.remove('hidden')
    } else {
        email.classList.add('border-[#ff5263]')
        error.classList.remove('hidden')
        error.innerHTML = "Please provide a valid email address!"
    }
}