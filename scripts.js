// alterar as imagens da home
var img = document.querySelector('.img1')
img.addEventListener('mouseover', alterarIn)
img.addEventListener('mouseout', alterarOut)

function alterarIn() {
    img.src = '/images/visual2.png'
}

function alterarOut() {
    img.src = '/images/visual.png'
    }

//menu hamburguer
let show = true;
                
const menuSection = document.querySelector(".menuSection")
const menuToggle = menuSection.querySelector(".menuToggle")

// quando clicar, rodar a função de add uma lista de classe com o item on no menuSection 
menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial" // para evitar a rolagem da pag (se show for true, overflow hidden, se não for, a pag rola)

    menuSection.classList.toggle("on", show)
    show = !show; // atualizando valor de show de true p false
})
