$(() => {
	$('b').click(function(){
//		1. 클릭하면 메뉴가 보이고 다시 클릭하면 메뉴가 사라지게 한다.
//		$(this).next().toggle();
//		2. 클릭하면 메뉴가 열리고 다시 클릭하면 메뉴가 닫히게 한다.
//		$(this).next().slideToggle();
//		3. 클릭하면 기존에 열려있던 다른 메뉴가 닫히면서 메뉴가 열리게 한다.
		$(this).next().slideDown();
		$(this).parent().siblings().find('ul').slideUp();
	});
});