// add class key when hit on the instrument
const player = document.getElementsByClassName('key');
Array.from(player).forEach(function(element){
    element.addEventListener('click',(item)=>{
        const element = item.target.parentNode
        element.classList.toggle("playing")
        const code = element.getAttribute('data-key')
        const audio = document.querySelector(`audio[data-key="${code}"]`)
        audio.play()
    });
    function removeTransition(e){
        if(e.propertyName!='transform') return;
        this.classList.remove('playing')
    }
    element.addEventListener('transitionend', removeTransition);
})