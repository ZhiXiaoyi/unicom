var MonHead;

function YYYYMMDDstart()
{
    MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //先给年下拉框赋内容
    var y   = new Date().getFullYear();
    document.personalInfo.birth_year.options.add(new Option("请选择",""));
    for (var i = y; i > (y-100); i--) //以今年为准，前100年
        document.personalInfo.birth_year.options.add(new Option(i, i));

    //赋月份的下拉框
    document.personalInfo.birth_month.options.add(new Option("请选择",""));
    for (var i = 1; i < 13; i++)
        document.personalInfo.birth_month.options.add(new Option(i, i));

    document.personalInfo.birth_year.value = y;
    document.personalInfo.birth_month.value = new Date().getMonth() + 1;
    var n = MonHead[new Date().getMonth()];
    if (new Date().getMonth() ==1 && IsPinYear(YYYYvalue)) n++;
        writeDay(n); //赋日期下拉框
    document.personalInfo.birth_day.value = new Date().getDate();
    initDateUtil();
}

function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)
{
    var MMvalue = document.personalInfo.birth_month.options[document.personalInfo.birth_month.selectedIndex].value;
    if (MMvalue == ""){ var e = document.personalInfo.birth_day; optionsClear(e); return;}
    var n = MonHead[MMvalue - 1];
    if (MMvalue ==2 && IsPinYear(str)) n++;
        writeDay(n)
}
function MMDD(str)  //月发生变化时日期联动
{
    var YYYYvalue = document.personalInfo.birth_year.options[document.personalInfo.birth_year.selectedIndex].value;
    if (YYYYvalue == ""){ var e = document.personalInfo.birth_day; optionsClear(e); return;}
    var n = MonHead[str - 1];
    if (str ==2 && IsPinYear(YYYYvalue)) n++;
        writeDay(n)
}
function DDday(str)  //月发生变化时日期联动
{
    var DDvalue = document.personalInfo.birth_day.options[document.personalInfo.birth_day.selectedIndex].value;
    if (DDvalue == ""){ var e = document.personalInfo.birth_day; optionsClear(e); return;}
    
}
function writeDay(n)  //据条件写日期的下拉框
{
    var e = document.personalInfo.birth_day; optionsClear(e);
    e.options.add(new Option("请选择",""));
    for (var i=1; i<(n+1); i++)
        e.options.add(new Option(i, i));
    //e.value = "1";
}
function writeDaySelect(str)  //据条件写日期的下拉框
{
	$("#birth_day  option[value='"+str+"'] ").attr("selected",true);
}
function IsPinYear(year)//判断是否闰平年
{  
    return(0 == year%4 && (year%100 !=0 || year%400 == 0));
}
function optionsClear(e)
{
    //e.options.length = 0;
}
