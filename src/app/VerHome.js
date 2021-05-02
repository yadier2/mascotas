import CardMascota from './CardMascota'
import Mascotas from './bd_mascotas'
import perro from '../assets/images/perro.png'
import gato from '../assets/images/gato.png'

const container = document.querySelector('.container')
const main = document.createElement('div')
function verHome() {
    let caja = document.createElement('div')
    container.append(caja)
    const fratment = document.createDocumentFragment()
    const menuMascotas = document.getElementById('menuMascotas').content
    menuMascotas.querySelector('h2').textContent = "Adopta una adorable mascota"
    menuMascotas.querySelector('.info_categoria > p').textContent = "Categorías de mascotas";
    menuMascotas.querySelector('.circuloFondo > img').src = perro
    menuMascotas.querySelector('.sectionPerros > p').textContent = "Perros";
    menuMascotas.querySelector('.img_gatos').src = gato
    menuMascotas.querySelector('.sectionGatos > p').textContent = "Gatos";
    let clone = document.importNode(menuMascotas, true)
    fratment.appendChild(clone)
    caja.append(fratment)

    let columna1 = document.querySelector('.sectionPerros');
    let columna2 = document.querySelector('.sectionGatos');
    columna1.addEventListener("click", () => {
        CardMascota(Mascotas[0]) 
        columna1.classList.remove("sectionOpacity");
        columna2.classList.add("sectionOpacity");   
    })
    columna2.addEventListener("click", () => {
        CardMascota(Mascotas[1])
        columna1.classList.add("sectionOpacity");
        columna2.classList.remove("sectionOpacity");
    })
}

export default verHome;