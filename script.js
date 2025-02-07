let btn = document.querySelector("#btn");
let select = document.querySelector("#colorSelect");
btn.addEventListener("click",removeColor);

function removeColor(){	
	let index = select.selectedIndex;
	if(index !== -1){
		select.options[index].remove();
	}
}