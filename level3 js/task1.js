var aqidata=
[
    ["北京",90],
    ["上海",50],
    ["福州",10],
    ["广州",50],
    ["成都",90],
    ["西安",100]
];
window.onload=function display()
{
    for(var i=0;i<aqidata.length;i++)
    {
        if(aqidata[i][1]>60)
        {
            var aqilist=document.getElementById("aqilist");
            var li=document.createElement("li");
            var text=document.createTextNode(aqidata[i]);
            li.appendChild(text);
            aqilist.appendChild(li);
        }
    }
}
