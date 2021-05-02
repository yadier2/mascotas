import HomeAdopta from './HomeAdopta'
import bienvenido from '../assets/images/mascotas-adopcion-bienvenido.png';
import bienvenidoHistoria from '../assets/images/bienvenidoHistoria.png'; 
import logo from '../assets/images/logo.png';
import './main.css'
let state = 0  
const container = document.querySelector('.container')
const main = document.createElement('div')

ComprobarEstado()

function ComprobarEstado() {
    console.log("holls");
    state === 0 && InicioLogo('img_logo')
    state === 1 && InicioLogo('img_logoGrande')
    state === 2 && Bienvenido(0)
    state === 3 && Bienvenido(1)
   state === 4 && HomeAdopta() 
}
function CambiarVista() {
    if (state < 2) {
        setTimeout(() => {
            state = state + 1
            ComprobarEstado()
        }, 1000);
    }
}
function InicioLogo(tamanio) {
    container.innerHTML = ''
    container.append(main)
    main.innerHTML = `<img src=${logo} class="${tamanio}" /> `
    CambiarVista()
}
function Bienvenido(value) {
    let src = [bienvenido, bienvenidoHistoria]
    let titulo =  ['Encuentra tu amigo fiel', 'Crea una nueva historia']
    let parrafo =  ['Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. Si estás pensando en tener un nuevo integrante en tu familia; ¡estás en el lugar correcto!', 'Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos momentos con estos amiguitos fieles, tiernos y llenos de amor para regalar.']
    container.innerHTML = ''
    main.className ='bienvenido_container'
    container.append(main)
    main.innerHTML = `
      <img src=${src[value]} alt="" />
      <div class="data-info-bienvenido">
        <h2>${titulo[value]}</h2>
        <p>${parrafo[value]}</p>
      </div>
    <button class="btn_siguiente">Siguiente</button>`
    console.log(state);
    document.querySelector('.btn_siguiente').addEventListener('click', () => {
       if (state == 2 || state == 3 ) {
           state++
            ComprobarEstado()
            
        } 
    })
}

