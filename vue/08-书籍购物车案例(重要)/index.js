const app =new Vue({
  el: '#app',
  data: {
    books: [
      {id:1,
      name:'aa',
      date:'2006',
      price:50.00,
      count:1},
      {id:2,
        name:'bb',
        date:'2007',
        price:60.00,
        count:1},
      {id:3,
        name:'cc',
        date:'2008',
        price:70.00,
        count:1},
      {id:4,
        name:'dd',
        date:'2009',
        price:80.00,
        count:1}
    ]
  },

  filters: {
    showprice(price){
      return '￥' + price.toFixed(2)
    }
  },
  methods: {
    add (index){
      console.log('add');
      console.log(index);
      this.books[index].count++
    },
    dec (index){
      console.log('dec');
      console.log(index);

      this.books[index].count--
    },
    removehandle(index){
      this.books.splice(index,1)

    }
  },
  computed: {
    totalprice(){
      //let tolprice=0;
      //方法1：普通for循环
      //for(let i=0;i<this.books.length;i++){
      //  tolprice +=this.books[i].price *this.books[i].count
      //}
      //方法2：for(let i in books)
      //for(let i in books){
      //  tolprice +=this.books[i].price *this.books[i].count
      //}
      //方法3：for(let book of books)
      //for(let book of this.books){
        //tolprice+=book.price*book.count
      //}
     // return tolprice
      return this.books.reduce(function (prevalue,book){
        return prevalue+book.price * book.count
      },0)
    }
  }
})
const nums=[40,30,120,230,60,140]
let total1=nums.filter(n => n<100).map(n => n*2).reduce((prevalue,n) => prevalue+n)
console.log(total1);
/*
let total1= nums.filter(function (n){
  return n<100
}).map(function (n){
  return n*2
}).reduce(function (preValue,n){return preValue+n},0)
    console.log(total1)
*/
//filter中的回调函数有一个要求：必须返回一个布尔值
//返回true:函数内部自动将这次回调的n加入一个新的数组中
//返回false：函数内部会过滤掉这次的n
/*
//1.filter函数的使用
let newnums=nums.filter(function (n){//针对每一个值都会进行回调，故回调6次
  return n<100
})
console.log(newnums);
//map函数的使用
let new2nums=newnums.map(function (n){//遍历3次
  return n*2
})
console.log(new2nums);
//reduce的使用
let total=new2nums.reduce(function (preValue,n){
  return preValue+n
},0)
console.log(total);
*/

/*
//需求1：去除所有小于100的值
let newnums=[]
for(let n of nums){
  if(n<=100){
    newnums.push(n)
  }
}
//需求2：将小于100的值进行转换 n*2
let new2nums=[]
for(let n of newnums){
  new2nums.push(n*2)
}
//需求3：将new2nums的值相加，得到最终值
let total=0
for(let n of new2nums){
  total += n
}
*/
