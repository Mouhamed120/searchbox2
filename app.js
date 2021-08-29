let inputBox = document.querySelector(".input-box")
let textArea = inputBox.querySelector("textarea")
let signalNum = inputBox.querySelector(".signal-num")

textArea.addEventListener("keyup" , (e) =>{
    let vLenght = textArea.value.length
    signalNum.textContent = vLenght
    vLenght > 0 ? inputBox.classList.add("active") : inputBox.classList.remove("active")
    vLenght > 100 ? inputBox.classList.add("error") : inputBox.classList.remove("error")
})