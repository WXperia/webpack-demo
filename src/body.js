import './css/styl.css'
const body = ()=>{
    let h2 = document.createElement('h2')
    h2.innerText = 'body'
    document.body.appendChild(h2)

    let btn = document.createElement('button')
    btn.innerText = '新增'
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