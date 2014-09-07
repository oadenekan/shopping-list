function add() {
	var selectedItem = document.getElementById('electronics').value;
	if(selectedItem != "") {
		check(selectedItem);
		document.getElementById('electronics').value  = "";
	} else {
		alert("You must select an item");
	}
}

/* function to check */
function check(selectedItem){
	var checkedDiv = document.getElementById('checked');	
	/*var children = checkedDiv.getElementsByTagName("p");
	var itemNo = 0;
	if(children != null && children.length != 0) {
		var lastChild = children[children.length-1];
		var lastChildId = lastChild.getAttribute("id");
		itemNo = parseInt(lastChildId.split("-")[1]) + 1;
	}*/
	checkedDiv.innerHTML += "<p>" + selectedItem + "<input type='checkbox' onclick='uncheckAndRemove(this, \""+selectedItem+"\")'></p>";
}

function checkAndRemove(clickedElement, selectedItem){
	clickedElement.parentNode.remove();
	check(selectedItem);
}

function uncheckAndRemove(clickedElement, selectedItem) {
	clickedElement.parentNode.remove();
	var uncheckedDiv = document.getElementById('unchecked');
	uncheckedDiv.innerHTML += "<p>" + selectedItem + "<input type='checkbox' onclick='checkAndRemove(this, \""+selectedItem+"\")'></p>";
}
