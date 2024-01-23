const sectionContainer = document.querySelector('.section-container')
const questionsContainers = document.querySelectorAll('.question-container')
const answers = document.querySelectorAll('.answer')
const imgs = document.querySelectorAll('.question img')


questionsContainers.forEach((questionContainer, index) => {
    // asignandole un evento de teclado a cada contenedor de pregunta
    // esto es posible gracias a que cada contenedor ya tiene el foco
    // cuando se agrega la propiedad tabindex en el html
    questionContainer.addEventListener('keydown', (e) => {
        console.log(questionContainer, index, e.key);
        if(e.key === 'ArrowDown'){
            if(index >=questionsContainers.length-1){
                return
            }
            questionsContainers[index+1].focus()
        }
        else if(e.key === 'ArrowUp'){
            if(index <=0){
                return
            }
            questionsContainers[index-1].focus()
        }

        else if (e.key === 'Enter'){
            visibilityAnswer(index)
        } 
       
        
    })
});


questionsContainers.forEach((questionContainer, index) => {
    questionContainer.addEventListener('click', (e) => {  
        visibilityAnswer(index)   
    })
})


function visibilityAnswer(index) {
    console.log(index);
    let response =  answers[index].classList.toggle('hidden')
    console.log(response);
    imgs[index].setAttribute('src', response ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg')
}


/* nota sobre document.activeElement, esta propiedad verifica que elemento
   tiene el foco, y por lo tanto asignarle algun evento interactivo 
*/
