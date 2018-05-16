function gotoPage(pageIndex) {  
    var myForm = document.getElementById("mainForm");  
    if (myForm["pageIndex"]){  
        myForm["pageIndex"].value = pageIndex;  
    }
    myForm.submit();  
}  
function gotoPageByIndex(pageTotal) {  
    var myForm = document.getElementById("mainForm");  
    var gotoIndex = document.getElementById("inputPageIndex").value;  
    if (isNaN(gotoIndex)) {  
        alert("请输入正确的页码！");  
        return;  
    }  
    if(gotoIndex>pageTotal){  
        alert("总共"+pageTotal+"页，输入的页数大于总页数，请重新输入！");  
        return;  
    }  
    if (myForm["pageIndex"]) {  
        myForm["pageIndex"].value = gotoIndex;  
    }  
    myForm.submit();  
} 