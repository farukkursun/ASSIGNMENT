const resim=document.querySelector('.resimcerceve');
resim.style.width='30rem'
resim.style.height='20rem'

resim.onmouseover=()=>{
    resim.src='./img/aslan1.jpeg'
}
resim.onmouseout=()=>{
    resim.src='./img/aslan2.jpeg'
}
const ses= document.querySelector('audio');
const bir=  document.querySelector('.btn1');
bir.onclick = () => {
  resim.src = "./img/img.gif"
    ses.play()
    

};

const iki = document.querySelector('.btn2');
iki.onclick = ()=>{
    resim.src ='./img/telbağla.gif'
    ses.pause()
}

const üc = document.querySelector('.btn3');
üc.onclick= ()=>{
    resim.src ='./img/telefon.gif'
    ses.pause()
}