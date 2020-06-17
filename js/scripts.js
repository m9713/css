$(document).ready(function(){
  var url = window.location.href;
  var activePage = url;
  $('aside a, .main li a').each(function () {
    var linkPage = this.href;

    if (activePage == linkPage) {$(this).closest("a").addClass("active");}
  });
  $('[title]').tooltipster({
      anchor:'top-left',
      offset:[14, -18], 
      plugins:["follower"], 
      animationDuration:300, 
      delay:100, 
      maxWidth:160, 
      theme:'tooltipster-borderless'
  });
  $('.toggle, .overlay').click(function(){
    $('.toggle').toggleClass('active');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });
  $('.fade').slick({
    dots:true,
    arrows:false,
    adaptiveHeight:true,
    infinite:true,
    speed:500,
    fade:true,
    cssEase:'linear',
  });
  var $container = $('.post');
  $container.find('.notecount').each(function(){
    var n = $(this).html().split(' ')[0].replace(/,/g, '');
    if (n > 999) {
      n = Math.floor(n / 100) / 10;
      $(this).text(n + 'k');
    }
  });
  function flexFrame() {
    $(".caption").each(function () {
      $(this).find("iframe").wrap("<div class='iframe-flex'></div>"), flexibleFrames($(".iframe-flex"));
    }),
      flexibleFrames($(".video"));
  }
  $(document).ready(flexFrame);
  $('article').find('pre').each(function() {
    if ( $(this).find('code').length === 0 ) {
      $(this).wrapInner('<code></code>');
    }
  });
  $('a[href*="t.umblr.com/redirect"]').each(function(){
    var originalURL = $(this).attr("href").split("?z=")[1].split("&t=")[0];
    var replaceURL = decodeURIComponent(originalURL);
    $(this).attr("href", replaceURL);
  });
});
