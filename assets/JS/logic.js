//need to make constant variables for the html and css documents
const moodButton = document.querySelector('.mood')
const root = document.querySelector(":root")
//dark mode comments
//switch color mode
//change css styling from dark to light
//check the current mode and do the opposite



//mood change function
const moodchange = function () {
    let mode = JSON.parse(localStorage.getItem('mode'));
    if (mode == null) {
        localStorage.setItem('mode', true)
        moodchange();
    } else {
        if (mode == true) {
            mooddark();
        } else if (mode == false) {
            moodlight();
        }
    }
}
const mooddark = function () {
    localStorage.setItem('mode', false);
    root.style.setProperty('--font1', 'black');
    root.style.setProperty('--background1', 'white');
    moodButton.textContent = 'Chill🧊';
}
const moodlight = function () {
    localStorage.setItem('mode', true);
    root.style.setProperty('--font1', 'white');
    root.style.setProperty('--background1', 'black');
    moodButton.textContent = 'Moody🌦️';
}

//local storage check
const localMoodCheck = function () {
    let mode = JSON.parse(localStorage.getItem('mode'));
    if (mode == null) {
        localStorage.setItem('mode', false);
    } else if (mode == true) {
        localStorage.setItem('mode', false);
    } else {
        localStorage.setItem('mode', true);
    }
    moodchange();
}
localMoodCheck();
console.log("hello")
moodButton.addEventListener('click', function () { moodchange() })