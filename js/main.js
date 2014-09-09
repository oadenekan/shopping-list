
var shop = {

	//checkedDiv: $('#checked'),
	
	init: function(){
		$("#checked").on("click", "p input", shop.toRemove);
		$("#checked").on("click", "p button", shop.deleteItem);
		 shop.add();
	},

	add: function() {
		$('#add-btn').click(function() {
			console.log("clicked");
		var selectedItem = $('#electronics').val();
		if(selectedItem != "") {
			shop.check(selectedItem);
			$('#electronics').val("");
		} else {
			alert("Oops! Add an item");
		}
		});
	},
	/*function to show the effect on checkbox*/
	toRemove: function(){
		$clickedCheckbox = $(this);
		if($clickedCheckbox.is(":checked")){
			$clickedCheckbox.parent().css("background-color","#3f8ba9").css("color", "#3b4c5d");
		}
		else
			{
			$clickedCheckbox.parent().css("background-color","#e4d48b").css("color", "#5f3bad");

			}
	},
	/* function to check */
	check: function(selectedItem){	
		$('#checked').append("<p><input type='checkbox'> " + selectedItem + "<button>Delete</button></p>");
	},

	deleteItem: function(){
		$(this).parent().remove();
	}
}

$(document).ready(shop.init);