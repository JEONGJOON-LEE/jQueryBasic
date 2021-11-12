$(() => {
//	$('div > p').eq(0).click(function(){
	$('div > p').first().click(function(){
//		$('div > b').eq(0).toggle();
//		$('div > b').first().toggle();
		$('div > b').slice(0,1).css('color', 'chocolate').toggle();
	});
	
	$('div > p').eq(1).click(function(){
//		$('div > b').eq(1).toggle();
//		$('div > b').slice(1,2).toggle();
//		$('div > b').slice(1,2).css('color', 'red');
//		$('div > b').eq(1).css('color', 'red');
//		$('div > b').eq(2).text('기능 연결').toggle();
		
//		end(): 마지막에 실행한 메소드의 실행 전 상태로 선택한 요소의 집합을 복원시킨다.
		$('div > b').eq(1).css('color', 'red').toggle().end().eq(2).text('기능 연결').toggle();
		
	});
	
	$('div > p').eq(2).click(function(){
		$('div > b').slice(1,3).css('color', 'yellowgreen').toggle();
	});
	
//	$('div > p').eq(3).click(function(){
	$('div > p').last().click(function(){
//		$('div > b').eq(3).toggle();
//		$('div > b').slice(3,4).toggle();
		$('div > b').last().css('color', 'hotpink').toggle();
	});
	
	
});









