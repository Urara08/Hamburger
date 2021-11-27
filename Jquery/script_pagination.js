<script type="text/javascript">
    jQuery(document).ready(function($){
        $('.js-pages__list-group').paginathing({
            perPage: 3,//1ページ３アイテム表示
            firstLast: true,//最初と最後のボタンも表示する
            prevText:'prev' ,
            nextText:'next' ,
            activeClass:'is-active'
        })
    });
</script>
