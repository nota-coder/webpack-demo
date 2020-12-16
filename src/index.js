import _ from 'lodash';
import printMe from './print';
import './style.css';
function component(){
	var element = document.createElement('div');
	var btn = document.createElement('button');
	element.innerHTML = _.join(['hello','webpack',' ','sad！hot'],'');
	element.classList.add('hello');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);
	return element;
}
let element = component();
document.body.appendChild(element);

if(module.hot){
	module.hot.accept('./print.js',function(){
		document.body.removeChild(element);
		element = component();
		document.body.appendChild(element);
	});
}
