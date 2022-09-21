// //!hesapla butonuna tıklandığında öncelikle preventDefault() komutu şart,
//  onu yazmazsak  girilen bilgilerle ekrana çıkarmak istediğim veriler çıkmaz,
//  çünkü index.html deki form, aldığı bilgileri backend e yollamaya programlı,
//  önce benim işimi gör diyoruz preventDefault diyerek.

document.querySelector(".hesapla").onclick = (e) => {
  //   //*form işlemlerinde formun submit inin default kendi hareketlerini
  //   yapmaması, benim istediklerimi yapması için e.preventDefault()
  //   komutunu kullanırız
  const sonuc= document.querySelector('.sonuclar')
  let vade = document.querySelector("#vade").value;
  let tutar = document.querySelector("#tutar").value;
  let secenek= document.querySelector(".secenek");
  e.preventDefault();

  if (secenek.value === "Konut Kredisi") {
    oran = 1.29;
    // console.log(oran);
  } else if (secenek.value === "Ihtiyac Kredisi") {
    oran = 1.99;
  } else {
    oran = 1.79;
  }

  const faiz = oran / 100;
    // console.log(faiz);
  taksit = (tutar * (faiz * (1 + faiz) ** vade)) / ((1 + faiz) ** vade - 1);
// console.log(taksit);
toplamtutar=taksit*4

// console.log(toplamtutar);
  sonuc.innerHTML = `  <table class="table table-bordered border-warning  mt-4">
  <h2 class='mt-4 text-warning'>Kredi Bilgileri</h2>
   <tbody>
    <tr>
      <th>Kredi Miktari</th>
      <td>${tutar} ₺</td>
      <th>Kredi Tipi</th>
      <td>${secenek.value}</td>
    </tr>
   <tr>
      <th>Vade</th>
      <td>${vade} ₺</td>
      <th>Kredi Tipi</th>
      <td>${oran}</td>
    </tr>
    <tr>
      <th>Toplam Tutar</th>
      <td>${toplamtutar.toFixed(2)} ₺</td>
      <th>Kredi Tipi</th>
      <td>${taksit.toFixed(2)}</td>
    </tr>
  </tbody>
</table> `;


  //!ekrana bastırılacak taksit tutarı hesaplama formülü
  //?  taksit =
  //?   (tutargirdiğinizyerdeki.value * (faiz * (1 + faiz) ** vadegirdiğinizyerdeki.value)) /
  //?   ((1 + faiz) ** vadegirdiğinizyerdeki.value - 1);
};
