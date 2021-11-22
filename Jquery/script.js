$(function(){
  window.onload = function(){
      $('.toggle_btn').on('click', function () {//MENUボタンをクリックすると
      $('.toggle_btn, .l-sidebar, .p-sidebar__menu__close-btn , .js-overlay').toggleClass('show',)//サイドバーが出る
    });

  $('.p-sidebar__menu__close-btn').on('click', function () {//✕ボタンをクリックすると
      $('.l-sidebar, .js-overlay').removeClass('show')//サイドバーが閉じる
    });

  $(window).on('resize', function () {//画面をリサイズすると
      $('.l-sidebar, .js-overlay').removeClass('show')//サイドバーが閉じる
    });
  }});
