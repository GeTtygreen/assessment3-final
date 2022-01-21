console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('i just told them what you said ')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
//image message alert 

// function picMessage(evt){
// 	evt.preventDefault();

// 	alert('HEY I JSUT WANT YOU TO KNOW YOU LOOK AMAZING')
// }

let image = document.getElementById('garfield')
image.addEventListener('mouseover',()=>{
	alert('HEY I JUST WANT YOU TO KNOW YOU LOOK AMAZING')
});