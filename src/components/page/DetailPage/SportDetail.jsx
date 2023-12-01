import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { sportData } from '../../data/sport';
import SiteNavbar from '../SiteNavbar';

const SportDetail = () => {
  const navigate =  useNavigate()
    const { id } = useParams();
    var EventSport = sportData.find((x) => x.id == id);
  return (
    <div>
      <SiteNavbar></SiteNavbar>
        <div>
        <h1>Details</h1>
        <img src={EventSport.picture} alt={EventSport.name} />
        <h2>Etkinlik Adı: {EventSport.name}</h2>
        <h2>Şehir: {EventSport.place.city}</h2>
        <h2>Yer: {EventSport.place.location}</h2>
        <h2>Gün:{EventSport.date}</h2>
        <h2>Fiyat: {EventSport.price} TL</h2>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    </div>
  )
}

export default SportDetail