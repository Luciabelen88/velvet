/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {

  var options = {
    speed: 500,
    autoswitch: false,
    autoswitch_speed: 5000
  }

  // Add active class to the first slide
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Show active slide
  $('.active').show();

  // Click event on #next
  $('#next').on('click', nextSlide);

  // Click event on #prev
  $('#prev').on('click', prevSlide);

  // Auto slider
  if (options.autoswitch === true) {
    setInterval(nextSlide, options.autoswitch_speed);
  }

  function nextSlide() {
    $('.active').removeClass('active').addClass('prevActive');    // remove active class and add prevActive class

    if ($('.prevActive').is(':last-child')) {   // if last slide, add active class to the first slide
      $('.slide').first().addClass('active');
    } else {                    // else, add active class to next slide
      $('.prevActive').next().addClass('active');
    }

    $('.prevActive').removeClass('prevActive');   // remove prevActive class after active class is added
    $('.slide').fadeOut(options.speed);       // fade out the current slide
    $('.active').fadeIn(options.speed);       // fade in the new slide
  }

  function prevSlide() {
    $('.active').removeClass('active').addClass('prevActive');    // remove active class and add prevActive class

    if ($('.prevActive').is(':first-child')) {    // if last slide, add active class to the first slide
      $('.slide').last().addClass('active');
    } else {                    // else, add active class to next slide
      $('.prevActive').prev().addClass('active');
    }
    
    $('.prevActive').removeClass('prevActive');   // remove prevActive class after active class is added
    $('.slide').fadeOut(options.speed);       // fade out the current slide
    $('.active').fadeIn(options.speed);       // fade in the new slide    
  }

});