var btnOne = document.getElementById("oneBtn");
var btnTwo = document.getElementById("twoBtn");
var check = document.getElementsByClassName("check");
var allNavs = document.getElementsByClassName("navs");
for(let x = 0 ; x < allNavs.length;x++)
{
 allNavs[x].onclick = function(){
    if(allNavs.innerHTML == 1)
        {
            btnOne.classList.add("activeAction");
            btnTwo.classList.remove("activeAction");
        }else{
            btnOne.classList.remove("activeAction");
            btnTwo.classList.add("activeAction");
        }
 }
}

for(let y = 0 ; y < check.length;y++)
{
    if(check[y].innerHTML == 'index')
    {
        btnOne.classList.add("activeAction")
        btnTwo.classList.remove("activeAction")
    }else{
        btnOne.classList.remove("activeAction");
        btnTwo.classList.add("activeAction");
    }
}

var contactCheck = document.getElementsByClassName("contactCheck")[0];
var home = document.getElementById("home");
var contact = document.getElementById("contact");
if(contactCheck.innerHTML == 'contact'){
home.classList.remove("active");
contact.classList.add("active");
}else{
    contact.classList.remove("active");
    home.classList.add("active");
}
