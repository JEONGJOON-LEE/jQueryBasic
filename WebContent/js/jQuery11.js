$(() => {
	
//	$('선택자').이벤트(실행할 함수)
//	$('p').click(function(){});
//	$('선택자').bind('이벤트', 실행할 함수): jQuery 이벤트에 함수를 연결한다.
	$('p').bind('click', function(){
//		클릭한 <p> 태그의 배경색을 변경한다.
//		$(this).css('backgroundColor', 'yellow');
//		클릭한 <p> 태그를 제외한 나머지 형제 노드를 선택해서 배경색을 흰색으로 변경한다.
//		$(this).siblings('p').css('backgroundColor', 'white');
		
//		위의 코드가 동작되지 않으면 아래와 같이 코딩한다.
		var ele = $(this);
		ele.css('backgroundColor', 'hotpink');
		$(this).siblings('p').css('background', 'white');

//		contains(): 인수로 지정된 문자열을 포함하면 true, 포함하지 않으면 false를 리턴한다.
//		if($(this).is('p:contains(hide)')){
//			$('#img').hide()
//		}
		
		var commend = $(this).text();
		console.log(commend);
//		if (commend == 'hide()'){
//			$('#img').hide();
//		} else if (commend == 'show()'){
//			$('#img').show();
//		} else if (commend == 'toggle()'){
//			$('#img').toggle();
//		} else if (commend == 'slideUp()'){
//			$('#img').slideUp();
//		} else if (commend == 'slideDown()'){
//			$('#img').slideDown();
//		} else if (commend == 'slideToggle()'){
//			$('#img').slideToggle();
//		} else if (commend == 'fadeOut()'){
//			$('#img').fadeOut();
//		} else if (commend == 'fadeIn()'){
//			$('#img').fadeIn();
//		} else if (commend == 'fadeToggle()'){
//			$('#img').fadeToggle();
//		} 
		
		switch(commend){
		case 'hide()' :
			$('#img').hide();
			break;
		case 'show()' :
			$('#img').show();
			break;
		case 'toggle()' :
			$('#img').toggle();
			break;
		case 'toggle()' :
			$('#img').toggle();
			break;
		case 'slideUp()' :
			$('#img').slideUp();
			break;
		case 'slideDown()' :
			$('#img').slideDown();
			break;
		case 'slideToggle()' :
			$('#img').slideToggle();
			break;
		case 'fadeOut()' :
			$('#img').fadeOut();
			break;
		case 'fadeIn()' :
			$('#img').fadeIn();
			$('#img').fadeTo(1000, 1.0);
			break;
		case 'fadeToggle()' :
			$('#img').fadeToggle();
			break;
			
		case 'fadeTo()' :
//			fadeTo(재생시간, 투명도): fade 효과에서 사용하는 opacity 속성값을 직접 설정한다.
//			fadeTo() 메소드가 실행되서 투명도가 변경되면 변경된 투명도를유지하면서 표시되기 때문에
//			투명도를 다시 1로 설정하는 처리가 필요하다.
			$('#img').fadeTo(1000, 0.2);
			break;
			
		case 'Animation' :
			$('#img').animate(
				{'width':'300px', 'height':'300px', 'left':'600px', 'top':'300px'},
				1000,
				'linear'
			);
			
//			clone() 메소드로 선택한 요소를 복사해서 새로운 요소를 생성한다.
			var img2 = $('#img').clone().attr('id', 'img2').attr('src', './images/img02.jpg');
			$('#img').after(img2)
			
			$('#img2').animate(
				{
					'width':'300px',
					'height':'300px',
					'left':'350px',
					'top':'200px',
					'opacity':'0.5'
				},	
				1000,
				'linear'
			);
			break;
		}
		
	});	// <p>태그 클릭 이벤트 끝
});

//	animate() 메소드로 여러 css 스타일을 이용해서 사용자 이팩트를 정의할 수 있다.
//	$('선택자').animate(스타일[, 재생시간][, '속도함수'][, 콜백함수])
//	[]안의 내용은 생략할 수 있지만, 앞의 기능을 생략하면 뒤의 기능을 사용할 수 없다.
//	스타일: 이펙트를 구성할 css 스타일 속성을 지정한다.
//	재생시간: 이펙트가 지속될 시간을 밀리초 단위로 지정한다.
//	속도함수: 이펙트의 시간당 속도를 지정한다.
//		=> swing: 시작 부분과 끝 부분에서는 천천히 움직이고 중간에 빠르게 움직인다.
//		=> linear: 시작 부분, 끝 부분, 중간 부분 구분없이 일정한 속도로 움직인다.
//	콜백함수: 이펙트 동작이 완료된 후 실행할 함수를 구현한다.

$('h2').click(() => {
	$('p').show();
	$('p').each(function(index) {
//		console.log(index);
		$(this).animate(
			{'top' : 45 * (index + 1) + 'px'},	//스타일
			500,		// 재생시간
			'linear',	// 속도함수
			function(){
				console.log('animate() 메소드가 종료된 후 콜백 함수가 실행된다.')
			}
		);
	});
});





















