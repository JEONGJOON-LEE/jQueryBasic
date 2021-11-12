<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jQuery 시작</title>
<!-- jQuery js 파일 다운로드해서 사용하는 방법 -->
<!-- <script type="text/javascript" src="./js/jquery-3.6.0.min.js"></script> -->

<!-- jQuery cdn  -->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</head>
<body>

<h2>jQuery 시작</h2>

<p>
	<ul id="list">
		<li>셀렉터 표현식</li>
		<li>DOM 탐색 메소드</li>
		<li>DOM 검색 메소드</li>
		<li>이벤트 메소드</li>
		<li>이펙트 메소드</li>
		<li>AJAX 메소드</li>
		<li>기타 등등</li>
	</ul>
</p>

<p>
	<button type="button" onclick="imgSize()">이미지 크기 변경</button>
	<button type="button" onclick="highLight()">리스트 선택</button>
	<button type="button" onclick="addImg()">이미지 추가</button>
	<button type="button" onclick="hideImg()">이미지 숨기기</button>
	<button type="button" onclick="showImg()">이미지 보이기</button>
	<button type="button" onclick="toggleImg()">이미지 토글</button>
</p>

<div>
	<img alt="피카츄" src="./images/img02.jpg">
</div>

<script type="text/javascript" src="./js/jQuery01.js"></script>
</body>
</html>
