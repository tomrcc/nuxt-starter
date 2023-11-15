$(document).ready(function () {
  $(window).on('scroll', function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 70) {
      $('#mainnavigationBar').addClass('sticky-nav');
    } else {
      $('#mainnavigationBar').removeClass('sticky-nav');
    }
  });
  $('.navbar-toggler').on('click', function () {
    var navbar = $('#mainnavigationBar');
    navbar.toggleClass('bg-nav');
  });

  // Scroll spy style start
  $('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
  // Scroll spy
  $(document).ready(function () {
    if (document.getElementById('#scrol-nav')) {
      $('body').scrollspy({
        target: '#scrol-nav',
        offset: 20,
      });

      // Navbar fade
      changeNavbar();

      $(window).scroll(function () {
        changeNavbar();
      });

      function changeNavbar() {
        var navbar = $('#scrol-nav');
        if ($(this).scrollTop() >= 20) {
          navbar.addClass('bg-light').removeClass('bg-transparent');
        } else if ($(this).scrollTop() < 20) {
          navbar.removeClass('bg-light').addClass('bg-transparent');
        }
      }
    }
  });
  //end  Scroll spy style
});
