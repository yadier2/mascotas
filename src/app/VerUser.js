const container = document.querySelector('.container')
import userImg from '../assets/images/user-form.png'
let user = {name:"pepe", apellido: 'caicedo' , email:"yadieww@gmail.com", }
if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'))
  }
function VerUser(){
    let caja = document.createElement('div')
     container.append(caja)
     const template = document.getElementById('form_User').content
     const fratment = document.createDocumentFragment()
     template.querySelector('.cardUserform p').textContent = `${user.name} ${user.apellido}`
     template.querySelector('.imgUserform').src = userImg
     let clone = document.importNode(template, true)
     fratment.appendChild(clone)
     caja.append(fratment)     
     let btn = document.querySelector('#submit')
     btn.addEventListener( 'click', e => {
           user = {
               name: document.querySelector('#name').value,
               apellido:document.querySelector('#apellido').value,
               email: document.querySelector('#email').value,
           }
           localStorage.setItem('user', JSON.stringify(user)) 

           document.querySelector('.cardUserform p').textContent = `${user.name} ${user.apellido}`
              document.querySelector('#name').value =""
               document.querySelector('#apellido').value =""
               document.querySelector('#email').value = "" 
           e.preventDefault(); 
         }) 
 }   

 export default VerUser