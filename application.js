$(document).ready(function(){
	var itemStorage = [];

	// Initialize
	// If 'local' is empty, check html
	if (!localStorage.getItem('local')){
		updateItemStorage();
	}
	// else, get items from local storage and draw list
	else {
		$('#master-list').html('');
		var getItems= JSON.parse(localStorage.getItem('local'));
		for (var i in getItems){
			var itemToAdd = getItems[i];
			addItem(itemToAdd);
		}
	}

	$( ".green-box" ).click(function(){
		itemToAdd = $("#item").val();
		addItem(itemToAdd);
	});

	$("#item").keypress(function(e){
		if(e.which == 13){ 
			itemToAdd = $("#item").val();
			addItem(itemToAdd);
			e.preventDefault();
		}
	});

	function updateItemStorage(){
		itemStorage = [];
		$(".item-field").each(function (){
			itemStorage.push($(this).val());
		});
		console.log(itemStorage);
		localStorage.setItem('local', JSON.stringify(itemStorage));
	};

	function addItem(itemToAdd){
		itemStorage.push(itemToAdd);
		localStorage.setItem('local', JSON.stringify(itemStorage));

		var createItem = '<div class="add-item"><div class="red-box"><input type="checkbox" class="checkbox" value""></div><input type="text" class="item-field" value="' + itemToAdd + '"></div>';
		$("#shopping-list").append(createItem);
		$("#item").attr("placeholder", "Add an item").val("");
	}

	$( "#clear" ).click(function(){
		var deleteItem = $("input:checked").closest(".add-item");
		deleteItem.remove();
		updateItemStorage();
	});

	$( "#alphabetize" ).click(function(){
		itemStorage.sort();
		$(".item-field").each(function (index){
			$(this).val(itemStorage[index]);
		});
		updateItemStorage();
	});

});