import {sum} from './aaa.js';
var name='小红'
var flag=false
console.log(sum(100, 200));

import {height,width} from './aaa.js';

console.log(height);
console.log(width);

import {fn,person} from './aaa.js';

console.log(fn(12, 10));

const p= new person();
p.run()

import aaaa from './aaa.js';

console.log(aaaa);


//统一全部导出
import * as aa from './aaa.js';

console.log(aa.flag);