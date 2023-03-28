"use strict";


function validateFormOnSubmit(theForm) {
  let email = $(theForm.email).val();
  if (email == "") {
    alert("Email must be filled out");
    $(theForm.submit).addClass('invalid');
    $(theForm.email).addClass('invalid');
    return false;
  } else {
    $(theForm.email).val('');
    $(theForm.submit).removeClass('invalid');
    $(theForm.email).removeClass('invalid');
    if (confirm('Are you sure you want to sucribe to our news with this Email? ' + email)) {
      alert("You suscribed sucessfully!")
    } else {
      Event.preventDefault;
    }
  }
}

function checkScroll() {
  $('#scroll_btn_left').removeClass('inactive');
  $('#scroll_btn_right').removeClass('inactive');
  var width = Math.floor($('.animals_list').outerWidth());
  var scrollWidth = Math.floor($('.animals_list')[0].scrollWidth);
  var scrollLeft = Math.floor($('.animals_list').scrollLeft());

  if (scrollWidth - width === scrollLeft) {
    $('#scroll_btn_right').addClass('inactive');
  } else if (scrollLeft === 0) {
    $('#scroll_btn_left').addClass('inactive');
  }
}

jQuery(document).ready(function () {
  jQuery('.scrollbar-external').scrollbar({
    "autoScrollSize": false,
    "scrollx": $('.external-scroll_x'),
    "scrolly": $('.external-scroll_y')
  });

  if ($('.animals_list').length > 0) {
    checkScroll();
  }
  $(window).on('resize', function () {
    if ($('.animals_list').length > 0) {
      checkScroll();
    }
  })


  $('#scroll_btn_left').on('click', function () {
    var leftPos = $('.animals_list').scrollLeft();
    var scrollSize = $('.animals_list_item').outerWidth() + 32;
    $(".animals_list").animate({ scrollLeft: leftPos - scrollSize }, 800);

    setTimeout(function () {
      checkScroll();
    }, 800);
  });
  $('#scroll_btn_right').on('click', function () {
    var leftPos = $('.animals_list').scrollLeft();
    var scrollSize = $('.animals_list_item').outerWidth() + 32;
    $(".animals_list").animate({ scrollLeft: leftPos + scrollSize }, 800);

    setTimeout(function () {
      checkScroll();
    }, 800);
  });


  var path = window.location.href;
  $('a.nav_link').each(function (i, elem) {
    if (elem.href === path) {
      $(elem).addClass('active_link');
    }
  });

  $('.burger_icon').on('click', function () {
    $('.burger_menu').toggleClass('open');
  });
  $('.burger_icon_active').on('click', function () {
    $('.burger_menu').toggleClass('open');
  });

  $('.testimonial_list_item').on('click', function (e) {
    var width = $('#desktop_petstory').width();
    if (width && width < 1000) {
      var testimonial = '<li class="testimonial_list_item">' + $(e.currentTarget).html() + '</li>';
      $('.pop_up_testimonial').addClass('open').prepend(testimonial);
      $('.popup_icon_active').on('click', function () {
        $('.pop_up_testimonial .testimonial_list_item').remove();
        $('.pop_up_testimonial').removeClass('open');
      })
    }
  });

});

