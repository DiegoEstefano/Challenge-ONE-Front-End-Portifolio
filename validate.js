const form = document.querySelector('[data-form]')
const campos = document.querySelectorAll('[data-input]')
const botao = document.querySelector('[data-botao]')
const spans = document.querySelectorAll('[data-span]')
let inputName = false
let inputEmail = false
let inputAssunto = false

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


function setError(index) {
    campos[index].style.border = "2px solid #e00b0b"
    botao.disabled = "true"
    botao.classList.add('disable')
    spans[index].style.display = 'inline-block'
}

function removeError(index) {
    campos[index].style.border = ""
    /* botao.disabled = "false"
    botao.classList.remove('disable') */
    spans[index].style.display = 'none'
}
function activeButton() {
    botao.disabled = "false"
    botao.classList.remove('disable')
}



// Valida os dois campos Nome e Assunto utilizando os ids setados no input
function Validate(id) {
    if (campos[id].value.length < 3) {
        setError(id)
        if (id == 0) {
            inputName = false
        } else {
            inputAssunto = false
        }
    }
    else {
        removeError(id)
        if (id == 0) {
            inputName = true
        } else {
            inputAssunto = true
        }
    }
    if (inputName && inputAssunto && inputEmail) {
        activeButton()
    }
}

//validação do campo email com regex
function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1)
        inputEmail = false
    }
    else {
        removeError(1)
        inputEmail = true
    }
    if (inputName && inputAssunto && inputEmail) {
        activeButton()
    } else {
        setError()
    }
} 
