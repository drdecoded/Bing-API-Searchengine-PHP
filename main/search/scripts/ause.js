document.querySelector("#w-search").addEventListener ("keyup input", () => {

if (e.which <= 90 && e.which >= 48 || e.which == 8){
  echo('ja');
}
        var query = document.getElementById("w-search").value;
        if (query.length == 0) { 
            document.getElementById("suggestion-box").innerHTML = "";
            return;
          }
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
        document.getElementById("suggestion-box").innerHTML =
        this.responseText;
      }
      xhttp.open("GET", "autosuggest1.php?q="+query);
      xhttp.send();
    
});
document.querySelector("#w-search").addEventListener("keyup", (e) => {
  if (e.which <= 90 && e.which >= 48 || e.which == 8) {
    var query = document.getElementById("w-search").value;
    if (query.length == 0) { 
        document.getElementById("suggestion-box").innerHTML = "";
        return;
      }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("suggestion-box").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "autosuggest1.php?q="+query);
  xhttp.send();
    return;
  }});

/* key.on('keyup input', function(){
    var query = document.getElementById("w-search").value;
    if (query.length == 0) { 
        document.getElementById("suggestion-box").innerHTML = "";
        return;
      }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("suggestion-box").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "autosuggest1.php?q="+query);
  xhttp.send();
}); */