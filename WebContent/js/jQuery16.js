$(() => {
	$('#shuffle').cycle({
	    fx:     'shuffle',
	    easing: 'easeOutBack',
	    delay:  -2000
	});
	
	$('#zoom').cycle({
	    fx:    'zoom',
		sync:  false,
	    delay: -2000
	});
})
