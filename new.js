function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function curr(){
     var d = new Date();
     var weekday = new Array(7);
     weekday[1] = "Monday";
     weekday[2] = "Tuesday";
     weekday[3] = "Wednesday";
     weekday[4] = "Thursday";
     weekday[5] = "Friday"; 
     weekday[6] = "Saturday";

     var n = weekday[d.getDay()];
     if (n=="Monday"){
      luni();
     }
     if (n=="Tuesday"){
      marti();
     }
     if (n=="Wednesday"){
      miercuri();
     }
     if (n=="Thursday"){
      joi();
     }
     if (n=="Friday"){
      vineri();
     }
     if (n=="Saturday"){
      sam();
     }

}


function luni() {
        var p = document.getElementById('line0');
        p.innerHTML = "________________________ ";
        var p = document.getElementById('line1');
        p.innerHTML = "Fizica 08:00";
        var p = document.getElementById('line2');
        p.innerHTML = "MS     09:45 ";
        var p = document.getElementById('line3');
        p.innerHTML = "MS     11:30 ";
        var p = document.getElementById('line4');
        p.innerHTML = "Smilja 13:30";
        var p = document.getElementById('line5');
        p.innerHTML = "________________________ ";
}


function marti() {
        var p = document.getElementById('line0');
        p.innerHTML = "________________________ ";
        var p = document.getElementById('line1');
        p.innerHTML = "Ed Fizica  09:45";
        var p = document.getElementById('line2');
        p.innerHTML = "lab SDA    11:15 ";
        var p = document.getElementById('line3');
        p.innerHTML = "MSP/SDA    13:30";
        var p = document.getElementById('line4');
        p.innerHTML = "________________________ ";
         var p = document.getElementById('line5');
        p.innerHTML = "";
}


function miercuri() {
        var p = document.getElementById('line0');
        p.innerHTML = "________________________ ";
        var p = document.getElementById('line1');
        p.innerHTML = "Fizica 08:00";
        var p = document.getElementById('line2');
        p.innerHTML = "MS     09:45 ";
        var p = document.getElementById('line3');
        p.innerHTML = "MS     11:30 ";
        var p = document.getElementById('line4');
        p.innerHTML = "________________________ ";
         var p = document.getElementById('line5');
        p.innerHTML = "";
}


function joi() {
        var p = document.getElementById('line0');
        p.innerHTML = "________________________ ";
        var p = document.getElementById('line1');
        p.innerHTML = " Lab Fizica 08:00";
        var p = document.getElementById('line2');
        p.innerHTML = "Fizica      09:45 ";
        var p = document.getElementById('line3');
        p.innerHTML = "FER        11:30 ";
        var p = document.getElementById('line4');
        p.innerHTML = "________________________ ";
         var p = document.getElementById('line5');
        p.innerHTML = "";
}


function vineri() {
        var p = document.getElementById('line0');
        p.innerHTML = "________________________ ";
        var p = document.getElementById('line1');
        p.innerHTML = "SDA 08:00";
        var p = document.getElementById('line2');
        p.innerHTML = "FER     09:45 ";
        var p = document.getElementById('line3');
        p.innerHTML = "FER   11:30 ";
        var p = document.getElementById('line4');
        p.innerHTML = "________________________ ";
         var p = document.getElementById('line5');
        p.innerHTML = "";
}

function sam() {
        var p = document.getElementById('line0');
        p.innerHTML = "________________________ ";
        var p = document.getElementById('line1');
        p.innerHTML = "Franceza 08:00";
        var p = document.getElementById('line2');
        p.innerHTML = "MSP      09:45 ";
        var p = document.getElementById('line3');
        p.innerHTML = "MS       11:30 ";
        var p = document.getElementById('line4');
        p.innerHTML = "________________________ ";
        var p = document.getElementById('line5');
        p.innerHTML = "";
}


