/* SLIDER BEGIN */
let slider = document.querySelector('#slider');
let sliderItem = slider.querySelectorAll('.slider-item');
let sliderArrowLeft = document.getElementById('slider-arrow-left');
let sliderArrowRight = document.getElementById('slider-arrow-right');

sliderArrowLeft.addEventListener("click", event => {
    event.preventDefault();

    let prev = 0;
    sliderItem.forEach((item, index) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');

            prev = index - 1;
        }
    });

    if (prev < 0) {
        sliderItem[0].classList.add('active');
        return;
    }

    sliderItem[prev].classList.add('active');
}, false);

sliderArrowRight.addEventListener("click", event => {
    event.preventDefault();

    let next = 0;
    sliderItem.forEach((item, index) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');

            next = index + 1;
        }
    });

    if (next >= sliderItem.length) {
        sliderItem[sliderItem.length - 1].classList.add('active');
        return;
    }

    sliderItem[next].classList.add('active');
}, false);
/* SLIDER END */
