// When eyes button is clicked, toggle laser class on brain
$(".flash").click(function() {
  $(".brain").toggleClass('laser');
});

// When color button is clicked...
$(".color").click(function() {
  // assign each named color a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  //generate rgba value
  var randomRgba= 'rgba('+red+','+green+','+blue+',1)';
  //Display the three values in an alert window
 // alert(randomRgba);
  $("body").css("background", randomRgba);
});
$(".moves").click(function() {
  $(".dancing").toggle();
  $(".dancing2").toggle();
  $(".dancing3").toggle();
  });
  
var audio;
var playlist;
var tracks;
var current;

init();
function init(){
current = 0;
audio = $('#audio');
playlist = $('#playlist');
tracks = playlist.find('li a');
len = tracks.length - 1;
audio[0].volume = 1.0;
audio[0].play();
playlist.find('a').click(function(e){
e.preventDefault();
link = $(this);
current = link.parent().index();
run(link, audio[0]);
});
audio[0].addEventListener('ended',function(e){
current++;
if(current == len){
current = 0;
link = playlist.find('a')[0];
}else{
link = playlist.find('a')[current];   
}
run($(link),audio[0]);
});
}
function run(link, player){
player.src = link.attr('href');
par = link.parent();
par.addClass('active').siblings().removeClass('active');
audio[0].load();
audio[0].play();
}