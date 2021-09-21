// alterar as imagens da home
var img = document.querySelector('.img1')
img.addEventListener('mouseenter', alterarIn)
img.addEventListener('mouseout', alterarOut)

function alterarIn() {
    img.src = '/images/visual2.png'

}

function alterarOut() {
    img.src = '/images/visual.png'
    }

