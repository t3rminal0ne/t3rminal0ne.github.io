const logoImage = document.getElementById('logo')
logoImage.addEventListener('click', ()=>{
    window.location = "./index.html"
})

const seeEventsButton = document.getElementById('see-events-navbutton')
seeEventsButton.addEventListener('click', ()=>{
    window.location = "./events/events.html"
})

const seeMediaButton = document.getElementById('see-media-navbutton')
seeMediaButton.addEventListener('click', ()=>{
    window.location = "./media/media.html"
})