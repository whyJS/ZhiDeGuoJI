//改变按钮背景颜色，并实现换页
function position(obj)
{
	for(var i=0;i<3;i++)
	{
		var mokuai=document.getElementById('mokuai');
		obj.parentElement.children[i].setAttribute('class','sanxiang1')
		mokuai.children[i].setAttribute('class','hidd')
	}
	if (obj.className=='sanxiang1') 
	{
		obj.setAttribute('class','sanxiang')
		var lower=document.getElementById('lower')
		var name=obj.getAttribute('name');
		console.log(name)
		console.log(document.getElementsByName(name))
		document.getElementsByName(name)[1].setAttribute('class','obv')
		// console.log(lower)
		lower.innerHTML=obj.innerHTML

	}
}