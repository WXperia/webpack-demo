import './css/styl.css'
const body = ()=>{
    let btn = document.createElement('button')
    btn.setAttribute('id','btn1')
    btn.innerText = '新增3'
    document.body.appendChild(btn)
    let item = document.createElement('div')
    document.body.appendChild(item)
    btn.addEventListener('click',function(){
        let h5 = document.createElement('p')
        h5.innerText = 'item'
        item.appendChild(h5);
    })
}

export default body