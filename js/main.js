var $btnShowHide =$('.btn-show-hide');
var $box =$('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');


var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel'); 


$btnCollapseExpand.on('click',function () {
    $panel.toggleClass ('js-collapse-expand');
});