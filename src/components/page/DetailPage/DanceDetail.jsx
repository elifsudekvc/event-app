import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { danceData } from "../../data/dance";
import SiteNavbar from "../SiteNavbar";


const DanceDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  var EventDance = danceData.find((x) => x.id == id);
  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <div>
        <h1>Details</h1>
        <img src={EventDance.picture} alt={EventDance.name} />
        <h2>Etkinlik Adı: {EventDance.name}</h2>
        <h2>Şehir: {EventDance.place.city}</h2>
        <h2>Yer: {EventDance.place.location}</h2>
        <h2>Gün:{EventDance.date}</h2>
        <h2>Fiyat: {EventDance.price} TL</h2>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    </div>
  );
};

export default DanceDetail;
