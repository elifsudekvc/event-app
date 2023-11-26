import React from "react";
import { useParams } from "react-router-dom";
import { danceData } from "../../data/dance";

const DanceDetail = () => {
  const { id } = useParams();
  var EventDance = danceData.find((x) => x.id == id);
  return (
    <div>
      <div>
        <h1>Details</h1>
        <h2>Etkinlik Adı: {EventDance.name}</h2>
        <h2>Şehir: {EventDance.place.city}</h2>
        <h2>Yer: {EventDance.place.location}</h2>
        <h2>Gün:{EventDance.date}</h2>
        <h2>Fiyat: {EventDance.price}</h2>
      </div>
    </div>
  );
};

export default DanceDetail;
