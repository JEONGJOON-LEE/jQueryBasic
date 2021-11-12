$(() => {
//	class 속성이 menu인 모든 div태그의 자식인 div를 숨긴다.
	$('.menu > div').hide();
	
//	hover(): javascript의 mouseenter, mouseleave 이벤트를 하나의 이벤트로 연결하고 선택된 요소에서 mouseenter, mouseleave 이벤트가
//	발생되었을 때 설정한 함수를 실행한다.
//	mouseenter: 마우스가 선택된 요소 위로 올라오면서 발생되는 이벤트
//	mouseleave: 마우스가 선택된 요소에서 빠져나가면 발생되는 이벤트
//	hover(mouseenter 이벤트가 발생되면 실행할 함수, mouseleave 이벤트가 실행되면 실행할 함수)
	
	$('.menu').hover(
//		mouseenter
		function(){
//			stop(): 선택된 요소에서 실행중인 모든 이펙트 효과를 즉시 중지시킨다.
			$(this).children('div').stop().slideDown();
		},
//		mouseleave
		function(){
			$(this).children('div').stop().slideUp();
		}
	);
}) 