import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { theatreData } from "../../data/theatre";

const TheatreDetail = () => {
  const navigate=useNavigate()
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
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    </div>
  );
};

export default TheatreDetail;
