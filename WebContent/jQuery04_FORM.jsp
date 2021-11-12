<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>FORM</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

<form action="?">
	<input type="text">
	<input type="text">
	<input type="button" value="선택" onclick="choice()">
	<input type="radio" value="수강 과정명" onclick="choice2()">
	<input type="checkbox" value="빅데이터 UI 전문가양성" onclick="choice3()">
	<div id="a">
		빅데이터 UI 전문가양성
	</div>
	<select>
		<option value="HTML">HTML</option>
		<option value="JavaScript">JavaScript</option>
		<option value="jQuery">jQuery</option>
		<option value="CSS">CSS</option>
	</select>
	<fieldset style="width: 200px;">
		<legend>성별</legend>
		<input type="radio" name="gender" value="남자">남자
		<input type="radio" name="gender" value="여자">여자
	</fieldset>
</form>

<script type="text/javascript" src="./js/jQuery04.js"></script>
</body> 
</html>
