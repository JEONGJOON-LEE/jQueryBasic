$(() => {
//	$('div').find('b').css({'font-size' : '30px', 'color' : 'purple'});
	$('div b').css({'font-size' : '30px', 'color' : 'white'});
	
//	$('#chd').text('손오공');
	$('div').children('#chd').text('사오정');
	
//	$('span').css('background', 'skyblue');
	$('span').parent().css('background', 'skyblue');
	$('span').parents('div').css('background', 'hotpink');
	
	$('p').eq(2).next().css('background', 'lime')
	$('p').eq(2).prev().css('background', 'yellowgreen')
	
});