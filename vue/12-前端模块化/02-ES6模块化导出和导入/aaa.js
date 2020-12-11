var name='小敏'
var flag=true

function sum(sum1,sum2){
  return sum1+sum2
}
if(flag){
  console.log(sum(10, 20));
}
//导出方式一：
export {
    flag,sum
}
//导出方式二：
export let height=100
export  let width=100
//导出函数/类
export function fn(num1,num2){
  return num1*num2
}
export class person {
  run(){
    console.log('在奔跑');
  }
}
//export:default,在同一的模块中只能存在一个
const address='北京市'
export default address