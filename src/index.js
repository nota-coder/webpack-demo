import _ from 'lodash';
import printMe from './print';
function component(){
	var element = document.createElement('div');
	var btn = document.createElement('button');
	element.innerHTML = _.join(['hello','webpack',' ','sad！你看到美女了吗'],'');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);
	return element;
}

document.body.appendChild(component());