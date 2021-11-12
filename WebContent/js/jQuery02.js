/*
$(document).ready(function(){
	alert('Hello');
})
$(function(){
	alert('Hello');
})
 */
$(() => {
//	alert('Hello');
//	$('div').eq(0).css({'border' : '2px solid tomato', 'width' : '300px'});
	$('div:eq(0)').css({'border' : '2px solid yellowgreen', 'width' : '300px'});
})

function a1(){
/*
//	var span = document.getElementsByTagName('span');
	var span = document.querySelectorAll('span');
	for(var i = 0; i < span.length; i++){
		span[i].style.color = 'tomato';
	}
*/
//	jQuery에서는 배열형태도 반복문 없이 알아서 처리한다.
	$('span').css('color', 'yellowgreen');
}

function a2(){
	$('#t1').css('color', 'red');
}

function a3(){
	$('.t2').css('color', 'blue');
}

function a4(){
	$('li > span').css('color', 'lime')
}

function a5(){
	$('li span').css('color', 'purple')
}

//	:nth-child(), :nth-last-child()
//	같은 부모 요소를 가지는 형제 요소 중에서 특정 순서에 위치한 요소를 선택하는 선택자
//	:nth-child()는 앞에서부터 카운트, :nth-last-child()는 뒤에서부터 카운트
//	인수로 숫자, 연산식, odd(홀수), even(짝수)도 사용할 수 있다.
function a6(){
//	background-color, backgroundColor, background는 같은 의미로 사용된다.
//	$('li').css('background-color', 'tomato')
//	$('li').css('backgroundColor', 'yellowgreen')
//	$('li').css('background', 'skyblue')
	
//	$('li').eq(0)와 $('li:eq(0)')는 같은 의미로 사용된다.
//	$('li').eq(0).css('background', 'yellow');
//	$('li:eq(0)').css('background', 'lightgray');
	
//	eq(index)는 index가 0부터 시작하고 nth-child(index)는 index가 1부터 시작한다.
//	$('li:nth-child(1)').css('background', 'lime');				// 처음부터 위치 카운트
//	$('li:nth-last-child(1)').css('background', 'purple');		// 마지막부터 위치 카운트
//	$('li:nth-child(odd)').css('color', 'red');					// 홀수 index만 선택한다.
//	$('li:nth-child(even)').css('color', 'blue');				// 짝수 index만 선택한다.
	
//	:nth-child()와 :nth-last-child()는 n을 사용한 연산식으로 선택할 수 있다.
//	n은 자동으로 0부터 1씩 증가하는 정수이고 '+'와 '-'은 연산자를 사용하지만 '*'은 연산자를 사용하지 않는다.
//	=> 2n + 1, 2n - 1 ... 형태의 연산식을 사용할 수 있다.
//	곱셈 연산은 숫자가 'n' 앞에 나와야 한다.
	$('li:nth-child(2n + 1)').css('color', 'red');	//	odd와 똑같이 선택된다.
	$('li:nth-child(2n)').css('color', 'blue');		//	even와 똑같이 선택된다.
	$('li:nth-child(3n)').css('background', 'skyblue');
}

//	first-child : 같은 부모 요소를 가지는 형제 요소 중에서 첫번째 자식 요소만 선택한다.
//	last-child  : 같은 부모 요소를 가지는 형제 요소 중에서 마지막 자식 요소만 선택한다.
function a7(){
	$('li:first-child').css('background', 'yellowgreen');
}

function a8(){
	$('li:last-child').css('background', 'yellowgreen');
}


















