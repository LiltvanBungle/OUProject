

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" border-col", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " border-col";
  }

  function newCase() {
      var name = document.getElementById();
      var title = document.getElementById();
      var id = document.getElementById();
      var ass = document.getElementById();
      var note = document.getElementById();

      

  }