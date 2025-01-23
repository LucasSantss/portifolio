const projects = document.querySelectorAll('.projects');
const sidebar = document.querySelector('.projects');
const cards = document.querySelectorAll('.card');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

projects.forEach((item, i) =>{
    let containerDimencao = item.getBoundingClientRect();
    let containerWidth = containerDimencao.width;

    nxtBtn[i].addEventListener('click',() => {
        item.scrollLeft += containerWidth;
    }) 

    preBtn[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth;
    }) 
})


function handleScroll() {
    const sidebarRect = sidebar.getBoundingClientRect();

    cards.forEach(card => {
    const cardRect = card.getBoundingClientRect();
         if (cardRect.left < sidebarRect.left + 0 || cardRect.right > sidebarRect.right - 0) {
          card.classList.add('fade-out');
        } else {
          card.classList.remove('fade-out');
        }
    });
}


sidebar.addEventListener('scroll', handleScroll);


const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    }))
    console.log(entries)
})
const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))
