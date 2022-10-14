const section = document.querySelectorAll('.section');
const linkBtns = document.querySelectorAll('.links');
const linkBtn = document.querySelectorAll('.link');
const allSections = document.querySelector('.main_content');

function PageLoad() {
    //Buttons click active class
    for (let i = 0; i < linkBtn.length; i++){
        linkBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.activeBtn');
            currentBtn[0].className = currentBtn[0].className.replace('activeBtn', '');
            this.className += " activeBtn";
          
        })
     }
}

 // sections active
 allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        //remove selected from the other btns
        linkBtns.forEach((btn) =>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        //hide other sections
        section.forEach((section) =>{
            section.classList.remove('active')
        })
        const element =document.getElementById(id)
        element.classList.add('active')
    }
})

PageLoad()