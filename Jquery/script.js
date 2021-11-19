$(function(){
window.onload = function(){
    $('.toggle_btn').on('click', function () {//MENUボタンをクリックすると
    $('.toggle_btn, .js-sidebar, .js-sidebar__menu__close-btn , .js-overlay').toggleClass('is-show',)//サイドバーが出る
  });

$('.js-sidebar__menu__close-btn').on('click', function () {//✕ボタンをクリックすると
    $('.js-sidebar, .js-overlay').removeClass('is-show')//サイドバーが閉じる
  });

$('input').focusin(function(e)  {//検索ボックスがフォーカスされると
    $('.p-search-form__icon').addClass('active')//虫眼鏡が消える
  });

$('input').focusout(function(e)  {//検索ボックスのフォーカスが外れると
    $('.p-search-form__icon').removeClass('active')//虫眼鏡が現れる
  });

$(window).on('resize', function () {//画面をリサイズすると
    $('.js-sidebar, .js-overlay').removeClass('is-show')//サイドバーが閉じる
  });
}});
