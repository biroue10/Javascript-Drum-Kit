// add class key when hit on the instrument
const player = document.getElementsByClassName('key');
Array.from(player).forEach(function(element){
    element.addEventListener('click',(item)=>{
        const element = item.target.parentNode
        element.classList.toggle("playing")
        const code = element.getAttribute('data-key')
        console.log(element)
        console.log(code)
        const audio = document.querySelector(`audio[data-key="${code}"]`)
        console.log(audio)
        audio.play()
    })
})