import band from './image/cp5.jpg'
const img = ()=>{
    let img2 = new Image()
    img2.setAttribute('id','image1')
    img2.src = band
    document.body.appendChild(img2)
}

export default img