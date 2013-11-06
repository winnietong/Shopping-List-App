$(document).ready(function(){
	$( ".green-box" ).click(function(){
		itemToAdd = $("#item").val();
		var createItem = '<div class="add-item"><div class="red-box"><input type="checkbox" class="checkbox" value""></div><input type="text" class="item-field" value="' + itemToAdd + '"></div>'
		$("#shopping-list").append(createItem);
	});

	$( "#clear" ).click(function(){
		$("input:checked").closest(".add-item").remove();
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