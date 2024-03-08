// side bar nav bar menuicon

var sidenavbar=document.getElementById("sidenavbar")
var menuicon=document.getElementById("menuicon")
var navclose=document.getElementById("navclose")

menuicon.addEventListener("click",function()
{
    sidenavbar.style.right=0
})
navclose.addEventListener("click",function(){
    sidenavbar.style.right="-50%"
})