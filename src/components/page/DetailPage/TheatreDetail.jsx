import React from "react";
import { useParams } from "react-router-dom";
import { theatreData } from "../../data/theatre";

const TheatreDetail = () => {
  const { id } = useParams();
  var EventTheatre = theatreData.find((x) => x.id == id);
  return (
    <div>
      <div>
        <h1>Details</h1>
        <h2>Etkinlik Adı: {EventTheatre.name}</h2>
        <h2>Şehir: {EventTheatre.place.city}</h2>
        <h2>Yer: {EventTheatre.place.location}</h2>
        <h2>Gün:{EventTheatre.date}</h2>
        <h2>Fiyat: {EventTheatre.price}</h2>
      </div>
    </div>
  );
};

export default TheatreDetail;
