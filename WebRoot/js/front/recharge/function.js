/*自助服务区操作标签 begin*/
function selectTag(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("tags").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTag";
	// 操作内容
	for(i=0; j=document.getElementById("tagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
	
}
function commonselectTag(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("commontags").getElementsByTagName("a");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "ykcz_top";
	selfObj.className = "ykcz_top_a";
	// 操作内容
	for(i=0; j=document.getElementById("commontagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
	
}
function customselectTag(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("customtags").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTag";
	// 操作内容
	for(i=0; j=document.getElementById("customtagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
	
}
function selectTag1(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("tags1").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTag";
	// 操作内容
	for(i=0; j=document.getElementById("tagsContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
}
/*自助服务区操作标签 end*/


/*显示/隐藏图层 begin*/
function toggle(targetid,objN){
   
      var  target=document.getElementById(targetid);
      var aa=document.getElementById(objN)
  
            if (target.style.display=="block"){
                target.style.display="none";  
  
            } else {
                target.style.display="block";
            }
   
}
/*显示/隐藏图层 end*/

/*tab选项卡菜单*/
function  secBoard(n)
{
for(i=0;i<secTable.cells.length;i++)
secTable.cells[i].className="sec1";
secTable.cells[n].className="sec2";
for(i=0;i<mainTable.tBodies.length;i++)
mainTable.tBodies[i].style.display="none";
mainTable.tBodies[n].style.display="block";
}
/*tab选项卡菜单*/