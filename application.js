$(document).ready(function(){
	$( ".green-box" ).click(function(){
		addItem();
	});

	$("#item").keypress(function(e){
		if(e.which == 13){ //if Enter key is pressed
			addItem();
			e.preventDefault();
		}
	});

	function addItem(){
		itemToAdd = $("#item").val();
		var createItem = '<div class="add-item"><div class="red-box"><input type="checkbox" class="checkbox" value""></div><input type="text" class="item-field" value="' + itemToAdd + '"></div>';
		$("#shopping-list").append(createItem);
		$("#item").attr("placeholder", "Add an item").val("");
	}

	$( "#clear" ).click(function(){
		$("input:checked").closest(".add-item").hide('slow');
	});

	$( "#alphabetize" ).click(function(){
		var itemsArray = [];

		$(".item-field").each(function (){
			itemsArray.push($(this).val());
		});

		var sortedArray = itemsArray.sort();
		$(".item-field").each(function (index){
			$(this).val(itemsArray[index]);
		});
	});

});