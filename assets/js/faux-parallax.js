/**
 * The file description. *
 * @package WordPress
 * @subpackage Basejump
 * @since BJ 1.0
 * @type javascript
 * @author Shawn Sandy <shawnsandy04@gmail.com>
 */


jQuery(document).ready(function($){

 var i = 0
$('section').waypoint(function(){

   i = i + 1;
   console.log(i);

     //$(this).find('.row').addClass('active');



   $(this).addClass('active');

}, {offset: 5});

$('section').waypoint(function(){

    $('section:odd').addClass('odd-one');

   $('section').removeClass('active');
   $('section').removeClass('current');
   $(this).addClass('current');




}, {offset: 300});

});