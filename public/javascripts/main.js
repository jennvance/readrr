$(document).ready(function(){

	// $('.edit').hide();

	//Listen for click on button #editprofile
	$('#editprofile').click(function(){

		$('.field').toggleClass('edit');
		$('.profilevalue').hide();
		// $('.edit').show();
	});

	$('#profileForm').on('submit', function(e){
		e.preventDefault();
		$('.field').toggleClass('edit');
		$('.profilevalue').show();

		function Profile(name, city, favoritebook){
			this.name = name;
			this.city = city;
			this.favoritebook = favoritebook;
		}

		var profileName = $('input[name="name"]').val()
		var profileCity = $('input[name="city"]').val();
		var profileBook = $('input[name="favoritebook"]').val();

		var newProfile = new Profile(profileName, profileCity, profileBook);

		console.log(newProfile);

		var renderFormInDom = function(){
			$('#a').html(profileName);
			$('#b').html(profileCity);
			$('#c').html(profileBook);
		}

		$.ajax({
			url: '/profilesubmit',
			type: 'POST',
			data: newProfile,
			// context: document.body,
			success: function(){
				console.log("Hooray!");
				// $('.edit').hide();
				renderFormInDom();

			}
		})

	})

		$(".row:nth-child(1)").css("background-color", "blue");

		$("div").each(console.log($(this)));


})




 