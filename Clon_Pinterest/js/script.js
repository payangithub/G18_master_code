document.addEventListener('DOMContentLoaded', function() {
  //alert("entro en el otro");
  var html = '';
  for (var i = 1; i < 99; i++) {
    var html2 = '<div class="card"><div><button class="menu-superior">Guardar</button></div><img src="https://picsum.photos/500?random='+ i +' alt=" /><div class="lowermenu"><button><a href="">Link de descarga</a></button><ion-icon name="download"></ion-icon><ion-icon name="ellipsis-horizontal"></ion-icon></div></div>';    
    html = html + html2;
 }
 document.getElementById("principal-cards").innerHTML = html;
}, false);