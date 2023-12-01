import React from "react";
import { musicData } from "../../data/music";
import { useParams, useNavigate } from "react-router-dom";

const MusicDetail = () => {
  const navigate=useNavigate();
  const { id } = useParams();
  var EventMusic = musicData.find((x) => x.id == id);

  return (
    <>
      <div>
        <h1>Details</h1>
        <img src={EventMusic.picture} alt={EventMusic.name} />
        <h2>Etkinlik Adı: {EventMusic.name}</h2>
        <h2>Şehir: {EventMusic.place.city}</h2>
        <h2>Yer: {EventMusic.place.location}</h2>
        <h2>Gün:{EventMusic.date}</h2>
        <h2>Fiyat: {EventMusic.price} TL</h2>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    </>
  );
};

export default MusicDetail;
