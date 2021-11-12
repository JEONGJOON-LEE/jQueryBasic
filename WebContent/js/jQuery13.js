$(() => {
	$('.delete').click( function() {
//		$(this).parent().slideUp('slow');
		$(this).parent().slideUp('slow','easeInOutBounce');
	});
	
	$('#view').click( function() {
//		$('.pane').css('display', 'block');
//		$('.pane').show('slow');
		$('.pane').slideDown('slow');
//		$('.pane').fadeIn('slow');
	});
})