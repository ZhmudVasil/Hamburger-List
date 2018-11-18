$(document).ready(function() {
	$( ".Location-child" ).hide();
	$( ".Music-child" ).hide();
	$( ".Notes-child" ).hide();
	$( ".Books-child" ).hide();
	$( ".Tendences-child" ).hide();
	
	$( ".Location" ).click(function() {
		$( ".Location-child" ).toggle();
		$( ".Music-child" ).hide();
		$( ".Notes-child" ).hide();
		$( ".Books-child" ).hide();
		$( ".Tendences-child" ).hide();
	});
	
	$( ".Music" ).click(function() {
		$( ".Music-child" ).toggle();
		$( ".Location-child" ).hide();
		$( ".Notes-child" ).hide();
		$( ".Books-child" ).hide();
		$( ".Tendences-child" ).hide();
	});
	$( ".Notes" ).click(function() {
		$( ".Notes-child" ).toggle();
		$( ".Location-child" ).hide();
		$( ".Music-child" ).hide();
		$( ".Books-child" ).hide();
		$( ".Tendences-child" ).hide();
	});
	$( ".Books" ).click(function() {
		$( ".Books-child" ).toggle();
		$( ".Location-child" ).hide();
		$( ".Music-child" ).hide();
		$( ".Notes-child" ).hide();
		$( ".Tendences-child" ).hide();
	});
	$( ".Tendences" ).click(function() {
		$( ".Tendences-child" ).toggle();
		$( ".Location-child" ).hide();
		$( ".Music-child" ).hide();
		$( ".Notes-child" ).hide();
		$( ".Books-child" ).hide();
	});
});