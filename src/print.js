import {sum} from './fun';
export default function printMe(){
    console.log(sum);
    let s = sum( 1 ,11);
    console.log(s);
    console.log('I  get called from hot print.js' + s);
}