$(document).ready(function() {
		
	$('.popup__open').on('click', function(event) {
		event.preventDefault();
		var popup = $(this).attr('href');
		closePopup('.popup')
		openPopup(popup);
	});

	$('.popup__close').on('click', function(event) {
		event.preventDefault();
		var popup = $(this).attr('href');
		closePopup(popup);
	});

	function openPopup(popup) {
		$(popup).css({'display': 'block'});
		$('body').addClass('ohidden');
	}

	function closePopup(popup) {
		$(popup).css({'display': 'none'});
		$('body').removeClass('ohidden');
	}

	$(document).click(function(event) {
		if (!$(event.target).closest('.popup__wrapper, .popup__open').length) {
			closePopup('.popup')
		}
	});

});