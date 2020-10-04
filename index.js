const logoImage = document.getElementById('logo')
logoImage.addEventListener('click', ()=>{
    window.location = "./index.html"
})

const seeEventsButton = document.getElementById('info-navbutton-events')
seeEventsButton.addEventListener('click', ()=>{
    window.location = "./events/events.html"
})

const seeMediaButton = document.getElementById('info-navbutton-media')
seeMediaButton.addEventListener('click', ()=>{
    window.location = "./media/media.html"
})

const seeContactsButton = document.getElementById('info-navbutton-contact')
seeContactsButton.addEventListener('click', ()=>{
    window.location = "./contacts/contacts.html"
})