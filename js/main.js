var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

$btnShowHide.on('click',function () {
    $box.toggleClass ('js-show-hide');
});

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

$btnMove.on('click',function () {
    $diamond.toggleClass ('js-btn-move');
});

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel'); 

$btnCollapseExpand.on('click',function () {
    $panel.toggleClass ('js-collapse-expand');
});

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

$btnBounce.on('click',function () {
    $circle.toggleClass ('js-btn-bounce');
});

$circle.on('webkitAnimationEnd animationend', function () {
    $circle.removeClass('js-btn-bounce');
  });      

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnAppend.on('click',function () {

var $li = $ ('<li>New List Element</li>');
    $list.append($li);
});


