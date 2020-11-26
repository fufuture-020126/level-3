function click1()
{
    var value=document.getElementById("in").value;
    var td=document.getElementsByTagName("td");
    var line=document.getElementById("line");
    var ctd=document.createElement("td");
    if(td.length==0)
    {
        line.appendChild(ctd);
        td[0].innerHTML=value;
    }
    else
    {
        line.appendChild(ctd);
        for(var i=td.length-2;i>=0;i--)
        {
            td[i+1].innerHTML=td[i].innerText;
        }
        td[0].innerHTML=value;
    }
}
function click2()
{
    var line=document.getElementById("line");
    var ctd=document.createElement("td");
    line.appendChild(ctd);
    var value=document.getElementById("in").value;
    var td=document.getElementsByTagName("td");
    td[td.length-1].innerHTML=value;
}
function click3()
{
    var td=document.getElementsByTagName("td");
    td[0].remove();
}
function click4()
{
    var td=document.getElementsByTagName("td");
    td[td.length-1].remove();
}
function click()
{
    var bt1=document.getElementById("bt1");
    var bt2=document.getElementById("bt2");
    var bt3=document.getElementById("bt3");
    var bt4=document.getElementById("bt4");
    bt1.onclick=click1;
    bt2.onclick=click2;
    bt3.onclick=click3;
    bt4.onclick=click4;
}
click();