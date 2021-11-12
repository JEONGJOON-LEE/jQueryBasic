<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ajax</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="./css/jQuery22.css">
</head>
<body>

<h2>데이터 가져오기</h2>

<fieldset>
	<legend>사원 정보 조회</legend>
	<input type="text" name="empid">
	<input type="button" value="조회" id="emp_search" >
</fieldset><br>

<table>
	<tr>
		<th>사원번호</th>
		<td><input type="text" name="idx"></td>
	</tr>
	<tr>
		<th>이름</th>
		<td><input type="text" name="name"></td>
	</tr>
	<tr>
		<th>이메일</th>
		<td><input type="text" name="email"></td>
	</tr>
	<tr>
		<th>내선번호</th>
		<td><input type="text" name="phone"></td>
	</tr>
	<tr>
		<th>입사일</th>
		<td><input type="text" name="hire"></td>
	</tr>
</table>

<script type="text/javascript" src="./js/jQuery22.js"></script>
</body> 
</html>






