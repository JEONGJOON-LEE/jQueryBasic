<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>메뉴</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="./css/jQuery14.css">
</head>
<body>

<ul type="square" class="main_menu">
	
	<li class="sub_menu1">
		<b>1. css selector</b>
		<ul type="circle" class="sub_menu2">
			<li>tag로 선택하기</li>
			<li>id로 선택하기</li>
			<li>class로 선택하기</li>
			<li>자식 선택자로 선택하기</li>
			<li>자손 선택자로 선택하기</li>
			<li>:nth-child로 선택하기</li>
			<li>:first-child로 선택하기</li>
			<li>:last-child로 선택하기</li><br>
		</ul>
	</li>
	
	<li class="sub_menu1">
		<b>2. 속성 selector</b>
		<ul type="disc" class="sub_menu2">
			<li>[attr]</li>
			<li>[attr=value]</li>
			<li>[attr!=value]</li><br>
		</ul>
	</li>
	
	<li class="sub_menu1">
		<b>3. 폼 selector</b>
		<ul type="disc" class="sub_menu2">
			<li>input:text</li>
			<li>input:password</li>
			<li>input:submit</li><br>
		</ul>
	</li>
	
	<li class="sub_menu1">
		<b>4. 사용자 selector</b>
		<ul type="disc" class="sub_menu2">
			<li>:first</li>
			<li>:last</li>
			<li>:eq</li>
			<li>:slice</li><br>
		</ul>
	</li>
	
</ul>

<script type="text/javascript" src="./js/jQuery14.js"></script>
</body> 
</html>






