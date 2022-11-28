let img = document.getElementById('target')
let over = document.getElementById('trigger')

function hover() {
    img.src = 'img/picB.jpg'
}

function not_hover() {
    img.src = 'img/picA.jpg'
}

over.onmouseenter = hover
over.onmouseleave = not_hover
