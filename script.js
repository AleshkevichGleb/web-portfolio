document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('#preloader');
    const percents = document.querySelector('#percents');
    let loadedCount = 0;

    const mediaFiles = document.getElementsByTagName('img');
    console.log(mediaFiles.length);
    Array.from(mediaFiles).forEach((file) => {
        file.addEventListener('load', () => {
            loadedCount++;
            percents.innerHTML = ((loadedCount * 100) / mediaFiles.length).toFixed(1);
            console.log(loadedCount);
            console.log(file);
            if (loadedCount >= mediaFiles.length) {
                preloader.classList.add('preloader--hide');
                percents.innerHTML = 100;
                document.body.classList.remove('body');
            }
        });

    });
});


document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});