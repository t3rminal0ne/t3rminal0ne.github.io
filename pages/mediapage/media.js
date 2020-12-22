// NAVIGATION STUFF
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

// STUFF TO HIGHLIGHT A SPECIFIC IMAGE

const showSpecificImage = (image) => {
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    
    exitButton.style.left = "90%";
    exitButton.style.opacity = "100%";

    specificImage.src = image

    exitButton.style.width = "40px";
    exitButton.style.height = "40px";
}

const removeOverlay = () => {
    overlay.style.width = "0%";
    overlay.style.height = "0%";
    exitButton.style.width = "0px";
    exitButton.style.height = "0px";

    exitButton.style.opacity = "0%";
}

overlay = document.getElementById('overlay')
specificImage = document.getElementById('specific-image')
exitButton = document.getElementById('exit-image-button')

pictures = document.getElementsByClassName('image')

for (let i=0;i<pictures.length;i++) {
    pictures[i].addEventListener('click', ()=>{
        showSpecificImage(pictures[i].src)

        overlay.addEventListener('click', ()=>{
            removeOverlay()

            overlay.removeEventListener('click', removeOverlay())
            pictures[i].removeEventListener('click', removeOverlay())
            
            pictures[i].addEventListener('click', ()=>{
                showSpecificImage(pictures[i].src)
            })
        })

        pictures[i].addEventListener('click', ()=>{
            removeOverlay()

            overlay.removeEventListener('click', removeOverlay())
            pictures[i].removeEventListener('click', removeOverlay())

            pictures[i].addEventListener('click', ()=>{
                showSpecificImage(pictures[i].src)
            })
        })
    })
}

// STUFF FOR INTRAPAGE DIRECTION
const rpcDirectionButton = document.getElementById('rpc-media-button')
const rpcpaDirectionButton = document.getElementById('rpcpa-media-button')
const dulaangDirectionButton = document.getElementById('dulaang-media-button')

rpcDirectionButton.addEventListener('click', ()=>{
    console.log("Got here")
    window.location = "media.html#rpc-images"
})

rpcpaDirectionButton.addEventListener('click', ()=>{
    console.log("Got here")
    window.location = "media.html#rpcpa-images"
})

dulaangDirectionButton.addEventListener('click', ()=>{
    console.log("Got here")
    window.location = "media.html#dulaang-images"
})

// SMOOTH SCROLL CODE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});