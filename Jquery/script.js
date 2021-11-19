$(function(){
window.onload = function(){
    $('.toggle_btn').on('click', function () {//MENUボタンをクリックすると
    $('.toggle_btn, .l-sidebar, .p-sidebar__menu__close-btn , .c-overlay').toggleClass('show',)//サイドバーが出る
  });

$('.p-sidebar__menu__close-btn').on('click', function () {//✕ボタンをクリックすると
    $('.l-sidebar, .c-overlay').removeClass('show')//サイドバーが閉じる
  });

$('input').focusin(function(e)  {//検索ボックスがフォーカスされると
    $('.p-search-form__icon').addClass('active')//虫眼鏡が消える
  });

$('input').focusout(function(e)  {//検索ボックスのフォーカスが外れると
    $('.p-search-form__icon').removeClass('active')//虫眼鏡が現れる
  });

$(window).on('resize', function () {//画面をリサイズすると
    $('.l-sidebar, .c-overlay').removeClass('show')//サイドバーが閉じる
  });
}});
