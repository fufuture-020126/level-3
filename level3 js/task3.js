var Data = {};
function addData() 
{
    var City = document.getElementById("aqi-city-input").value.trim();
    var sum = document.getElementById("aqi-value-input").value.trim();
    if (!City.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) 
    {
        alert("城市名必须为中英文字符！");
        return;      
    }
    if ( !sum.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！");
        return;
    }
    Data[City] = sum;
}

function renderAqiList() 
{
    var table = document.getElementById("aqi-table");
    table.innerHTML = "";
    for (var City in Data)    
    {
        if (table.children.length === 0)   
        {
            table.innerHTML = "<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>";
        }
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");  
        var td3 = document.createElement("td");
        td1.innerHTML = City;
        td2.innerHTML = Data[City];   
        td3.innerHTML = "<button class='del-btn'>删除</button>";     
        tr.appendChild(td1);    
        tr.appendChild(td2);    
        tr.appendChild(td3);    
        table.appendChild(tr);   
    } 
}

function addBtnHandle() 
{
    addData();
    renderAqiList();
}

function delBtnHandle(target) 
{
    var tr = target.parentElement.parentElement;  
    var City = tr.children[0].innerHTML;    
    delete Data[City];
    renderAqiList();   
}
function init() 
{
    var btn = document.getElementById("add-btn");
    btn.onclick = addBtnHandle;
    var table = document.getElementById("aqi-table");
    table.addEventListener("click", function(e)       
    {
        if (e.target && e.target.nodeName === "BUTTON") 
        {
            delBtnHandle(e.target);   
        }
    })
}
init();