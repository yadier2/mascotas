import mascotaId from './mascotaId'

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

export default ActionCardMascota