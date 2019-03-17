function f_days()
{
    
    var fdate = document.getElementById('first_date').value;
    var reg =/(\d\d|\d)[-/.](\d\d|\d)[-/.](\d\d\d\d|\d\d)/;
    fdate = fdate.match(reg);
    fdate.shift();
    if(fdate[fdate.length-1]<100)
    {
        fdate[fdate.length-1]=20+fdate[fdate.length-1];
    }
    var sdate = document.getElementById('last_date').value;
    var fdat = new Date(fdate[2],fdate[1]-1,fdate[0]);
    var sdat = new Date(sdate);
    if(fdat.getTime()>sdat.getTime())
    {
        alert("Начальная дата больше второй");
        return false;
    }
    if(document.getElementById('q_days').checked)
    {
    var sdat = new Date(sdate);
    var days = Math.ceil(Math.abs(sdat.getTime()-fdat.getTime())/(1000*3600*24));
    document.getElementById('result').value = "";
    document.getElementById('result').value= days;
    }
    if(document.getElementById('q_holidays').checked)
    {
        var sdat = new Date(sdate);
        var days = Math.ceil(Math.abs(sdat.getTime()-fdat.getTime())/(1000*3600*24));
        var day=new Date();
        var work;
        var holidays=0;
        for(i=0;i<days;i++)
        {
            day.setTime(fdat.getTime()+((1000*3600*24)*i));
            work=day.getDay();
            if((work==0)||(work==6))
            {
                holidays++;
            }
        }
        document.getElementById('result').value = "";
        document.getElementById('result').value = holidays;
    }
    if(document.getElementById('q_workdays').checked)
    {
        var sdat = new Date(sdate);
        var days = Math.ceil(Math.abs(sdat.getTime()-fdat.getTime())/(1000*3600*24));
        var day=new Date();
        var work;
        var holidays=0;
        for(i=0;i<days;i++)
        {
            day.setTime(fdat.getTime()+((1000*3600*24)*i));
            work=day.getDay();
            if((work==0)||(work==6))
            {
                holidays++;
            }
        }
        workdays = days - holidays;
        document.getElementById('result').value = "";
        document.getElementById('result').value= workdays;
    }
    if(document.getElementById('q_weeks').checked)
    {
        var sdat = new Date(sdate);
        var days = Math.ceil(Math.abs(sdat.getTime()-fdat.getTime())/(1000*3600*24));
        var day=new Date();
        var work;
        var mondays=0;
        for(i=0;i<days;i++)
        {
            day.setTime(fdat.getTime()+((1000*3600*24)*i));
            work=day.getDay();
            if(work==1)
            {
                mondays++;
            }
        }
        if(days>7&&sdat.getDay()!=1)
        mondays = mondays-1;
        if(days<7)
        {
            mondays =0;
        }
        document.getElementById('result').value = "";
        document.getElementById('result').value= mondays; 
    }
    if(document.getElementById('q_months').checked)
    {
        var sdat = new Date(sdate);
        var fyear = fdat.getFullYear();
        var syear = sdat.getFullYear();
        var fmon = fdat.getMonth();
        var smon = sdat.getMonth();
        var months=0;
        if(fmon=smon&&syear-fyear == 0)
        {
            months=0
        }
        if(syear-fyear == 0&&fmon!=smon&&smon-fmon>=2)
        {
            months = smon - fmon-2;
        }
        var i= 0;
        if(syear-fyear!=0)
        {
            i = syear-fyear;
            months = smon+((syear-fyear)*12) - fmon-2;
        }
        document.getElementById('result').value = "";
        document.getElementById('result').value= months; 
    }
}


