$(() => {
	$('#emp_search').click(() => {
//	조회할 사원 번호를 얻어온다.
		var empid = $('input[name=empid]').val();
//		console.log(empid);
//		3자리 숫자만 입력받는다.
		if(!isNaN(empid) && empid.length === 3){
//			=============================jQuery Ajax===============================
			$.ajax({
				url: 'emplist.xml',	// 호출할 페이지의 주소 또는 읽어올 xml 파일이름
//				cache: false,		// 사용자 캐시 사용 여부
				method:	'get',		// 서버에 데이터를 전송하는 방식
				asyn: true,			// 비동기 방식을 사용한다.(false는 동기 방식을 의미한다.)
				dataType: 'xml',	// 전송받는 데이터 타입을 적는다.(xml, json, html, script)
//				data: {				// method가 post일 경우 서버로 전송할 데이터
//					'key':'value'
//				},
//				success는 ajax가 성공했을 때 실행할 콜백 함수로 응답받은 데이터가 함수의 인수(data)로 넘어온다.
				success: data => {
//					alert('성공');
//					console.log('data: ' + data);
					
//					입력한 사원 번호에 해당되는 모든 데이터를 출력해야 하기 때문에 검색한 사원 번호의 부모 요소를 선택한다.
					var empInfo = $(data).find('EMPLOYEE_ID:contains(' + empid +')').parent();
//					console.log(empInfo);
					
//					검색된 사원 번호에 해당되는 데이터가 있으면 화면에 출력한다.
					if($(empInfo).is('ROW')){
						
//						table 태그의 자손 태그 input의 개수만큼 반복하며 xml 파일에서 읽어온 데이터를 채워준다.
						$('table input').each(function(index){
							var serch = $(empInfo).children().eq(index).text()
//							console.log(serch);
//							$('table input').eq(index).val(serch);
							$(this).val(serch);
							$('input[name=empid]').val('');
							$('input[name=empid]').focus();
						});
					} else {
						alert(empid + '는 존재하지 않는 사원번호 입니다.')
						$('input[name=empid]').val('');
						$('input[name=empid]').focus();
					}
				},
// 				error는 ajax가 실패했을 때 실행할 콜백 함수로 오류 정보가 함수의 인수(req)로 넘어온다.
//				error: function(req){	
				error: req => {	
					alert('Ajax 실패')
//					status => 에러코드 / statusText => 상태 메시지
					console.log(req.status + ' : ' + req.statusText);
				}	
			});
//			========================================================================
		} else {
			alert('정확한 사원 번호를 입력하세요.')
			$('input[name=empid]').val('');
			$('input[name=empid]').focus();
		}
	});
});