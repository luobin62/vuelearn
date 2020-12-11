
var modulea=(function(){
  var name='小敏'
  var flag= true
  var obj={}
  function sum(sum1,sum2){
    return sum1+sum2
  }
  if(flag){
    console.log(sum(10,20));
  }
  obj.flag=flag
  obj.sum=sum
  return obj
})()

