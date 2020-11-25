var lastVisible = 0;

function f(){
  if(lastVisible > 0 & lastVisible < 9){
    document.getElementById(lastVisible + "_text").style.display = "none"; //remove the previous image
    setDefaultSize();
  }
  var i = document.getElementById('s1').value;
  if(i != 0){
     document.getElementById(i + "_text").style.display = "block";
     document.getElementById("text").value = document.getElementById(i + "_text").getAttribute('alt');
     var border = $("#" + i + "_text").css("border")
     document.getElementById("m").value = parseInt(border);
  } else{
    alert("Выберите изображение!!!");
  }
 
  lastVisible = i;

  size(lastVisible);
  }

  function none(){
  $('img').each(function(){$(this).css('width','500px')});
  $('img').each(function(){$(this).css('height','500px')});
  setDefaultSize();
}

function size(j){
  if(j > 0 & j < 10){
    document.getElementById("width").value = document.getElementById('image').getElementsByTagName('img')[j-1].clientWidth;
  document.getElementById("height").value = document.getElementById('image').getElementsByTagName('img')[j-1].clientHeight;
  }
  
}

function setSize(){
  var str = "#"+ lastVisible + "_text";
  var w = document.getElementById("width").value;
  var h =document.getElementById("height").value;
 document.getElementById((lastVisible-1)+ "_text").clientWidth = 0 + w;
 $(str).css('width', w);
 $(str).css('height', h);
}
function setDefaultSize(){
  document.getElementById("width").value = 0;
  document.getElementById("height").value = 0;
  document.getElementById("text").value = "";
  document.getElementById("m").value = "";
}
function altText(){
  var newAlt =  document.getElementById("text").value;
  document.getElementById(lastVisible + "_text").setAttribute('alt', newAlt);
  document.getElementById(lastVisible + "_text").style.border = "" + document.getElementById("m").value  + "px solid blue";
}
