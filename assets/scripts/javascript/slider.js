const sliderPost = document.querySelectorAll('.slider__item');
const button = document.querySelectorAll('.slider-btn');

// console.log(sliderPost);
// console.log(button);


let postIndex = 1;

function slider(index) {
    sliderPost[postIndex].classList.remove('active');
    sliderPost[index].classList.add('active');
    postIndex = index;
}

button.forEach((e) => {
    e.addEventListener('click', () => {

        if(e.classList.contains('left')) {
            let index = postIndex - 1;
            
            if(index < 0 ) {
                index = sliderPost.length - 1;
            }

            slider(index);
        } 

        if(e.classList.contains('right')) {
            let index = postIndex + 1;
            
            if(index >= sliderPost.length ) {
                index = 0;
            }

            slider(index);
        } 


    })
})

slider(sliderPost);