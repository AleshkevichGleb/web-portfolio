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
            if (loadedCount >= 10) {
                preloader.classList.add('preloader--hide');
                percents.innerHTML = 100;
                document.body.classList.remove('body');
            }
        });

    });
});
// let i = 0;

// let interval = setInterval(() => {
//     i+= Math.ceil(Math.random()* 20)
//     percents.innerHTML = i;
// }, 400)


// setTimeout(() => {
//     preloader.classList.add('preloader--hide');
//     percents.innerHTML = 100;
//     clearInterval(interval)
//     document.body.classList.remove('body')
// }, 2000)