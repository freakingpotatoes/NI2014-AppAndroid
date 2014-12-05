// Fonction retournant un XMLHttpRequest, (légèrement) adaptée pour tenir compte du navigateur
function getXHR() {
   var res = null;     
   if (window.XMLHttpRequest) // Firefox 
      res = new XMLHttpRequest(); 
   else if (window.ActiveXObject) // Internet Explorer 
      res = new ActiveXObject("Microsoft.XMLHTTP"); 
   // else XMLHttpRequest non supporté ?
   return res; 
}

// L'objet XMLHttpRequest, global pour la fonction callback
var xhr = getXHR();

// Mise à jour de la liste dès que les données sont disponibles
function retourRequete() {
   if (xhr.readyState == xhr.DONE) { // Données disponibles
      var a = document.getElementById("success");
	  if(xhr.responseText == 'ok') {
		alert('ok!');
	  }
	  else {
	    alert(xhr.responseText);
	  }
      a.innerHTML = xhr.responseText;
   }
}

function envoyerFormulaire(param) {
   var longitude = document.getElementById("longitude");
   var latitude = document.getElementById("latitude");

    // Ouverture d'une connexion en mode asynchrone
    xhr.onreadystatechange = retourRequete;
    // Avec POST
    xhr.open("POST", "http://85.14.137.6/projets/test1/Tests/patatApp.php", true);
	
    var param = 'addLocation=1&longitude='+longitude.value+'&latitude='+latitude.value+'&id_state=FR';
	
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(param);
}
