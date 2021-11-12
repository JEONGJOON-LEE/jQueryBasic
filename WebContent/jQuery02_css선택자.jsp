<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>css 선택자</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

<h2>셀렉터 표현식</h2>

<div>
	<ul>
		<li><span>태그로 선택하기</span></li>
		<li id="t1">id로 선택하기</li>
		<li class="t2">class로 선택하기</li>
		<li><span>자식 선택자로 선택하기</span></li>
		<li><b><span>자손 선택자로 선택하기</span></b></li>
		<li>nth-child 선택자로 선택하기</li>
		<li id="t1">first로 선택하기</li>
		<li class="t2">last로 선택하기</li>
	</ul>
</div><br>

<div>
	<button type="button" onclick="a1()">태그</button>	
	<button type="button" onclick="a2()">아이디</button>	
	<button type="button" onclick="a3()">클래스</button>	
	<button type="button" onclick="a4()">자식 선택자</button>	
	<button type="button" onclick="a5()">자손 선택자</button>	
	<button type="button" onclick="a6()">nth-child</button>	
	<button type="button" onclick="a7()">first-child</button>	
	<button type="button" onclick="a8()">last-child</button>	
</div>

<script type="text/javascript" src="./js/jQuery02.js"></script>
</body>
</html>
