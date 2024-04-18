window.onload = function() {
  setTimeout(function() {
      document.getElementById("loading").style.display ='none';
      document.getElementById("main").classList.remove('hidden');
  }, 400);
};