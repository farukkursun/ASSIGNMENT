const input = document.querySelector('#text')
const buton= document.querySelector('.btn')

const sonuc = document.querySelector('.sonuc')
buton.onclick = () =>{
const miktar=sesliHarf(input.value);
sonuc.innerHTML +=` <p> There are ${miktar} vowels in <span class='text-danger fw-bold' > ${input.value}</span> </p> `

}

const sesliHarf=(input)=>{
 return Array.from(input).filter((harf)=>'aeiuoüö'.includes(harf)).length
}


