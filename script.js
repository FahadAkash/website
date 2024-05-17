var wordsToType = document.querySelector("span[words]").getAttribute("words").split(','), 
            typer =  document.querySelector("span[words]"), 
            typingSpeed = (parseInt(typer.getAttribute('typing-speed')) || 70), 
            typingDelay = (parseInt(typer.getAttribute('typing-delay')) || 700);
    
var currentWordIndex = 0, currentCharacterIndex = 0; 

function type(){

    var wordToType = wordsToType[currentWordIndex%wordsToType.length];

    if(currentCharacterIndex < wordToType.length){
        typer.innerHTML += wordToType[currentCharacterIndex++];
        setTimeout(type, typingSpeed);
    }else{

        setTimeout(erase, typingDelay);
    }

}
function erase(){
    var wordToType = wordsToType[currentWordIndex%wordsToType.length]; 
    if(currentCharacterIndex >0){
        typer.innerHTML = wordToType.substr(0, --currentCharacterIndex -1);
        setTimeout(erase, typingSpeed);
    }else{

        currentWordIndex++; 
        setTimeout(type, typingDelay);
    }

}

window.onload = function(){
    type(); 
}











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
  
  window.location.assign("https://fahadakash.itch.io/ugabuga");



});
$('#ballpush').on('click', function(){
  
  window.location.assign("https://play.google.com/store/apps/details?id=com.TrimatiGameStudio.BallPushMobile&hl=en&gl=US");



});
$('#anni').on('click', function(){
  
  window.location.assign("https://fahadakash.itch.io/annihilation-zombie-mod");



});
$('#jadur').on('click', function(){
  
  window.location.assign("https://fahadakash.itch.io/jadur-sopno");



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
$('#AntikMahmud').on('click', function(){
  
  window.location.assign("https://play.google.com/store/apps/details?id=com.TrimatiStudio.AntikMahmud");



});

$('#HospitalRush').on('click', function(){
  
  window.location.assign("https://fahadakash.itch.io/hospital-rush");



});

$('#angrybirds').on('click', function(){
  
  window.location.assign("https://fahadakash.itch.io/angry-bird-egg-mod");



});
