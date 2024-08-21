// create variable to target the accordion container
const accordion = document.getElementsByClassName('content-container')
// loop through the accordion questions and answers
for (i = 0; i < accordion.length; i++){
    // index [i] and add eventlistener
    accordion[i].addEventListener('click', function () {
        // the "this" keyword refers to the DOM element that receives the event when it is used in an evenListener
        this.classList.toggle('active')
    })
}