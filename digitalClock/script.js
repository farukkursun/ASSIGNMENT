const saat=()=> {
  const zaman = new Date();
  let saat = zaman.getHours();
  let dakika = zaman.getMinutes();
  let saniye = zaman.getSeconds();

  if (saat < 10) {
    saat = "0" + saat;
  }
  if (dakika < 10) {
    dakika = "0" + dakika;
  }
  if (saniye < 10) {
    saniye = "0" + saniye;
  }

  document.querySelector(".saat").innerHTML = saat;
  document.querySelector(".dakika").innerHTML = ":" + dakika;
  document.querySelector(".saniye").innerHTML = ":" + saniye;
}
setInterval(saat, 100);
