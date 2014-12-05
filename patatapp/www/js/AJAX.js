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
	alert("State: "+xhr.readyState);
   if (xhr.readyState == xhr.DONE) { // Données disponibles
      var a = document.getElementById("success");

      a.setAttribute.innerHTML = JSON.parse(xhr.responseText);
   }
}

// Chargement de la liste des plats d'un type
function envoyerFormulaire() {
   // On vérifie qu'un type est sélectionné
   var champ = document.getElementById("test");

    // Ouverture d'une connexion en mode asynchrone
    xhr.onreadystatechange = retourRequete;
    // Avec POST
    xhr.open("POST", "http://85.14.137.6/projets/NI2014-AppMobile/serveur.php", true);
    var param = 'test=' + champ.value;
	alert("Param: "+param);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(param);
}
