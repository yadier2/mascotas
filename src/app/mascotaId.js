import HomeAdopta from './HomeAdopta'
import Mascotas from './bd_mascotas'
import carinoso from '../assets/images/cariñoso.png';
import inquieto from '../assets/images/inquieto.png';
import jugeton from '../assets/images/logo.png';
import VerMensajes from './VerMensajes';
let MascotasFavoritas = []; 
if (localStorage.getItem('mascotasFavoritas')) {
  MascotasFavoritas = JSON.parse(localStorage.getItem('mascotasFavoritas'))
}
const container = document.querySelector('.container')
function mascotaId(id) {
    console.log(id);
    let result = null;
    for (let index = 0; index < Mascotas.length; index++) {
        result = Mascotas[index].filter(word => word.id === id);
        if (result.length > 0) break
    }    
    container.lastChild.remove()
    let nav =document.querySelector('.navegation')
     nav.classList.add('removeNav')
     let caja = document.createElement('div')
     caja.classList.add('moveContent')
    container.append(caja)
    const fratment = document.createDocumentFragment()
    const template = document.getElementById('mascotaId').content
    template.querySelector('.img_id_mascota > img').src = result[0].image
    template.querySelector('.name > h2').textContent = result[0].name
    template.querySelector('.name_edad .raza').textContent = result[0].razaCanina
    template.querySelector('.name_edad .edad').textContent = result[0].edad
    template.querySelector('.ubicacion_detail').textContent = result[0].ubiacion
    template.querySelector('.img_personalidad1 > p').textContent = result[0].personalidad[0]
    template.querySelector('.img_personalidad2 > p').textContent = result[0].personalidad[1]
    template.querySelector('.img_personalidad3 > p').textContent = result[0].personalidad[2]
    template.querySelector('.info_history > h2').textContent = "Historia de " + result[0].name
    template.querySelector('.info_history > p').textContent = result[0].historia
    template.querySelector('.img_autor > img').src = result[0].imgAutor
    template.querySelector('.name_autor').textContent = result[0].autor
    let clone = document.importNode(template, true)
    fratment.append(clone)
    caja.append(fratment)
    document.querySelector('.img_personalidad1 > img').src = carinoso
    document.querySelector('.img_personalidad2 > img').src = inquieto
    document.querySelector('.img_personalidad3 > img').src = jugeton
    document.querySelector('.btn_enviarMsg').addEventListener('click',() => {
      alert('Hola pronto.... Gracias')
    })
    addDeletFavorite(result)  
}

function addDeletFavorite(result){
    let idx = MascotasFavoritas.filter((i) => i.id == result[0].id);  
       if (idx.length != 0 ) { 
          document.querySelector('.love').classList.add("favorite");
      } else {
          document.querySelector('.love').classList.remove("favorite");
      }
      document.querySelector('.btn_volver').addEventListener('click', () => {
          HomeAdopta()
      })
      document.querySelector('.love').addEventListener('click', () => {
      
        let itemId= null
        MascotasFavoritas.forEach((element , index) => {
        if(element.id == result[0].id ){
          itemId = index
        }
      });
  
        let x = MascotasFavoritas.filter((i) => i.id == result[0].id)
        if (x.length == 0) {
              MascotasFavoritas.push(result[0])
              localStorage.setItem('mascotasFavoritas', JSON.stringify(MascotasFavoritas)) 
              document.querySelector('.love').classList.add("favorite");
          } else {
            MascotasFavoritas.splice(itemId, 1); 
              localStorage.setItem('mascotasFavoritas', JSON.stringify(MascotasFavoritas)) 
              document.querySelector('.love').classList.remove("favorite");
          }  
      
      })
  }
  
export default mascotaId;