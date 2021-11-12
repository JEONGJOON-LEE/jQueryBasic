$(() => {
//	input 태그 중에서 type이 text인 요소를 선택해서 배경색 지정하기
	/*
//	var obj = document.getElementsByTagName('input');
	var obj = document.querySelectorAll('input');
	console.log(obj.length);
	for(var i = 0; i < obj.length; i++){
//		getAttribute(): 인수로 지정된 속성의 속성값을 얻어온다.
		if(obj[i].getAttribute('type') == 'text'){
			obj[i].style.backgroundColor = 'yellowgreen';
		}
	} 
	*/
	
//	var obj = document.querySelectorAll('input[type=text]');
//	console.log(obj.length);
//	for(var i = 0; i < obj.length; i++){
//		obj[i].style.backgroundColor = 'hotpink';
//	} 
	
//	$('input:text').css('background','skyblue');
	$('input[type=text]').css('backgroundColor','lightgray');
	
//	select 태그의 name 속성이 email인 요소에서 change 이벤트가 발생되면 선택된 목록의 value를 name 속성이 addr인 텍스트 상자에 넣어준다.
/*
//	var email = document.querySelector('select[name=email]')
	var email = document.querySelectorAll('select[name=email]')[0];
//	email.onchange = function(){
	email.onchange = () => {
		var emailValue = email.options[email.selectedIndex].value;
		console.log(emailValue);
		var addr = document.querySelectorAll('input[name=addr]')[0];
		addr.value = emailValue;
	}
*/
	
	$('select[name=email]').eq(0).change(function() {
//	$('select[name=email]:eq(0)').change(() => {
//		console.log('콤보 박스에서 change 이벤트가 실행');
//		var email = $('select[name=email]:eq(0) > option:selected').val();
//		console.log(email);
//		$('input[name=addr]:eq(0)').val(email);
		
//		콤보 박스는 한번에 한 개만 선택되기 때문에 $('select[name=email]:eq(0) > option:selected')와 $(this)는 같은 의미로 사용된다.
//		$(this)는 arrow function을 사용할 때는 동작되지 않음에 주의한다.
		console.log($(this).val());
		$('input[name=addr]:eq(0)').val($(this).val());
	});
	
	/*
//	체크 박스를 체크(클릭)하면 체크된 목록을 출력한다.
	var hobby1 = document.getElementsByName('hobbies')[0];
	hobby1.onclick = () => {
		hobbyCheck();
	};
	var hobby2 = document.getElementsByName('hobbies')[1];
	hobby2.onclick = () => {
		hobbyCheck();
	};
	
	var hobby3 = document.getElementsByName('hobbies')[2];
	hobby3.onclick = () => {
		hobbyCheck();
	};
	*/
	
//	$('input:checkbox[name=hobbies]').click(function(){
	$('input:checkbox[name=hobbies]').click(() => {
		console.log('checkbox 클릭됨');
		var str = '';
		
//		each(): 선택된 요소들의 인덱스를 0부터 1씩 증가시키며 차례대로 함수의 인수로 전달하며 반복한다.
//		함수의 첫번째 인수로 인덱스가 넘어가고 두번째 인수로 인덱스에 해당되는 객체가 넘어간다.
//		$('input:checkbox[name=hobbies]:checked').each(function(index){
//		$('input:checkbox[name=hobbies]:checked').each((index) => {
//		arrow 함수의 인수가 1개일 경우 인수를 묶는 ()를 생략할 수 있다.
		$('input:checkbox[name=hobbies]:checked').each(index => {
//			console.log(index);
			str += $('input:checkbox[name=hobbies]:checked').eq(index).val() + ' ';
		});
		console.log(str.length == 0 ? '없음' : str);
	})
	
});

function hobbyCheck() {
	var hobbies = document.getElementsByName('hobbies');
	var str = '';
	for (var i = 0; i < hobbies.length; i++){
		if(hobbies[i].checked) {
			str += hobbies[i].value + ' ';
		}
	}
	
//	if(str.length == 0){
//		console.log('없음');
//	} else {
//		console.log(str);
//	}
	console.log(str.length == 0 ? '없음' : str);
}




















