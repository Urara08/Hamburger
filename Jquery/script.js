$(function(){
  window.onload = function(){
      $('.toggle_btn').on('click', function () {//MENUボタンをクリックすると
      $('.toggle_btn, .js-sidebar, .js-sidebar__menu__close-btn , .js-overlay').toggleClass('is-show',)//サイドバーが出る
    });

  $('.js-sidebar__menu__close-btn').on('click', function () {//✕ボタンをクリックすると
      $('.js-sidebar, .js-overlay, .js-sidebar__menu__close-btn').removeClass('is-show')//サイドバーが閉じる
    });

  $(window).on('resize', function () {//画面をリサイズすると
      $('.js-sidebar, .js-overlay, .js-sidebar__menu__close-btn').removeClass('is-show')//サイドバーが閉じる
    });
  }});
