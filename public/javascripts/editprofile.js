$('#showForm').on('click', function(){
	$('#profile').toggle(function(){
		
	})
	$('#profile').toggleClass('showhide');
	if($('#profile').hasClass('showhide')){
		$('#showForm').text('SHOW FORM');
	} else {
		$('#showForm').text('HIDE FORM');
	}

})

$('#profile input, #profile textarea').on('input', function(){
	//Grab value of input field
	var formfield = $(this).val();
	//grab ID of element that current input field will be rendered in
	var targetId = $(this).attr('data-target');
	//turn the data-target into the correct ID by prepending hash to the name of the ID
	var targetElement = $('#' + targetId);
	//Find the element with an ID matching the current input field and render in that element 
	targetElement.text(formfield);
})



var renderFormInDom = function(){
	var name = document.getElementById('name').value;
	var bio = document.getElementById('bio').value;
	var books = document.getElementById('books').value;
	var libs = document.getElementById('libs').value;
	$('#username').html(name);
	$('#userbio').html(bio);
}

$('#profile').on('submit', function(e){
	e.preventDefault();
	renderFormInDom();
	// $('#profile')[0].reset();
})