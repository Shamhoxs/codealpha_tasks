function buttonclick()
{
    var container=document.getElementById("container");
    var input=document.getElementById("inputText");

    var item1=document.getElementById("item1");
    var item2=document.getElementById("item2");
    var item3=document.getElementById("item3");
    var item4=document.getElementById("item4");
    var item5=document.getElementById("item5");
    
    container.style.width="40vw";
    container.style.height="60vh";

    item1.textContent=input.value;
    item1.style.color="red";
    

}