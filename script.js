$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

$('#ugabugagame').on('click', function(){
  
  window.location.assign("https://play.google.com/store/apps/details?id=com.TeamRevolution.UGABUGAMOBILE&hl=en&gl=US");



});
$('#ballpush').on('click', function(){
  
  window.location.assign("https://play.google.com/store/apps/details?id=com.TrimatiGameStudio.BallPushMobile&hl=en&gl=US");



});
$('#anni').on('click', function(){
  
  window.location.assign("https://fahadakash.itch.io/annihilation-zombie-mod");



});
$('#jadur').on('click', function(){
  
  window.location.assign("https://fahadakash.itch.io");



});
$('#sabbir').on('click', function(){
  
  window.location.assign("https://play.google.com/store/apps/details?id=com.TeamRevolution.SabbirsAdventure&hl=en&gl=US");



});
$('#darktunnel').on('click', function(){
  
  window.location.assign("https://fahadakash.itch.io/darktunnel");



});
$('#youtube').on('click', function(){
  
  window.location.assign("https://fahadakash.itch.io/ishquid-game-bangla");



});
$('#murikhan').on('click', function(){
  
  window.location.assign("https://fahadakash.itch.io/muri-khan");



});
