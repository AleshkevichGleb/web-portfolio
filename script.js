let i = 0;

let interval = setInterval(() => {
    i+= Math.ceil(Math.random()* 20)
    percents.innerHTML = i;
}, 400)


setTimeout(() => {
    preloader.classList.add('preloader--hide');
    percents.innerHTML = 100;
    clearInterval(interval)
    document.body.classList.remove('body')
}, 2000)

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});