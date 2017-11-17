//ナビゲーションバーの親要素にリンクを押せるようにする
jQuery(document).ready(function($) {
  $('.dropdown-toggle').click(function(e) {
    // 要素で親メニューリンクとドロップダウンメニュー表示を切り分ける
    if ($(e.target).hasClass('link-menu')) {
      var location = $(this).attr('href');
      window.location.href = location;
      return false;
    }
    return true;
  });
});

//facebook用
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.11';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//ポップオーバー用
$('.bs-component [data-toggle="popover"]').popover();
$('.bs-component [data-toggle="tooltip"]').tooltip();
