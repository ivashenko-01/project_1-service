const consultationButton = document.getElementById('consultation-button')

consultationButton.addEventListener('click', () =>{
    alert('В разработке');
})

const scrollButton = document.getElementById('return')

scrollButton.addEventListener('click', () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


