function CardMascota(mascotas) {
    let estado = false
    const cards = document.querySelector('.columna1')
    const cards2 = document.querySelector('.columna2')
    cards.innerHTML = ""
    cards2.innerHTML = ""
    const fratment = document.createDocumentFragment()
    const template = document.getElementById('cardMascot').content
    const fratment2 = document.createDocumentFragment()
    mascotas.forEach((element) => {
        template.querySelector('.text_perro_name').textContent = element.name
        template.querySelector('.text_perro_dos').textContent = element.razaCanina;
        template.querySelector('.card_mascotass').style.backgroundImage = `url('${element.image}')`;
        template.querySelector('.card_mascotass').dataset.id = element.id;
        let clone = document.importNode(template, true)
        estado = !estado
        estado ? fratment.appendChild(clone) : fratment2.appendChild(clone)
    })
    cards.appendChild(fratment)
    cards2.appendChild(fratment2)
}
export default CardMascota;