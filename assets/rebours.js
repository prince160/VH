document.addEventListener('DOMContentLoaded', function () {
  // Définissez la date de fin du compte à rebours (remplacez avec votre date)
  var countdownDate = new Date("Dec 31, 2023 00:00:00").getTime();

  // Mettez à jour le compte à rebours toutes les secondes
  var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countdownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Mettez à jour les éléments du compte à rebours
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // Si le compte à rebours est terminé, affichez un message
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "EXPIRÉ";
      }
  }, 1000);
});