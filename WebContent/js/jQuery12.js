$(() => {  
	$('.run').click(() => {
		$('#box').animate(
			{'left':'400px', 'opacity':'0.1'},
			1000,
			'linear'
		).animate(
			{'top':'360px', 'opacity':'0.6', 'width':'20px', 'height':'20px'},
			'slow',
			'linear'
		).animate(
				{'left':'0px', 'opacity':'0.3', 'width':'150px', 'height':'150px'},
				'fast',
				'linear'
		).animate(
				{'top':'0px', 'opacity':'1.0', 'width':'400px', 'height':'400px'},
				'slow',
				'linear'
		).slideUp()
		
	})
});