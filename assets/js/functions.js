$(function() {
  mentoringBubbleClick();
});

function mentoringBubbleClick(){
  $('.face').on('click',function(){
    var $this = $(this),
        faceTop = $(this).position().top,
        vertMath = -1*(faceTop - 220);

    $this.parent().css('top', + vertMath + 'px');

    $this.addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');
  });




};



$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();

});

function youtubeVidScroll(){
  var wScroll = $(window).scrollTop()/1.5;
  $('.myvid').css('background-position', 'center -'+wScroll+'px')
}

function startMentoring(){
  var wScroll = $(window).scrollTop();
  if($('section.mentoring').offset().top - 455 < wScroll){
      $('.faces').addClass('launched');

      if($('.face').hasClass('has-bubble-open')){
      setTimeout(function(){
        $('.face:nth-child(3)').addClass('has-bubble-open');
      }, 500);
    }
  }
};
