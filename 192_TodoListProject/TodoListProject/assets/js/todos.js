// Check off Specific Todods by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	////EXAMPLE of code: if you don't want to use jQuery for switch "textDecoration 'line-through'" 
	// //if 'li' is gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	//turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});	
	// }
	// //else
	// else {
	// 	//turn it gray
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});	
	// }
});

//Click on 'X' to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(700, function() { //'this' = 'span'; 'paren' = 'li'
		$(this).remove(); // 'this' = 'li'
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) { // 13 is 'enter'
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new 'li' and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt ''></i></span> " + todoText + "</li>");
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});