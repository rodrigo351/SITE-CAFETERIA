const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-local")


function mostrarmodal(){
    modal.style.left = "50%"
    mascara.style.visibility = "visible"

}

function esconder(){

    modal.style.left = "-30%"
    mascara.style.visibility = "hidden"


}

