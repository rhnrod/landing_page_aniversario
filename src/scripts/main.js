AOS.init();

// Timestamp
const eventDate = new Date('Dec 19, 2023 19:00:00')
const eventEndDate = new Date('Dec 19, 2023 22:00:00')
const eventTimestamp = eventDate.getTime();
const eventEndTimestamp = eventEndDate.getTime();

const countingTime = setInterval(function() {
    const now = new Date();
    const nowTimestamp = now.getTime();

    const days = 1000 * 60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const minutes = 1000 * 60;

    const timeToEvent = eventTimestamp - nowTimestamp;
    const daysToEvent = Math.floor(timeToEvent / days);
    const hoursToEvent = Math.floor((timeToEvent % days) / hours);
    const minutesToEvent = Math.floor((timeToEvent % hours) / minutes);
    const secondsToEvent = Math.floor((timeToEvent % minutes) / 1000);

    const span = document.querySelector('#count');

    if (nowTimestamp < eventTimestamp) {
        span.innerHTML = `começará em ${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;
    } else if (nowTimestamp > eventTimestamp && nowTimestamp < eventEndTimestamp) {
        span.innerHTML = 'já tá rolando, parceiro! 🥳';
    } else {
        clearInterval();
        span.innerHTML = `já passou. Se você perdeu é porque é um manézão.`
        const showman = document.getElementById('showman');
        showman.classList.remove('hero__image--finn');
        showman.classList.add('hero__image--ice-king');
        
    }

}, 1000)

// Jake button effect
const button = document.getElementById('button');
const text = document.getElementById('text');
const face = document.getElementById('face');

button.addEventListener('click', function(e) {
    e.preventDefault();
    text.style.opacity = 0; 
    face.classList.remove('hidden');
    
    setTimeout(() => {
       face.style.opacity = 1;

    }, 1500);

    setTimeout(() => {
        text.classList.add('hidden');
    }, 2000);
    
})