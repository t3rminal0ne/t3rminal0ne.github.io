const switchToMedia = () => {
    window.location = './pages/mediapage/media.html'
}

const switchToEvents = () => {
    window.location = './pages/eventspage/events.html'
}

const switchToContacts = () => {
    window.location = './pages/contactspage/contacts.html'
}

// BANNER BUTTON LOGIC
const logo = document.getElementById('logo')
const mediaBannerButton = document.getElementById('media-banner-button')
const eventsBannerButton = document.getElementById('events-banner-button')
const contactsBannerButton = document.getElementById('contacts-banner-button')

logo.addEventListener('click', ()=>{
    window.location = 'index.html'
})

mediaBannerButton.addEventListener('click', ()=>{
    switchToMedia()
})

eventsBannerButton.addEventListener('click', ()=>{
    switchToEvents()
})

contactsBannerButton.addEventListener('click', ()=>{
    switchToContacts()
})

// NAV BUTTON LOGIC 
const mediaNavBoxButton = document.getElementById('media-nav-box-button')
const eventsNavBoxButton = document.getElementById('events-nav-box-button')
const contactsNavBoxButton = document.getElementById('contacts-nav-box-button')

mediaNavBoxButton.addEventListener('click', ()=>{
    switchToMedia()
})

eventsNavBoxButton.addEventListener('click', ()=>{
    switchToEvents()
})

contactsNavBoxButton.addEventListener('click', ()=>{
    switchToContacts()
})