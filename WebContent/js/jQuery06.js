//$(document).ready(function(){
//$(function(){
$(() => {
//	class 속성이 error로 지정된 에러 메시지를 숨긴다.
	$('.error').hide();
	
//	id속성이 single로 지정된 form에서 submit버튼이 클릭되면 실행할 이벤트를 지정한다.
	$('#single').submit(() => {
		console.log('submit 이벤트 실행')
//		form의 유효성을 검사해서 오류가 발생되면 false를 러턴시켜 action 페이지로 넘어가지 않게 하고 오류가 발생되지 않으면 
//		true를 리턴시켜 action 페이지로 넘어가게 한다.
		var userid = $('#infoBox').val().trim();
		console.log(userid)
		if(userid == null || userid == ''){
			$('#infoBox').val('');
			$('#infoBox').focus();
			$('.error').show();
			return false;
		}
		return true;
	});
	
//	전체선택 체크 박스가 클릭되면 모든 체크 박스를 체크 또는 해제한다.
	$('input[name=all]').click(() =>{
		console.log('전체선택 체크 박스 클릭')
		var checked = $('input[name=all]').prop('checked');
		console.log(checked)
		/*
		$('input[name=chk]').each(function(index){
//			$('input[name=chk]').eq(index).prop('checked',checked);
			$(this).prop('checked', checked);
		})
		*/
		$('input[name=chk]').prop('checked', checked);
	});
	
//	name 속성이 chk인 체크박스가 클릭되면 모든 체크 박스가 체크되었나 검사해서 전체 선택 체크박스를 선택 또는 해제한다.
	$('input[name=chk]').click(() => {
//		name속성 값이 chk인 요소의 개수와 name 속성값이 chk인 요소 중에서 체크된 요소의 개수를 비교한다.
//		console.log('name 속성값이 chk인 요소의 개수: ' + $('input[name=chk]').length);
//		console.log('name 속성값이 chk인 요소 중에서 체크된 요소의 개수: ' + $('input[name=chk]:checked').length);
		if($('input[name=chk]').length == $('input[name=chk]:checked').length){
//			console.log('모두 선택됌');
//			모든 체크박스가 체크되면 name 속성이 all인 요소의 checked 프로퍼티를 true로 변경한다.
			$('input[name=all]').prop('checked',true);
		} else {
			console.log('모두 선택되지않음');
//			모든 체크박스가 체크되지않으면 name 속성이 all인 요소의 checked 프로퍼티를 false로 변경한다.
			$('input[name=all]').prop('checked',false);
		}
	});
	
//	체크 박스를 선택하고 확인 버튼을 클릭하면 체크 여부를 확인해서 그 결과를 id 속성이 result로 지정된 div태그 내부에 출력한다.
	$('#confirm').click(() => {
//		console.log('확인 버튼 click 이벤트 실행')
//		선택된 과일 가격이 표시될 div태그 내부의 내용을 지워준다.
//		$('#result').html('');
//		$('#result').text('');
//		emty(): 선택된 요소 내부의 내용을 지운다.
		$('#result').empty();
		
//		name 속성으로 chk가 지정된 체크 박스에 체크된 항목 개수를 검사한다.
		var count = $('input[name=chk]:checked').length;
		if(count == 0){
			alert('과일을 1개 이상 선택해주세요!!');
//			$('#result').text('과일을 1개 이상 선택해 주세요!!').css('color', 'red')
//			$('#result').html('<b style="color:blue"> 과일을 1개 이상 선택해 주세요!!</b>');
//			append(): 선택된 요소에 입력된 문자열을 추가한다. html() 메소드처럼 태그가 적용된다.
			$('#result').append('<b style="color:yellowgreen"> 과일을 1개 이상 선택해 주세요!!</b>');
		} else {
			$('input[name=chk]:checked').each(index => {
//				console.log(index)
//				체크된 체크 박스 중에서 index에 해당되는 요소 1개를 얻어온다.
				var chk = $('input[name=chk]:checked').eq(index);
//	형제(sibling) 요소 탐색
//	.siblings() : 선택된 요소의 형제 요소 중에서 지정한 선택자에 해당되는 모든 요소를 선택한다.
//	.next() : 선택된 요소 바로 다음에 위치한 형제 요소 1개를 선택한다.
//	.nextAll() : 선택된 요소 바로 다음에 위치한 형제 요소를 모두 선택한다.
//	.nextUntil() : 선택된 요소 바로 다음에 위치한 형제 요소 중에서 지정한 선택자에 해당되는 요소 바로 이전까지의 요소를 모두 선택한다.
//	.prev() : 선택된 요소 바로 이전에 위치한 형제 요소 1개를 선택한다.
//	.prevAll() : 선택된 요소 바로 이전에 위치한 형제 요소를 모두 선택한다.
//	.prevUntil() : 선택된 요소 바로 이전에 위치한 형제 요소 중에서 지정한 선택자에 해당되는 요소 바로 다음까지의 요소를 모두 선택한다.

				
				console.log(chk);				//	input 태그
				console.log(chk.next());		//	input 태그의 다음 형제인 b태그 
				console.log(chk.next().text());	//	과일 이름 
				console.log(chk.val());			//	과일 가격
				$('#result').append('과일 이름: ' + chk.next().text() + ', 가격: ' + chk.val() + '원<br>')
			});
		}
	});
	
})
















































