<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DOM 탐색2</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

<div>
	find('선택자'): 선택된 요소 중에서 탐색하고자 하는 요소를 찾는다.<br>
	children('선택자'): 선택된 요소의 자식 요소를 찾는다.<br>
	parent(), parents('선택자'): 선택된 요소의 부모 요소를 찾는다.<br>
	next(): 선택된 요소 다음 형제 요소를 찾는다.<br>
	prev(): 선택된 요소 이전 형제 요소를 찾는다.<br>
</div>

<div>
	<p>
		<b>홍길동</b>
	</p>
	
	<p id="chd">홍길동</p>
	
	<p>
		장길산
		<span>도적넘</span>
	</p>
	
	<p>일지매</p>
	
	<p>
		<b>성춘향</b>
	</p>
	
</div>

<a href="./jQuery07_menu.jsp">'Menu 만들기'로 돌아가기</a>

<script type="text/javascript" src="./js/jQuery09.js"></script>
</body> 
</html>