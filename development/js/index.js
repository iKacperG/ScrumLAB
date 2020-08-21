// Logic for carousel

const textDiv = document.querySelector('.carousel-text');
const hDiv = document.querySelector('.carousel-text > h2');
const pDiv = document.querySelector('.carousel-text > p');
// Some texts that change between each other
let hTexts = ['Lorem ipsum', 'Dolor sit', 'Amet sequuntur'];
let pTexts =
    [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, numquam!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, sequi.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, voluptatum.'
    ]

// Carousel switches between values passed to data-counter in html
const carouselSwitch = () => {
    hDiv.innerText=hTexts[parseInt(textDiv.dataset.counter)];
    pDiv.innerText=pTexts[parseInt(textDiv.dataset.counter)];

}


const carouselChoice = () => {
carouselSwitch()  // Adds first text
   // Added strictly for 3 elems in array ----> TODO changing values based on array length
    document.querySelector('.carousel-rightclick').addEventListener('click', function () {
        textDiv.dataset.counter++
        if (textDiv.dataset.counter < 0) {
            textDiv.dataset.counter = '2';
        } else if (textDiv.dataset.counter > 2) {
            textDiv.dataset.counter = '0';
        }
        carouselSwitch();
    })
    document.querySelector('.carousel-leftclick').addEventListener('click', function () {
        textDiv.dataset.counter--
        if (textDiv.dataset.counter < 0) {
            textDiv.dataset.counter = '2';
        } else if (textDiv.dataset.counter > 2) {
            textDiv.dataset.counter = '0';
        }
        carouselSwitch();
    })

}


carouselChoice();


