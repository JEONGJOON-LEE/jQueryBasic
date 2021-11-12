//	자바스크립트로 주기적인 작업을 실행하기 위해서 setInterval() 함수와 setTimeout() 함수를 사용한다.
//	두 가지는 비숫하지만 중요한 차이점을 가진다.
//	setTimeout(함수, 시간) : 지정된 시간이 지나면 함수를 실행한다.
//	clearTimeout() : setTimeout() 함수를 중지시킨다.
//	setInterval(함수, 시간) : 지정된 시간이 지나면 함수를 반복해서 실행한다.
//	clearInterval() : setInterval() 함수의 실행을 중지시킨다.
//	clearTimeout(), clearInterval() 함수는 실행중인 작업을 중지시키는 것이 아니고 다음 작업 스케줄을 중지시킨다.

$(() => {
//	var count = 0;
	setInterval(() => {
//		console.log('setInterval: ' + ++count);
//		메뉴의 첫번째 이미지를 메뉴의 마지막 이미지로 이동시킨다.
//		appendTo(): 선택된 요소를 인수로 지정한 요소의 마지막에 추가한다.
		$('.active').first().appendTo($('#menu'));
	}, 0.5);
	
	
	$('button').click(() => {
//		start 버튼이 클릭되면 버튼 위의 문자열을 stop으로 변경하고 stop 버튼이 클릭되면 버튼위의 문자열을 start로 변경한다.
		if($('button').text() == 'start'){
			$('button').text('stop');	
		} else {
			$('button').text('start');	
		}
//		start 버튼이 클릭되면 active라는 클래스를 추가하고 이미지 롤링 시작하고 stop 버튼이 클릭되면
//		active라는 클래스를 제거하고 이미지 롤링을 중지한다.
		$('img').toggleClass('active');
	});
});