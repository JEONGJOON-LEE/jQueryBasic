$(() => {
	$('#btn1').click(() => {
//		$('<tag>')는 태그를 만든다
//		태그를 만들고 태그에 데이터를 2번째 {}로 묶어서 넣어준다.
//		jQuery에서 사용할 태그 변수는 앞에 '$'를 붙여서 만든다.
		var $tr = $('<tr>', {});
		var $td1 = $('<td>', {text:'방법1'});
		var $td2 = $('<td>', {text:'방법1'});
		var $td3 = $('<td>', {text:'방법1'});
		var $td4 = $('<td>', {text:'방법1'});
		$tr.append($td1);
		$tr.append($td2);
		$tr.append($td3);
		$tr.append($td4);
		$('tbody').append($tr);
	});
	
	$('#btn2').click(() => {
//		template literals: 템플릿 리터럴은 여러줄로 이루어진 문자열을 허용하는 문자열 리터럴이다.
//		내장된 표현식은 '${' 와 '}' 사이에 변수 이름을 입력하면 변수에 저장된 데이터가 템플릿 리터럴에 삽입된다.
//		템플릿 리터럴은 작은따옴표가 아닌 그레이브(`)를 사용해서 만든다.
		var str = '내장된 표현식';
		var html = `
		<tr>
			<td>${str}</td>
			<td>방법2</td>
			<td>방법2</td>
			<td>방법2</td>
		</tr>`;
		$('tbody').append(html);
	});
});










