const Decrement = document.querySelector('.decrement')
const Increment = document.querySelector('.increment')
const counterValue = document.querySelector('.counter-value')
const Reset = document.querySelector('.reset')
let counter = 0

Reset.addEventListener('click',()=>{
	counter = 0
		counterValue.innerHTML = counter

})

 Decrement.addEventListener('click',() =>{
     counter--
     counterValue.innerHTML =counter
 })


 Increment.addEventListener('click',() =>{
 counter++
 counterValue.innerHTML = counter
 })
