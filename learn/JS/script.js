// function fun1(){
// 	var chbox;
// chbox=document.getElementById('one');

// if (chbox.checked){
// 	alert('Выбран');
// }
// else{
// 	alert('Не выбран');
// }
// }
// ----------RadioBatton------------
function fun2(){
	var	radi=document.getElementsByName('r1');
	for (var i = 0; i < radi.length; i++){
		if (radi[i].checked) {
			alert(' выбран ' +i+ ' элемент ');
		}

	}	
}

function fun1(){
	var	rtl=document.getElementById('rtl');
	var	rtr=document.getElementById('rtr');
	var	rbr=document.getElementById('rbr');
	var	rbl=document.getElementById('rbl');
	var	ttl=document.getElementById('ttl');
	var	ttr=document.getElementById('ttr');
	var	tbr=document.getElementById('tbr');
	var	tbl=document.getElementById('tbl');

	var	block = document.getElementById('block');

	 ttl.value=rtl.value;
	 ttr.value=rtr.value;
	 tbr.value=rbr.value;
	 tbl.value=rbl.value;

	block.style.borderRadius=rtl.value + "px " + rtr.value + "px " + rbr.value + "px " + rbl.value + "px ";
}
// function fun1() {
//  var rtl=document.getElementById('rtl');
//  var rtr=document.getElementById('rtr');
//  var rbr=document.getElementById('rbr');
//  var rbl=document.getElementById('rbl');
//  var ttl=document.getElementById('ttl');
//  var ttr=document.getElementById('ttr');
//  var tbr=document.getElementById('tbr');
//  var tbl=document.getElementById('tbl');

//  var block =document.getElementById('block');
 
//  ttl.value=rtl.value;
//  ttr.value=rtr.value;
//  tbr.value=rbr.value;
//  tbl.value=rbl.value;

// block.style.borderRadius=rtl.value + "px " + rtr.value + "px " + rbr.value + "px " + rbl.value + "px ";
// }
