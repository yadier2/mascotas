const container = document.querySelector('.container')
const main = document.createElement('div')
import mariachat from '../assets/images/userchat.png'
let mensajes=[
    { hora:'12:PM' , mensaje:'¡Hola! Me encantaría adoptar a Rocky.' ,autor:false},
     ]
if (localStorage.getItem('mensajes')) {
    mensajes = JSON.parse(localStorage.getItem('mensajes'))
    }        
function VerMensajes(){
    let caja = document.createElement('div')
    container.append(caja)
    let ultimoMensaje = mensajes[mensajes.length-1]
    caja.innerHTML = `
    <div class="containerMensajes">
        <div><h2 class="title_mensajes">Mensajes</h2></div>
        <div class="card_mensajeChat">
            <div class="container_chat">
                <div class="chat_foto"><img src="${mariachat}"/></div>
                <div class="caja_text_chat">
                    <div class="nombre_hora_chat"> <h2>Maria Dolores</h2><p>${ultimoMensaje.hora}</p></div>
                    <p class="text_chat">${ultimoMensaje.mensaje}</p>
                </div>
                <div class="ver_mensaje">></div>
            </div>
        </div>
  </div>
    `  
  document.querySelector('.container_chat').addEventListener('click',()=>{
    VerMensajaId()
  })
}

function VerMensajaId(){
    container.lastChild.remove()
    let caja = document.createElement('div')
      container.append(caja)
     
      caja.innerHTML = `
      <div class="containerChat">
        <div class="chatHeader">
          <div class="btn_volver" id="volver"><i class="fas fa-arrow-left"></i></div>
            <img src="${mariachat}"/>
            <h2>Maria Dolores</h2>
          </div>
  
        <div class="mensajesContainer"></div>
        <form id="formChat">
            <input type="text" id="textMensaje" >
            <input type="submit"> <i class="far fa-paper-plane"></i></input>
        </form>
      </div>
      `
      mensajes.forEach(element => {
        if (element.autor) {
          document.querySelector('.mensajesContainer').innerHTML += `
          
          <div class="mensajeChat">
              <div><p class="hora">${element.hora}</p></div>
              <div class="msgYo"><p class="message">${element.mensaje}</p></div>
              </div>
          `
        }else{
          document.querySelector('.mensajesContainer').innerHTML += `
          <div class="mensajeChat">
            <div><p class="hora">${element.hora}</p></div>
            <div class="msgTu"><p class="message" >${element.mensaje}</p></div>
            </div>
          `
         
        }
      });
      
      document.querySelector('#formChat').addEventListener('submit', (e) => {
  
          e.preventDefault()
         let mensaje=  document.querySelector('#textMensaje').value 
         if (mensaje == '') {
           return
         }
         let hora =startTime()
          document.querySelector('.mensajesContainer').innerHTML += `
            <div class="mensajeChat">
              <div><p class="hora">${hora}</p></div>
              <div class="msgYo"><p class="message"></p></div>
              </div>
          `
            /*solo perimitimos insertar texto*/
         let elemet = document.querySelectorAll('.message')
            elemet[elemet.length-1].textContent = mensaje
  
            mensajes.push(
              { hora: hora ,
                 mensaje:mensaje ,
                 autor:true
              })
              localStorage.setItem('mensajes', JSON.stringify(mensajes)) 
              //mensaje de respuesta
          setTimeout(() => {
           let mensajeC =document.querySelector('.mensajesContainer')
           if(mensajeC){mensajeC.innerHTML += `
          <div class="mensajeChat">
            <div><p class="hora">${startTime()}</p></div>
            <div class="msgTu"><p class="message" >¡Hola! Gracias por responder....</p></div>
            </div>
          `
          }
            mensajes.push(
              { hora:startTime()  ,
                 mensaje:'¡Hola! Gracias por responder....' ,
                 autor:false
              })
              localStorage.setItem('mensajes', JSON.stringify(mensajes)) 
      }, 2000);
      })
      
      function startTime() {
      var today = new Date();
      var hr = today.getHours();
      var min = today.getMinutes();
      var ap = (hr < 12) ? "AM" : "PM";
      hr = (hr == 0) ? 12 : hr;
      hr = (hr > 12) ? hr - 12 : hr;
      min = checkTime(min);
    return(
      `${hr}:${min} ${ap}`
    )
    }
     function checkTime(i) {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
    }
      document.querySelector('#volver').addEventListener('click', () => {
        container.lastChild.remove()
        VerMensajes()
      })
  
    }
  
export default VerMensajes