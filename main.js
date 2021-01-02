var menu_list_array=["Chicken Tandoori Pizza",
                     "Veggie Pizza",                    
                     "Extra veggie Pizza",                     
                     "Extra cheese Pizza",                       
                     "Mocroni Pizza",
                     "Mixed Pizza",           ]



function get_menu(){
  var htmldata;
  menu_list_array .sort();
  for ( var i=0; i<menu_list_array.length ;i++){
  htmldata=htmldata+ '<li>'+ menu_list_array [i]+'</li>'
  }
  htmldata=htmldata+"</ol>"
  document.getElementById("display_addmenu").innerHTML=htmldata;
  }


function add_item(){
    var htmldata;
    var item-document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">' +'<img src="Image/pizzalmg.png"/>'+menu_list_array[i]+
    document.getElementById("display_addmenu").innerHTML = htmldata;
    }
}