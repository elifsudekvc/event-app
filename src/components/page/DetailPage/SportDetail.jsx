import React from 'react'
import { useParams } from 'react-router-dom'
import { sportData } from '../../data/sport';

const SportDetail = () => {
    const { id } = useParams();
    var EventSport = sportData.find((x) => x.id == id);
  return (
    <div>
        <div>
        <h1>Details</h1>
        <h2>Etkinlik Adı: {EventSport.name}</h2>
        <h2>Şehir: {EventSport.place.city}</h2>
        <h2>Yer: {EventSport.place.location}</h2>
        <h2>Gün:{EventSport.date}</h2>
        <h2>Fiyat: {EventSport.price}</h2>
      </div>
    </div>
  )
}

export default SportDetail