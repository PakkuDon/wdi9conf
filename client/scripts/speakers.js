

var harry = '<p>Harry Aydin</p>'
var victor = '<p>Bret Victor</p>'

  if ($(window).width() > 700) {
    $('#lone-blurb').html(victor).css({
      'visibility': 'hidden',
      'opacity': 0
    });

    $( "#lone-speaker" ).hover(
      function() {
        $('#lone-blurb').html(harry).css({
          'visibility': 'visible',
          'opacity': 1,
          'color': 'orange'
          });
      }, function() {
        $('#lone-blurb').css({
          'visibility': 'hidden',
          'opacity': 0,
        });
    })

    $( "#middle-speaker" ).hover(
      function() {
        $('#lone-blurb').css({
          'visibility': 'visible',
          'opacity': 1,
          'color': 'orange'
          }).html(martin);
      }, function() {
        $('#lone-blurb').css({
          'visibility': 'hidden',
          'opacity': 0,
          });
    })
  } else {
    console.log('< 800');

$( "#lone-speaker" ).hover(
  function() {
    $('#lone-blurb').html(harry).css({
      'visibility': 'visible',
      'opacity': 1,
      'color': 'orange'
      });
  }, function() {
    $('#lone-blurb').css({
      'visibility': 'hidden',
      'opacity': 0,
      });
})
