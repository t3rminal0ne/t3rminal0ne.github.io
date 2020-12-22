const switchToMedia = () => {
    window.location = '../mediapage/media.html'
}

const switchToEvents = () => {
    window.location = '../eventspage/events.html'
}

const switchToContacts = () => {
    window.location = '../contactspage/contacts.html'
}

const logo = document.getElementById('logo')
const mediaBannerButton = document.getElementById('media-banner-button')
const eventsBannerButton = document.getElementById('events-banner-button')
const contactsBannerButton = document.getElementById('contacts-banner-button')

logo.addEventListener('click', ()=>{
    window.location = '../../index.html'
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