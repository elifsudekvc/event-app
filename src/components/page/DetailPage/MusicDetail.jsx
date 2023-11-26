import React from "react";
import { musicData } from "../../data/music";
import { useParams } from "react-router-dom";

const MusicDetail = () => {
  const { id } = useParams();
  var EventMusic = musicData.find((x) => x.id == id);

  return (
    <>
      <div>
        <h1>Details</h1>
        <h2>Etkinlik Adı: {EventMusic.name}</h2>
        <h2>Şehir: {EventMusic.place.city}</h2>
        <h2>Yer: {EventMusic.place.location}</h2>
        <h2>Gün:{EventMusic.date}</h2>
        <h2>Fiyat: {EventMusic.price}</h2>
      </div>
    </>
  );
};

export default MusicDetail;
