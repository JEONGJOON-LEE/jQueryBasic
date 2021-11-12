$(() =>{
	$('button').eq(0).click(() => {
//		prepend(): 인수로 지정된 요소를 선택된 요소 내부에 첫번째 요소로 추가한다.
//		<div> 태그의 첫번째 요소로 <p> 태그를 넣는다.
//		$('<tag>') : 인수로 지정된 태그를 만든다.
//		$('div').prepend($('<p>')).addClass('prepend'); => 오류 (연산 순서 오류)
		$('div').prepend($('<p>').addClass('prepend').text('prepend'));
	});
	
	$('button').eq(1).click(() => {
//		append(): 인수로 지정된 요소를 선택된 요소 내부에 마지막 요소로 추가한다.
		$('div').append($('<p>').addClass('append').text('append'));
//		태그를 만들어서 넣으면 추가할 수 있고, 태그를 선택해서 넣으면 이동을 시킬 수 있다.
//		$('div').append($('div > p:eq(0)').addClass('append'));
	});
	
	$('button').eq(2).click(() => {
		$('div').html('<marquee>html 요소를 변경한다.</marquee>')
	});
	
	$('button').eq(3).click(() => {
		$('div').text('<marqee>html 요소를 변경한다.</marqee>')
	});
	
	
});