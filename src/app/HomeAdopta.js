import verHome from './verHome'
import CardMascota from './CardMascota'
import Mascotas from './bd_mascotas'
import mascotaId from './mascotaId'
import VerMensajes from './VerMensajes'
import VerMascotasFavoritas from './VerMascotasFavoritas'
import VerUser from './VerUser'

const container = document.querySelector('.container')
const main = document.createElement('div')

function HomeAdopta(){
    container.innerHTML = ''
    let active = {home:'nav_item'}
     Navigation(active) 
     itemActivoNav(active)
     verHome()
     CardMascota(Mascotas[0]) 
      ActionCardMascota() 
}

function Navigation(active,accion) {
    container.innerHTML = ''
    container.innerHTML =` <div class="navegation">
        <div class="position">
            <div class="${active.home ? active.home : ''} navegation_home">
                <i class="fas fa-home"></i>
                ${active.home ? '<p>Home</p>': ''}
            </div>   
            <div class="${active.mensaje? active.mensaje: ''} navegation_mensajes">            
                <i class="far fa-comment icono "></i>
                ${active.mensaje? '<p>Mensajes</p>':''}
            </div>
            <div class="${active.favorites ?active.favorites: ''} navegation_favorites">
                <i class="far fa-heart icono "></i>  
                ${active.favorites ? '<p>Favoritos</p>': ''} 
            </div>
            <div class="${active.user ?active.user :''} navegation_user">
                <i class="far fa-user icono "></i>
                ${active.user ? '<p>Perfil</p>':''}
            </div>
        </div>
    </div> `
    if(accion)itemActivoNav(active)
}

function itemActivoNav(active){
    document.querySelector('.navegation_home').addEventListener('click',() => { 
        active = {}
        active.home = 'nav_item'
        Navigation(active, true)
        verHome() 
        CardMascota(Mascotas[0]) 
        ActionCardMascota()
    })
    document.querySelector('.navegation_mensajes').addEventListener('click',() => {
        active = {}
        active.mensaje = 'nav_item'
        Navigation(active,true) 
        VerMensajes()
    })
    document.querySelector('.navegation_favorites').addEventListener('click',() => {
        active = {}
        active.favorites = 'nav_item'
        Navigation(active, true) 
        VerMascotasFavoritas()
    })
    document.querySelector('.navegation_user').addEventListener('click',() => {
       active = {}
        active.user = 'nav_item'
       Navigation(active, true) 
       VerUser()
       
    })
}

function ActionCardMascota(){
    let mascota = document.querySelector('.container_mascot')
    mascota.addEventListener('click', (e) => {
        let id = null;
        if (e.target.className === 'info_name_perro') {
            id = e.target.parentNode.dataset.id
            mascotaId(id) 
        }
        if (e.target.className === "card_mascotass") {
            id = e.target.dataset.id
            mascotaId(id) 
        }
        if (e.target.className === 'text_perro_name' || e.target.className === 'text_perro_dos') {
            id = e.target.parentNode.parentNode.dataset.id
            mascotaId(id) 
        }
        e.stopPropagation();
    })
}
export default HomeAdopta;