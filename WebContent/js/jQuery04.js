//	input 요소의 선택
//	:button 	: type 속성이 'button'인 모든 요소를 선택한다.
//	:checkbox 	: type 속성이 'checkbox'인 모든 요소를 선택한다.
//	:file 		: type 속성이 'file'인 모든 요소를 선택한다.
//	:image 		: type 속성이 'image'인 모든 요소를 선택한다.
//	:password   : type 속성이 'password'인 모든 요소를 선택한다.
//	:radio 		: type 속성이 'radio'인 모든 요소를 선택한다.
//	:reset 		: type 속성이 'reset'인 모든 요소를 선택한다.
//	:submit	    : type 속성이 'submit'인 모든 요소를 선택한다.
//	:text 		: type 속성이 'text'인 모든 요소를 선택한다.
//	:checked 	: type 속성이 'checkbox' 또는 'radio'인 요소 중에서 체크된 모든 요소들를 선택한다.
//	:selected 	: option 요소 중에서 선택된 모든 요소들를 선택한다.
//	:focus 		: 현재 포커스를 가지고 있는 요소를 선택한다.
//	:disabled	: 비활성화 되어있는 모든 요소를 선택한다.
//	:enabled 	: 활성화 되어있는 모든 요소를 선택한다.

function choice(){
	/*
//	javascript
	var docs = document.getElementsByTagName('input');
	console.log("'input'태그의 개수: " + docs.length);
	console.log(docs[0].value);
//	javascript는 value 속성을 사용해서 ~~~~.value 형태로 값을 얻어오고 ~~~~.value = '값' 형태로 값을 저장한다.
//	var doc = document.getElementsByTagName('input')[0];
//	doc.value = '임꺽정';
	docs[0].value = '장길산';
	*/

//	jQuery는 value대신 val() 메소드를 사용해서 ~~~~.val() 형태로 값을 얻어오고 ~~~~.val('값') 형태로 값을 저장한다.
//	아래와 같이 사용하면 input 태그의 type 속성의 값이 text인 요소가 여러개 있더라도 첫번째 요소의 값만 얻어올 수 있다.
//	var docs = $('input:text').val()
//	console.log(docs.length);
//	console.log(docs);
	
//	var docs = $('input:text');
//	console.log(docs.length);
//	console.log(docs);
//	console.log(docs.value);		//undefined
//	console.log(docs[0].value);		
//	console.log(docs[1].value);	
	
	var text1 = $('input:text').eq(0);
	console.log(text1.val());		
	var text2 = $('input:text').eq(1);
	console.log(text2.val());		
}

function choice2(){
//	var doc = document.getElementsByTagName('input')[3];
//	console.log(doc.value);
//	document.getElementById('a').innerHTML = '<h1>' + doc.value + '</h1>'; 
//	document.getElementById('a').innerText = '<h1>' + doc.value + '</h1>'; 
//	document.getElementById('a').textContent = '<h1>' + doc.value + '</h1>'; 
	
//	var doc = $('input:radio').val();
	var doc = $('input:radio').eq(0).val();
//	var doc = $('input:radio:eq(0)').val();
//	console.log(doc);
	
//	javascript는 innerHTML, innerText를 사용해서 태그 내부에 텍스트를 넣어주고, jQuery는  html(), text()메소드로 태그 내부에 텍스트를 넣어준다.
//	html() = innerHTML => html 태그 지원
//	text() = innerText => html 태그 지원X
	$('#a').html('<h1>' + doc + '</h1>')
//	$('#a').text('<h1>' + doc + '</h1>')
}

function choice3(){
	var doc = $('input:checkbox:eq(0)').val();
	console.log(doc);
	$('#a').text('<h1>' + doc + '</h1>')
}

//$(document).ready(function (){ });
//$(function (){ });
$(() => { 
	/*
	var selEle = document.getElementsByTagName('select')[0];
//	selEle.onchange = function(){
	selEle.onchange = () => {
//		selectedIndex: 콤보 박스에서 선택된 option 항목의 index를 얻어온다.
//		console.log(selEle.selectedIndex);
		
//		options: 콤보 박스의 <option>태그에 입력된 항복을 배열 형태로 기억하는 객체 
		console.log(selEle.options);
		console.log(selEle.options[selEle.selectedIndex]);
		console.log(selEle.options[selEle.selectedIndex].value);
		var doc = document.getElementsByTagName('input')[0];
		doc.value = selEle.options[selEle.selectedIndex].value;
	}
	*/
	
//	javascript는 onclick, onchange와 같이 이벤트가 'on'으로 시작하지만, jQuery는 앞에 'on'을 붙이지 않는다.
//	$('select:eq(0)').change(function() => {
	$('select:eq(0)').change(() => {
//		console.log('select 태그의 change 이벤트가 실행')
//		0번째 index의 select태그를 찾아서 자식요소 option태그 중에서 선택된 모든 요소를 얻어온다.
		var selValue = $('select:eq(0) > option:selected').val();
		console.log(selValue);
		$('input:text').eq(0).val(selValue);
	});

	$('input[name=gender]').click(() => {
		console.log('radio 버튼에서 click 이벤트 실행')
		chkValue = $('input[name=gender]:checked').val()
		console.log(chkValue);
		$('input:text').eq(1).val(chkValue);
	})
	
});
































