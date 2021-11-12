<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

<h2>회원가입</h2>

<table>
	<tr>
		<td>아이디</td>
			<td>
				<input type="text">
				<input type="button" value="중복체크">
			</td>
	</tr>
	<tr>
		<td>비밀번호</td>
		<td><input type="password"></td>
	</tr>
	<tr>
		<td>이름</td>
		<td><input type="text"></td>
	</tr>
	<tr>
		<td>이메일</td>
		<td>
			<input type="text">@<input type="text" name="addr">
			<select name="email">
				<option>================== 직접입력 ==================</option>
				<option>naver.com</option>
				<option>gmail.com</option>
				<option>daum.net</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>취미</td>
		<td>
			<input type="checkbox" name="hobbies" value="바둑"> 바둑
			<input type="checkbox" name="hobbies" value="등산"> 등산
			<input type="checkbox" name="hobbies" value="낚시"> 낚시
		</td>
	</tr>
</table>


<script type="text/javascript" src="./js/jQuery05.js"></script>
</body> 
</html>
