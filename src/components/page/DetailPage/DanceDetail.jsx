import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { danceData } from "../../data/dance";
import SiteNavbar from "../SiteNavbar";
import "../../css/site.css";


const DanceDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  var EventDance = danceData.find((x) => x.id == id);
  const formatDateString = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <div className="detail">
        <img className="detailPicture" src={EventDance.picture} alt={EventDance.name} />
        <h1 className="eventName">Etkinlik Adı: {EventDance.name}</h1>
        <h5>Şehir: {EventDance.place.city}</h5>
        <h5>Yer: {EventDance.place.location}</h5>
        <h5>Gün:{formatDateString(EventDance.date)}</h5>
        <h5>Fiyat: {EventDance.price} TL</h5>
        <span >
          <p className="mt-4"> 
            <h5> Etkinlik Kuralları </h5>
            <p>
            - Etkinlikte 18 yaş sınırı vardır. </p> <p> - Organizatör
            firma uygun görmediği kişileri bilet ücretini iade etmek kaydıyla
            etkinliğe almama hakkına sahiptir.</p> <p>- Masalar minimum 2 kişiliktir,
            bilet alımından sonra muhakkak rezervasyon yapılması gerekmektedir.
            </p> <p>
            - Bilet satın aldıktan sonra 0500 000 00 00 numaralı telefondan masa
            rezervasyonu detaylar için iletişime geçebilirsiniz.
            </p> <p> - Misafirlere
            rahatça eğlenebilecekleri bir ortam sunabilmek için, mekan girişinde
            erkek / kadın oranına dikkat edilecek ve gerektiğinde bilet iadesi
            yapılacaktır. Tüm katılımcıların bu konuya özen göstererek etkinliğe
            katılmaları önemle rica olunur.
            </p>
          </p>
        </span>
        <button type="button"  onClick={() => navigate(-1)} class="btn backgroundColor3 m-3">Geri</button>
      </div>
    </div>
  );
};

export default DanceDetail;
