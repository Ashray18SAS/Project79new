menu_list_array = ["Veg Margherita Pizza",
"Margerita Pizza",   "Veg Cheese Pizza",    
"Spicy Cheese Pizza",     "Spicy Veg Pizza"       ];

function getmenu(){
var menulist;
menulist= "<ol class='menu'> ";
menu_list_array.sort();
for(var i= 0; i<menu_list_array.length; i++) {
    menulist=menulist+"<li>"+menu_list_array[i]+"</li>";
}
menulist=menulist+"</ol>";
document.getElementById("display_menu").innerHTML=menulist;
}
