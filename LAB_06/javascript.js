var mas = [];
var num;
function allow()
{
   num = document.getElementById('el_quantity').value;
    if(num.length <0)
    {
        document.getElementById('button').disabled = true;
    }
    else
    {
        document.getElementById('button').disabled = false;
    }
    return num;
}
function create_massive()
{
    num = document.getElementById('el_quantity').value;
    mas = [];
    for(i=0;i<num;i++)
    {
     mas[i] = Math.floor(Math.random() * 201)-100;
    }
    
        document.getElementById('massive').value=mas;
    return mas;
}

function f_min()
{
    if(document.getElementById('min').checked)
    { 
        document.getElementById('r_min').value = Math.min.apply(null, mas);
    }
    else
    {
        document.getElementById('r_min').value ="";
    }
}
function f_max()
{
    if(document.getElementById('max').checked)
    { 
        document.getElementById('r_max').value = Math.max.apply(null, mas);
    }
    else
    {
        document.getElementById('r_max').value ="";
    }
}
function f_sum()
{
    if(document.getElementById('sum').checked)
    { 
        s=0;
        mas.forEach(function(element) {
            s+=element;
            return s;
        });
          document.getElementById('r_sum').value = s;
    }
    else
    {
        document.getElementById('r_sum').value ="";
    }
}
function f_neg()
{
    if(document.getElementById('neg').checked)
    { 
        i=0;
        mas.filter(function(element) {
            if(element < 0)
            {
                i++;
                return i;
            }
          });          
          document.getElementById('r_neg').value = i;
    }
    else
    {
        document.getElementById('r_neg').value ="";
    }
}
function f_pos()
{
    if(document.getElementById('pos').checked)
    { 
        i=0;
        mas.filter(function(element) {
            if(element > 0)
            {
                i++;
                return i;
            }
          });          
          document.getElementById('r_pos').value = i;
    }
    else
    {
        document.getElementById('r_pos').value ="";
    }
}
function sorting()
{
    if(document.getElementById('m_sort1').checked)
    {
        mas.sort(function(a,b){s=a-b;return s;});
        document.getElementById('result').value = mas;
    }
    if(document.getElementById('m_sort0').checked)
    {
        mas.sort(function(a,b){s=b-a;return s;});
        document.getElementById('result').value = mas;
    }
    if(document.getElementById('m_sort2').checked)
    {
        document.getElementById('result').value = document.getElementById('massive').value;
    }
}