// function zhaopin(obj)
// {
// 	var online=document.getElementById('online')
// 	var school=document.getElementById('school')
// 	var onli=document.getElementById('onli')
// 	var sch=document.getElementById('sch')
// 	for(i=0;i<2;i++)
// 	{
// 		obj.parentElement.children[i].setAttribute('class','quxiao')
// 	}
// 	if (obj.className=='quxiao') 
// 	{
// 		obj.setAttribute('class','dianji')
// 	}
// 	if(onli.className=='dianji')
// 	{
// 		online.setAttribute('class','xianshi')
// 		school.setAttribute('class','yincang')
// 		document.getElementsByClassName('jizhong')[0].style.color='#F28B06'
// 	}
// 	else
// 	{
// 		school.setAttribute('class','xianshi')
// 		online.setAttribute('class','yincang')
// 		document.getElementsByClassName('jizhong')[0].style.color='black'
// 	}
// }



function button(obj)
{
	var form=document.getElementById('form')
	var one=document.getElementById('one')
	var two=document.getElementById('two')
	var online=document.getElementById('online')
	var second=document.getElementById('second')
	console.log(second)
	console.log(one)
	for(i=1;i<form.children.length-1;i++)
	{
		form.children[i].setAttribute('class','gray')
	}
	if (obj.className=='gray') 
	{
		obj.setAttribute('class','blue')
	}
	if (one.className=='blue')
	 {
	 	online.setAttribute('class','xianshi')
	 	second.setAttribute('class','xiaoshi')
	 }
	 else
	 {
	 	second.setAttribute('class','xianshi')
	 	online.setAttribute('class','xiaoshi')
	 }
}



function prev(obj)
{
	var form=document.getElementById('form')
	var one=document.getElementById('one')
	var two=document.getElementById('two')
	var online=document.getElementById('online')
	var second=document.getElementById('second')
	var posi=document.getElementsByClassName('blue')[0]
	// console.log(posi)
	if (posi==obj.parentElement.firstElementChild.nextElementSibling)
	 {
	 	// console.log(obj.parentElement.firstElementChild.nextElementSibling)
	 }
	 else
	 {
	 	posi.previousElementSibling.setAttribute('class','blue')
	 	posi.setAttribute('class','gray')
	 	online.setAttribute('class','xianshi')
	 	second.setAttribute('class','xiaoshi')
	 }
}

function next(obj)
{
	var form=document.getElementById('form')
	var one=document.getElementById('one')
	var two=document.getElementById('two')
	var online=document.getElementById('online')
	var second=document.getElementById('second')
	var posi=document.getElementsByClassName('blue')[0]
	// console.log(obj.parentElement.lastElementChild.previousElementSibling)
	if (posi==obj.parentElement.lastElementChild.previousElementSibling)
	 {
	 	// console.log(obj.parentElement.firstElementChild.nextElementSibling)
	 }
	 else
	 {
	 	posi.nextElementSibling.setAttribute('class','blue')
	 	posi.setAttribute('class','gray')
	 	second.setAttribute('class','xianshi')
	 	online.setAttribute('class','xiaoshi')
	 }
}
