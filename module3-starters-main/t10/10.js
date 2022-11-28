let element = document.getElementById('target')

const input = document.querySelector('input')
let fName = document.getElementsByName(firstname)
let lName = document.getElementsByName(lastname)

function submitted() {
    element.innerText = 'Your name is ' + {fName} + '' + {lName}
}