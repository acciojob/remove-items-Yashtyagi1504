let btn = document.querySelector("#btn");
let select = document.querySelector("#colorSelect");
let option = document.querySelectorAll("option");
btn.addEventListener("click",removeColor);

function removeColor(){
	console.log(select.selectedIndex)
	
	option[select.selectedIndex].remove();
}