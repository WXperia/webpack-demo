// import '@babel/polyfill'
import header from './header'
import body from './body'
import name from './img'
import avatar from './image/cp6.jpg'
header()
body()
name()
const arr = [async ()=>{
  return new Promise((res,rej)=>{

  })
},async ()=>{
  return new Promise((res,rej)=>{

  })
}]

arr.map(item=>{console.log(item)})
if(module.hot){
    
module.hot.accept('./body',()=>{
    document.body.removeChild(document.getElementById('btn1'))
      let img =   document.getElementById('image1')
        img.setAttribute('src',avatar)
        body()
    })
}