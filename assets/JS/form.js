const username = document.querySelector('#username')
const title = document.querySelector('#title')
const meditation = document.querySelector('#content')
const form = document.querySelector('.form')

blogs = JSON.parse(localStorage.getItem('blogs'))
const importMoodSaver = function () {
    if (blogs == null) {
        blogs = []
    }
}
importMoodSaver();

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (username.value == '' || title.value == '' || meditation.value == '') {
        alert('All fields must be filled out. Please try again.')
        return;
    }
    else {
        const tempUserInput = {
            Name: username.value,
            Title: title.value,
            Meditation: meditation.value
        };
        blogs.push(tempUserInput);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        window.location.href = "./blog.html"
        return;
    }
})