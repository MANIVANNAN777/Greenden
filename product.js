// side bar nav bar menuicon

var sidenavbar = document.getElementById("sidenavbar")
var menuicon = document.getElementById("menuicon")
var navclose = document.getElementById("navclose")

menuicon.addEventListener("click", function () {
    sidenavbar.style.right = 0
})
navclose.addEventListener("click", function () {
    sidenavbar.style.right = "-50%"
})

// product container search//

var search = document.getElementById("search")
var productcontainer = document.getElementById("product-container")
var productlist = productcontainer.querySelectorAll("div")
search.addEventListener("keyup", function() 
{
    var enterValue =event.target.value.toUpperCase()
    for(count = 0; count<productlist.length; count=count+1)
    {
        var productname = productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enterValue)<0)
        {
          productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display="block" 
        }

    }

})

