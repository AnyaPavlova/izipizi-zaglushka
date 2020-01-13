$(document).ready(function() {  

  function OnOffActiveImg(e) {
    e.addClass("izipizi-bg__item--active");
    setTimeout(function () {
     e.removeClass("izipizi-bg__item--active");
    }, 1000);
  };

  $(function(){
    var imageQuantity = $('#animation_block>div').length,
        activeIndex = $('#animation_block>.active').index();
    setInterval(function(){
        $('#animation_block>.active').fadeOut(300, function(){
            activeIndex = (activeIndex == (imageQuantity-1)) ? 0 : activeIndex+1;
            $(this).removeClass('active');
            $('#animation_block>div').eq(activeIndex).fadeIn(300, function(){
            $(this).addClass('active');
            })
        })
    }, 4000);
});


  function ActiveImg() {

    var element1 = $(".izipizi-bg__item--1");
    var element2 = $(".izipizi-bg__item--2");
    var element3 = $(".izipizi-bg__item--3");
    var element4 = $(".izipizi-bg__item--4");

    setTimeout(function(){
        OnOffActiveImg(element1);
    },1000);
    setTimeout(function(){
        OnOffActiveImg(element2);
    },3000);
    setTimeout(function(){
        OnOffActiveImg(element3);
    },5000);
    setTimeout(function(){
        OnOffActiveImg(element4);
    },7000);    
  };

  ActiveImg();

});
