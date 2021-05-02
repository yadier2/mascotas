
import CardMascota from './CardMascota'
import ActionCardMascota from './ActionCardMascota'
const container = document.querySelector('.container')
const main = document.createElement('div')
let MascotasFavoritas = []; 

function VerMascotasFavoritas(){
    if (localStorage.getItem('mascotasFavoritas')) {
        MascotasFavoritas = JSON.parse(localStorage.getItem('mascotasFavoritas'))
      }
    let caja = document.createElement('div')
    container.append(caja)
    caja.innerHTML = ` ${MascotasFavoritas.length > 0 ? '<h2>Mascotas Favoritas</h2>':'  <h2>No tienes mascotas favoritas</h2>'}
     <div class="container_mascot">          
                <div class="columna1">
                </div>
                <div class="columna2">
                </div>
              </div>`
        CardMascota(MascotasFavoritas) 
        ActionCardMascota() 
}  


  
export default VerMascotasFavoritas