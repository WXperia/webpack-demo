import style from './css/index.scss'
const header = ()=>{
    let dom = document;
    let head = dom.createElement('div')
    head.innerText = 'header'
    head.classList.add(style.fontC)
    dom.body.appendChild(head)
}

export default header