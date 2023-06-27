console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	// console.log('form submit'); PART 2: change console.log to alert
	alert("Form Submitted")
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

//had trouble getting an id to work in the query selector. 
let img1 = document.querySelector('img')
console.log(img1)
img1.addEventListener('mouseover', hoverImage);

function hoverImage(event){
	alert("Finding friends in unlikely places");
}