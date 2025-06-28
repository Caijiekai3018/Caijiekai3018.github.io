window.addEventListener('scroll', function() {
      var sidebar = document.getElementById('sidebar');
      var footer = document.querySelector('footer');
      var sidebarRect = sidebar.getBoundingClientRect();
      var footerRect = footer.getBoundingClientRect();

      if (sidebarRect.bottom >= footerRect.top) {
        sidebar.style.transform = 'translateX(-' + sidebarRect.width + 'px)';
      } else {
        sidebar.style.transform = 'translateX(0)';
      }
    });